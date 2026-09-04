import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ContactSection from '../components/ContactSection';

export const dynamic = 'force-static';
export const metadata: Metadata = { title: '日記', description: '協会所属チームLumièreの活動レポート、練習風景、イベントの記録。' };

const posts = [
  { date: '2026.03', category: 'OVERSEAS', title: 'ホノルルフェスティバル2026に出演しました', text: '千葉から世界へ。現地のステージで届けた光と、チームが得た新しい景色。', image: '/assets/event-01.jpg', href: '/works' },
  { date: '2026', category: 'COMPETITION', title: '第3回パフォーマーカップ 優勝', text: '積み重ねてきた技術とチームワークが、ひとつの結果につながりました。', image: '/assets/performance-blue-stage.jpg', href: 'https://youtu.be/J49x2aqFN5s?si=IJysGHDyzkAkul7A', external: true },
  { date: '2025', category: 'BEHIND THE SCENES', title: '映像・映画作品の振付、その舞台裏', text: '作品の世界観を光と動きへ変換する、振付制作のプロセスをご紹介します。', image: '/assets/team-backstage.jpg', href: '/services' },
];

const dailyPhotos = [
  { image: '/assets/diary-01.jpg', alt: '夜のイベントを終えたLumièreメンバーと来場者', label: 'AFTER THE PERFORMANCE', layout: 'portrait' },
  { image: '/assets/diary-02.jpg', alt: '撮影現場で記念写真に収まるLumièreと来場者', label: 'BEHIND THE SCENES', layout: 'portrait' },
  { image: '/assets/diary-03.jpg', alt: 'イベント会場で交流するLumièreメンバー', label: 'LOCAL CONNECTION', layout: 'portrait' },
  { image: '/assets/diary-04.jpg', alt: '海辺の会場でポーズをとるLumièreメンバー', label: 'TEAM TIME', layout: 'feature' },
  { image: '/assets/diary-05.jpg', alt: '交流会で記念写真に収まるLumièreメンバーと関係者', label: 'SPECIAL MOMENT', layout: 'landscape' },
  { image: '/assets/diary-06.jpg', alt: '海外ゲストと交流するLumièreメンバー', label: 'NEW ENCOUNTER', layout: 'landscape' },
  { image: '/assets/diary-07.jpg', alt: '地域のキャラクターとポーズをとるLumièreメンバー', label: 'FESTIVAL NIGHT', layout: 'square' },
  { image: '/assets/diary-08.jpg', alt: '活動を支える仲間と笑顔で過ごすLumièreメンバー', label: 'OFF THE STAGE', layout: 'square' },
  { image: '/assets/diary-09.jpg', alt: 'テレビで紹介されたLumièreのヲタ芸パフォーマンス', label: 'ON AIR', layout: 'square' },
  { image: '/assets/diary-10.jpg', alt: 'イベントで披露されたLumièreのヲタ芸', label: 'WOTAGEI CULTURE', layout: 'panorama' },
  { image: '/assets/diary-11.jpg', alt: '地域イベントで来場者と記念写真に収まるLumièreメンバー', label: 'LOCAL DAYS', layout: 'portrait' },
  { image: '/assets/diary-12.jpg', alt: '講習会で参加者と交流するLumièreメンバー', label: 'WORKSHOP', layout: 'end' },
  { image: '/assets/diary-13.jpg', alt: '講習後に参加者と笑顔で記念撮影するLumièreメンバー', label: 'NEW CONNECTION', layout: 'end' },
];

export default function BlogPage() {
  return <main id="top"><SiteHeader />
    <section className="inner-hero journal-hero daily-hero"><div className="inner-hero-bg"><img src="/assets/diary-08.jpg" alt="笑顔で過ごすLumièreメンバーと仲間たち" /></div><div className="inner-hero-copy"><p className="breadcrumb"><a href="/">HOME</a> / DIARY</p><p className="kicker">DIARY / LUMIÈRE EVERYDAY</p><h1>光のそばにある、<br />いつもの笑顔。</h1><p>ステージの外で生まれる出会い、会話、何気ない瞬間を記録します。</p></div><span className="inner-hero-number">11</span></section>
    <section className="daily-section" id="daily"><div className="daily-heading"><div className="section-label"><span>01</span> LUMIÈRE EVERYDAY</div><div><p className="kicker">OFF THE STAGE</p><h2>ステージの外にも、<br /><em>光は続いている。</em></h2></div><p>練習の合間、イベントでの出会い、活動を終えたあとの笑顔。Lumièreらしさが見える日々の記録です。</p></div><div className="daily-grid">
      {dailyPhotos.map((photo, index) => <figure className={`daily-photo daily-photo-${photo.layout}`} key={photo.image}><img src={photo.image} alt={photo.alt} loading={index > 2 ? 'lazy' : undefined} /><figcaption><span>{String(index + 1).padStart(2, '0')}</span><small>{photo.label}</small></figcaption></figure>)}
    </div></section>
    <section className="section movie-gallery"><div className="section-label"><span>02</span> LATEST STORIES</div><div className="gallery-heading"><div><p className="kicker">TEAM JOURNAL</p><h2>挑戦の過程も、<br /><em>文化の一部。</em></h2></div></div><div className="movie-card-grid blog-card-grid">
      {posts.map(post => <a href={post.href} key={post.title} target={post.external ? '_blank' : undefined} rel={post.external ? 'noreferrer' : undefined}><div><img src={post.image} alt="" /><span className="movie-play">↗</span></div><p>{post.date} / {post.category}</p><h3>{post.title}</h3><small>{post.text}</small><i>{post.external ? 'WATCH VIDEO' : 'READ MORE'} ↗</i></a>)}
    </div></section>
    <ContactSection /><SiteFooter />
  </main>;
}
