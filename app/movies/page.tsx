import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ContactSection from '../components/ContactSection';
import { youtubeChannel, youtubeSearch } from '../data';

export const dynamic = 'force-static';
export const metadata: Metadata = { title: '動画ギャラリー', description: 'Lumièreのパフォーマンス、コラボレーション、メディア出演動画。' };

const movies = [
  { tag: 'WWC 2026', title: 'ヲタ芸 / 黎明二咲ケ', image: '/assets/event-01.jpg', href: 'https://www.youtube.com/watch?v=47wKIysCJ58' },
  { tag: 'COLLABORATION', title: '自衛隊とのコラボヲタ芸', image: '/assets/event-05.jpg', href: youtubeSearch('ルミエール 自衛隊 コラボ ヲタ芸') },
  { tag: 'MEDIA', title: 'フィリピンのテレビ局で紹介', image: '/assets/event-06.jpg', href: youtubeSearch('ルミエール ヲタ芸 フィリピン テレビ') },
  { tag: 'LIVE ARCHIVE', title: 'イベント出演アーカイブ', image: '/assets/event-02.jpg', href: youtubeChannel },
];

export default function MoviesPage() {
  return <main id="top"><SiteHeader />
    <section className="inner-hero movie-hero"><div className="inner-hero-bg"><img src="/assets/event-06.jpg" alt="Lumièreの動画ギャラリー" /></div><div className="inner-hero-copy"><p className="breadcrumb"><a href="/">HOME</a> / MOVIES</p><p className="kicker">MOVIE GALLERY</p><h1>光は、映像でも<br />熱を持つ。</h1><p>パフォーマンス、コラボレーション、メディア出演の記録。</p></div><span className="inner-hero-number">06</span></section>
    <section className="section movie-gallery"><div className="section-label"><span>01</span> WATCH LUMIÈRE</div><div className="gallery-heading"><div><p className="kicker">SELECTED MOVIES</p><h2>音を感じる、<br /><em>光を観る。</em></h2></div><a href={youtubeChannel} target="_blank" rel="noreferrer">YOUTUBE CHANNEL <span>↗</span></a></div><div className="movie-card-grid">{movies.map((movie,index) => <a href={movie.href} target="_blank" rel="noreferrer" key={movie.title}><div><img src={movie.image} alt="" /><span className="movie-play">▶</span></div><p>{movie.tag} / {String(index+1).padStart(2,'0')}</p><h3>{movie.title}</h3><i>WATCH ↗</i></a>)}</div></section>
    <ContactSection /><SiteFooter />
  </main>;
}
