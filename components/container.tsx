import { CENTER_LIMITER_CLASS } from "@/config/ui"
import { cn } from "@/lib/utils"
import React, { HTMLAttributes, HTMLProps, PropsWithChildren } from "react"

export const CenterContainer = ({ children, className, ...props }: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => (
  <section className={cn("w-full grid items-center gap-6 pb-8 ", CENTER_LIMITER_CLASS, className)} {...props}>
    {children}
  </section>
)

export function IconContainer({ children, className, ...props }: PropsWithChildren & HTMLProps<HTMLDivElement>) {
  return (
    <div className={cn("p-2 rounded-0 inline-flex items-center gap-1 cursor-pointer p-interactive", className)} {...props}>
      {children}
    </div>
  )
}
