"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { assets } from "@/config/assets"
import { CENTER_LIMITER_CLASS } from "@/config/ui"
import { cn } from "@/lib/utils"
// from "@radix-ui/react-navigation-menu"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export function SiteHeader() {
  const bgClass = "bg-primary"
  return (
    <header className={cn("sticky z-50 top-0 px-4 md:px-8 w-full border-b-2 max-w-full overflow-x-hidden", bgClass)}>
      <div className={cn("container flex flex-col md:flex-row py-2 gap-2 md:gap-0 md:space-x-4 justify-between items-start md:items-end sm:space-x-0", CENTER_LIMITER_CLASS)}>
        <Link href={"/"} className={"flex-shrink-0"}>
          <Image src={assets.general.logo} alt={"logo"} className={"h-12 w-auto"} />
        </Link>

        <NavigationMenu className={"w-full md:w-auto"}>
          <NavigationMenuList className={"flex flex-wrap gap-2 md:gap-4"}>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={cn("bg-transparent text-white font-black whitespace-nowrap")}>首页</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {assets.general.nav.children.map((item, i) => (
              <NavigationMenuItem key={i}>
                {item.children ? (
                  <>
                    <NavigationMenuTrigger className={cn("bg-transparent text-white font-black whitespace-nowrap")}>{item.name}</NavigationMenuTrigger>
                    <NavigationMenuContent className={"z-50"}>
                      <div className={cn("fixed left-0 w-screen flex flex-col md:flex-row items-center h-fit p-4 gap-4 mt-3 z-50", bgClass)}>
                        <Image src={item.left} alt={""} className={"w-fit md:mr-40 flex-shrink-0"} />
                        <div className={"flex flex-wrap justify-center md:justify-start gap-4"}>
                          {item.children.map(({ name, image }, j) => (
                            <Link href={`/article/${i + 1}/${j + 1}`} key={j}>
                              <div className={"w-32 "}>
                                <AspectRatio ratio={1} className={"relative"}>
                                  <Image src={image} alt={""} fill sizes={"width:128px;"} />
                                  <div className={"absolute w-full h-full | flex items-center justify-center z-10"}>
                                    <span className={"text-white font-medium w-2/3 text-center text-shadow"}>{name}</span>
                                  </div>
                                </AspectRatio>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href="/news" legacyBehavior passHref>
                    <NavigationMenuLink className={cn("bg-transparent text-white font-black whitespace-nowrap")}>{item.name}</NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
