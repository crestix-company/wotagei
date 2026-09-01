import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import ContactSection from './components/ContactSection';
import { upcoming } from './data';

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline poster="/assets/event-01.jpg"><source src="/assets/hero-loop.mp4" type="video/mp4" /></video>
        <div className="hero-scrim" /><div className="hero-grid" /><div className="hero-light hero-light-one" /><div className="hero-light hero-light-two" />
        <div className="hero-copy">
          <p className="eyebrow">WOTA LIGHTING DANCE / CHIBA, JAPAN</p>
          <h1><span>光を振れば、</span><strong>心が動く。</strong></h1>
          <p className="hero-lead">ヲタ芸チーム Lumière。一本の光から、会場をひとつにする。<br className="desktop-break" />地域のお祭りから世界のステージまで、忘れられない熱狂を届けます。</p>
          <div className="hero-actions"><a className="button button-primary" href="/contact">出演を依頼する <span>↗</span></a><a className="button button-text" href="#news">出演予定を見る <span>↓</span></a></div>
        </div>
        <p className="hero-side-note">一般社団法人 ヲタ芸普及協会 所属チーム</p>
        <div className="hero-proof"><p><b>01</b><span>パフォーマーカップ<br />2度の優勝</span></p><p><b>02</b><span>映画振付・企業公演<br />多数</span></p><p><b>03</b><span>2026 HONOLULU<br />FESTIVAL</span></p></div>
        <a className="scroll-cue" href="#intro" aria-label="次のセクションへ">SCROLL <span>↓</span></a>
      </section>

      <div className="ticker" aria-label="Lumière 活動領域"><div><span>LIVE PERFORMANCE</span><i>✦</i><span>WOTA LIGHTING DANCE</span><i>✦</i><span>SCHOOL</span><i>✦</i><span>FILM CHOREOGRAPHY</span><i>✦</i><span>LIVE PERFORMANCE</span><i>✦</i><span>WOTA LIGHTING DANCE</span><i>✦</i></div></div>

      <section className="home-intro" id="intro">
        <div className="home-intro-photo"><img src="/assets/event-03.jpg" alt="ホノルルフェスティバルに出演したLumière" /></div>
        <div className="home-intro-copy">
          <div className="section-label"><span>01</span> WHO WE ARE</div><p className="kicker">BEYOND THE GLOW</p>
          <h2>ヲタ芸を、<br /><em>誇れる文化</em>へ。</h2>
          <p>光る棒を振る。その動きの奥に、緻密な振付、鍛錬、仲間との呼吸がある。Lumièreは、ヲタ芸を誰もが心を動かされるステージ・エンターテインメントへ進化させます。</p>
          <a className="page-arrow-link" href="/about">私たちについて <span>↗</span></a>
        </div>
      </section>

      <section className="news section" id="news">
        <div className="section-label light"><span>02</span> NEXT LIVE</div>
        <div className="news-heading"><div><p className="kicker">UPCOMING / 2026</p><h2>光の先で、<br />会いましょう。</h2></div><p>出演情報は随時更新。<br />イベントの出演依頼も受け付けています。</p></div>
        <div className="schedule">
          {upcoming.map((event, index) => <a className="schedule-row" href="/contact" key={`${event.date}-${event.title}`}><span className="schedule-index">{String(index + 1).padStart(2, '0')}</span><time><b>{event.date}</b><small>{event.day}</small></time><span className="schedule-title">{event.title}</span><span className="schedule-area">{event.area}</span><span className="schedule-arrow">↗</span></a>)}
        </div>
      </section>

      <section className="section route-section">
        <div className="section-label"><span>03</span> EXPLORE LUMIÈRE</div>
        <div className="route-heading"><p className="kicker">CHOOSE YOUR PATH</p><h2>知る。頼む。<br /><em>一緒に灯す。</em></h2></div>
        <div className="route-grid">
          <a href="/services" className="route-card"><div><span>01 / SERVICE</span><h3>その場所だけの、<br />熱狂をつくる。</h3><p>イベント出演、スクール、映画振付、所属チーム募集。</p></div><img src="/assets/event-01.jpg" alt="Lumièreのステージ" /><i>↗</i></a>
          <a href="/works" className="route-card"><div><span>02 / WORKS</span><h3>光がつないだ、<br />挑戦の軌跡。</h3><p>2022年から世界のステージへ。実績と映像を見る。</p></div><img src="/assets/event-06.jpg" alt="Lumièreの活動実績" /><i>↗</i></a>
          <a href="/about" className="route-card"><div><span>03 / THE TEAM</span><h3>個性が重なり、<br />ひとつの光になる。</h3><p>メンバーと代表の想い、協会が目指す未来。</p></div><img src="/assets/member-kejan.jpg" alt="Lumièreメンバー" /><i>↗</i></a>
        </div>
      </section>

      <section className="home-global">
        <div className="home-global-image"><img src="/assets/event-01.jpg" alt="ホノルルフェスティバル2026のLumière" /></div>
        <div className="home-global-copy"><p className="kicker">FROM CHIBA TO THE WORLD</p><h2>千葉から、<br />世界の舞台へ。</h2><p>2026年、ハワイ・ホノルルフェスティバルへ出演。そして第3回パフォーマーカップ優勝。挑戦は、まだ始まったばかりです。</p><a className="button button-primary" href="/works">活動実績を見る <span>↗</span></a></div>
      </section>

      <section className="home-join">
        <div><p className="kicker">TEAM &amp; SPONSOR</p><h2>この光を、<br />一緒に先へ。</h2></div>
        <div><p>一般社団法人ヲタ芸普及協会では、所属チームとスポンサーを募集しています。活動地域や規模にかかわらず、まずは目指したい未来をお聞かせください。</p><div className="home-join-links"><a href="/services#team">所属チームについて <span>↗</span></a><a href="/services#sponsor">スポンサーについて <span>↗</span></a></div></div>
      </section>

      <ContactSection /><SiteFooter />
    </main>
  );
}
