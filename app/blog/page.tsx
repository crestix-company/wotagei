import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ContactSection from '../components/ContactSection';

export const dynamic = 'force-static';
export const metadata: Metadata = { title: '日記', description: '協会所属チームLumièreの活動レポート、練習風景、イベントの記録。' };

const posts = [
  { date: '2026.03', category: 'OVERSEAS', title: 'ホノルルフェスティバル2026に出演しました', text: '千葉から世界へ。現地のステージで届けた光と、チームが得た新しい景色。', image: '/assets/event-01.jpg', href: '/works' },
  { date: '2026', category: 'COMPETITION', title: '第3回パフォーマーカップ 優勝', text: '積み重ねてきた技術とチームワークが、ひとつの結果につながりました。', image: '/assets/event-06.jpg', href: '/works' },
  { date: '2025', category: 'BEHIND THE SCENES', title: '映像・映画作品の振付、その舞台裏', text: '作品の世界観を光と動きへ変換する、振付制作のプロセスをご紹介します。', image: '/assets/event-04.jpg', href: '/services' },
];

export default function BlogPage() {
  return <main id="top"><SiteHeader />
    <section className="inner-hero journal-hero"><div className="inner-hero-bg"><img src="/assets/event-05.jpg" alt="Lumièreの活動記録" /></div><div className="inner-hero-copy"><p className="breadcrumb"><a href="/">HOME</a> / DIARY</p><p className="kicker">DIARY / ACTIVITY RECORD</p><h1>光の裏側にある、<br />人と物語。</h1><p>活動レポート、練習風景、イベントの記録を発信します。</p></div><span className="inner-hero-number">11</span></section>
    <section className="section movie-gallery"><div className="section-label"><span>01</span> LATEST STORIES</div><div className="gallery-heading"><div><p className="kicker">TEAM JOURNAL</p><h2>挑戦の過程も、<br /><em>文化の一部。</em></h2></div></div><div className="movie-card-grid blog-card-grid">
      {posts.map(post => <a href={post.href} key={post.title}><div><img src={post.image} alt="" /><span className="movie-play">↗</span></div><p>{post.date} / {post.category}</p><h3>{post.title}</h3><small>{post.text}</small><i>READ MORE ↗</i></a>)}
    </div></section>
    <ContactSection /><SiteFooter />
  </main>;
}
