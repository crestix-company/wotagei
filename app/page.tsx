import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import ContactSection from './components/ContactSection';
import { upcoming } from './data';

export const dynamic = 'force-static';

const associationMenu = [
  { no: '01', en: 'ABOUT THE ASSOCIATION', title: 'ヲタ芸普及協会について', desc: '協会の理念、活動内容、代表挨拶、各活動の役割をご紹介します。', href: '/organization', image: '/assets/logo.jpg' },
  { no: '02', en: 'MEMBERS / TEAMS', title: 'メンバー・所属チーム', desc: 'Lumièreメンバー募集中!!! 協会に所属して活動するヲタ芸チームも募集しています。', href: '/members', image: '/assets/team-local-event.jpg' },
  { no: '03', en: 'NEWS / LIVE INFO', title: '出演情報・お知らせ', desc: '直近の出演予定と大切なお知らせを、見逃さないよう分かりやすく掲載します。', href: '/news', image: '/assets/event-05.jpg' },
  { no: '04', en: 'ACHIEVEMENTS', title: 'これまでの実績', desc: '海外公演、イベント、メディア、地域活動の歩み。', href: '/works', image: '/assets/event-01.jpg' },
  { no: '05', en: 'PERFORMANCE REQUEST', title: '出演依頼・お仕事のご相談', desc: '企業イベント、地域のお祭り、学校行事、映像作品まで。', href: '/services', image: '/assets/event-06.jpg' },
  { no: '06', en: 'SCHOOL / INSTRUCTOR', title: 'スクール・講師派遣', desc: 'いすみ市でヲタ芸に通いたい方、学校・団体への講師派遣、オンライン受講はこちら。', href: '/school', image: '/assets/pro-dancer.jpg' },
  { no: '07', en: 'SPONSORSHIP', title: 'スポンサー募集', desc: 'ご支援内容に合わせた出演・企画・PRをご提案。文化と若者の挑戦をともに育てませんか。', href: '/sponsor', image: '/assets/event-02.jpg' },
  { no: '09', en: 'ONLINE SHOP', title: 'オンラインショップ', desc: 'オリジナルウェアやグッズをご覧いただけます。', href: 'https://lumiere-woodbell.com/#company', image: '/assets/logo-wordmark.jpg', external: true },
  { no: '10', en: 'LUMIÈRE OFFICIAL', title: 'Lumière 公式ページ', desc: 'プロフィール、メンバー、チームの想いをご紹介します。', href: '/about', image: '/assets/member-kejan.jpg' },
  { no: '11', en: 'DIARY', title: '日記', desc: '活動レポート、練習風景、イベントの裏側を記録します。', href: '/blog', image: '/assets/guest-kimoto.jpg' },
];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline poster="/assets/event-01.jpg"><source src="/assets/hero-loop.mp4" type="video/mp4" /></video>
        <div className="hero-scrim" /><div className="hero-grid" /><div className="hero-light hero-light-one" /><div className="hero-light hero-light-two" />
        <div className="hero-copy">
          <p className="eyebrow">一般社団法人 ヲタ芸普及協会 / CHIBA, JAPAN</p>
          <h1><span>ヲタ芸を、</span><strong>次の文化へ。</strong></h1>
          <p className="hero-lead">ヲタ芸を、日本発の誇れるパフォーマンス文化へ。<br className="desktop-break" />育成・公演・地域連携を通して、誰もが光を放てる未来をつくります。</p>
          <div className="hero-actions"><a className="button button-primary" href="/contact">協会へ相談する <span>↗</span></a><a className="button button-text" href="/organization">協会について <span>↗</span></a></div>
        </div>
        <p className="hero-side-note">OFFICIAL PERFORMANCE TEAM / LUMIÈRE</p>
        <div className="hero-proof"><p><b>01</b><span>ヲタ芸文化の<br />普及・育成</span></p><p><b>02</b><span>地域・企業・学校との<br />連携</span></p><p><b>03</b><span>国内外への<br />文化発信</span></p></div>
        <a className="scroll-cue" href="#intro" aria-label="次のセクションへ">SCROLL <span>↓</span></a>
      </section>

      <div className="ticker" aria-label="一般社団法人ヲタ芸普及協会 活動領域"><div><span>CULTURE</span><i>✦</i><span>EDUCATION</span><i>✦</i><span>PERFORMANCE</span><i>✦</i><span>TEAM NETWORK</span><i>✦</i><span>REGIONAL PARTNERSHIP</span><i>✦</i><span>WOTA LIGHTING DANCE</span><i>✦</i></div></div>

      <section className="association-portal" id="intro">
        <div className="association-feature">
          <div className="association-movie"><iframe src="https://www.youtube-nocookie.com/embed/47wKIysCJ58?rel=0" title="協会所属チームLumière 公式パフォーマンス映像" allowFullScreen loading="lazy" /></div>
          <div className="association-identity"><img src="/assets/logo-header.jpg" alt="WLD WOTA LIGHTING DANCE" /><p className="kicker">一般社団法人 ヲタ芸普及協会</p><h2>光でつなぐ、<br />文化の未来。</h2><p>普及、次世代育成、地域・企業との連携を通して、ヲタ芸の可能性を社会へ広げます。</p><a href="/organization">協会について詳しく見る <span>↗</span></a></div>
        </div>
        <div className="association-menu-heading"><div className="section-label light"><span>01</span> ASSOCIATION MENU</div><div><p className="kicker">10 PAGES</p><h2>知りたいことへ、<br />まっすぐ進む。</h2></div><p>各番号は、それぞれの詳しいページへつながります。協会、出演、スクール、スポンサーなど目的からお選びください。</p></div>
        <div className="association-menu-grid">
          {associationMenu.map(item => <a className="association-menu-card" href={item.href} key={item.no} target={item.external ? '_blank' : undefined} rel={item.external ? 'noreferrer' : undefined}><div className="association-menu-image"><img src={item.image} alt="" loading="lazy" /></div><div className="association-menu-copy"><span>{item.no} / {item.en}</span><h3>{item.title}</h3><p>{item.desc}</p><i>↗</i></div></a>)}
        </div>
      </section>

      <section className="news section" id="news">
        <div className="section-label light"><span>03</span> LIVE INFO / NEWS</div>
        <div className="news-heading"><div><p className="kicker">UPCOMING / 2026</p><h2>出演情報と、<br />大切なお知らせ。</h2></div><p>重要な情報は先頭に固定し、出演予定と協会からのお知らせを分かりやすく更新します。</p></div>
        <div className="schedule">
          {upcoming.map((event, index) => <a className="schedule-row" href="/contact" key={`${event.date}-${event.title}`}><span className="schedule-index">{String(index + 1).padStart(2, '0')}</span><time><b>{event.date}</b><small>{event.day}</small></time><span className="schedule-title">{event.title}</span><span className="schedule-area">{event.area}</span><span className="schedule-arrow">↗</span></a>)}
        </div>
      </section>

      <section className="home-global">
        <div className="home-global-image"><img src="/assets/event-01.jpg" alt="ホノルルフェスティバル2026のLumière" /></div>
        <div className="home-global-copy"><p className="kicker">FROM CHIBA TO THE WORLD</p><h2>地域に根ざし、<br />世界へ届ける。</h2><p>協会所属チームLumièreは、2026年にハワイ・ホノルルフェスティバルへ出演し、第3回パフォーマーカップで優勝。現場で磨いた技術と情熱を、文化の未来へ還元します。</p><a className="button button-primary" href="/works">協会・所属チームの実績 <span>↗</span></a></div>
      </section>

      <section className="home-join">
        <div><p className="kicker">TEAM &amp; SPONSOR</p><h2>この光を、<br />一緒に先へ。</h2></div>
        <div><p>一般社団法人ヲタ芸普及協会では、所属チームとスポンサーを募集しています。活動地域や規模にかかわらず、まずは目指したい未来をお聞かせください。</p><div className="home-join-links"><a href="/members#recruit">メンバー・所属チーム募集 <span>↗</span></a><a href="/sponsor">スポンサーについて <span>↗</span></a></div></div>
      </section>

      <ContactSection /><SiteFooter />
    </main>
  );
}
