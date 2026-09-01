import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ContactSection from '../components/ContactSection';

export const metadata: Metadata = { title: 'サービス', description: 'イベント出演、ヲタ芸スクール、映画・映像振付、所属チーム、スポンサーのご案内。' };

export default function ServicesPage() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="inner-hero inner-service"><div className="inner-hero-bg"><img src="/assets/event-01.jpg" alt="ホノルルフェスティバルでのLumière" /></div><div className="inner-hero-copy"><p className="breadcrumb"><a href="/">HOME</a> / SERVICE</p><p className="kicker">PERFORMANCE REQUEST</p><h1>光と熱狂を、<br />あなたの場所へ。</h1><p>企業イベント、地域のお祭り、学校行事、映像作品まで。</p></div><span className="inner-hero-number">05</span></section>

      <section className="section services">
        <div className="section-label"><span>01</span> OUR SERVICE</div>
        <div className="services-intro"><p className="kicker">DESIGN THE MOMENT</p><h2>その場所にしかない、<br /><em>熱狂の設計。</em></h2><p>規模や目的に合わせて、演目・時間・演出をご提案します。まずは「こんなことはできる？」からお気軽に。</p></div>
        <div className="service-grid">
          <article className="service-card service-featured"><div className="service-image"><img src="/assets/event-01.jpg" alt="ホノルルフェスティバルのステージに立つLumière" /></div><div className="service-content"><span className="service-number">01</span><p className="service-en">LIVE PERFORMANCE</p><h3>イベント出演</h3><p>地域のお祭り、企業イベント、学校行事、式典まで。空間全体を巻き込む演出で、記憶に残る時間をつくります。</p><a href="/contact">出演を相談する <span>↗</span></a></div></article>
          <article className="service-card"><span className="service-number">02</span><p className="service-en">WLD SCHOOL</p><h3>ヲタ芸スクール</h3><p>千葉県いすみ市の対面レッスンと全国対応のオンラインレッスン。基礎からステージ実践まで丁寧に伴走します。</p><ul><li>初回レッスン無料</li><li>親子・初心者歓迎</li><li>オンライン対応</li></ul><a href="/contact">体験を相談する <span>↗</span></a></article>
          <article className="service-card"><span className="service-number">03</span><p className="service-en">TEAM PARTNERSHIP</p><h3>所属チーム募集</h3><p>一般社団法人ヲタ芸普及協会では、ともに文化を広げるヲタ芸チームを募集しています。地域・活動歴は問いません。</p><ul><li>活動機会の連携</li><li>情報発信の支援</li><li>チーム同士の交流</li></ul><a href="/members#recruit">募集ページを見る <span>↗</span></a></article>
          <article className="service-card"><span className="service-number">04</span><p className="service-en">FILM / MEDIA</p><h3>振付・メディア協力</h3><p>映画や映像作品のヲタ芸振付、出演、演技指導に対応。企画段階から世界観に沿った動きを設計します。</p><a href="/contact">企画を相談する <span>↗</span></a></article>
        </div>
      </section>

      <section className="team-call"><div className="team-call-bg"><img src="/assets/event-05.jpg" alt="" /></div><div className="team-call-copy"><p className="kicker">FROM REQUEST TO STAGE</p><h2>まずは、企画の<br />輪郭だけでも。</h2><p>会場、目的、時期が決まりきっていない段階でも構いません。イベント出演、映像振付、学校公演など、実現方法を一緒に整理します。</p><a className="button button-primary" href="/contact">出演・仕事を相談する <span>↗</span></a></div><p className="team-call-en">LET&apos;S CREATE</p></section>
      <ContactSection /><SiteFooter />
    </main>
  );
}
