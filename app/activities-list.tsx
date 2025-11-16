"use client"

import { clsx } from "clsx"
import Image from "next/image"
import Link from "next/link"
import { HTMLAttributes } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export const ActivitiesList = ({
  limit,
  hasMore,
  className,
  ...props
}: { limit?: number; hasMore?: boolean } & HTMLAttributes<HTMLDivElement>) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isFromNewsPage = pathname === "/news"
  const currentTab = searchParams.get("tab")
  
  const activities = [
    { image: "/core/子页面/新闻/2511160901.png", text: "ESG先进理论高级实训项目" },
    { image: "/core/子页面/新闻/2511160901.png", text: "青少年可持续发展目标训练营" },
    { image: "/core/子页面/新闻/2511160901.png", text: "开课预告 第十一期SDGs-ART可持续发展艺术项目即将开启" },
    { image: "/core/子页面/新闻/2511160901.png", text: "开课预告 第九期SDGs-ART可持续发展艺术项目即将开启" },
    { image: "/core/子页面/新闻/2511160901.png", text: "开课预告 第十期SDGs-ART可持续发展艺术项目即将开启" },
    { image: "/core/子页面/新闻/2511160901.png", text: "课程回顾 第七期SDGs-ART可持续发展课程：纺织与时尚设计中的可持续性" },
    { image: "/core/子页面/新闻/2511160901.png", text: "课程回顾 第三期SDGs-ART可持续发展课程：艺术中的文化多样性" },
    { image: "/core/子页面/新闻/2511160901.png", text: "课程回顾 第四期SDGs-ART可持续发展课程：工业设计新趋势" },
    { image: "/core/子页面/新闻/2511160901.png", text: "课程回顾 第五期SDGs-ART可持续发展课程：工业设计新趋势" },
    { image: "/core/子页面/新闻/2511160901.png", text: "课程回顾 第六期SDGs-ART可持续发展课程：工业设计新趋势" },
    { image: "/core/子页面/新闻/2511160901.png", text: "课程回顾 第二期SDGs-ART可持续发展课程：从文化多样性到建筑与设计中的叙事手法" },
    { image: "/core/子页面/新闻/2511160901.png", text: "课程回顾 第一期SDGs-ART可持续发展课程：从文化多样性到建筑与设计中的叙事手法" },
    { image: "/core/子页面/新闻/2511160901.png", text: "课程回顾 第八期SDGs-ART可持续发展课程：从可持续发展到叙事传播" },
  ].slice(0, limit)

  return (
    <div className={clsx("w-full gap-2 grid grid-cols-1 sm:grid-cols-3", className)} {...props}>
      {activities.map((item, index) => {
        // 如果当前在 /news 页面且标签是"活动"，则链接包含返回参数
        const href = isFromNewsPage && currentTab === "活动"
          ? `/article/activities/${index + 1}?returnTo=/news?tab=活动`
          : `/article/activities/${index + 1}`
        return (
          <Link href={href} className={"flex flex-col gap-2 items-center"} key={index}>
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-md">
              <Image 
                src={item.image} 
                alt={""} 
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 320px"
                key={item.image} 
              />
            </div>
            <div className={""}>{item.text}</div>
          </Link>
        )
      })}
    </div>
  )
}

