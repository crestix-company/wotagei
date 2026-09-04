import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ContactSection from '../components/ContactSection';
import { supporters } from '../data';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'スポンサー募集',
  description: '一般社団法人ヲタ芸普及協会とLumièreの活動をともに育てるスポンサー・パートナー募集。',
};

export default function SponsorPage() {
  return <main id="top"><SiteHeader />
    <section className="inner-hero inner-service sponsor-hero"><div className="inner-hero-bg"><picture><source media="(max-width: 720px)" srcSet="/assets/sponsor-hero-city-performance-mobile.jpg" /><img src="/assets/sponsor-hero-city-performance.jpg" alt="夜景を背に光を掲げるLumière" /></picture></div><div className="inner-hero-copy"><p className="breadcrumb"><a href="/">HOME</a> / SPONSOR</p><p className="kicker">PARTNER WITH US</p><h1>応援を、<br />文化の力へ。</h1><p>企業・個人の皆さまと、若者の挑戦、地域のにぎわい、新しい文化の未来を育てます。</p></div><span className="inner-hero-number">07</span></section>

    <section className="sponsor-section sponsor-page">
      <div className="sponsor-copy"><div className="section-label light"><span>07</span> SPONSORSHIP</div><p className="kicker">LIGHT THE FUTURE WITH US</p><h2>一緒だから、<br />届く光がある。</h2><p>ご予算と目的に合わせて、イベント出演、オリジナル演目、SNS・動画での発信、社内・地域向け体験企画などを組み合わせて個別にご提案します。単なる広告枠ではなく、共感が残る取り組みを一緒につくります。</p><a className="button button-light" href="/contact">スポンサーについて相談する <span>↗</span></a></div>
      <div className="sponsor-reasons"><article><span>01</span><h3>地域とつながる</h3><p>祭りや学校、地域イベントへの出演を通して、地域のにぎわいづくりに貢献します。</p></article><article><span>02</span><h3>若者の挑戦を支える</h3><p>世代を超えて自己表現できる場と、新しい目標に挑むきっかけを広げます。</p></article><article><span>03</span><h3>記憶に残る共創</h3><p>光と動きを生かした演出やコラボレーションで、貴社・活動の魅力を印象深く届けます。</p></article></div>
    </section>

    <section className="corporate-spec sponsor-plan"><div><p className="kicker">PARTNERSHIP IDEAS</p><h2>できること。</h2></div><dl><div><dt>ステージ</dt><dd>企業イベント、周年行事、地域催事などへの出演</dd></div><div><dt>オリジナル</dt><dd>商品・テーマ・楽曲に合わせた演目や振付の制作</dd></div><div><dt>発信</dt><dd>SNS、動画、活動レポートでのパートナー紹介</dd></div><div><dt>体験企画</dt><dd>社内・学校・地域向けのヲタ芸体験やワークショップ</dd></div><div><dt>ご提案</dt><dd>目的、ご予算、実施時期を伺い、内容を個別設計</dd></div></dl></section>
    <div className="supporter-strip"><p>SUPPORTED BY</p><div>{supporters.map(name => <span key={name}>{name}</span>)}</div></div>
    <ContactSection /><SiteFooter />
  </main>;
}
