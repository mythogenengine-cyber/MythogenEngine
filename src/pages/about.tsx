import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './about.module.css';
import Link from '@docusaurus/Link';
import { 
  MapPin, 
  Code2, 
  PenTool, 
  Globe2, 
  Briefcase,
  BookOpen,
  Sparkles,
  ShieldAlert,
  Gamepad2,
  Building2,
  Heart,
  TrendingDown,
  Monitor,
  ArrowRight,
  ExternalLink,
  Zap,
  Coffee
} from 'lucide-react';

function AboutHero() {
  const { i18n } = useDocusaurusContext();
  const isEn = i18n.currentLocale === 'en';

  return (
    <section className={styles.heroSection}>
      <div className={styles.glowOrb1}></div>
      <div className={styles.glowOrb2}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.authorBadge}>
            <span className={styles.badgeDot}></span>
            {isEn ? 'AUTHOR BIO' : '關於作者'}
          </div>
          <h1 className={styles.heroTitle}>{isEn ? 'Nebula Walker' : '星忘塵'}</h1>
          <p className={styles.heroSubtitle}>
            {isEn ? 'Independent writer and industry analyst.' : '獨立作者與產業分析人。'}
          </p>
          <div className={styles.locationBadge}>
            <MapPin size={16} />
            <span>{isEn ? 'Hong Kong / Taiwan' : '香港出身 / 現居台灣'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const { i18n } = useDocusaurusContext();
  const isEn = i18n.currentLocale === 'en';

  const experiences = [
    {
      icon: <Code2 />,
      title: isEn ? 'Engineering Roots' : '工程底層',
      desc: isEn ? 'R&D labs in Australia, embedded systems engineering (ARM, RTOS, driver development).' : '澳洲的研發實驗室、嵌入式系統工程（ARM、RTOS、驅動程式開發）。'
    },
    {
      icon: <Globe2 />,
      title: isEn ? 'Asia-Pacific Markets' : '亞太區市場',
      desc: isEn ? 'Technical marketing and applications engineering across Asia-Pacific.' : '亞太區的技術行銷與應用工程。'
    },
    {
      icon: <Briefcase />,
      title: isEn ? 'Corporate Strategy' : '企業併購',
      desc: isEn ? 'Corporate strategy consulting for acquisition restructuring across multinationals.' : '多間跨國企業內部的企業併購重組策略顧問。'
    },
    {
      icon: <PenTool />,
      title: isEn ? 'Independent Writing' : '轉向寫作',
      desc: isEn ? 'After leaving the corporate world, turned to long-form writing.' : '離開企業體制後，轉向長篇寫作。'
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.experienceGrid}>
          <div className={styles.experienceIntro}>
            <h2 className={styles.sectionTitle}>{isEn ? 'The Journey' : '職業軌跡'}</h2>
            <p className={styles.sectionDesc}>
              {isEn 
                ? 'An engineer by training, with a career spanning three continents. Witnessed firsthand how institutions grind people down through engineered attrition, balance-sheet cleanup, and systems that need no villains to do damage.'
                : '工程師出身，職業軌跡橫跨三個大洲。在多間跨國企業內部，親歷過「清帳」、工程裁員、與制度如何在不需要壞人的情況下把人磨碎的全過程。'
              }
            </p>
          </div>
          <div className={styles.timeline}>
            {experiences.map((exp, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.timelineIcon}>{exp.icon}</div>
                <div className={styles.timelineContent}>
                  <h3>{exp.title}</h3>
                  <p>{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformSection() {
  const { i18n } = useDocusaurusContext();
  const isEn = i18n.currentLocale === 'en';

  return (
    <section className={styles.platformSection}>
      <div className="container">
        <div className={styles.platformCard}>
          <div className={styles.platformGlow}></div>
          <Zap className={styles.platformIcon} size={48} />
          <h2>Mythogen Engine</h2>
          <p className={styles.platformLead}>
            {isEn 
              ? 'No courses to sell. No anxiety to peddle. No disguised endorsements.' 
              : '不賣課程，不賣焦慮，不做置入式內容。'
            }
          </p>
          <p className={styles.platformText}>
            {isEn 
              ? 'What I write is structure — how capital strips an industry to the bone, how narrative covers power, and how AI tears the covering off. Everything is free to read, with no advertising budget. Every share is a vote.'
              : '寫的是結構——資本怎樣拆骨一個產業、敘事怎樣遮蓋權力運作、AI 怎樣掀開這一切。所有內容免費閱讀，沒有廣告預算，每一次分享就是一票。'
            }
          </p>
        </div>
      </div>
    </section>
  );
}

function WorksSection() {
  const { i18n } = useDocusaurusContext();
  const isEn = i18n.currentLocale === 'en';

  const works = [
    {
      title: isEn ? 'The Invisible Path' : '《大道無形》',
      subtitle: isEn ? 'Narrative, Tools, and the Last Line of Defence' : '敘事、工具與意識的最後防線',
      desc: isEn 
        ? "AI isn't the problem — the coverings are. From narrative manufacturing to cost displacement to anxiety arbitrage."
        : 'AI 不是問題，遮蓋物才是。從敘事製造、成本轉嫁、焦慮套利，一路追到意識的結構。',
      icon: <ShieldAlert size={24} />
    },
    {
      title: isEn ? 'AI Ecosystem War' : '微軟與蘋果的 AI 生態暗戰',
      subtitle: isEn ? 'A panoramic industry study' : '全景式產業研究',
      desc: isEn 
        ? "Eight chapters dissecting the silent war between Microsoft and Apple's AI ecosystems, and OpenAI's funding perpetual motion machine."
        : '八章深度研究，拆解兩大生態系的暗線佈局、OpenAI 的資金永動機，以及這場戰爭真正的贏家和輸家。',
      icon: <Sparkles size={24} />
    },
    {
      title: isEn ? 'GameVictory' : '《遊戲至勝》',
      subtitle: isEn ? 'The hidden arithmetic of tech hegemony' : '四十年科技霸權的隱藏算術',
      desc: isEn 
        ? "How the gaming industry accidentally built the infrastructure for the AI revolution."
        : '遊戲產業如何意外鋪設了 AI 革命的底層軌道——從 GPU 算力競賽到平台生態戰爭。',
      icon: <Gamepad2 size={24} />
    },
    {
      title: isEn ? 'Capital Game' : '《資本遊戲玩什麼》',
      subtitle: isEn ? 'Case study: the gaming industry' : '實例檔案：遊戲業',
      desc: isEn 
        ? "Sony shuttered studios while posting record profits. Microsoft spent $69B on IP, then laid off the people who made the games."
        : 'Sony 關了八間工作室但利潤創新高，Microsoft 花 690 億買 IP 然後裁人。拆解資本拆骨一個產業的完整節奏。',
      icon: <Building2 size={24} />
    },
    {
      title: isEn ? 'Mirror Realm' : '《鏡界：假面系統殺人事件》',
      subtitle: isEn ? 'A semi-autobiographical novel' : '半自傳體職場小說',
      desc: isEn 
        ? "An engineer walks into a system designed to make you lose. Institutions don't need villains to grind people down."
        : '一個工程師走進設計好讓你輸的系統——制度不需要壞人，一樣把人磨碎。',
      icon: <Monitor size={24} />
    },
    {
      title: isEn ? 'Legend Song' : '《傳奇一曲》',
      subtitle: isEn ? 'Essays on Hong Kong collective memory' : '香港離散記憶',
      desc: isEn 
        ? "Nine essays threaded through a single song, tracing thirty years of Hong Kong's departures and collective farewells."
        : '九篇散文，以《千千闋歌》為經線，穿越香港三十年的離散記憶與集體告別。',
      icon: <Heart size={24} />
    },
    {
      title: isEn ? 'Memory Myth series' : '「記憶體神話」系列',
      subtitle: isEn ? 'Semiconductor cycle analysis' : '記憶體週期結構性真相',
      desc: isEn 
        ? "When everyone was chasing HBM, this series dismantled the structural truth of the memory cycle."
        : '當所有人追捧 HBM，這個系列拆解記憶體週期的結構性真相。發表後兩個月，市場驗證了分析。',
      icon: <TrendingDown size={24} />
    },
    {
      title: isEn ? 'Lucid Record' : '「清醒記錄」',
      subtitle: isEn ? 'Independent AI industry commentary' : '獨立 AI 產業評論',
      desc: isEn 
        ? "Dissecting the course-selling economy, structural job contraction, and tech giants' narrative manipulation."
        : '拆解賣課經濟、就業收縮、科技巨頭的敘事操作，與被忽略的真實趨勢。',
      icon: <BookOpen size={24} />
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitleCenter}>{isEn ? 'Published Works' : '已出版作品'}</h2>
        <div className={styles.worksGrid}>
          {works.map((work, idx) => (
            <div key={idx} className={styles.workCard}>
              <div className={styles.workIconWrap}>{work.icon}</div>
              <h3 className={styles.workTitle}>{work.title}</h3>
              <p className={styles.workSubtitle}>{work.subtitle}</p>
              <p className={styles.workDesc}>{work.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  const { i18n } = useDocusaurusContext();
  const isEn = i18n.currentLocale === 'en';

  return (
    <Layout
      title={isEn ? "About the Author" : "關於作者"}
      description={isEn ? "About Nebula Walker and Mythogen Engine" : "星忘塵與 Mythogen Engine 關於頁面"}>
      <main className={styles.aboutMain}>
        <AboutHero />
        <ExperienceSection />
        <PlatformSection />
        <WorksSection />
        
        <section className={styles.connectSection}>
          <div className="container">
            <h2 className={styles.sectionTitleCenter}>{isEn ? 'Connect & Support' : '聯絡與支持'}</h2>
            <div className={styles.connectGrid}>
              <Link to="https://matters.town/@mythogenengine" className={styles.connectCard}>
                <div className={styles.connectIconWrap} style={{color: 'var(--ifm-color-warning)'}}>
                  <ExternalLink size={28} />
                </div>
                <h3>Matters</h3>
                <p>{isEn ? 'Read my latest articles' : '閱讀最新文章'}</p>
              </Link>
              <Link to="https://portaly.cc/Mythogen" className={styles.connectCard}>
                <div className={styles.connectIconWrap} style={{color: 'var(--color-secondary-container)'}}>
                  <Coffee size={28} />
                </div>
                <h3>{isEn ? 'Sponsor' : '贊助支持'}</h3>
                <p>{isEn ? 'Support independent writing' : '支持獨立寫作'}</p>
              </Link>
              <Link to="https://www.facebook.com/MythogenEngine" className={styles.connectCard}>
                <div className={styles.connectIconWrap} style={{color: 'var(--ifm-color-primary)'}}>
                  <ExternalLink size={28} />
                </div>
                <h3>Facebook</h3>
                <p>{isEn ? 'Follow for updates' : '追蹤最新動態'}</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
