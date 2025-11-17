import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <article
      className={cn(
        "mx-4 md:mx-[15%] py-8 max-w-full overflow-x-hidden"
        // "prose dark:prose-invert"
      )}
    >
      {children}
    </article>
  )
}
