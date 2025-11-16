import { clsx } from "clsx"
import Image from "next/image"
import Link from "next/link"
import { HTMLAttributes } from "react"
import Content4B3Image from "~/正文04 区/右 区/03 NEWS (底图).png"

export const NewsList = ({
  limit,
  hasMore,
  className,
  ...props
}: { limit?: number; hasMore?: boolean } & HTMLAttributes<HTMLDivElement>) => {
  const news = [
    { image: "/core/子页面/新闻/2511160101.png", href: "", text: "佛罗伦萨大学学生生涯实验室中国中心在沪正式成立" },
    { image: "/core/子页面/新闻/2511160201.png", href: "", text: '联合国教科文组织"青年音乐家生涯实验室"于北京正式启动' },
    { image: "/core/子页面/新闻/2511160301.png", href: "", text: '讲座预告 故事讲述-叙事性设计在交互中的视野' },
    { image: "/core/子页面/新闻/2511160401.png", href: "", text: 'Academy of Love与CREGU联合召开“织爱三重奏”活动筹备会议' },
    { image: "/core/子页面/新闻/2511160501.png", href: "", text: 'CREGU专家委员会发布全新意大利语教材' },
    { image: "/core/子页面/新闻/2511160601.png", href: "", text: '设计未来：文化多样性、叙事与可持续实践(2025年9月6日-21日周期)电子书出版' },
    { image: "/core/子页面/新闻/2511160701.png", href: "", text: '联合国教科文组织公益盲盒 —— 心意与惊喜的双重传递' },
    { image: "/core/子页面/新闻/2511160801.png", href: "", text: '世界城市日 共赴“城市，让生活更美好”之约，绘就可持续发展新图景' },
    { image: "/core/子页面/新闻/2511160901.png", href: "", text: 'CREGU成为联合国可持续发展大会官方合作伙伴，并受邀参加2025世界可持续健康和福祉峰会' },
    { image: "/core/子页面/新闻/2511161001.png", href: "", text: 'Jan Vandemoortele博士的研讨会：可持续发展目标的起源、设计和前景' },
    { image: "/core/子页面/新闻/2511161101.png", href: "", text: 'Jere R. Behrman教授研讨会：从教育经济学视角看墨西哥普及学前教育的中长期效应' },
    { image: "/core/子页面/新闻/2511161201.png", href: "", text: 'CREGU专家代表意大利参加第五届联合国青年论坛' },
    { image: "/core/子页面/新闻/t米兰.jpg", href: "", text: "特别关注：米兰理工大学毕业生就业率再创新高" },
    { image: "/core/子页面/新闻/t美国重返教科文.png", href: "", text: "美国重返教科文组织：大多数会员国投赞成票" },
    { image: "/core/子页面/新闻/t高级蓝领.jpg", href: "", text: "通向高级蓝领的桥梁——意大利“就业导向型”本科课程" },
    { image: "/core/子页面/新闻/卓越主题.png", href: "", text: "ILS LEDA与CREGU（教科文组织青年教育研究中心）签署了一项协议，就ILS LEDA的卓越主题开展培训计划" },
    { image: "/core/子页面/新闻/5-1.png", href: "", text: "邢博士有感：选择去意大利攻读博士学位或做博士后有前途吗？数据为证！" },
  ].slice(0, limit)

  return (
    <div className={clsx("w-full gap-2 grid grid-cols-1 sm:grid-cols-3", className)} {...props}>
      {news.map((item, index) => (
        <Link href={`/article/news/${index + 1}`} className={"flex flex-col gap-2 items-center"}>
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
      ))}

      {hasMore && (
        <Link className={"relative w-fit h-fit"} href={"/news"}>
          <Image src={Content4B3Image} alt={""} width={320} height={200} />
          <span className={"absolute inset-0 w-full h-full flex items-center justify-center text-white font-medium text-[24px]"}>
            更多新闻
          </span>
        </Link>
      )}
    </div>
  )
}
