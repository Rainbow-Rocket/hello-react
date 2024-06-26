import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <article
      className={cn(
        "mx-[15%] py-8 "
        // "prose dark:prose-invert"
      )}
    >
      {children}
    </article>
  )
}
