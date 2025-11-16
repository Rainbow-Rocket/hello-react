"use client"

import { NewsList } from "@/app/news-list"
import { ActivitiesList } from "@/app/activities-list"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { assets } from "@/config/assets"
import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function News() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const tabParam = searchParams.get("tab")
  const validTabs = assets.newsPage.children.map((tab) => tab.name)
  const defaultTab = tabParam && validTabs.includes(tabParam) ? tabParam : assets.newsPage.children[0].name
  const [activeTab, setActiveTab] = useState(defaultTab)

  useEffect(() => {
    if (tabParam && validTabs.includes(tabParam)) {
      setActiveTab(tabParam)
    }
  }, [tabParam, validTabs])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    const newSearchParams = new URLSearchParams(searchParams.toString())
    if (value === assets.newsPage.children[0].name) {
      newSearchParams.delete("tab")
    } else {
      newSearchParams.set("tab", value)
    }
    router.push(`/news?${newSearchParams.toString()}`, { scroll: false })
  }

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
      <TabsList className={"w-full justify-start"}>
        {assets.newsPage.children.map((tab) => (
          <TabsTrigger key={tab.name} value={tab.name}>{tab.name}</TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value={assets.newsPage.children[0].name} className={"flex flex-col gap-2"}>
        <h2 className={"text-xl p-4 font-black"}>新闻</h2>
        <NewsList />
      </TabsContent>
      <TabsContent value={assets.newsPage.children[1].name} className={"flex flex-col gap-2"}>
        <h2 className={"text-xl p-4 font-black"}>新闻</h2>
        <NewsList />
      </TabsContent>
      <TabsContent value={assets.newsPage.children[2].name} className={"flex flex-col gap-2"}>
        <h2 className={"text-xl p-4 font-black"}>活动</h2>
        <ActivitiesList />
      </TabsContent>
    </Tabs>
  )
}
