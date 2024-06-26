"use client"

import { ReactMarkdownNoSSr } from "@/components/react-markdown-no-ssr"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const VerticalTabs = () => (
  <Tabs defaultValue="four" className="flex gap-2">
    <TabsList className="flex flex-col gap-2 h-fit">
      <TabsTrigger value="one">联合国KIP国际学院</TabsTrigger>
      <TabsTrigger value="two">联合国地方经济发展局</TabsTrigger>
      <TabsTrigger value="three">联合国南南合作发展与创新处</TabsTrigger>
      <TabsTrigger value="four">联合国训练研究所</TabsTrigger>
      <TabsTrigger value="five">联合国大学</TabsTrigger>
      <TabsTrigger value="six">联合国儿童基金会</TabsTrigger>
      <TabsTrigger value="seven">国际劳工组织</TabsTrigger>
    </TabsList>
    <TabsContent value="one" className="flex-col">
      <Card>
        <CardHeader>
          <CardTitle>联合国KIP国际学院</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ReactMarkdownNoSSr>{KIP}</ReactMarkdownNoSSr>
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="two">
      <Card>
        <CardHeader>
          <CardTitle>联合国地方经济发展局</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ReactMarkdownNoSSr>{LEDA}</ReactMarkdownNoSSr>
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="three">
      <Card>
        <CardHeader>
          <CardTitle>联合国南南合作发展与创新处</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ReactMarkdownNoSSr>{IDEASS}</ReactMarkdownNoSSr>
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="four">
      <Card>
        <CardHeader>
          <CardTitle>联合国训练研究所</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ReactMarkdownNoSSr>{UNITAR}</ReactMarkdownNoSSr>
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="five">
      <Card>
        <CardHeader>
          <CardTitle>联合国大学</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ReactMarkdownNoSSr>{UNU}</ReactMarkdownNoSSr>
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="six">
      <Card>
        <CardHeader>
          <CardTitle>联合国儿童基金会</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ReactMarkdownNoSSr>{UNICEF}</ReactMarkdownNoSSr>
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="seven">
      <Card>
        <CardHeader>
          <CardTitle>国际劳工组织</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <ReactMarkdownNoSSr>{ILO}</ReactMarkdownNoSSr>
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

const KIP = `

KIP国际学院成立于2011年，是教科文组织与粮农组织发起，联合国开发计划署、联合国妇女发展基金和联合国项目事务厅合作创建的，联合国下设的多种学术交流研究类学校之一，也是唯一一个《2030联合国千年发展目标》平台学院机构，并且是唯一一个受国际展览局（BIE）邀请参加2015米兰世博会并独立建馆的国际组织机构。KIP是知识、创新、政策与实践三个英文的首字母，学校重组并管理两大联合国机构用以实现2030联合国千年八项目标。他们分别是，联合国地方经济发展局（ILSLEDA）、联合国南南合作发展与创新处(IDEASS)。在不同国家政府框架内进行多边人类发展项目。自1989年以来，这促进了综合性和参与性的领土发展进程，并得到公共、私营和民间社会行为者的支持。多年来，它们在阿尔巴尼亚、安哥拉、伯利兹、玻利维亚、波斯尼亚和黑塞哥维那、哥伦比亚、哥斯达黎加、古巴、多米尼加共和国、萨尔瓦多、危地马拉、洪都拉斯、利比亚、马其顿、摩洛哥、莫桑比克、尼加拉瓜、塞尔维亚、南苏丹举行。非洲和突尼斯。

学院与国际超过120个著名高校和学术机构包括剑桥大学、哈佛大学、巴黎大学、麻省理工大学等进行合作，拥有属地实习、并拥有一个四种语言的国际电子学术期刊《大学论坛》，


KIP 国际学院致力于推广与国际社会通过《联合国 2030 年议程》商定的目标和价值观相一致的知识、创新、政策和领土实践。其在感兴趣的国家和国际层面的主要活动是生产和传播知识、区域变革实验室联网、实施培训和高等教育举措以及实施创新战略项目。

KIP 国际学院通过国际研究和培训机构网络开展工作，并受益于来自科学、文化和合作领域的专家和人士的建议。它与感兴趣国家的经验、组织、专业中心和大学网络有着永久的联系，这些国家打算共同努力构建新知识并开发用于规划和管理发展进程的新工具。它还从事创新研究和发展行为者的能力建设。

KIP 国际学院旨在与国家和地方政府、国际组织和社会行为者合作，努力实现国际社会通过《联合国 2030 年议程》商定的目标和价值观，并认识到他们遇到的严重困难。一方面，该议程指出了一条通往公平、参与性和环境可持续发展的道路，但另一方面，世界各地的现实仍然是过度竞争，导致排斥、贫困、社会紧张、污染、不合理利用自然资源以及其他危险的不平衡。

KIP 国际学院提倡基于当地社区的积极作用、增强当地自然、人力和历史资源、整合不同部门的贡献以及所有社会行为者无一例外的参与的地域发展方法。它是一种植根于特定当地文化和现实的方法，但旨在建立一个广泛的交流网络，促进以满足人类需求与和平合作为中心的地方、国家和国际发展。地域方法不仅纠正了传统的针对特定部门方法典型的资源分散和分散的问题，而且还增强和协调了解决具体问题的经验的质量贡献。


KIP 国际学院由科学委员会指导，主席为埃德加·莫兰 (Edgar Morin)。该科学委员会于 2004 年 KIP 学院成立之前，由教科文组织与联合国开发计划署、联合国妇女发展基金和联合国项目事务厅合作创建，并于 2010 年与国际劳工组织、联合国环境规划署和世界卫生组织建立了联系。经过一段时间的磋商后，科学委员会建议创建 KIP 国际学校，此后经过以下大会讨论并建议后最终成立：联合国大会主席米格爾·德斯科托·布羅克曼（Miguel d'Escoto） 于 9 月 9 日，2009年；2009 年 10 月 14 日，法国国民议会在巴黎举行埃德加·莫兰 (Edgar Morin) 举行的会议；2010 年 5 月 4 日在布鲁塞尔与欧洲议会副主席和议员会面；2010 年 6 月 4 日开罗领土知识论坛；2010 年 12 月 4 日至 5 日在达喀尔举行的权力下放合作国际会议期间；2011年1月13日至14日在地拉那举行的权力下放合作和欧洲一体化国际会议期间；2011 年 3 月 17 日至 18 日在巴黎举行的经合组织发展援助委员会贫困小组全体会议上。
`

const LEDA = `
于 1992 年在国际劳工组织、联合国开发计划署和联合国项目事务厅的合作下设立，提供与当地经济发展进程的治理、战略和实施相关的技术援助。特别是，它支持地方经济发展机构（LEDA）的创建、运作和联网。地方经济发展机构 LEDAs 是领土服务，由当地公共、私人和非营利组织协会管理，其使命是支持企业、增强当地资源和能力以及将弱势群体纳入经济活动。超过60 个 LEDA 在 18 个国家/地区运营，2011年并入联合国KIP国际学院。

ILS LEDA利用主要在联合国（开发计划署、劳工组织、项目厅、妇发基金等）和欧洲联盟在拉丁美洲和加勒比、欧洲、非洲和亚洲的人类发展方案框架内积累的经验和知识。

自1998年以来，该方案一直在合作实施60多个LEDA，以自我可持续的方式在18个国家运作。这些LEDA与ILS LEDA支持的全球网络相关联，该网络提供促销服务，技术援助，培训，协助起草国际项目，提高质量，特别是促进与LEDA和其他国家经济行为者的伙伴关系。

ILS LEDA在其活动中涉及多个合作伙伴，例如：大学，卓越中心和知名国际专家。

ILS LEDA参与KIP国际学校的活动，支持实施全面发展战略项目，组织知识系统化和传播讲习班，设计和开展培训课程和大学教育。所有这些活动都是应国家和地方政府及其他伙伴的要求与他们合作开展的，旨在促进经济发展进程，使一个领土的人民能够通过增加包容性和可持续的就业和收入来改善集体和个人福利。
`

const IDEASS = `IDEASS 于 2001 年与国际劳工组织、联合国开发计划署和联合国项目事务厅合作设立，旨在识别和传播有助于高质量领土发展的创新。要了解 IDEASS 推动的创新及其当前活动，请访问网站 www.ideassonline.org 。该网站吸引了来自 190 多个国家的访客，是 KIP 国际学校永久文化活动的重要工具。2011年并入联合国KIP国际学院。
`

const UNITAR = `联合国大会直属的最高级别事务执行机构
联合国训练研究所 (U. N.Institute for Training and Research，UNITAR) 于1963
年成立 ，原总部设在纽约 ，并于1993年将总部迁往瑞士日内瓦 ，为联合国大会直属
的最高级别事务执行机构 ，主要承担联合国系统中的训练和研究两项职能。其中训练
职能是通过国际培训与国际会议方式 ，对从事多边和双边活动的国际化人才进行训练，
由此推动以实现全人类共同发展为宗旨的全球合作. 旨在培训和装备来自新独立的联
合国会员国的年轻外交官 ，使他们掌握在外交环境中驾驭所需的知识和技能。

联合国训练研究所（训研所）为个人、组织和机构提供创新的学习解决方案 ，以加强
全球决策 ，支持国家一级的行动 ，以塑造更美好的未来。

多年来 ，训研所在设计和开展各种培训活动方面积累了独特的专门知识和经验。我们
已成为为公共和私营部门的机构和个人提供定制和创造性学习解决方案的领先机构。
`

const UNU = `联合国大学（United Nations University——UNU）是联合国下设的国际大学。一个为了达成联合国的诸项目标、以就有关国际共同的课题进行研究及人才培养为目标的研究者们的国际共同体。是根据在1973年的联合国全体大会上被通过的联合国大学章程、作为联合国的自治机构、于1975年开始运作。联合国大学的本部设在东京。1969年，当时的联合国秘书长缅甸人吴丹积极提议建设一所符合联合国宪章的，以为世界和平人类进步作贡献为宗旨的真正的国际性大学。并得到了以第三世界国家为中心的广泛支持。1972年联合国大会在一项决议中决定建立一所国际大学，该大学是联合国大会的一个具有自决地位的机构，其名称为联合国大学。1973年联合国通过了联合国大学章程。当时，为强化作为国际都市的东京的机能而一直希望能招致国际机构本部的日本，以其雄厚的资金投入，从而使联合国大学能成功地于1975在东京设立。
其宗旨是致力于实现《联合国宪章》规定的和平与进步，研究联合国及其各个机构所关心的有关人类生存、发展和福利等紧迫问题。总部设在日本东京。
大学的领导机构有：大学理事会，负责制定大学的政策、方针、由联合国秘书长和教科文组织总干事共同任命24名理事组成，每年开会两次；下设3个委员会，分管教学规划和财政等事务。大学设有校长一职，负责学术和行政工作，由联合国秘书长任命。经费来自各国政府捐款和财团、个人等民间赠款。

联合国大学虽是在联合国大会决议下设立的所属机构，但它具有完全的自主权。与普通大学不同，联合国大学没有传统的大学概念，没有校址，也没有学生，而是以成为世界研究者们的共同体为目标，在工商人士间开发、研究、进修的协调组织。是世界各地具有研究者水准的学者们进行共同研究、学术发表等的场所。同时这些学术成果将为联合国的活动作出贡献。其次，联合国大学也为第三世界的人才培养尽其一臂之力。它把工作的重点放在发展中国家，并加强这些国家的研究人员、研究机构之间的合作。它通过设置在世界范围的联络网和研究培训中心展开人员培训工作。

联合国大学开展研究的领域有：人类的普遍性价值和责任、世界经济的新趋势、维护全球生命的体系、科学技术的进步、人口资源与福利。
作为联合国整体的智囊机构，各种各样的项目、研究在这里进行的同时，联合国大学还开展诸多的公开讲座、研究讨论会等。中国从1980年起与大学签订了专业合作协议。

联合国大学在世界范围内设立了13个研究培训中心，第一个研究培训中心是“联合国发展经济研究所”，成立于1985年。研究培训中心是一种分权体系，能够最大程度动员东道国（包括比利时、巴西、芬兰、加纳、冰岛、日本等国家）的智力资源。近年来，大学总部也作了很多重大调整，进一步提高大学应对分权体系带来的挑战和机遇。这些调整包括提高东京总部的学术能力，提高大学范围内的战略计划和质量控制程序，加强大学体系不同部门之间内部的沟通、对话和合作。这13个研究培训中心分别是：
1、联合国世界发展经济研究所，设在芬兰赫尔辛基。是联合国大学设立的第一家研究培训中心，对最贫困国家的可持续经济和社会发展进行研究，提供政策建议。
2、联合国新技术研究所，设在荷兰马斯特里赫特。研究的领域是发展中国家新技术的发明、传播和应用。
3、国际软件技术研究所，设在中国澳门。目标是帮助发展中国家提高在软件工程上的能力以及利用信息技术快速发展的能力。
4、非洲自然资源研究所，设在非洲加纳的首都阿克拉。研究方向是恢复保持土壤肥沃，保持生物多样性。
5、高等研究所，设在日本横滨。致力于对前沿科学的高等研究，中期的学术目标是：科学技术的发展、城市化和发展。
6、拉丁美洲和加勒比生物技术方案，创立于1988年，设在委内瑞拉首都加拉加斯，旨在促进南美洲和加勒比海地区生物多样性的发展和融合。
7、国际水、环境和卫生网，设在加拿大安大略湖地区汉密尔顿。关注全球水危机对群众生活的影响及对全球可持续发展的不良影响。
8、国际领导学院，设在约旦首都安曼。旨在促进、鼓励、推动领导力的发展，促进建立公平、民主、安全的世界。
9、区域一体化比较研究方案，设在比利时西北部城市布鲁日。从多学科和比较视野，促进对区域间、区域内一体化进程和影响的理解。
10、环境和人类安全研究所，设在德国波恩，研究面对自然灾难和潜在技术灾难时处理机制的建立和评价。
11、联合国大学人类与社会发展食品和营养方案，1975年成立于美国纽约，该中心与美国康纳尔大学合作开展对食品营养的研究和能力培养。
12、地热培训方案，设在联合国大学冰岛基地，提供对地热研究、开采、使用的专门培训。
13、渔业培训方案，设在冰岛基地，提供6个月高级水平的渔业研究发展的专门培训。

联合国大学正在积极寻求建立四个新机构的可能性：全球健康国际研究所，计划设在马来西亚；世界经济发展研究所的分所，计划设在迪拜；地表变化研究中心，计划设在斯洛伐克；贸易与环境研究所，计划设在日内瓦。
`

const UNICEF = `联合国儿童基金会（United Nations International Children's Emergency Fund，简称UNICEF），原名“联合国国际儿童紧急救助基金会”，联合国下属机构之一。其于1946年12月11日创建，最初目的是满足第二次世界大战之后欧洲与中国儿童的紧急需求。
1950年起，它的工作扩展到满足全球所有发展中国家儿童和母亲的长期需求。1953年，UNICEF成为联合国系统的永久成员，并受联合国大会的委托致力于实现全球各国母婴和儿童的生存、发展、受保护和参与的权利。1965年，联合国儿童基金会由于“促进国家间的手足情谊”而获得诺贝尔和平奖。2017年11月21日，中国政府向联合国儿童基金会捐款200万美元，用于救助索马里受旱灾影响的儿童。


1946年 为二战后的欧洲儿童提供食品援助
1953年 联合国儿童基金会成为联合国的永久组成部分
1959年《儿童权利宣言》
联合国大会通过了《儿童权利宣言》，该宣言规定了儿童在保护、教育、卫生保健、庇护所和良好营养等方面的权利。
1965年 诺贝尔和平奖
联合国儿童基金会由于“促进国家间的手足情谊”而获得1965年诺贝尔和平奖。
1979年 国际儿童年
世界各地都举行了庆祝活动，相关个人和组织重申了他们对儿童权利的承诺。
1981年 《国际母乳代用品销售守则》获得批准
世界卫生大会通过了《国际母乳代用品销售守则》，以鼓励母乳喂养，并通过这种做法减少对婴儿健康的威胁。
1982年 儿童生存和发展革命
联合国儿童基金会发起了每年挽救数以百万计儿童生命的运动。这一“革命”基于四项简单的低成本技术：成长监测，口服补液疗法，母乳喂养和免疫接种。
1989年 《儿童权利公约》
《公约》获得联合国大会的通过，于1990年9月生效，成为历史上最广为接受的人权条约。
1990年 世界儿童问题首脑峰会
这次在纽约市联合国总部举行的盛况空前的国家和政府首脑会议规定了儿童健康、营养和教育方面的10年目标。
2002年 儿童问题特别会议
召开了具有划时代意义的联合国大会特别会议，回顾自从1990年儿童问题世界首脑会议以来儿童事业取得的进展，并重新激励全球对儿童权利做出承诺。这是第一次专门讨论儿童问题的此类会议，也是第一次把儿童作为正式代表的会议。
联合国新闻2021年12月10日消息，联合国秘书长古特雷斯宣布，来自美国的凯瑟琳·拉塞尔（Catherine Russell）将成为联合国儿童基金会的下一任执行主任。
`

const ILO = `国际劳工组织是1919年根据《凡尔赛和约》作为国际联盟的附属机构成立的组织。1946年12月14日，成为联合国的一个专门机构。其宗旨是：促进充分就业和提高生活水平；促进劳资双方合作；扩大社会保障措施；保护工人生活与健康。主要活动是：从事国际劳工立法、制订公约和建议书；提供援助和技术合作。该组织最高权力机构是国际劳工大会，每年开会一次。
2022年3月23日，国际劳工组织宣布中止与俄罗斯的合作 。3月25日，国际劳工组织理事会会议投票选举来自多哥的吉尔伯特·洪博为国际劳工组织新任总干事，任期于2022年10月1日开始 。

国际劳工组织有187个成员。主要负责人是总干事（或称为国际劳工局局长）吉尔伯特·洪博（多哥），2022年10月就任，任期至2027年9月底。

国际劳工组织的组织机构包括：
（1）国际劳工大会：最高权利机构，每年召开一次会议；闭会期间理事会指导该组织工作，国际劳工局是其常设秘书处。主要活动有从事国际劳工立法，制定公约和建议书以及技术援助和技术合作。
（2）理事会：国际劳工组织的执行委员会，每三年经大会选举产生，在大会休会期间指导该组织工作，每年3月、6月和11月各召开一次会议。
（3）国际劳工局：常设秘书处，设在瑞士日内瓦国际劳工局总部。国际劳工组织是以国家为单位参加的国际组织，但在组织结构上实行独特的“三方性”原则，即参加各种会议和活动的成员国代表团由政府、雇主组织和工人组织的代表组成，三方代表有平等独立的发言和表决权。

国际劳工组织的宗旨：促进充分就业和提高生活水平；促进劳资合作；改善劳动条件；扩大社会保障；保证劳动者的职业安全与卫生；获得世界持久和平，建立和维护社会正义。
`
