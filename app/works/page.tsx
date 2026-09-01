import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ContactSection from '../components/ContactSection';
import { history, youtubeChannel } from '../data';

export const metadata: Metadata = { title: '活動実績', description: 'Lumièreの出演、受賞、メディア・映画振付実績と活動映像。' };

export default function WorksPage() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="inner-hero inner-works"><div className="inner-hero-bg"><img src="/assets/event-02.jpg" alt="Lumièreの活動風景" /></div><div className="inner-hero-copy"><p className="breadcrumb"><a href="/">HOME</a> / WORKS</p><p className="kicker">ACHIEVEMENTS</p><h1>挑戦の数だけ、<br />光は強くなる。</h1><p>千葉の地域イベントから、ハワイのステージ、映画、メディアへ。</p></div><span className="inner-hero-number">03</span></section>

      <section className="works">
        <div className="works-sticky"><div className="section-label light"><span>01</span> OUR JOURNEY</div><p className="kicker">2022 — 2026</p><h2>光がつないだ、<br /><em>挑戦の軌跡。</em></h2><p>各年の「映像を見る」から、YouTubeで活動の様子をご覧いただけます。</p><a className="outline-button" href={youtubeChannel} target="_blank" rel="noreferrer">YOUTUBE CHANNEL <span>↗</span></a></div>
        <div className="timeline">{history.map((period,index) => <article className="timeline-item" key={period.year}><div className="timeline-year"><span>{period.year}</span><i>{String(index + 1).padStart(2,'0')}</i></div><h3>{period.title}</h3><ul>{period.items.map(item => <li key={item}>{item}</li>)}</ul><a href={period.href} target="_blank" rel="noreferrer"><span className="play">▶</span> 映像を見る</a></article>)}</div>
      </section>

      <section className="movie-section"><div className="movie-frame"><iframe src="https://www.youtube-nocookie.com/embed/47wKIysCJ58?rel=0" title="Lumière プロモーション動画" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div><div className="movie-copy"><span>OFFICIAL MOVIE / 04:06</span><h2>言葉より先に、<br />光が語る。</h2><p>【WWC2026】ヲタ芸 / 黎明二咲ケ<br />Lumière × Wotagei World Cup</p></div></section>

      <section className="section gallery-section">
        <div className="section-label"><span>02</span> 2026 HIGHLIGHTS</div><div className="gallery-heading"><div><p className="kicker">FROM HONOLULU</p><h2>世界で灯した、<br /><em>新しい光。</em></h2></div><a href="https://www.instagram.com/lumierewoodbell" target="_blank" rel="noreferrer">INSTAGRAM <span>↗</span></a></div>
        <div className="gallery-grid">{[2,4,6,7].map((num,index) => <figure key={num} className={`gallery-${index + 1}`}><img src={`/assets/event-0${num}.jpg`} alt="Lumièreの活動風景" loading="lazy" /></figure>)}</div>
        <div className="media-proof"><p>MEDIA &amp; COLLABORATION</p><div className="media-images"><figure><img src="/assets/guest-aerts.jpg" alt="交流実績" loading="lazy" /></figure><figure><img src="/assets/guest-baruto.jpg" alt="交流実績" loading="lazy" /></figure><figure><img src="/assets/guest-kimoto.jpg" alt="交流実績" loading="lazy" /></figure><figure><img src="/assets/pro-dancer.jpg" alt="プロダンサーとの交流" loading="lazy" /></figure></div></div>
      </section>
      <ContactSection /><SiteFooter />
    </main>
  );
}
