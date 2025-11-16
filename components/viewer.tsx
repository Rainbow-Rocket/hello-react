"use client"

import React, { useState, useRef, useEffect } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css"
import { IconContainer } from "@/components/container"
import { useElementSize, useFullscreen } from "@mantine/hooks"
import _ from "lodash"
import { MaximizeIcon, MinimizeIcon, ShrinkIcon } from "lucide-react"

// - error TypeError: url.replace is not a function
// pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.js", import.meta.url).toString()
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

/**
 * 优化的 PDF 查看器组件
 * 支持分页懒加载，提高性能
 * 
 * @param uri PDF 文件路径
 * @param lazyLoad 是否启用懒加载（默认 true，只加载可见页面）
 * @param pagesPerLoad 每次加载的页数（默认 3）
 */
export default function Viewer({ 
  uri, 
  lazyLoad = true,
  pagesPerLoad = 3 
}: { 
  uri?: string
  lazyLoad?: boolean
  pagesPerLoad?: number
}) {
  const { ref, width, height } = useElementSize()
  const { fullscreen, toggle, ref: refFullscreen } = useFullscreen()
  const containerRef = useRef<HTMLDivElement>(null)

  const [numPages, setNumPages] = useState<number>(0)
  const [loadedPages, setLoadedPages] = useState<number>(pagesPerLoad)
  const [isLoading, setIsLoading] = useState(true)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
    setIsLoading(false)
  }

  // 懒加载：监听滚动，加载更多页面
  useEffect(() => {
    if (!lazyLoad || !containerRef.current) return

    const container = containerRef.current
    const handleScroll = () => {
      const scrollTop = container.scrollTop
      const scrollHeight = container.scrollHeight
      const clientHeight = container.clientHeight

      // 当滚动到底部 80% 时，加载更多页面
      if (scrollTop + clientHeight >= scrollHeight * 0.8) {
        setLoadedPages((prev) => Math.min(prev + pagesPerLoad, numPages))
      }
    }

    container.addEventListener("scroll", handleScroll, { passive: true })
    return () => container.removeEventListener("scroll", handleScroll)
  }, [lazyLoad, numPages, pagesPerLoad])

  const FullscreenIcon = fullscreen ? ShrinkIcon : MaximizeIcon

  // 要渲染的页面范围
  const pagesToRender = lazyLoad 
    ? _.range(1, Math.min(loadedPages + 1, numPages + 1))
    : _.range(1, numPages + 1)

  return (
    <div className={"w-full"} ref={refFullscreen}>
      <div className={"w-full relative"} ref={ref}>
        <IconContainer>
          <FullscreenIcon onClick={toggle} className={"absolute right-8 top-8 z-10"} />
        </IconContainer>
        <div 
          ref={containerRef}
          className={"max-h-screen overflow-auto"}
        >
          <Document 
            file={uri} 
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex items-center justify-center p-8">
                <div className="text-gray-500">正在加载 PDF...</div>
              </div>
            }
            error={
              <div className="flex items-center justify-center p-8">
                <div className="text-red-500">无法加载 PDF 文件</div>
              </div>
            }
          >
            {isLoading ? null : pagesToRender.map((pageNumber) => (
              <Page 
                pageNumber={pageNumber} 
                width={width} 
                key={pageNumber} 
                noData={""}
                loading={
                  <div className="flex items-center justify-center p-4 min-h-[400px]">
                    <div className="text-gray-400">加载中...</div>
                  </div>
                }
              />
            ))}
          </Document>
          {lazyLoad && loadedPages < numPages && (
            <div className="text-center p-4 text-gray-500">
              滚动查看更多页面 ({loadedPages} / {numPages})
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
