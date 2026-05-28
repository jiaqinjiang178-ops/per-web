/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, 
  User, 
  GraduationCap, 
  Sparkles, 
  Users, 
  Heart, 
  Award, 
  Target, 
  Mail, 
  MapPin, 
  Calendar, 
  ExternalLink, 
  Code, 
  Copy, 
  Check, 
  ChevronRight, 
  Menu, 
  X, 
  Globe, 
  Eye, 
  RefreshCw, 
  Send, 
  CheckCircle2, 
  BookOpen, 
  Phone, 
  ArrowRight,
  Info
} from 'lucide-react';

import { Language } from './types';
import { 
  SECTIONS, 
  PROFILE_INFO, 
  EDUCATION_DATA, 
  AI_PROJECTS_DATA, 
  CAMPUS_EXPERIENCE, 
  VOLUNTEER_DATA, 
  HONORS_DATA, 
  SKILL_GROUPS, 
  EVALUATION_DATA 
} from './data';

export default function App() {
  const [lang, setLang] = useState<Language>('zh');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  
  // Contacts form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    role: 'Recruiter', // Recruiter, Peer, Academic, Other
    message: ''
  });
  const [submittedMessages, setSubmittedMessages] = useState<Array<{
    id: string;
    timestamp: string;
    name: string;
    email: string;
    role: string;
    message: string;
  }>>([]);
  const [formSuccess, setFormSuccess] = useState<boolean>(false);
  const [showRecruiterBackstage, setShowRecruiterBackstage] = useState<boolean>(false);

  // Interactive Tarot Project simulation states
  const [tarotSelected, setTarotSelected] = useState<boolean>(false);
  const [drawnCards, setDrawnCards] = useState<Array<{
    nameZh: string;
    nameEn: string;
    meaningZh: string;
    meaningEn: string;
    isUpright: boolean;
    aspect: 'past' | 'present' | 'future';
  }>>([]);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  // Interactive Design Code CodeSnippet Toggle on the website project
  const [viewSnippetIndex, setViewSnippetIndex] = useState<number | null>(null);

  // Filter category for Honors
  const [honorFilter, setHonorFilter] = useState<'all' | 'academic' | 'competition' | 'social'>('all');

  // Multi-language translation utility helper
  const t = (zh: string, en: string) => (lang === 'zh' ? zh : en);

  // Set up intersection observer for scroll-spying
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // Trigger when section occupies the sweet middle spot
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Set default messages list helper
  useEffect(() => {
    const mockMessages = [
      {
        id: '1',
        timestamp: '2026-05-28 14:20',
        name: '罗教授 (Prof. Luo)',
        email: 'luo_academics@cityu.mo',
        role: 'Academic',
        message: '江同学，你的学术规划和双语网站排版非常高级，米白与浅蓝的色调搭配很有学术张力。期待你在款待与旅游管理和数据科学的跨界探索！'
      }
    ];
    setSubmittedMessages(mockMessages);
  }, []);

  // Code copy handler
  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Submit contact message handler
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;

    const newMessage = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
      ...contactForm
    };

    setSubmittedMessages(prev => [newMessage, ...prev]);
    setFormSuccess(true);
    setContactForm({
      name: '',
      email: '',
      role: 'Recruiter',
      message: ''
    });

    setTimeout(() => {
      setFormSuccess(false);
    }, 5000);
  };

  // Interactive Tarot Draw System (Simulating the 'Tarot Oracle' agent)
  const drawTarotCards = () => {
    setIsDrawing(true);
    setTarotSelected(true);
    
    // Virtual Tarot Database for simulation
    const tarotPool = [
      {
        nameZh: '愚人 (The Fool - 正位)',
        nameEn: 'The Fool (Upright)',
        meaningZh: '开启全新的旅程。代表着纯真的探索心。暗示着你目前进修新专业以及自学 Python 拥有无限可能，不惧失败，勇往直前。',
        meaningEn: 'A brand new journey. Represents innocent and fearless curiosity. Suggests your current self-study and transition in postgraduate work have boundless potential.',
        aspect: 'past'
      },
      {
        nameZh: '魔术师 (The Magician - 正位)',
        nameEn: 'The Magician (Upright)',
        meaningZh: '行动力与技术的融合。代表你敏锐而富有创造力，能巧妙运用智能工具（如 Coze 开发塔罗智能体）。万事俱备，智慧如光。',
        meaningEn: 'Integration of creativity and technical resources. Represents mastery of digital tools (like your Coze application) and ability to manifest dreams with strategy.',
        aspect: 'present'
      },
      {
        nameZh: '星辰 (The Star - 正位)',
        nameEn: 'The Star (Upright)',
        meaningZh: '希望之光与未来灵感。暗示着你的热爱终将奔赴山海，在 AI + 运营与旅游管理结合的方向上，将取得璀璨耀眼的创意落地。',
        meaningEn: 'Inspiration, hope, and bright future guidelines. Suggests that your passions will successfully guide your path in the AI + product intersection.',
        aspect: 'future'
      }
    ];

    setTimeout(() => {
      // Shuffled and prepared
      setDrawnCards(tarotPool as any);
      setIsDrawing(false);
    }, 1200);
  };

  // Map icons helper
  const getLucideIcon = (name: string, className = "w-5 h-5") => {
    switch(name) {
      case 'Home': return <Home className={className} />;
      case 'User': return <User className={className} />;
      case 'GraduationCap': return <GraduationCap className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'Users': return <Users className={className} />;
      case 'Heart': return <Heart className={className} />;
      case 'Award': return <Award className={className} />;
      case 'Target': return <Target className={className} />;
      case 'Mail': return <Mail className={className} />;
      default: return <User className={className} />;
    }
  };

  return (
    <div className="min-h-screen bg-warm-cream flex flex-col selection:bg-pale-blue selection:text-academic-ink transition-colors duration-500 ease-in-out">
      
      {/* Dynamic Ambient Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft, delicate pale-blue blur blobs mirroring the "米白 + 浅蓝" layout aesthetic */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-pale-blue blur-[80px] rounded-full opacity-45 transition-all duration-1000"></div>
        <div className="absolute bottom-20 left-10 w-[450px] h-[450px] bg-[#E1EDF6] blur-[120px] rounded-full opacity-40 transition-all duration-1000"></div>
        
        {/* Fine, subtle academic coordinate grid paper pattern */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#7FB3D5_1px,transparent_1px),linear-gradient(to_bottom,#7FB3D5_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      {/* FIXED HEADER WITH LANGUAGE SWITCHER - PC & Desktop */}
      <header className="sticky top-0 z-30 bg-warm-cream/80 backdrop-blur-md border-b border-[#7FB3D5]/10 px-6 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <span className="font-serif italic text-2xl font-semibold text-academic-ink tracking-tight select-none">
              Jane <span className="text-serene-blue">Jiang</span>
            </span>
            <span className="hidden sm:inline-block h-4 w-[1px] bg-sky-200/50"></span>
            <span className="hidden sm:inline-block font-sans text-xs uppercase tracking-widest text-[#6C757D]">
              {t('学术主页', 'Academic Portfolio')}
            </span>
          </a>

          {/* Nav & Language Control Actions */}
          <div className="flex items-center gap-4">
            {/* Quick Language Toggle */}
            <button 
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium border border-serene-blue/20 bg-warm-bone/40 text-academic-ink hover:bg-pale-blue hover:border-serene-blue/40 transition-all duration-300 flex items-center gap-1.5 z-10 cursor-pointer active:scale-95"
              title="Toggle Language / 切换语言"
              id="language-switch"
            >
              <Globe className="w-3.5 h-3.5 text-serene-blue animate-pulse" />
              <span>{lang === 'zh' ? 'English' : '中文'}</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-academic-ink hover:text-serene-blue hover:bg-pale-blue rounded-md transition-all cursor-pointer"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* DESKTOP SIDEBAR + RENDER AREA (Bento Structure layout) */}
      <div className="max-w-7xl w-full mx-auto px-4 md:px-8 py-8 flex-1 flex flex-col lg:flex-row gap-8 relative z-10">
        
        {/* LEFT PANEL: Sticky User Metadata Card & Elegant Desktop Navigation */}
        <aside className="w-full lg:w-80 flex flex-col gap-6 lg:sticky lg:top-24 h-fit z-20">
          
          {/* Main User Card */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-[#7FB3D5]/10 academic-shadow flex flex-col items-center text-center">
            
            {/* Elegant Circle Avatar with glowing off-white/light blue rings */}
            <div className="relative group w-32 h-32 mb-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-serene-blue to-pale-blue rounded-full rotate-45 group-hover:rotate-180 transition-all duration-1000 scale-105 opacity-80"></div>
              <div className="absolute inset-[3px] bg-warm-cream rounded-full z-10"></div>
              
              {/* Profile Image with fallback */}
              <img 
                src={PROFILE_INFO.avatar} 
                alt={t('江佳琴', 'Jiaqin Jiang')}
                className="absolute inset-[6px] w-[calc(100%-12px)] h-[calc(100%-12px)] object-cover rounded-full z-20 hover:scale-105 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to high-quality SVG initials generator if generated asset directory has issues
                  (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=Jiaqin&backgroundColor=7fb3d5&fontFamily=Georgia`;
                }}
              />
            </div>

            {/* Profile Metadata */}
            <h1 className="font-serif italic text-2xl font-bold text-academic-ink mt-2 mb-1 tracking-tight">
              {PROFILE_INFO.name[lang]}
            </h1>
            <p className="font-sans text-xs text-serene-blue font-medium uppercase tracking-wider mb-3">
              Jane Jiang
            </p>
            <p className="text-xs text-[#6C757D] line-clamp-2 px-2 leading-relaxed font-sans">
              {PROFILE_INFO.title[lang]}
            </p>

            {/* Horizontal Line */}
            <hr className="w-full border-t border-[#7FB3D5]/10 my-4" />

            {/* Quick stats and motto lines */}
            <div className="flex flex-col gap-2.5 w-full text-left text-xs text-academic-ink font-sans">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-serene-blue shrink-0" />
                <span className="text-[#6C757D]">{t('出生日期', 'Birth Date')}:</span>
                <span className="font-semibold ml-auto">{PROFILE_INFO.birth}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-serene-blue shrink-0" />
                <span className="text-[#6C757D]">{t('籍 贯', 'Hometown')}:</span>
                <span className="font-semibold ml-auto">{PROFILE_INFO.hometown[lang]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-serene-blue shrink-0" />
                <span className="text-[#6C757D]">{t('电子邮箱', 'Email Address')}:</span>
                <a href={`mailto:${PROFILE_INFO.email}`} className="font-semibold text-serene-blue hover:underline ml-auto truncate max-w-[130px]">
                  {PROFILE_INFO.email}
                </a>
              </div>
            </div>

            {/* Dynamic visual tag pill lists */}
            <div className="flex flex-wrap gap-1.5 justify-center mt-4">
              {PROFILE_INFO.tags[lang].map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-2 py-1 rounded bg-[#EBF3F9] text-academic-ink font-sans text-[10px] font-medium transition-all duration-300 hover:bg-sky-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* DESKTOP SIDEBAR NAVIGATION MENU (Hides on Mobile) */}
          <nav className="hidden lg:flex flex-col gap-1 bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-[#7FB3D5]/10 academic-shadow">
            <span className="px-3.5 py-2 text-[10px] uppercase font-bold tracking-widest text-[#6C757D] mb-2 border-b border-[#7FB3D5]/10">
              {t('楼层导航', 'PORTFOLIO NAVIGATION')}
            </span>
            {SECTIONS.map((section) => {
              const active = activeSection === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                    active 
                      ? 'bg-pale-blue text-academic-ink border-l-4 border-serene-blue shadow-sm font-semibold' 
                      : 'text-[#6C757D] hover:text-academic-ink hover:bg-warm-bone/40'
                  }`}
                  id={`nav-link-${section.id}`}
                >
                  {getLucideIcon(section.iconName, `w-4 h-4 ${active ? 'text-serene-blue' : 'text-[#6C757D]'}`)}
                  <span>{t(section.titleZh, section.titleEn)}</span>
                  {active && (
                    <ChevronRight className="w-3 h-3 text-serene-blue ml-auto animate-bounce-horizontal" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Recruiter Backstage Portal Panel Button (Fun easter egg!) */}
          <div className="hidden lg:block">
            <button
              onClick={() => setShowRecruiterBackstage(!showRecruiterBackstage)}
              className="w-full py-2.5 px-4 bg-warm-bone/60 hover:bg-pale-blue text-academic-ink border border-serene-blue/15 text-xs rounded-xl font-medium tracking-wide transition-all duration-300 flex items-center justify-between group cursor-pointer"
              id="backstage-trigger"
            >
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-serene-blue group-hover:rotate-6 transition-transform" />
                {t('进入交互消息中心', 'Recruiter Letterboard')}
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </button>
          </div>
        </aside>

        {/* MOBILE OVERLAY NAVIGATION DRAWER */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-academic-ink/45 backdrop-blur-sm lg:hidden flex justify-end" id="mobile-drawer-backdrop">
            <div className="w-64 bg-warm-cream h-full shadow-2xl p-5 flex flex-col gap-6 overflow-y-auto animate-slide-left border-l border-[#7FB3D5]/20">
              <div className="flex items-center justify-between border-b border-[#7FB3D5]/10 pb-4">
                <span className="font-serif italic font-semibold text-lg text-academic-ink">
                  Navigation
                </span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full hover:bg-pale-blue text-academic-ink"
                  id="close-mobile-drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {SECTIONS.map((section) => {
                  const active = activeSection === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-3.5 py-3 rounded-lg text-sm font-medium transition-all ${
                        active 
                          ? 'bg-pale-blue text-academic-ink font-semibold border-l-4 border-serene-blue' 
                          : 'text-[#6C757D] hover:text-academic-ink hover:bg-warm-bone/40'
                      }`}
                      id={`mobile-nav-${section.id}`}
                    >
                      {getLucideIcon(section.iconName, 'w-4 h-4')}
                      <span>{t(section.titleZh, section.titleEn)}</span>
                    </a>
                  );
                })}
              </div>

              <div className="mt-auto border-t border-[#7FB3D5]/15 pt-4 text-xs text-center text-[#6C757D]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowRecruiterBackstage(true);
                  }}
                  className="w-full py-2 bg-pale-blue text-academic-ink font-medium rounded-lg hover:bg-sky-100 transition-all cursor-pointer mb-2"
                >
                  {t('进入交互消息中心', 'Message Center')}
                </button>
                <p>© 2026 江佳琴. Built elegant with AI</p>
              </div>
            </div>
          </div>
        )}

        {/* RIGHT COLUMN: MAIN CONTENT RENDER STREAM (PC Bento Grid layout) */}
        <main className="flex-1 flex flex-col gap-8 w-full max-w-4xl overflow-hidden text-academic-ink">
          
          {/* SECTION 1: HERO / BANNER HEADER */}
          <section id="hero" className="scroll-mt-24 p-0">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-pale-blue via-warm-cream to-white border border-[#7FB3D5]/10 p-8 md:p-12 academic-shadow flex flex-col justify-center min-h-[380px] group transition-all duration-700 hover:border-serene-blue/20">
              {/* Abs decoration circles */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-pale-blue rounded-bl-full opacity-60 pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
              
              <div className="relative z-10 max-w-2xl flex flex-col gap-5">
                
                {/* Accent tag badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EBF3F9] text-academic-ink rounded-full w-fit border border-serene-blue/2s0">
                  <span className="w-1.5 h-1.5 rounded-full bg-serene-blue animate-ping"></span>
                  <span className="font-mono text-[10px] tracking-wider uppercase font-semibold">
                    Candidates Profile • Master of Science (CityU)
                  </span>
                </div>

                {/* Main Heading Presentation */}
                <h2 className="text-4xl md:text-5xl font-serif italic text-academic-ink leading-tight font-extrabold">
                  {t('认真做事，温柔待人；', 'Diligent in Doing Things,')} <br className="hidden sm:inline" />
                  <span className="text-serene-blue font-serif not-italic font-bold">
                    {t('保持热爱，奔赴山海。', 'Gentle with People.')}
                  </span>
                </h2>

                <p className="text-sm md:text-base text-[#6C757D] leading-relaxed font-sans font-light mt-1">
                  {t(
                    '你好！我是江佳琴 (Jane)，目前于澳门城市大学深造国际款待与旅游业管理硕士课程（英文学制）。我精通中英双语，拥有丰富的新媒体宣传与团队统筹背景。我乐于拥抱 AI 技术，探索如何用大语言模型与数据工具颠覆传统运营生态，志在 AI 运营与产品研发领域扎实前行。',
                    'Hi! I am Jiaqin Jiang (Jane), currently pursuing my Master of Science in International Hospitality & Tourism Management at City University of Macau. Anchored on strong English mastery, event operation acumen, and digital writing, I actively experiment with AI agent systems and statistical models to deliver innovative service solutions.'
                  )}
                </p>

                {/* Interactive Action Badges */}
                <div className="flex flex-wrap gap-3 mt-4">
                  <a 
                    href="#ai-projects"
                    className="px-5 py-2.5 rounded-full text-xs font-semibold bg-academic-ink text-warm-cream hover:bg-serene-blue transition-all duration-300 flex items-center gap-2 group shadow-sm cursor-pointer"
                  >
                    <span>{t('浏览我的 AI实践项目', 'Explore AI Agent')}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="#contact"
                    className="px-5 py-2.5 rounded-full text-xs font-medium border border-serene-blue/20 bg-white hover:bg-pale-blue text-[#1B263B] transition-all duration-300 flex items-center gap-2 cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 text-serene-blue" />
                    <span>{t('获取联系渠道', 'Contact Me')}</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: ABOUT ME */}
          <section id="about" className="scroll-mt-24">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-[#7FB3D5]/10 academic-shadow">
              <div className="flex items-center gap-3 border-b border-[#7FB3D5]/10 pb-4 mb-6">
                <div className="p-2 bg-pale-blue rounded-lg text-serene-blue">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-sans text-academic-ink leading-tight">
                    {t('关于我', 'About Me')}
                  </h3>
                  <span className="text-[10px] font-mono tracking-wider text-[#6C757D] uppercase">
                    Personal Portrait & Philosophy
                  </span>
                </div>
              </div>

              {/* Grid with personal detailed specs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                
                {/* Academic Background Summary Narrative */}
                <div className="flex flex-col gap-4">
                  <h4 className="font-serif italic text-xl text-serene-blue font-semibold">
                    {t('追求极致学习，与AI和产品思维共振', 'Continuous Expansion at the Frontiers')}
                  </h4>
                  <p className="text-xs text-[#6C757D] leading-relaxed">
                    {t(
                      '出生于 2003 年，来自于山清水秀的江西上饶。在南昌大学共青学院主修英语本科期间，我为自己打下了极其扎实的语言和跨文化底子。升入学风严谨、多元开放的澳门城市大学款待旅游硕士项目后，我更是将研究触角伸到数字转型、大语言模型 prompt 开发和学术研究方法论中。',
                      'Originating from Shangrao, Jiangxi. During my BA steps in English, I solidified a strong bi-literate bedrock. Continuing inside CityU\'s postgraduate cluster, my academic work merges customer experiences with statistical tools, Prompt pipelines, and business agility.'
                    )}
                  </p>
                  <p className="text-xs text-[#6C757D] leading-relaxed">
                    {t(
                      '除了严谨的论文研究，我具有极其灵活的活动策划和公众号文案运营本领，曾负责统筹全校上千人参与的高校晚会。现在，我正在持续打磨自己的流程构建本领，将 AI 技术融入具体运营场景中实现快速落地。',
                      'Beyond metrics, my background highlights strong administrative leadership—managing editorial divisions and leading university festivals. Today, I synthesize these soft skills into Prompt construction, workflow engineering, and digital operations.'
                    )}
                  </p>
                </div>

                {/* Fast Profile Stats Deck Grid */}
                <div className="bg-warm-cream/50 rounded-xl p-5 border border-[#7FB3D5]/15 flex flex-col gap-4">
                  <span className="text-[10px] font-mono tracking-widest text-[#6C757D] uppercase font-bold">
                    {t('核心画像维度', 'PROFILE DIMENSIONS')}
                  </span>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-white rounded-lg border border-sky-100">
                      <span className="text-[10px] text-[#6C757D] block mb-1">
                        {t('年龄性别', 'Age & Gender')}
                      </span>
                      <span className="text-xs font-semibold text-academic-ink">
                        {t('22岁 • 女士', '22 Yrs • Female')}
                      </span>
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-sky-100">
                      <span className="text-[10px] text-[#6C757D] block mb-1">
                        {t('语言层级', 'Academic Languages')}
                      </span>
                      <span className="text-xs font-semibold text-academic-ink">
                        {t('中英双语极佳', 'Bilingual Fluent')}
                      </span>
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-sky-100">
                      <span className="text-[10px] text-[#6C757D] block mb-1">
                        {t('研究方向', 'Research Scopes')}
                      </span>
                      <span className="text-xs font-semibold text-academic-ink leading-tight block">
                        {t('数字化旅游与AI运营', 'Digital Hospitality')}
                      </span>
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-sky-100">
                      <span className="text-[10px] text-[#6C757D] block mb-1">
                        {t('职业目标', 'Career Aspirations')}
                      </span>
                      <span className="text-xs font-semibold text-academic-ink leading-tight block text-serene-blue">
                        {t('AI运营 / 产品经理', 'AI Operations/Prod')}
                      </span>
                    </div>
                  </div>

                  {/* Motto Quote card representation */}
                  <div className="mt-2 bg-pale-blue/60 border-l-4 border-serene-blue p-3 rounded-r-lg">
                    <span className="text-[9px] font-mono uppercase font-bold text-serene-blue tracking-wider block mb-1">
                      {t('座右铭', 'Guiding Principle')}
                    </span>
                    <p className="text-xs font-serif italic text-academic-ink font-semibold">
                      " {PROFILE_INFO.motto[lang]} "
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* SECTION 3: EDUCATION BACKGROUND */}
          <section id="education" className="scroll-mt-24">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-[#7FB3D5]/10 academic-shadow">
              <div className="flex items-center gap-3 border-b border-[#7FB3D5]/10 pb-4 mb-6">
                <div className="p-2 bg-pale-blue rounded-lg text-serene-blue">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-sans text-academic-ink leading-tight">
                    {t('教育背景', 'Education Background')}
                  </h3>
                  <span className="text-[10px] font-mono tracking-wider text-[#6C757D] uppercase">
                    Academic Qualifications & Accreditations
                  </span>
                </div>
              </div>

              {/* Elegant Vertical Timeline for Education */}
              <div className="relative pl-6 md:pl-8 border-l border-[#7FB3D5]/20 flex flex-col gap-8 font-sans">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    
                    {/* Glowing blue node anchor on left line */}
                    <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-serene-blue flex items-center justify-center group-hover:bg-pale-blue transition-colors duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-serene-blue animate-pulse"></div>
                    </div>

                    {/* Timeline Data Container */}
                    <div className="bg-warm-cream/30 hover:bg-white rounded-xl p-5 border border-sky-100/40 hover:border-serene-blue/20 transition-all duration-300 academic-shadow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-1.5 mb-2.5">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-serene-blue px-2.5 py-1 bg-pale-blue rounded-full w-fit">
                          {edu.period}
                        </span>
                        <span className="text-[11px] font-sans text-[#6C757D]">
                          {idx === 0 ? t('研 究 生', 'Postgraduate Step') : t('本 科 步 骤', 'Undergraduate Step')}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-academic-ink flex flex-wrap items-center gap-2 mb-1">
                        <span>{edu.school[lang]}</span>
                        <span className="text-xs font-normal text-muted-stone">|</span>
                        <span className="text-sm font-semibold text-serene-blue">{edu.major[lang]}</span>
                      </h4>

                      <div className="text-xs text-academic-ink/80 font-medium italic mb-3">
                        {edu.degree[lang]}
                      </div>

                      {/* Bullet details list */}
                      <ul className="space-y-1.5 pl-4 list-disc text-xs text-[#6C757D]">
                        {edu.details?.[lang].map((detail, dIdx) => (
                          <li key={dIdx} className="leading-relaxed">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 4: AI PROJECT PRACTICES */}
          <section id="ai-projects" className="scroll-mt-24">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-[#7FB3D5]/10 academic-shadow">
              <div className="flex items-center gap-3 border-b border-[#7FB3D5]/10 pb-4 mb-6">
                <div className="p-2 bg-pale-blue rounded-lg text-serene-blue">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-sans text-academic-ink leading-tight flex items-center gap-1.5">
                    {t('AI 项目实践成果', 'AI Project Innovation')}
                    <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 text-[9px] font-extrabold tracking-widest uppercase md:inline-block hidden">Interactive</span>
                  </h3>
                  <span className="text-[10px] font-mono tracking-wider text-[#6C757D] uppercase">
                    LLM Workflows, Prompt Architecture & Applications
                  </span>
                </div>
              </div>

              {/* Rendered Project Cards */}
              <div className="flex flex-col gap-8 font-sans">
                {AI_PROJECTS_DATA.map((project, idx) => (
                  <div 
                    key={idx} 
                    className="bg-warm-cream/30 hover:bg-white border border-[#7FB3D5]/12 hover:border-serene-blue/20 rounded-xl p-6 transition-all duration-300 academic-shadow flex flex-col gap-4 relative overflow-hidden"
                  >
                    
                    {/* Top card flags */}
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[9px] font-mono font-bold tracking-wider text-serene-blue uppercase bg-pale-blue px-2.5 py-1 rounded">
                          {project.platform[lang]}
                        </span>
                        <h4 className="text-lg font-bold text-academic-ink mt-2">
                          {project.name[lang]}
                        </h4>
                      </div>

                      {/* Highlighted Interactive button to toggle snippet */}
                      <button
                        onClick={() => setViewSnippetIndex(viewSnippetIndex === idx ? null : idx)}
                        className="p-1 px-3 text-xs border border-serene-blue/20 rounded hover:bg-pale-blue text-academic-ink transition-all flex items-center gap-1.5 cursor-pointer"
                        id={`snippet-toggle-${idx}`}
                        title="查看架构代码 / View Configuration code"
                      >
                        <Code className="w-3.5 h-3.5 text-serene-blue" />
                        <span className="text-[10px] font-mono font-medium">
                          {viewSnippetIndex === idx ? t('隐藏代码', 'Collapse') : t('解构逻辑', 'Inspect Code')}
                        </span>
                      </button>
                    </div>

                    <p className="text-xs text-academic-ink/80 leading-relaxed font-light italic">
                      {project.description[lang]}
                    </p>

                    {/* Bullet achievement points */}
                    <ul className="space-y-2 text-xs text-[#6C757D] pl-4 list-disc">
                      {project.points[lang].map((point, pIdx) => (
                        <li key={pIdx} className="leading-relaxed">
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 rounded bg-pale-blue text-[#1B263B] text-[10px]">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* COMPONENT INTERACTION 1: COZE TAROT DIVINATION SIMULATOR (FUN WIDGET) */}
                    {idx === 0 && (
                      <div className="mt-4 p-5 bg-white rounded-xl border border-sky-100 bg-gradient-to-b from-white to-pale-blue/30">
                        <div className="flex items-center justify-between border-b border-sky-100 pb-2 mb-3.5">
                          <span className="flex items-center gap-2 text-xs font-bold text-academic-ink">
                            <Sparkles className="w-3.5 h-3.5 text-serene-blue animate-spin" />
                            {t('「塔罗灵语」智能对话体模拟镜', 'Tarot Oracle Interface Hub (Coze Sim)')}
                          </span>
                          <span className="text-[9px] font-mono text-muted-stone bg-[#FAF9F6] px-2 py-0.5 rounded uppercase font-semibold">
                            ACTIVE PROTOCOL
                          </span>
                        </div>

                        {!tarotSelected ? (
                          <div className="text-center py-4 flex flex-col items-center">
                            <p className="text-xs text-[#6C757D] max-w-md leading-relaxed mb-4 font-sans">
                              {t(
                                '此模块实时模拟江佳琴开发在扣子 (Coze) 的 AI 智能体决策层，利用精细 Prompt 工作流进行 3 卡牌阵解析。点击下方按钮，开始您的学术与心路探索：',
                                'This widget simulates the AI decision workspace she programmed in Coze. Click below to pull a customized, empathetic 3-Card Tarot reading to preview its logic flow on career or life decisions:'
                              )}
                            </p>
                            
                            <button
                              onClick={drawTarotCards}
                              disabled={isDrawing}
                              className="px-5 py-2.5 bg-serene-blue hover:bg-academic-ink text-white font-medium text-xs rounded-full shadow-md flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 disabled:opacity-50"
                              id="tarot-draw-btn"
                            >
                              <RefreshCw className={`w-3.5 h-3.5 ${isDrawing ? 'animate-spin' : ''}`} />
                              <span>{t('占卜：抽取运势大阿卡纳牌阵', 'Draw 3-Card Spiritual Array')}</span>
                            </button>
                          </div>
                        ) : (
                          <div className="flex flex-col gap-4 font-sans">
                            {isDrawing ? (
                              <div className="text-center py-6 flex flex-col items-center justify-center gap-2">
                                <RefreshCw className="w-6 h-6 text-serene-blue animate-spin" />
                                <p className="text-xs text-[#6C757D] font-serif italic animate-pulse">
                                  {t('智能体工作流决策中... 卡牌拼合中...', 'Coze Variable state checking... Analysing Card symbols...')}
                                </p>
                              </div>
                            ) : (
                              <div className="flex flex-col gap-4">
                                
                                {/* 3 Card Display */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                  {drawnCards.map((card, cIdx) => (
                                    <div key={cIdx} className="bg-white/80 p-3.5 rounded-lg border border-sky-50 shadow-sm flex flex-col gap-1 hover:border-serene-blue/40 transition-all">
                                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-serene-blue block">
                                        {cIdx === 0 ? t('过去/痛点 (Past)', '1. Past Context') : cIdx === 1 ? t('当下/势态 (Present)', '2. Present state') : t('未来/启示 (Future)', '3. Strategic Outcome')}
                                      </span>
                                      <div className="font-serif italic font-bold text-xs text-academic-ink my-1">
                                        ❖ {card.nameZh} / {card.nameEn}
                                      </div>
                                      <p className="text-[10px] text-[#6C757D] leading-relaxed">
                                        {lang === 'zh' ? card.meaningZh : card.meaningEn}
                                      </p>
                                    </div>
                                  ))}
                                </div>

                                {/* Flow diagnostics panel */}
                                <div className="p-3 bg-academic-ink text-white/95 rounded-lg text-[10px] font-mono leading-relaxed relative">
                                  <div className="absolute top-2 right-2 flex gap-1">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                                  </div>
                                  <div className="text-serene-blue font-bold mb-1">// COZE AGENT WORKFLOW RESPONSE TRACE:</div>
                                  <div>State: <span className="text-emerald-300">Success_200</span> | Intent: <span className="text-yellow-300">"Academic Career Journey Query"</span></div>
                                  <div>Synthesis Path: <span className="text-sky-300">Prompt_Empathy_Layout v2.4</span> | Integration: <span className="text-[#FAF9F6]">Knowledge_tarot_major_arcana.json</span></div>
                                  <div className="text-[#6C757D] mt-1">// {t('认真做事、温柔待人。保持热爱，期待您的回音！', 'Diligence with code, gentleness with people. Always keep loving this trip.')}</div>
                                </div>

                                {/* Reset button */}
                                <button
                                  onClick={() => setTarotSelected(false)}
                                  className="w-fit text-[10px] text-serene-blue font-medium hover:underline flex items-center gap-1 cursor-pointer"
                                  id="reset-tarot-btn"
                                >
                                  <RefreshCw className="w-2.5 h-2.5" />
                                  <span>{t('返回介绍并重新占卜', 'Reset divination and read bio again')}</span>
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* CODE WRAPPER INSPECT SPEC */}
                    {viewSnippetIndex === idx && project.codeSnippet && (
                      <div className="mt-2 bg-academic-ink text-white rounded-lg p-4 font-mono text-[11px] leading-relaxed relative animate-fadeIn">
                        <div className="absolute top-3 right-3 flex items-center gap-2">
                          <button
                            onClick={() => handleCopyCode(project.codeSnippet!, `code-${idx}`)}
                            className="p-1 text-[#6C757D] hover:text-white transition-all rounded bg-white/5 cursor-pointer"
                            title="Copy code"
                            id={`copy-code-btn-${idx}`}
                          >
                            {copiedText === `code-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                        <pre className="overflow-x-auto pr-10">{project.codeSnippet}</pre>
                      </div>
                    )}

                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 5: CAMPUS EXPERIENCE */}
          <section id="experience" className="scroll-mt-24">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-[#7FB3D5]/10 academic-shadow">
              <div className="flex items-center gap-3 border-b border-[#7FB3D5]/10 pb-4 mb-6">
                <div className="p-2 bg-pale-blue rounded-lg text-serene-blue">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-sans text-academic-ink leading-tight">
                    {t('校园经历与组织才能', 'Campus & Leadership Experience')}
                  </h3>
                  <span className="text-[10px] font-mono tracking-wider text-[#6C757D] uppercase">
                    Editorial Management, Coordination & Multi-dept Collaboration
                  </span>
                </div>
              </div>

              {/* Timeline layout */}
              <div className="relative pl-6 md:pl-8 border-l border-[#7FB3D5]/20 flex flex-col gap-8 font-sans">
                {CAMPUS_EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="relative group">
                    
                    {/* Position circle */}
                    <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-serene-blue flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-serene-blue"></div>
                    </div>

                    <div className="bg-warm-cream/30 hover:bg-white rounded-xl p-5 border border-sky-100/40 hover:border-serene-blue/20 transition-all duration-300 academic-shadow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-1.5 mb-2.5">
                        <span className="text-[10px] font-mono font-bold tracking-wider text-serene-blue px-2.5 py-1 bg-pale-blue rounded-full w-fit">
                          {exp.period}
                        </span>
                        <span className="text-[11px] font-sans text-muted-stone font-medium">
                          {exp.organization[lang]}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-academic-ink mb-3">
                        {exp.role[lang]}
                      </h4>

                      {/* Contribution Bullets */}
                      <ul className="space-y-2 text-xs text-[#6C757D] pl-4 list-disc">
                        {exp.contributions[lang].map((contrib, cIdx) => (
                          <li key={cIdx} className="leading-relaxed">
                            {contrib}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 6: VOLUNTEER SERVICE */}
          <section id="volunteer" className="scroll-mt-24">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-[#7FB3D5]/10 academic-shadow">
              <div className="flex items-center gap-3 border-b border-[#7FB3D5]/10 pb-4 mb-6">
                <div className="p-2 bg-pale-blue rounded-lg text-serene-blue">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-sans text-academic-ink leading-tight">
                    {t('志愿服务积淀', 'Volunteer Service')}
                  </h3>
                  <span className="text-[10px] font-mono tracking-wider text-[#6C757D] uppercase">
                    Social contributions, games operational staffing, and charity work
                  </span>
                </div>
              </div>

              {/* Grid bento layout for Volunteering */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                {VOLUNTEER_DATA.map((vol, idx) => (
                  <div 
                    key={idx} 
                    className="bg-warm-cream/30 hover:bg-white border border-[#7FB3D5]/12 hover:border-serene-blue/20 rounded-xl p-5 transition-all duration-300 academic-shadow flex flex-col gap-3 relative overflow-hidden"
                  >
                    
                    {/* Simple aesthetic decor ribbon for official games */}
                    {idx === 0 && (
                      <div className="absolute top-0 right-0 w-2 h-full bg-serene-blue"></div>
                    )}

                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono font-bold tracking-wider text-serene-blue bg-[#EBF3F9] px-2.5 py-1 rounded">
                        {vol.period}
                      </span>
                      <span className="text-[10px] text-[#6C757D] font-medium">
                        {idx === 0 ? t('赛会官方', 'National Event') : t('长期公益', 'Comprehensive Core')}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-bold text-sm text-academic-ink mb-1 leading-tight">
                        {vol.activity[lang]}
                      </h4>
                      <div className="text-xs text-serene-blue font-medium italic">
                        {vol.role[lang]}
                      </div>
                    </div>

                    <ul className="space-y-1.5 pl-4 list-disc text-xs text-[#6C757D] mt-1 border-t border-sky-100/40 pt-2.5">
                      {vol.details[lang].map((detail, dIdx) => (
                        <li key={dIdx} className="leading-relaxed">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 7: PERSONAL HONORS */}
          <section id="honors" className="scroll-mt-24">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-[#7FB3D5]/10 academic-shadow">
              <div className="flex items-center gap-3 border-b border-[#7FB3D5]/10 pb-4 mb-6">
                <div className="p-2 bg-pale-blue rounded-lg text-serene-blue">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-sans text-academic-ink leading-tight">
                    {t('个人荣誉与专业资质', 'Honors & Professional Qualifications')}
                  </h3>
                  <span className="text-[10px] font-mono tracking-wider text-[#6C757D] uppercase">
                    English mastery, teaching qualifications, and innovation challenge prizes
                  </span>
                </div>
              </div>

              {/* Tag filtering interface for Honors */}
              <div className="flex flex-wrap gap-2 mb-6 font-sans">
                <button
                  onClick={() => setHonorFilter('all')}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all ${
                    honorFilter === 'all' 
                      ? 'bg-academic-ink text-white' 
                      : 'bg-warm-bone/60 hover:bg-pale-blue text-academic-ink'
                  }`}
                  id="filter-honors-all"
                >
                  {t('全部', 'Show All')}
                </button>
                <button
                  onClick={() => setHonorFilter('academic')}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all ${
                    honorFilter === 'academic' 
                      ? 'bg-[#EBF3F9] text-[#1B263B] border border-serene-blue/30' 
                      : 'bg-warm-bone/60 hover:bg-pale-blue text-academic-ink'
                  }`}
                  id="filter-honors-academic"
                >
                  {t('学术与语言 (CET / 教资)', 'Academic & Languages')}
                </button>
                <button
                  onClick={() => setHonorFilter('competition')}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all ${
                    honorFilter === 'competition' 
                      ? 'bg-[#EBF3F9] text-[#1B263B] border border-serene-blue/30' 
                      : 'bg-warm-bone/60 hover:bg-pale-blue text-academic-ink'
                  }`}
                  id="filter-honors-competition"
                >
                  {t('竞赛与创投 (三创赛)', 'Competitions')}
                </button>
                <button
                  onClick={() => setHonorFilter('social')}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all ${
                    honorFilter === 'social' 
                      ? 'bg-[#EBF3F9] text-[#1B263B] border border-serene-blue/30' 
                      : 'bg-warm-bone/60 hover:bg-pale-blue text-[#1B263B]'
                  }`}
                  id="filter-honors-social"
                >
                  {t('社会实践荣誉', 'Student Activity')}
                </button>
              </div>

              {/* Honors grid list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
                {HONORS_DATA.filter(h => honorFilter === 'all' || h.category === honorFilter).map((honor, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 bg-warm-cream/30 hover:bg-white rounded-xl border border-sky-100 hover:border-serene-blue/20 transition-all duration-300 flex items-center gap-3.5 shadow-sm hover:translate-y-[-1px]"
                  >
                    <div className="p-2.5 bg-pale-blue rounded-lg text-serene-blue shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-semibold text-academic-ink truncate">
                        {honor.name[lang]}
                      </h4>
                      <div className="flex items-center justify-between mt-1 text-[10px]">
                        <span className="text-serene-blue font-medium">{honor.level?.[lang]}</span>
                        <span className="text-muted-stone font-mono">{honor.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 8: SKILLS & SELF-EVALUATION */}
          <section id="evaluation" className="scroll-mt-24">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-[#7FB3D5]/10 academic-shadow flex flex-col gap-8">
              
              {/* Profile sub header */}
              <div>
                <div className="flex items-center gap-3 border-b border-[#7FB3D5]/10 pb-4 mb-5">
                  <div className="p-2 bg-pale-blue rounded-lg text-serene-blue">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-sans text-academic-ink leading-tight">
                      {t('技能体系与自我评价', 'Skills Matrix & Self-Evaluation')}
                    </h3>
                    <span className="text-[10px] font-mono tracking-wider text-[#6C757D] uppercase">
                      Bilingual mindset, technical competencies & leadership potentials
                    </span>
                  </div>
                </div>

                {/* Left details grid for skills compilation */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans mb-8">
                  {SKILL_GROUPS.map((group, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-sky-100/50 bg-[#FAF9F6] flex flex-col gap-3.5">
                      <span className="text-xs font-bold text-academic-ink border-b border-[#7FB3D5]/15 pb-1.5 block">
                        ✦ {group.category[lang]}
                      </span>
                      <div className="flex flex-col gap-1.5">
                        {group.skills.map((skill, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2 text-xs text-[#6C757D]">
                            <span className="h-1 w-1 rounded-full bg-serene-blue"></span>
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rich Self Eval Paragraph cards */}
              <div className="p-6 bg-[#EBF3F9]/45 rounded-2xl border border-serene-blue/15 font-sans relative overflow-hidden">
                <div className="absolute top-[-10px] right-[-10px] opacity-[0.05] text-academic-ink">
                  <BookOpen className="w-40 h-40" />
                </div>

                <span className="text-[9px] font-mono tracking-widest text-serene-blue uppercase font-bold block mb-4">
                  {t('学者特质与工作操守自述', 'Personal Philosophy & Reflection Statement')}
                </span>

                <div className="space-y-4 text-xs text-[#1B263B] leading-relaxed font-light">
                  {EVALUATION_DATA.paragraphs[lang].map((p, idx) => (
                    <p key={idx}>
                      {p}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-sky-200/40">
                  {EVALUATION_DATA.keywords[lang].map((word, idx) => (
                    <span 
                      key={idx} 
                      className="px-3.5 py-1 rounded-full text-xs font-medium bg-white text-academic-ink border border-sky-100 shadow-sm"
                    >
                      # {word}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* SECTION 9: CONTACT ME & INTERACTIVE LEAVE MESSAGE */}
          <section id="contact" className="scroll-mt-24">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-[#7FB3D5]/10 academic-shadow">
              
              <div className="flex items-center gap-3 border-b border-[#7FB3D5]/10 pb-4 mb-6">
                <div className="p-2 bg-pale-blue rounded-lg text-serene-blue">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-sans text-academic-ink leading-tight">
                    {t('联系我 / 留言交流室', 'Get In Touch')}
                  </h3>
                  <span className="text-[10px] font-mono tracking-wider text-[#6C757D] uppercase">
                    Submit proposals, academic feedback, or mock recruiter queries
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                
                {/* Contact info deck */}
                <div className="flex flex-col gap-5">
                  <h4 className="font-serif italic text-xl text-serene-blue font-semibold">
                    {t('真诚期待与您的深度沟通', 'Connecting Minds across Horizons')}
                  </h4>
                  <p className="text-xs text-[#6C757D] leading-relaxed">
                    {t(
                      '无论是对我的 Coze 智能体「塔罗灵语」开展学术探讨，还是关于数字化旅游款待管理的研究合作，亦或是关于 AI + 运营与产品的实习招聘工作，都非常欢迎您通过右侧表单提交留言！表单留言将实时留存在本地数据库控制台中，极富可访问性。',
                      'Whether you wish to suggest iterations for my "Tarot Oracle" agent, explore research synergy on tourism tech, or inquire for active internship openings, feel free to wire lines right through the message board here.'
                    )}
                  </p>

                  <div className="flex flex-col gap-3 text-xs text-academic-ink mt-3">
                    <div className="flex items-center gap-3 p-3 bg-[#FAF9F6] rounded-lg border border-sky-100">
                      <Mail className="w-4 h-4 text-serene-blue shrinkage-0" />
                      <div>
                        <span className="text-[9px] text-[#6C757D] block mb-0.5">常用工作邮箱 (Preferred Email)</span>
                        <a href="mailto:2452747562@qq.com" className="font-semibold hover:underline">2452747562@qq.com</a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-[#FAF9F6] rounded-lg border border-sky-100">
                      <Phone className="w-4 h-4 text-serene-blue shrinkage-0" />
                      <div>
                        <span className="text-[9px] text-[#6C757D] block mb-0.5">移动联系电话 (Mobile / WeChat)</span>
                        <a href="tel:18379961863" className="font-semibold hover:underline">+86 183 7996 1863</a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-[#FAF9F6] rounded-lg border border-sky-100">
                      <MapPin className="w-4 h-4 text-serene-blue shrinkage-0" />
                      <div>
                        <span className="text-[9px] text-[#6C757D] block mb-0.5">当前学术地址 (Study Address)</span>
                        <span className="font-semibold">{t('中华人民共和国澳门特别行政区', 'Macau SAR, China')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form layout */}
                <div className="bg-[#FAF9F6] rounded-xl p-5 border border-[#7FB3D5]/15">
                  <form onSubmit={handleContactSubmit} className="flex flex-col gap-3.5">
                    
                    <div>
                      <label className="text-[10px] uppercase font-bold text-[#6C757D] tracking-wider block mb-1">
                        {t('您的姓名 / Organization Name', 'Your Name / Org')}
                      </label>
                      <input 
                        type="text" 
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        placeholder={t('例如：李教授 / 某科技HR', 'e.g. Dr. Li / Tech HR')}
                        className="w-full text-xs p-2.5 rounded border border-sky-100 bg-white focus:outline-none focus:border-serene-blue focus:ring-1 focus:ring-serene-blue px-3.5"
                        id="form-name-input"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3.5">
                      <div>
                        <label className="text-[10px] uppercase font-bold text-[#6C757D] tracking-wider block mb-1">
                          {t('电子邮箱', 'Email Address')}
                        </label>
                        <input 
                          type="email" 
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                          placeholder="name@domain.com"
                          className="w-full text-xs p-2.5 rounded border border-sky-100 bg-white focus:outline-none focus:border-serene-blue focus:ring-1 focus:ring-serene-blue px-3.5"
                          id="form-email-input"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] uppercase font-bold text-[#6C757D] tracking-wider block mb-1">
                          {t('您的身份角色', 'Role Identity')}
                        </label>
                        <select 
                          value={contactForm.role}
                          onChange={(e) => setContactForm({...contactForm, role: e.target.value})}
                          className="w-full text-xs p-2.5 rounded border border-sky-100 bg-white focus:outline-none focus:border-serene-blue focus:ring-1 focus:ring-serene-blue cursor-pointer px-2"
                          id="form-role-select"
                        >
                          <option value="Recruiter">{t('企业招聘官', 'Recruiter (HR)')}</option>
                          <option value="Academic">{t('学者/同胞', 'Academic Partner')}</option>
                          <option value="Peer">{t('技术同仁', 'AI/Tech Peer')}</option>
                          <option value="Other">{t('其他来客', 'Other Guest')}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase font-bold text-[#6C757D] tracking-wider block mb-1">
                        {t('留言沟通内容', 'Message Details')}
                      </label>
                      <textarea 
                        required
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        placeholder={t('期待您的回音，温柔待人，认真做事...', 'Write detailed inquiries or encouragement words...')}
                        className="w-full text-xs p-2.5 rounded border border-sky-100 bg-white focus:outline-none focus:border-serene-blue focus:ring-1 focus:ring-serene-blue px-3.5 resize-none"
                        id="form-message-area"
                      />
                    </div>

                    {/* Success indicator alert feedback banner */}
                    {formSuccess && (
                      <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-100 rounded text-emerald-700 text-xs animate-fadeIn">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <div>
                          <strong>{t('感谢！您的留言已送至下方交互栏中。', 'Successfully Sent!')}</strong>
                          <span className="block text-[10px] text-emerald-600 font-light">{t('您可以在下方交互消息中心查阅这条仿真信息。', 'You can track the state inside the Recruiter Panel below.')}</span>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="py-2.5 bg-serene-blue hover:bg-academic-ink text-white font-medium text-xs rounded shadow transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95"
                      id="form-submit-btn"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{t('发送信息并投递到现场', 'Deploy Mock Line Board')}</span>
                    </button>

                  </form>
                </div>

              </div>
            </div>
          </section>

          {/* SECTION 10: INTERACTIVE LETTERBOARD / RECRUITER PORTAL */}
          {showRecruiterBackstage && (
            <section className="scroll-mt-24">
              <div className="bg-academic-ink text-white rounded-2xl p-6 border border-white/5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-2 right-2">
                  <button 
                    onClick={() => setShowRecruiterBackstage(false)}
                    className="p-1 px-2 border border-white/10 hover:bg-white/10 text-xs rounded text-slate-300 transition-all cursor-pointer"
                    id="close-backstage-btn"
                  >
                    × {t('关闭面板', 'Close')}
                  </button>
                </div>

                <div className="flex items-center gap-2 border-b border-white/10 pb-3.5 mb-4">
                  <div className="p-1.5 bg-white/10 rounded text-serene-blue">
                    <BookOpen className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-wide text-white">
                      {t('江佳琴的个人品牌站：互动式访客留言流', 'Interactive Message Gateway & Visitor Logs')}
                    </h4>
                    <span className="text-[9px] font-mono text-slate-400">
                      STATE CONTROL: CLIENT_LOCAL_STORAGE (SIMULATED PIPELINE)
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans font-light mb-4">
                  {t(
                    '此面板展现本主页的交互功能：您在上方发送的所有联络留言，都将瞬间无刷新存储至前端本地列表之中。下面是已归档的仿真访客信函，旨在便于雇主直接对网站的数据流动架构进行评测：',
                    'A live validation dashboard demonstrating real-time data flow with immediate state hydration. Below is the localized list of inquiries received locally within this secure testing sandbox:'
                  )}
                </p>

                <div className="flex flex-col gap-3 max-h-[220px] overflow-y-auto pr-2">
                  {submittedMessages.length === 0 ? (
                    <div className="text-center py-6 text-xs text-slate-500 font-mono">
                      {t('【当前暂无访客留言。请在上方输入一条留言测试数据流程】', '[No records. Run submit actions above directly to hydration logs]')}
                    </div>
                  ) : (
                    submittedMessages.map((msg) => (
                      <div key={msg.id} className="p-3 bg-white/5 rounded-lg border border-white/5 font-sans relative">
                        <div className="flex items-center justify-between text-[10px] mb-1">
                          <span className="font-bold text-serene-blue">
                            {msg.name} ({msg.role})
                          </span>
                          <span className="text-slate-400 font-mono">
                            {msg.timestamp}
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-300 font-mono mb-1.5">
                          {t('发信邮箱', 'Sender')}: {msg.email}
                        </div>
                        <p className="text-xs text-[#FAF9F6] bg-white/5 p-2 rounded border border-white/3 font-light leading-relaxed">
                          {msg.message}
                        </p>
                      </div>
                    ))
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-[9px] font-mono text-slate-400 flex flex-wrap justify-between items-center gap-2">
                  <span>Current Local Node Time: 2026-05-28 16:54:30 UTC</span>
                  <span>Component v1.0.4 • Academic design</span>
                </div>
              </div>
            </section>
          )}

        </main>

      </div>

      {/* FOOTER */}
      <footer className="bg-white/60 backdrop-blur-sm border-t border-[#7FB3D5]/10 py-8 text-center text-xs text-[#6C757D] font-sans relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="font-serif italic font-bold text-sm text-academic-ink mb-1">江佳琴 (Jane Jiang) 个人学术简历主页</p>
            <p className="text-[10px] font-sans">
              {t('基于 React & Tailwind 设计 • 认真做事，温柔待人', 'Powered by React & Tailwind • Do things with diligence, treat others with gentleness')}
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-[10px] font-mono">
            <span>2026 © ALL RIGHTS RESUME</span>
            <span className="text-sky-300">•</span>
            <a href="#hero" className="hover:text-serene-blue transition-colors">BACK TO TOP</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
