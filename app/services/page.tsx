import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ContactSection from '../components/ContactSection';
import { supporters } from '../data';

export const metadata: Metadata = { title: 'サービス', description: 'イベント出演、ヲタ芸スクール、映画・映像振付、所属チーム、スポンサーのご案内。' };

export default function ServicesPage() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="inner-hero inner-service"><div className="inner-hero-bg"><img src="/assets/event-01.jpg" alt="ホノルルフェスティバルでのLumière" /></div><div className="inner-hero-copy"><p className="breadcrumb"><a href="/">HOME</a> / SERVICE</p><p className="kicker">WHAT WE DO</p><h1>光と熱狂を、<br />あなたの場所へ。</h1><p>イベント出演からレッスン、作品づくり、文化を広げる連携まで。</p></div><span className="inner-hero-number">02</span></section>

      <section className="section services">
        <div className="section-label"><span>01</span> OUR SERVICE</div>
        <div className="services-intro"><p className="kicker">DESIGN THE MOMENT</p><h2>その場所にしかない、<br /><em>熱狂の設計。</em></h2><p>規模や目的に合わせて、演目・時間・演出をご提案します。まずは「こんなことはできる？」からお気軽に。</p></div>
        <div className="service-grid">
          <article className="service-card service-featured"><div className="service-image"><img src="/assets/event-01.jpg" alt="ホノルルフェスティバルのステージに立つLumière" /></div><div className="service-content"><span className="service-number">01</span><p className="service-en">LIVE PERFORMANCE</p><h3>イベント出演</h3><p>地域のお祭り、企業イベント、学校行事、式典まで。空間全体を巻き込む演出で、記憶に残る時間をつくります。</p><a href="/contact">出演を相談する <span>↗</span></a></div></article>
          <article className="service-card"><span className="service-number">02</span><p className="service-en">WLD SCHOOL</p><h3>ヲタ芸スクール</h3><p>千葉県いすみ市の対面レッスンと全国対応のオンラインレッスン。基礎からステージ実践まで丁寧に伴走します。</p><ul><li>初回レッスン無料</li><li>親子・初心者歓迎</li><li>オンライン対応</li></ul><a href="/contact">体験を相談する <span>↗</span></a></article>
          <article className="service-card"><span className="service-number">03</span><p className="service-en">TEAM PARTNERSHIP</p><h3>所属チーム募集</h3><p>一般社団法人ヲタ芸普及協会では、ともに文化を広げるヲタ芸チームを募集しています。地域・活動歴は問いません。</p><ul><li>活動機会の連携</li><li>情報発信の支援</li><li>チーム同士の交流</li></ul><a href="#team">詳しく見る <span>↓</span></a></article>
          <article className="service-card"><span className="service-number">04</span><p className="service-en">FILM / MEDIA</p><h3>振付・メディア協力</h3><p>映画や映像作品のヲタ芸振付、出演、演技指導に対応。企画段階から世界観に沿った動きを設計します。</p><a href="/contact">企画を相談する <span>↗</span></a></article>
        </div>
      </section>

      <section className="team-call" id="team"><div className="team-call-bg"><img src="/assets/event-05.jpg" alt="" /></div><div className="team-call-copy"><p className="kicker">CALLING ALL TEAMS</p><h2>その光を、<br />次のステージへ。</h2><p>一般社団法人ヲタ芸普及協会に所属し、チームの垣根を越えてヲタ芸の未来を一緒につくりませんか。活動地域や経験年数を問わず、志を同じくするチームを募集しています。</p><a className="button button-primary" href="mailto:otagei.fukyuu@gmail.com?subject=所属チームについてのご相談">所属について相談する <span>↗</span></a></div><p className="team-call-en">JOIN THE MOVEMENT</p></section>

      <section className="sponsor-section" id="sponsor">
        <div className="sponsor-copy"><div className="section-label light"><span>03</span> SPONSORSHIP</div><p className="kicker">LIGHT THE FUTURE WITH US</p><h2>応援が、<br />文化を前へ進める。</h2><p>Lumièreの活動を支えてくださる企業・個人スポンサーを募集しています。イベント出演やコラボレーション、発信協力など、ご支援内容に合わせた形をご提案します。</p><a className="button button-light" href="/contact">スポンサーについて相談する <span>↗</span></a></div>
        <div className="sponsor-reasons"><article><span>01</span><h3>地域とつながる</h3><p>祭りや学校、地域イベントへの出演を通して、地域のにぎわいづくりに貢献します。</p></article><article><span>02</span><h3>若者の挑戦を支える</h3><p>世代を超えて自己表現できる場と、新しい目標に挑むきっかけを広げます。</p></article><article><span>03</span><h3>記憶に残るPR</h3><p>光と動きを生かした印象的な演出やコラボレーションで、ブランドの魅力を届けます。</p></article></div>
      </section>
      <div className="supporter-strip"><p>SUPPORTED BY</p><div>{supporters.map(name => <span key={name}>{name}</span>)}</div></div>
      <ContactSection /><SiteFooter />
    </main>
  );
}
