"use client"

import { ReactMarkdownNoSSr } from "@/components/react-markdown-no-ssr"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const VerticalTabs = () => (
  <Tabs defaultValue="one" className="flex gap-2">
    <TabsList className="flex flex-col gap-2 h-fit">
      <TabsTrigger value="one">第四十届联合国大学全球青年论坛（2024）</TabsTrigger>
      <TabsTrigger value="two">联合国青年领袖发展论坛</TabsTrigger>
    </TabsList>
    <TabsContent value="one" className="flex-col">
      <Card>
        <CardHeader>
          <CardTitle>第四十届联合国大学全球青年论坛</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ReactMarkdownNoSSr>{one}</ReactMarkdownNoSSr>
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="two" className="flex-col">
      <Card>
        <CardHeader>
          <CardTitle>联合国青年领袖发展论坛</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ReactMarkdownNoSSr>{two}</ReactMarkdownNoSSr>
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>
)

export default function TabsDemo() {
  return (
    <div className={"flex flex-cols sm:flex-rows gap-2"}>
      <VerticalTabs />
    </div>
  )
}

const one = `

联合国大学全球青年论坛将于2024年迎来第四十届，其目的是提高对当代全球问题以及联合国在解决这些问题中的作用的认识。学生和年轻专业人士有机会与杰出学者和从业者互动，并通过讲座和小组讨论深入探讨特定问题。

## 关于联合国大学

联合国大学(United Nations University-UNU)是联合国下设的国际大学。一个为了达成联合国的诸项目标、以就有关国际共同的课题进行研究及人才培养为目标的研究者们的国际共同体。是根据在1973年的联合国全体大会上被通过的联合国大学章程、作为联合国的自治机构、于1975年开始运作。
联合国大学的本部设在东京。1969年，当时的联合国秘书长缅甸人吴丹积极提议建设一所符合联合国宪章的，以为世界和平人类进步作贡献为宗旨的真正的国际性大学。并得到了以第三世界国家为中心的广泛支持。
1972年联合国大会在一项决议中决定建立一所国际大学，该大学是联合国大会的一个具有自决地位的机构，其名称为联合国大学。1973年联合国通过了联合国大学章程。1975年该大学正式建于东京。

## 发展历史

联合国大学全球青年论坛于1985年在日本关东地区举办第一届湘南会议，并于1995年在关西地区举办神户会议。联合国大学全球青年论坛也在东北、岛根山口、北海道、神户淡路、金泽和冲绳举行。联合国大学全球青年论坛的海外扩张始于2003年首尔（韩国）会议，并走进欧洲德国、荷兰和其他联合国大学研究所所在地，其后又发展出线上会议。

## 本届主题：可持续发展之路

可持续是一种不损害环境、人道、尊重动物、公平工资以及支持和增强社区的友好型发展方式。它有多种形式，但其核心目标是为不断增长的世界人口享受健康生活是环境更宜居并减少粮食生产对社会和环境的负面影响。

## 开展形式

- 小组合作与讨论：

通过小组合作，参与者将讨论可持续发展实践，并探讨这些实践如何帮助确保实现2030可持续发展目标，同时减轻负面影响。参与者还将负责开发创新解决方案，将可持续发展纳入主流。

- 互换对话

与专家一同主持小组对话和主题分享会，向所有成员分享自己的计划。
该论坛使参与者能够与不同专业领域的领导者和联合国官员互动，提高对当代社会面临的全球挑战的认识。参与者将培养应对多维度全球问题的能力。通过采用“世界咖啡馆”方式（小组、互换对话）的小组讨论和演讲。

## 参与时间

### 8月1日

**9:30-11:30**

Localizing the 2030 Agenda for Sustainable Development Projects（2030年可持续发展议程本土化项目）

### 8月2日

**9:30-11:30**

Youth Engagement through South-South and Triangular Cooperation（通过南南合作和三角合作促进青年参与）

### 8月3日

休息

### 8月4日

休息

### 8月5日

**9:30-11:30 及 15:00-17:00**

Keynote Speech and Forum Induction（主旨演讲和论坛介绍）

### 8月6日

**9:30-11:30 及 15:00-17:00**

Achieving the 2030 Agenda in the Decade of Action: Tips for Youth（在行动十年中实现 2030 年议程：给青年的建议，开始小组作业）

### 8月7日

**9:30-11:30 及 15:00-17:00**

Youth in the EU's External Action: Bridging Policies and Data（欧盟对外行动中的青年：架起政策和数据的桥梁）

## 项目收获

1. 联合国大学官方项目证书
2. 学分：获得 2 ECTS（欧洲学分互认体系）学分或根据学生所在学校有关规则认定的学分。
3. 联合国教科文意大利中心实习和训练证明、推荐信。
4. 优秀项目学员可获得进行实习和参加联合国组织大会资格。

## 项目对象

高中生、大学生

## 专家介绍

**安东尼·巴佐卡斯**

Scientific Project Officer European Commission Knowledge Centre on Migration and Demography

**竹本邵夫**

Programme Manager, DEVINVEST Programme, UNU-IAS

**山口梦**

Associate Programme Officer, DEVINVEST Programme; Coordinator, UNU-IAS

**胜间靖**

Regional Project Manager Mayors for Economic Growth (M4EG), UNDP Istanbul Regional Hub


`

const two = `

United Nations Online Youth Leadership Development Forum Programme

### UNITAR-联合国训练研究所

联合国训练研究所 (UNITAR) 成立于 1963 年，是联合国内的一个自治机构，旨在提高联合国及其会员 国工作的有效性。训研所每年为全球约 50,000 名受益人设计并举办近 500 场不同的培训和知识共享活 动。 活动包括外交官、其他政府官员、非政府代表、地方当局和其他利益相关者。作为训研所的核心， 多边外交司(DMD)提供培训和支持讲习班，以满足这些国际实体的需求。 DMD 的活动涵盖广泛的政 策领域，包括联合国系统培训和技能开发。

### CREGU-意大利联合国教科文组织青教中心

意大利联合国教科文组织青训中心或青年教育研究中心(以下简称 CREGU)，其最早的发展始于 1985 年成立的意大利教科文组织全国委员会青年委员会。2000 年初性质变更后，转由联合国教科文组织协 会意大利全国联合会担任业务指导部门，托斯卡纳省文化处担任业务主管部门。现中心更名于 2015 年，中心目前专注教科文框架下的青训和相关倡议活动举办，推进可持续教科文事业，推广 2030 教科 文发展倡议。中心积极发展前沿学科训练和文化艺术实践活动，重视对非常规新研究方法的讨论，探索 跨学科行业研究新领域。目前中心拥有 60 个不同学科领域的青训项目，下设有各大国际企业和著名高 校专家组成的专家委员会、理论委员会、国际智库专家委员会、青年训练营等下设委员会和职能部门。

### purpose-目标

训研所与意大利联合国教科文组织青教中心设计的全新项目计划，让参与者充分融入日内瓦的多边工作 环境。 这项活动的首要目的是让联合国更加贴近参与者的心灵。根据训研所的使命，这些项目旨在提高 参与者在国际事务和外交领域的知识和技能。这将使他们能够在任何多边环境中更加有效和高效地开展 工作。为更好的配合参与者的专业和个人发展，青教中心为本促活动安排了多场著名高校专家研讨会， 以增强参与者在前沿学科领域的互动和对话，祝愿参与者在活动中的精彩表现，对于你们即将获得的进 步表示祝贺。

## METHODOLOGY-方法

训研所与青教中心的在线项目持续两到四个星期，完全以英语进行。 它们在训研所的虚拟学习平台上运 行，并需要与青教中心的专家进行实时沟通，参与者在开始前不久就会收到登录凭据。 课程大约每周包 含一个模块，每周启用一次。

在线培训计划由联合国机构的高级专家创建和推动。 除了这些专家之外，训研所和青教中心工作人员还 在课程的组织方面提供协助，并随时准备与参与者进行日常互动。 训研所的所有在线培训课程均包含以 下组成部分:

1. E-Learning

(e-Learning component)电子学习组件是所有在线培训计划的基础。 它由一系列分为模块的阅读材 料组成，可以在训研所平台上的课程期间随时异步学习。 它们包含外部阅读材料、推荐视频、参与书面 讨论板论坛和阅读材料评估测验的链接。

- Reading Material -阅读材料

基本阅读材料，教授课程主题的基本概念，通过交互式软件 Articulate Storyline 和可下载的 PDF 提供。

- Discussion Boards-讨论板

在线讨论区，参与者可以发表问题或评论，并与其他参与者、课程讲师和训研所工作人员进行 讨论。

- Assessment Quizzes-测验

每个模块末尾都有评估测验。 要获得课程证书，这些测验的及格分数必须达到 80%。

2. 实时研讨会

实时组件充当电子学习模块的上层建筑。 这些会议在规定的时间同步举行，由联合国专家和青教中心专 家委员会专家通过在线软件 Zoom 或 Voov 直接与参与者互动。 参与者花在电子学习模块和实时组件上 的时间比例各不相同，具体取决于特定在线培训计划的设置。

- 1.5 hour Live Webinars

网络研讨会主要侧重于知识转移，并允许参与者就正在讨论的具体内容与专家和训研所工作人员直接互动。

- 3.5-hour E-Workshops

电子研讨会侧重于技能发展，包含模拟练习、小组讨论和类似的其他在线互动元素，这将由青教中心专家进行主题研讨并安排有小组讨论时间。

- 2-hour Virtual Guided Tours

参与者将能够通过直播导览了解万国宫或其他联合国机构总部等备受瞩目的联合国建筑。

## CONTENT-内容

训研所和青教中心很高兴提供为期两周的联合国在线青年领导力发展论坛计划。就形式和长度而言，在线组织方式选择如下:

1. Programme Title(项目名称): The UN Online Youth Leadership Development Forum Programme

联合国在线青年领导力发展论坛计划为期两周，为参与者提供全面的能力发展和了解联合国的起源、主 要活动、不同机构以及国际日内瓦作为多边主义中心的机会。 它以三个关键组成部分为中心:

联合国在线青年领导力发展论坛计划将涉及领导力主题的组成部分。 训研所及其合作伙伴机构很高兴通 过我们的合作伙伴共同推荐一个全新的项目，由青教中心专家来自博洛尼亚大学、慕尼黑大学等高校教 授共同组成联合国在线青年领导力发展论坛计划。 该活动将在两周内实施，由以下部分组成:

2. E-Learning Modules

联合国在线青年领导力发展论坛方案的支柱将是三个电子学习模块，每四天在训研所的虚拟平台上启用一次。 每个模块都包含阅读材料、多媒体文件、讨论论坛和针对内容的多项选择评估测验。

| Time       | Module                                   |
|------------|------------------------------------------|
| Day 1 - 4  | Module 1 – The United Nations (联合国系统)    |
| Day 5 - 8  | Module 2 – Conference Diplomacy (多边外交会议) |
| Day 9 - 12 | Module 3 – Negotiation Skills (谈判技巧)     |


3. Live Components

**Week One**

|       |                            |                                                 |
|-------|----------------------------|-------------------------------------------------|
| Day 1 | 1.5 hour live-webinar      | Welcome and UN System（欢迎来到联合国系统）                |
| Day 2 | 3.5 hour e-workshop        | Public Speaking Skills （公开演讲技巧）                 |
| Day 3 | 3.5 hour e-workshop        | Multilateral Conferences and Diplomacy （多边外交大会） |
| Day 4 | 2 hour virtual guided tour | The Palais des Nations （万国宫虚拟导览）                |
| Day 5 | 1.5 hour live-webinar      | The Sustainable Development Goals （可持续发展目标）     |


**Week Two**

|       |                       |                                                  |
|-------|-----------------------|--------------------------------------------------|
| Day 1 | 3.5 hour e-workshop   | Negotiation Skills and Techniques（谈判技巧）          |
| Day 2 | 1.5 hour e-workshop   | UNHCR and Refugees（联合国难民署）                       |
| Day 3 | 3.5 hour e-workshop   | Leadership Skills in the UN Context（领导力技巧）       |
| Day 4 | 2 hour live-webinar   | Q&A Sessions with current UN Staff（专家问答）         |
| Day 5 | 1.5 hour live-webinar | Final Reflection and Closing Ceremony （闭幕式和总结大会） |


## WORKLOAD (工作量)

为期两周的课程的总工作量在 40 至 45 小时之间。 估计工作量分布在培训计划的两个主要部分，如下所示。 请注意，这是一个估计值，学生可以自由地花更多或更少的时间在这些组件上:

1. E-Learning Modules: hours per week, 18 hours in total

2. Live Components: 12 hours per week, 24 hours in total

3. Assessment & Discussion: 2 hours per week, 4 hours in total


Please see below one possible suggested schedule to distribute the workload evenly through the week:

|               |                                    |                                    |                      |                                          |                                    |
|---------------|------------------------------------|------------------------------------|----------------------|------------------------------------------|------------------------------------|
|               | Monday                             | Tuesday                            | Wednesday            | Thursday                                 | Friday                             |
| 10.30 – 12.00 | Studying of Online Material (在线学习) | Studying of Online Material (在线学习) | /                    | Discussion Board and Assessment (讨论版和问卷) | Studying of Online Material (在线学习) |
| Lunch Break   |                                    |                                    |                      |                                          |                                    |
| 15.00 – 16.30 | Live Component (研讨会)               | Live Component (研讨会)               | Live Component (研讨会) | Live Component (研讨会)                     | Live Component (研讨会)               |
| Coffee Break  |                                    |                                    |                      |                                          |                                    |
| 17.00 – 18.30 | Studying of Online Material (在线学习) | Live Component (研讨会)               | Live Component (研讨会) | Studying of Online Material (在线学习)       | Live Component (研讨会)               |


## PARTICIPANTS-参与者

联合国在线青年领导力发展论坛计划面向来自各种不同背景的参与者。 除了外交官或其他政府官员外，这些人还包括大学生和其他有抱负的年轻国际演员。

## EXPERT BIOGRAPHIES

**Mr. Jérôme L’host**

expert for Negotiation Skills and Leadership Skills, is a dedicated senior consultant based in Geneva and Moscow, working internationally with both the private and the public sectors.

Mr. L’host attended the University of Savoie where he studied Public Administration & Economics (AES). Mr. L’host is a certified Myers-Briggs Type Indicator (MBTI) Coach, a UN-certified Coach and Trainer, as well as a Synaps-certified, and LSA (Leadership Style Analysis) Coach. Prior to establishing himself as an Independent Consultant in 2009, Mr. L’host was a European Board Member and the Country Manager of both Switzerland and Russia for Dynargie Switzerland SA (International Training & Consulting group), with whom he worked for thirteen years.

Mr. L’host has managed more than 40 large-scale international projects in more than 30 different countries. He is the founder and general manager of The November Company.

**Mr. Rabih El-Haddad**

is the Director of the Division for Multilateral Diplomacy at the United Nations Institute for Training and Research (UNITAR).

His work also includes developing
and delivering training on the United
Nations system with a focus on the
multilateral working environment at
Geneva. Rabih is also closely
involved in the Institute’s training in
areas related to conference
diplomacy and multilateral
negotiations, the universal human rights protection mechanism and the work of the Human Rights Council.

His training primarily targets diplomats at missions accredited to UN Offices at Geneva, Vienna and Nairobi, as well as government officials from foreign affairs and other ministries at the country level in Africa, Asia, Europe and South America.

**Ms. Marie-José Astre-Démoulin**

expert for Leadership Skills and UN Career Development, worked for 15 years in the Staff Development and Learning Section of the United Nations Office in Geneva. She delivered workshops linked with conflict resolution, interpersonal skills and performance management to UN staff members. She conducted team building sessions and assisted managers faced with difficult situations across continents.

Marie-José also developed and delivered activities linked with career development: CV writing and interviewing skills. Overtime, she became a lead trainer for HR officers and managers at the United Nations Office at Geneva sitting in recruitment panels. She is now a consultant and a coach. Her clients include private companies, international organizations and universities.

In addition, she acts as an Expert for Cross-Cultural Communication issues in the Museum of Communication in Bern.

**Ms. Claire Doole**

expert for Public Speaking Skills and Media Relations, is a former BBC reporter in London, Brussels and Geneva and spokesperson for the UN, International Federation of the Red Cross and WWF International. Claire specialises in working with international organisations and companies. She truly believes that communications is a skill not a talent. With preparation and practice, every person she has trained has improved in leaps and bounds.

Whether you are starting your career, in mid or senior management or leading a company or organisation, Claire can help you get your message across clearly, concisely and compellingly. From training all over the world, she is convinced that non-native speakers can be just as effective communicators, sometimes more so, than native speakers.

As well as an expert coach and trainer, Claire is a sought after moderator and Master of Ceremonies. She has facilitated panel discussions with presidential candidates, Vice-Presidents, government ministers, heads of international agencies and the CEOs of Fortune 500 companies. Holding British and Swiss nationalities, Claire speaks 4 languages and is based in Geneva. She works with a team of expert trainers for specific workshops, who are former international broadcasters and communications professionals. They ensure you will get the knowledge and skills to be a more impactful communicator.

**Mr. Lars Tillfors**

expert for Multilateral Conferences and Diplomacy, is a former Swedish Diplomat with a long experience of both Multilateral and Bilateral Diplomacy and negotiations with postings in New York, Geneva and Washington D.C. as a delegate and international civil servant.

He is experienced in running international and intergovernmental meetings and in interagency affairs as well as managing contacts with Missions and Member States delegates.

He has been a consultant for UNITAR for many years and has performed training of Young Diplomats and International Civil Servants in Multilateral Diplomacy and UN negotiations.

**Ms. Alice Richard**

expert for the Sustainable Development Goals, is passionate about driving social impact. Her purpose is to inspire and empower people to take positive action.

A former United Nations staff member, she worked for UNICEF for 14 years, leading product-based fundraising and managing strategic corporate partnerships, before co- founding Co-CREATE ImpACT, an innovative social impact training company. In her new role, she harnesses the power of play to bring sustainability to life using game-based learning and immersive workshops.

She is the first certified facilitator of the 2030 SDGs Game in Switzerland.

**Mr. Julian Caletti**

expert for the UN System and virtual guided tours, is Associate Programme Officer at the United Nations Institute for Training and Research (UNITAR) based in Geneva. Prior to this post, he worked for three years at the Information Service of the United Nations Office at Geneva (UNOG).

At UNITAR’s Division for Multilateral Diplomacy, Julian is primarily responsible for the United Nations Immersion Programme, the Young Leaders Training Programme as well as other field visits and online programmes. In addition, he is in charge of trainings regarding UNITAR’s new concept of Diplomacy 4.0, examining the intersection between diplomacy and technology.

`
