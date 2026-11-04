// Shared copy for all concepts: deliberately sparse.

export const site = {
  name: 'AI Global Initiative',
  email: 'team@aiglobalinitiative.org',
};

export const hero = {
  headline: 'Preparing leaders for an age of advanced AI.',
  alt: 'A public exercise in AI preparedness.',
  question:
    'How will institutions respond when AI capabilities move faster than expected?',
  sub: 'A public simulation bringing together leaders from government, industry, and civil society to navigate realistic AI crises and strengthen institutional preparedness.',
};

export const about = {
  eyebrow: 'The Initiative',
  statement:
    'A non-partisan forum where leaders explore realistic AI crises and identify practical steps to strengthen preparedness.',
  body: 'Inspired by Event 201 (the pandemic-preparedness exercise convened by Johns Hopkins University shortly before COVID-19), the initiative brings senior decision-makers from government, industry, and civil society through a realistic AI crisis in real time.',
};

export const whyNow = {
  eyebrow: 'Why Now',
  statement:
    'The implications of increasingly capable AI are arriving faster than institutions are preparing for them.',
  body: 'A realistic crisis exercise helps leaders explore gaps in information, responsibility and coordination, and identify preparations they can advance today.',
};

export const format = [
  {
    label: 'Briefings',
    text: 'Expert briefings introduce a plausible near-future AI crisis and the decisions participants will face.',
  },
  {
    label: 'Simulation',
    text: 'Participants work through an escalating crisis, making decisions as new information and simulated news coverage unfold.',
  },
  {
    label: 'Outcomes',
    text: 'Participants identify preparations they can advance today. The filmed exercise and recommendations will be published afterwards.',
  },
];

export const scenarios = [
  'AI-enabled cyberattacks on critical infrastructure',
  'Dependence on foreign AI infrastructure and supply chains',
  'AI-driven job displacement and public opposition',
  'International disagreement over access to advanced AI',
];

export const participants = [
  'Political leaders',
  'Policymakers',
  'Senior civil servants',
  'Business executives',
  'Academics and technical experts',
  'Journalists',
  'National security experts',
  'Civil-society leaders',
];

export const advisors = [
  {
    name: 'Eduard Heger',
    title: '10th Prime Minister of the Slovak Republic',
    photo: '/AdvisoryCouncilPhotos/eduard_heger.jpg',
    url: 'https://en.wikipedia.org/wiki/Eduard_Heger',
  },
  {
    name: 'Xenia Wickett',
    title: 'Director, Wickett Advisory · Former Dean, Chatham House',
    photo: '/AdvisoryCouncilPhotos/xenia.png',
    url: 'https://www.linkedin.com/in/xenia-wickett-2686b0/',
  },
  {
    name: 'Jason Hausenloy',
    title: 'Policy Lead, Center for AI Safety',
    photo: '/AdvisoryCouncilPhotos/jason.jpg',
    url: 'https://www.linkedin.com/in/jasonhausenloy/',
  },
  {
    name: 'Rafael Karapetian',
    title: "Director '25 - '26, The Wilberforce Society",
    photo: '/AdvisoryCouncilPhotos/raf.jpeg',
    url: 'https://www.linkedin.com/in/rafael-karapetian/',
  },
  {
    name: 'Adam Wurr',
    title: 'Centre for Geopolitics, University of Cambridge',
    photo: '/AdvisoryCouncilPhotos/adam-wurr.png',
    url: 'https://www.cfg.cam.ac.uk/about/people/adam-wurr/',
  },
  {
    name: 'Joshua Landes',
    title: 'Head of Special Projects, BlueDot Impact',
    url: 'https://joshlandes.com/',
  },
  {
    name: 'Alex Krasodomski',
    title: 'Director, Digital Society Programme, Chatham House',
    url: 'https://www.chathamhouse.org/about-us/our-people/alex-krasodomski',
  },
];

export const team = [
  {
    name: 'Tim Farrelly',
    title: 'Co-founder',
    photo: '/TeamPhotos/TimFarrelly.jpeg',
    url: 'https://timfarrelly.com',
  },
  {
    name: 'Daniel Gerlei',
    title: 'Co-founder',
    photo: '/TeamPhotos/DanielGerlei.jpeg',
    url: 'https://danielgerlei.com',
  },
  {
    name: 'Jay Creagh',
    title: 'Creative Director',
    photo: '/TeamPhotos/JayCreagh.jpeg',
    url: 'https://jaycreagh.co.uk/',
  },
  {
    name: 'Nikola Moore',
    title: 'Scenario Development',
    photo: '/TeamPhotos/NikolaMoore.jpeg',
  },
  {
    name: 'Cai Finch',
    title: 'Senior Advisor',
    photo: '/TeamPhotos/CaiFinch.jpeg',
    url: 'https://www.caifinch.com/',
  },
  {
    name: 'Dev Sharma',
    title: 'Senior Advisor',
    photo: '/TeamPhotos/DevSharma.jpeg',
    url: 'https://www.devsharma.co.uk/',
  },
];

export const status = {
  eyebrow: 'Current Status',
  text: 'We are developing and piloting the format through smaller exercises before convening a flagship public event alongside a major international gathering.',
  ask: 'We are seeking advisors, institutional partners, funders, and collaborators.',
};

// Confirmed speakers for 25 November, most senior first (bios still to be checked).
export const speakers: {
  id: string;
  name: string;
  title: string;
  domain: string;
  bio: string;
  photo: string;
  url?: string;
}[] = [
  {
    "id": "leo-varadkar",
    "name": "Leo Varadkar",
    "title": "Former Taoiseach of Ireland",
    "domain": "Head of Government",
    "bio": "Leo Varadkar served twice as Taoiseach (Prime Minister) and Minister for Defence of Ireland (2017–2020 and 2022–2024), becoming the youngest head of government in the country’s history. Across more than a decade in Cabinet, including portfolios as Tánaiste, Minister for Enterprise, Trade and Employment, and Minister for Health, he steered Ireland through Brexit negotiations, the COVID-19 pandemic, and major European digital and economic transitions. A qualified physician, he now advises international leaders and institutions on democratic governance, geopolitical strategy, and technology policy.",
    "photo": "/SpeakerPhotos/leo-varadkar.jpg",
    "url": "https://en.wikipedia.org/wiki/Leo_Varadkar"
  },
  {
    "id": "armen-sarkissian",
    "name": "Armen Sarkissian",
    "title": "Former President and Prime Minister of Armenia",
    "domain": "Head of State & Government",
    "bio": "Armen Sarkissian served as the fourth President of Armenia (2018–2022) and previously as Prime Minister (1996–1997), as well as Armenia’s longest-serving Ambassador to the United Kingdom. Before entering statecraft, he was a professor of theoretical physics and computer modelling at Yerevan State University and a visiting researcher at the University of Cambridge, where he co-created the computer game Wordtris. Through Eurasia House International, he advises heads of state and global institutions on quantum politics, technology, and geopolitical risk.",
    "photo": "/SpeakerPhotos/armen-sarkissian.jpg",
    "url": "https://en.wikipedia.org/wiki/Armen_Sarkissian"
  },
  {
    "id": "eduard-heger",
    "name": "Eduard Heger",
    "title": "Former Prime Minister of Slovakia",
    "domain": "Head of Government",
    "bio": "Eduard Heger served as Prime Minister of the Slovak Republic from 2021 to 2023, having previously served as Deputy Prime Minister and Minister of Finance. During his premiership, he guided Slovakia through post-pandemic economic recovery, a historic European energy transition, and frontline NATO and EU diplomatic coordination following the invasion of Ukraine. He remains a prominent voice in European security, fiscal reform, and democratic resilience.",
    "photo": "/SpeakerPhotos/eduard-heger.jpg",
    "url": "https://en.wikipedia.org/wiki/Eduard_Heger"
  },
  {
    "id": "matthew-rycroft",
    "name": "Sir Matthew Rycroft",
    "title": "Former UK Ambassador to the UN and Permanent Secretary, Home Office",
    "domain": "Diplomacy & National Security",
    "bio": "Sir Matthew Rycroft KCMG CBE is one of the United Kingdom’s most seasoned diplomats and civil servants, having served as Permanent Secretary at the Home Office (2020–2025), the Department for International Development, and the Department for Exiting the European Union. Earlier in his career, he served as the UK Permanent Representative to the United Nations in New York, President of the UN Security Council, and Private Secretary to the Prime Minister for Foreign Affairs. He brings three decades of frontline crisis management across national security, multilateral diplomacy, and institutional resilience.",
    "photo": "/SpeakerPhotos/matthew-rycroft.jpg",
    "url": "https://en.wikipedia.org/wiki/Matthew_Rycroft"
  },
  {
    "id": "audrey-tang",
    "name": "Audrey Tang",
    "title": "Taiwan’s Cyber Ambassador and former Digital Minister",
    "domain": "Digital Governance & Cyber",
    "bio": "Audrey Tang is Taiwan’s Ambassador-at-Large for Cyber Affairs and served as the country’s inaugural Minister of Digital Affairs (2022–2024) following six years as Digital Minister without portfolio. Named one of TIME’s 100 Most Influential People in AI and a recipient of the Right Livelihood Award, Tang architected Taiwan’s acclaimed civic-technology ecosystem, pioneering open-source digital democracy and rapid counter-disinformation initiatives. Tang advises democratic governments and international bodies worldwide on pluralistic AI alignment and societal cyber resilience.",
    "photo": "/SpeakerPhotos/audrey-tang.jpg",
    "url": "https://en.wikipedia.org/wiki/Audrey_Tang"
  },
  {
    "id": "bronek-masojada",
    "name": "Bronek Masojada",
    "title": "Lord Mayor of the City of London",
    "domain": "Global Financial Centre & Insurance",
    "bio": "Bronek Masojada is the Aldermanic Sheriff and incoming Lord Mayor of the City of London, serving as global ambassador for the United Kingdom’s financial and professional services sector. For over two decades (2000–2021), he served as Chief Executive Officer of Hiscox, transforming the FTSE-listed specialist insurer into a global leader in cyber risk, catastrophe insurance, and systemic crisis underwriting. He has also served as Chair of Placing Platform Limited, Deputy Chair of Lloyd’s of London, and an advisor on national disaster-resilience frameworks.",
    "photo": "/SpeakerPhotos/bronek-masojada.jpg",
    "url": "https://en.wikipedia.org/wiki/Bronek_Masojada"
  },
  {
    "id": "dominic-johnson",
    "name": "Lord Dominic Johnson",
    "title": "Former UK Minister for Investment",
    "domain": "Economic Statecraft",
    "bio": "Lord Dominic Johnson of Lainston CBE is a member of the House of Lords and served as UK Minister of State for Investment in the Department for Business and Trade and the Cabinet Office (2022–2024). In government, he spearheaded global inward investment into British frontier technology, artificial intelligence, life sciences, and clean energy infrastructure. Prior to public office, he co-founded Somerset Capital Management, building it into a leading global emerging-markets investment management firm.",
    "photo": "/SpeakerPhotos/dominic-johnson.jpg",
    "url": "https://en.wikipedia.org/wiki/Dominic_Johnson,_Baron_Johnson_of_Lainston"
  },
  {
    "id": "aslaug-arna",
    "name": "Áslaug Arna Sigurbjörnsdóttir",
    "title": "Former Minister of Justice and of Higher Education, Science and Innovation, Iceland",
    "domain": "Science, Law & Innovation",
    "bio": "Áslaug Arna Sigurbjörnsdóttir served as Iceland’s Minister of Higher Education, Science and Innovation (2021–2024) and previously as Minister of Justice (2019–2021), becoming one of the youngest cabinet ministers in Nordic history. Across her ministerial tenure, she modernized Iceland’s judicial and national cybersecurity frameworks while spearheading ambitious national strategies for artificial intelligence adoption, R&D investment, and university reform. She recently served as a Fellow at the Center for Democratic Technology and Governance at Columbia University’s School of International and Public Affairs.",
    "photo": "/SpeakerPhotos/aslaug-arna.jpg",
    "url": "https://en.wikipedia.org/wiki/Áslaug_Arna_Sigurbjörnsdóttir"
  },
  {
    "id": "xenia-wickett",
    "name": "Xenia Wickett",
    "title": "Former Senior White House Official",
    "domain": "Geopolitics & Crisis Preparedness",
    "bio": "Xenia Wickett is a geopolitical strategist and crisis-simulation architect who served as Director for South Asia on the US National Security Council at the White House (where she also helped establish the Office of Homeland Security after 9/11) and at the US Department of State. She subsequently served as Executive Director of the PeaceNexus Foundation in Switzerland and spent seven years at Chatham House as Head of the US and the Americas Programme and founding Dean of the Queen Elizabeth II Academy for Leadership in International Affairs. Educated at Harvard’s Kennedy School and Oxford University, she advises global boards and governments on systemic geopolitical risk.",
    "photo": "/SpeakerPhotos/xenia-wickett.jpg",
    "url": "https://en.wikipedia.org/wiki/Xenia_Wickett"
  },
  {
    "id": "andrew-likierman",
    "name": "Sir Andrew Likierman",
    "title": "Former Dean, London Business School",
    "domain": "Financial & Systemic Risk",
    "bio": "Professor Sir Andrew Likierman is Professor of Management Practice at London Business School, where he previously served as Dean for seven years, and is a former Chair of the Bank of England’s Audit and Risk Committee. Earlier in his career, he served as Managing Director of Financial Management, Reporting and Audit at HM Treasury and Head of the UK Government Accountancy Service, spearheading the modernisation of British public resource accounting. A leading authority on human and institutional judgement in the age of AI, he has served on the boards of the Bank of England, Barclays, Times Newspapers, and the National Audit Office.",
    "photo": "/SpeakerPhotos/andrew-likierman.jpg",
    "url": "https://en.wikipedia.org/wiki/Andrew_Likierman"
  },
  {
    "id": "dex-hunter-torricke",
    "name": "Dex Hunter-Torricke",
    "title": "Founder, The Center for Tomorrow; former Head of Communications, Google DeepMind",
    "domain": "Frontier AI & Strategic Comms",
    "bio": "Dex Hunter-Torricke is the Founder of The Center for Tomorrow and serves as a Non-Executive Director on the board of HM Treasury. Over the past fifteen years, he has led strategic communications at the epicentre of the technology industry, serving as Global Head of Communications at Google DeepMind, VP of Global Communications for Meta’s Oversight Board, Head of Communications at SpaceX, and executive speechwriter to Mark Zuckerberg. Having begun his career in diplomacy with the UN Secretary-General’s office, he advises global leaders on navigating the societal and geopolitical transformations of frontier AI.",
    "photo": "/SpeakerPhotos/dex-hunter-torricke.jpg"
  },
  {
    "id": "shalev-hulio",
    "name": "Shalev Hulio",
    "title": "Co-founder and CEO of Dream",
    "domain": "Cyber Resilience & Sovereign AI",
    "bio": "Shalev Hulio is the Co-founder and CEO of Dream, an artificial intelligence company building sovereign language models and cyber resilience platforms to protect national critical infrastructure and governments against complex digital threats. Under his leadership, Dream has grown into a company valued at $3 billion, working with national cybersecurity authorities and global enterprises. Earlier in his life, he served as a captain in the IDF Combat Engineering Corps, commanding international search-and-rescue operations across disaster zones.",
    "photo": "/SpeakerPhotos/shalev-hulio.jpg"
  },
  {
    "id": "james-dancer",
    "name": "James Dancer",
    "title": "Former Deputy CEO, Helsing; Senior Advisor, Alan Turing Institute",
    "domain": "Defence AI & Sovereign Tech",
    "bio": "James Dancer is a Senior Advisor to the Alan Turing Institute for Defence and National Security and previously served as Deputy CEO and Chief Operating Officer of Helsing, Europe’s leading defence AI company. As a key builder of Helsing, he helped scale sovereign artificial intelligence capabilities across European allied armed forces and democratic defence ecosystems. Earlier in his career, he served as a British diplomat in the Foreign and Commonwealth Office and as a partner at McKinsey & Company advising defence and security institutions.",
    "photo": "/SpeakerPhotos/james-dancer.jpg"
  },
  {
    "id": "joshua-browder",
    "name": "Joshua Browder",
    "title": "Founder of DoNotPay",
    "domain": "Autonomous AI Agents",
    "bio": "Joshua Browder is the Founder and CEO of DoNotPay, widely recognized as the world’s first AI consumer advocate and autonomous legal agent platform. Founded while he was studying computer science at Stanford University, DoNotPay has helped millions of consumers automate bureaucratic, financial, and legal disputes using large language models and agentic software. Backed by Andreessen Horowitz, Khosla Ventures, and Founders Fund, he is also an active investor in early-stage artificial intelligence startups.",
    "photo": "/SpeakerPhotos/joshua-browder.jpg"
  },
  {
    "id": "sophie-ghazal",
    "name": "Sophie Ghazal",
    "title": "Vice President at Flagship Pioneering",
    "domain": "Biotechnology & Life Sciences",
    "bio": "Sophie Ghazal is Vice President and Head of Europe and the Middle East for Strategic Partnerships at Flagship Pioneering, the bioplatform innovation company behind Moderna and dozens of pioneering life sciences ventures. She leads international governmental, sovereign, and institutional partnerships aimed at accelerating AI-enabled biotechnology, preemptive medicine, and global health security. Earlier in her career, she held senior leadership roles in healthcare strategy, corporate development, and biomedical investment across Europe and the United States.",
    "photo": "/SpeakerPhotos/sophie-ghazal.jpg"
  },
  {
    "id": "hamish-hobbs",
    "name": "Hamish Hobbs",
    "title": "Director of AI Policy, Centre for Long-Term Resilience",
    "domain": "Frontier AI Policy & Resilience",
    "bio": "Hamish Hobbs is Director of AI Policy at the Centre for Long-Term Resilience (CLTR), where he leads policy engagement with the UK Government and international institutions on frontier AI governance and extreme risk mitigation. Before joining CLTR, he played a central role in shaping the UK’s National AI Strategy at the Office for Artificial Intelligence, served on the OECD Secretariat for the Global Partnership on AI in Paris, and advised the Australian Department of the Prime Minister and Cabinet. He holds a Master of Public Policy from the University of Oxford, where he studied as a Ramsay Postgraduate Scholar.",
    "photo": "/SpeakerPhotos/hamish-hobbs.jpg",
    "url": "https://www.longtermresilience.org/team-member/hamish-hobbs/"
  }
];
