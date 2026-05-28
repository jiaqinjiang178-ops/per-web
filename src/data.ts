import { 
  ProfileInfo, 
  EducationEntry, 
  AiProjectEntry, 
  CampusExperienceEntry, 
  VolunteerEntry, 
  HonorEntry, 
  SkillGroup, 
  SelfEvaluation,
  Section
} from './types';

export const SECTIONS: Section[] = [
  { id: 'hero', titleZh: '首页', titleEn: 'Home', iconName: 'Home' },
  { id: 'about', titleZh: '关于我', titleEn: 'About Me', iconName: 'User' },
  { id: 'education', titleZh: '教育背景', titleEn: 'Education', iconName: 'GraduationCap' },
  { id: 'ai-projects', titleZh: 'AI 项目', titleEn: 'AI Projects', iconName: 'Sparkles' },
  { id: 'experience', titleZh: '校园经历', titleEn: 'Campus Exp.', iconName: 'Users' },
  { id: 'volunteer', titleZh: '志愿服务', titleEn: 'Volunteer', iconName: 'Heart' },
  { id: 'honors', titleZh: '个人荣誉', titleEn: 'Honors', iconName: 'Award' },
  { id: 'evaluation', titleZh: '自我评价', titleEn: 'Evaluation', iconName: 'Target' },
  { id: 'contact', titleZh: '联系方式', titleEn: 'Contact', iconName: 'Mail' }
];

export const PROFILE_INFO: ProfileInfo = {
  name: {
    zh: '江佳琴',
    en: 'Jiaqin Jiang (Jane)'
  },
  title: {
    zh: '款待与旅游业管理硕士在读 | AI+运营与产品探索者',
    en: 'Master student in Hospitality & Tourism Management | AI + Operations & Product Space Explorer'
  },
  birth: '2003.08.18',
  hometown: {
    zh: '江西省上饶市',
    en: 'Shangrao, Jiangxi, China'
  },
  email: '2452747562@qq.com',
  phone: '18379961863',
  motto: {
    zh: '认真做事，温柔待人；保持热爱，奔赴山海。',
    en: 'Do things with diligence, treat others with gentleness; keep the passions burning, head for the hills and seas.'
  },
  // 头像配置：你可以直接把你上传的真实照片重命名为 avatar.jpg 或 avatar.png，然后上传到 /src/assets/images/ 目录下直接替换它，不需要修改任何代码！
  // Avatar config: You can directly rename your real uploaded photo to avatar.jpg (or avatar.png) and drop/upload it into the /src/assets/images/ folder. It will replace directly without any code changes!
  avatar: '/src/assets/images/avatar.jpg',
  tags: {
    zh: ['澳门城市大学硕士', '英语背景', 'Coze 智能体开发者', 'AI + 运营/产品方向'],
    en: ['City University of Macau M.S.', 'English Major Background', 'Coze AI Agent Developer', 'AI + Operations & Product enthusiast']
  }
};

export const EDUCATION_DATA: EducationEntry[] = [
  {
    period: '2025.09 – 至今',
    school: {
      zh: '澳门城市大学',
      en: 'City University of Macau'
    },
    major: {
      zh: '国际款待与旅游业管理 (硕士)',
      en: 'International Hospitality and Tourism Management (Master of Science)'
    },
    degree: {
      zh: '全英文学制硕士候选人',
      en: 'English-taught postgraduate curriculum'
    },
    details: {
      zh: [
        '核心课程：旅游消费者行为学、款待业策略管理、研究方法论、数字化旅游运营。',
        '学术方向：探索 AI 与数字化工具在现代服务业、景区运营与用户体验优化中的创新应用。'
      ],
      en: [
        'Core Courses: Tourism Consumer Behavior, Strategic Management in Hospitality, Research Methodology, Digital Tourism Operations.',
        'Academic Focus: Exploring innovative applications of AI & visual tools in service systems, venue operations, and user experience design.'
      ]
    }
  },
  {
    period: '2021.09 – 2025.06',
    school: {
      zh: '南昌大学共青学院',
      en: 'Gongqing College of Nanchang University'
    },
    major: {
      zh: '英语 (本科)',
      en: 'English Language and Literature (Bachelor of Arts)'
    },
    degree: {
      zh: '管理与人文学科 / 获文学学士学位',
      en: 'Department of Management and Humanities / Bachelor of Arts'
    },
    details: {
      zh: [
        'GPA 优异，全面掌握跨文化沟通、学术写作、高级英语翻译，具备极佳的英语专业功底。',
        '积极拥抱前沿科技，擅长将语言优势与 AI 结合，开展内容策划与跨国界数字化工具研究。'
      ],
      en: [
        'Excellent GPA. Fully mastered cross-cultural communication, academic writing, and advanced translation.',
        'Actively embraced emerging tech, combining language capacities with AI to generate English content and digital workflows.'
      ]
    }
  }
];

export const AI_PROJECTS_DATA: AiProjectEntry[] = [
  {
    name: {
      zh: '「塔罗灵语」- 占卜对话智能体 (Coze Platform)',
      en: '"Tarot Oracle" - Relational Divination Chat Agent (Coze)'
    },
    platform: {
      zh: '扣子 (Coze API & Workflow)',
      en: 'ByteDance Coze Platform'
    },
    description: {
      zh: '在扣子 (Coze) 平台打造的虚拟塔罗占卜 AI 体验，通过设定富有共情力的 Prompt 架构和回复组织逻辑，提供触动人心的智能占卜体验。',
      en: 'An immersive virtual Tarot card reading AI built on Coze. Designed empathetic, highly structured prompt workflows & response topologies to deliver customized, comforting spiritual experiences.'
    },
    points: {
      zh: [
        '核心逻辑：设计精妙的多卡牌阵列解读逻辑，分梯度解析过去、当下与未来，增强对话代入感与确定感。',
        '工作流设计：利用 Coze 变量系统跟踪对话上下文状态，智能检测用户提问意图，避免机械式输出。',
        '知识增强：规划引入专业卡牌象征意象数据库，确保对大阿卡纳、小阿卡纳牌意的生成结果具有学术水准与定制广度。'
      ],
      en: [
        'Core Logic: Structured multi-card array reading algorithms, dividing analysis into past/present/future nodes to heighten immersive gameplay.',
        'Workflow Optimization: Utilized Coze variables and state slots to track user intent dynamically, bypass rigid templated replies.',
        'Knowledge Base: Currently designing and ingesting specialized symbolic card data to deliver professional-grade, contextual card explanations.'
      ]
    },
    tags: ['Coze Workflows', 'Prompt Design', 'User empathy design', 'Knowledge Base Enrichment'],
    codeSnippet: `// 塔罗卡牌检索与智能提示词框架设定 (Coze Card Selector Model)
{
  "system_prompt": "You are 'Tarot Oracle', an academic and deeply empathetic divination guide...",
  "card_database": {
    "0_the_fool": { "keywords": ["New beginnings", "Spontaneity", "Faith"], "element": "Air" },
    "1_the_magician": { "keywords": ["Action", "Power", "Concentration"], "element": "Air" }
  },
  "workflow": {
    "step_1_intent_check": "Parse query to match career, love, or personal path",
    "step_2_draw_cards": "Select 3 random cards for past, present, and physical trajectory",
    "step_3_synthesize": "Generate an academic and healing response combining elements and motifs"
  }
}`
  },
  {
    name: {
      zh: '「个人品牌数字化主页」 (This Website)',
      en: 'Personal Brand Digital Homepage'
    },
    platform: {
      zh: 'React + Vite + Tailwind CSS + Gemini AI',
      en: 'React + Vite + Tailwind CSS + Gemini AI'
    },
    description: {
      zh: '由 Gemini 1.5 & 3.5 辅助设计的全响应式高级个人网站，精雕细琢每一像素，实现米白配浅蓝的高水准学术主页设计。',
      en: 'A fully responsive, high-end portfolio site conceptualized and iterated with Gemini assistance, featuring an aesthetic warm-cream (off-white) and pastel-blue layout.'
    },
    points: {
      zh: [
        '极简排版：参考顶尖学者与产品人个人站，推崇大量呼吸感留白，彻底规避杂乱的信息过载，字里行间张弛有度。',
        '微交互动效：整站融入 smooth scroll 柔和滚动监听、高精度触觉反馈（Card lift）和弹窗卡片动态加载。',
        '国际化学术：内置精致的本地化多语言驱动层 (Bilingual Core)，一键瞬时无感切换中英双语信息结构。'
      ],
      en: [
        'Academic Micro-Layouts: Designed with large negative spaces, avoiding typical info-bloat and giving content room to breathe.',
        'Micro-Interactions: Outfitted with full scroll-spying high-fidelity highlights, smooth-scroll, and Card Lift hover physics.',
        'Bilingual Core: Programmed customized React translation layers for clean, instantaneous transition between languages.'
      ]
    },
    tags: ['React 19', 'Tailwind v4', 'Bilingual Core', 'Framer Motion', 'Refined UX'],
    codeSnippet: `// Bilingual Switching Engine
const [lang, setLang] = useState<Language>('zh');
const t = (zhText: string, enText: string) => {
  return lang === 'zh' ? zhText : enText;
};`
  }
];

export const CAMPUS_EXPERIENCE: CampusExperienceEntry[] = [
  {
    period: '2022.09 – 2023.09',
    role: {
      zh: '广播站编辑部部长',
      en: 'Director of the Broadcast Station Editorial Department'
    },
    organization: {
      zh: '南昌大学共青学院广播站',
      en: 'Broadcast Station of Gongqing College, Nanchang University'
    },
    contributions: {
      zh: [
        '统筹规划：策划、撰写并把控 5 场校级大型晚会与配音比赛文案，活动累计触达及动员全校 3000+ 师生参与。',
        '团队管理：管理一支 15 人的高素质采编团队，负责选题评审、播音稿校对、排班分配，实现运转效率提升 30%。',
        '协同合作：建立与校学生会、摄影团、外联部的高效跨部门会务机制，保障大型校园活动的音像、现场顺畅配合。'
      ],
      en: [
        'Strategic Planning: Curated, edited, and approved major scripts for 5 campus-level speech and voice acting galas, engaging over 3000 students.',
        'Team Management: Chaperoned a 15-member editorial team, reviewing script pipelines and organizing workflows to boost operational throughput by 30%.',
        'Cross-collaboration: Built highly structured joint event workflows with the Student Union, Media Center, and Public Relations Dept.'
      ]
    }
  },
  {
    period: '2021.10 – 2022.06',
    role: {
      zh: '广播站编辑部干事',
      en: 'Staff Writer, Editorial Department'
    },
    organization: {
      zh: '南昌大学共青学院广播站',
      en: 'Broadcast Station of Gongqing College, Nanchang University'
    },
    contributions: {
      zh: [
        '日常运营：负责电台日常深度文稿撰写，涵盖校园热点、经典文学、英语美文等，输出稿件 40 余篇。',
        '微信推文：独立统筹“共青先锋广播时间”等线上新媒体矩阵及公众号日常运营，单期阅读量屡达新高。'
      ],
      en: [
        'Content Creation: Wrote and proofread radio broadcasts, completing over 40 highly praised columns covering student trends, classic literature, and English prose.',
        'Digital Media: Operated broadcast social media channels ("Gongqing Pioneers Daily Show"), raising consistent digital engagement.'
      ]
    }
  }
];

export const VOLUNTEER_DATA: VolunteerEntry[] = [
  {
    period: '2025.11',
    activity: {
      zh: '全国第十二届残运会暨第九届特奥会',
      en: 'The 12th National Games for Persons with Disabilities & the 9th Special Olympics'
    },
    role: {
      zh: '官方赛会志愿者',
      en: 'Official Event Operations Volunteer'
    },
    details: {
      zh: [
        '承担赛会现场引导、无障碍服务、现场双语接待与外宾指引、多阶层协同志愿维护。',
        '以高度的工作热忱与专业沟通底色，提供温暖体贴的无障碍指引，彰显当代青年服务精神。'
      ],
      en: [
        'In charge of accessibility routing, spectator navigation, bilingual greeting, and overall spectator control.',
        'Delivered warm, attentive care for disabled athletes and visitors, earning commendations for excellent communications support.'
      ]
    }
  },
  {
    period: '2021.09 – 2024.12',
    activity: {
      zh: '本科期间公益服务矩阵',
      en: 'Undergraduate Comprehensive Social Services'
    },
    role: {
      zh: '核心爱心志愿者',
      en: 'Youth Volunteer Pioneer'
    },
    details: {
      zh: [
        '衣物捐赠：主导策划并参与全校暖冬衣物环保募捐活动，流转爱心物资配送至贫困林区。',
        '敬老服务：定期拜访福利院为高龄老人提供身理和阅读陪伴，组织微型温馨联欢会。',
        '户外大型服务：出任马拉松赛事服务、城市绿色骑行公益指引，累计志愿服务时长 120+ 小时。'
      ],
      en: [
        'Winter Clothing Donation: Spearheaded physical collection points of winter clothes on campus, transporting materials to rural schools.',
        'Elderly Volunteering: Paid routine visits to nursing homes, organizing literature readings and performance sessions.',
        'Citywide Events: Formed part of navigation & aid staff for multiple urban marathons and public green cycling tours, recording 120+ service hours.'
      ]
    }
  }
];

export const HONORS_DATA: HonorEntry[] = [
  {
    name: { zh: '国家大学英语四级 (CET-4) 证书', en: 'College English Test Band 4 (CET-4) Certificate' },
    level: { zh: '高分通过', en: 'High Score Pass' },
    year: '2022',
    category: 'academic'
  },
  {
    name: { zh: '国家大学英语六级 (CET-6) 证书', en: 'College English Test Band 6 (CET-6) Certificate' },
    level: { zh: '专业素养', en: 'Fluency Certificate' },
    year: '2023',
    category: 'academic'
  },
  {
    name: { zh: '中国第十四届“三创赛”校级三等奖', en: 'National "Innovation, Creativity & Entrepreneurship" 14th Challenge' },
    level: { zh: '校级三等奖', en: 'School Third Prize' },
    year: '2024',
    category: 'competition'
  },
  {
    name: { zh: '初级中学教师资格考试合格证 (英语)', en: 'National Teacher Certificate for Junior High Schools (English)' },
    level: { zh: '专业教学认准', en: 'State Qualified' },
    year: '2024',
    category: 'academic'
  },
  {
    name: { zh: '全国普通话水平测试二乙证书', en: 'National Putnam Proficiency Level II, Grade B Certificate' },
    level: { zh: '普通话二乙', en: 'Grade II-B' },
    year: '2022',
    category: 'academic'
  },
  {
    name: { zh: '高校年度“社会活动积极分子”', en: 'Campus Activist for Outstanding Social Contributions' },
    level: { zh: '院级荣誉', en: 'College Honors' },
    year: '2023',
    category: 'social'
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: { zh: '语言与跨文化沟通', en: 'Language & Intercultural Comm.' },
    skills: ['English (Professional Writing/Translation)', 'Mandarin Chinese (Native)', 'Cross-Cultural Tourism Management']
  },
  {
    category: { zh: '新媒体与活动运营', en: 'Operations & Media Skills' },
    skills: ['WeChat Admin (公众号运营)', 'Copywriting (文案撰写)', 'Event Facilitation (活动筹办)', 'Team Leadership (团队管理)']
  },
  {
    category: { zh: '数据分析与基本编程', en: 'Analytic & Digital Literacy' },
    skills: ['Excel (Spreadsheets/Formulas)', 'SPSS (Statistical Analysis)', 'Prompt Engineering', 'Coze Workflow Design', 'Python Fundamental (Expanding)']
  }
];

export const EVALUATION_DATA: SelfEvaluation = {
  paragraphs: {
    zh: [
      '认真做事，温柔待人——是我一直坚守的处世信条。对待交付的任务我具有强烈的责任感与自驱力，能够站在更高维的角度谋求跨部门与跨文化合作；对待同伴我敏锐体贴，善于营造松弛而积极的工作包围圈。',
      '在澳门城市大学全英文款待旅游管理研究学习中，我时刻保持着对 AI 落地应用的极高嗅觉。我热衷于探求如何利用大语言模型（如 Coze 智能体开发、Prompt 迭代）打破行业壁垒、盘活内容生态，并正在稳步自研 Python 和统计工具来重构数据分析基底。',
      '我具备极佳的双语读写水准、深厚的新媒体宣传积淀与出色的大型活动统筹经验。我真心希望能将扎实的策划管理底功与对前沿 AI 技术的极致快学、落地本领结合，志向成为一名优秀的 AI + 运营或 AI + 产品领域的复合型人才。'
    ],
    en: [
      '"Do things with diligence, treat others with gentleness" is my lifelong guiding philosophy. I harbor high intrinsic motivation, allowing me to view tasks from holistic strategic dimensions and lead cross-functional groups with empathetic care.',
      'Studying under City University of Macau\'s English postgraduate track, I remain highly sensitive to AI implementation. I actively explore how LLMs, prompt pipelines, and tools like Coze elevate tourist and business experiences. I am steadily broadening my technical toolbox with active Python study.',
      'Equipped with robust bilingual fluency, multimedia editorial acumen, and campus-proven project management. I aspire to fuse my organizational prowess with high learning agility in artificial intelligence to embark on a career at the intersection of AI + Operations / AI + Product management.'
    ]
  },
  keywords: {
    zh: ['快速学习者', 'AI热情', '共情沟通', '双语思维', '数据敏感', '执行力强'],
    en: ['Rapid Learner', 'AI Enthusiast', 'Empathetic Leader', 'Bi-linguist', 'Data Sensitive', 'Execution Oriented']
  }
};
