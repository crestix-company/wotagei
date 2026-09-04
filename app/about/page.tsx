import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ContactSection from '../components/ContactSection';
import { members } from '../data';

export const dynamic = 'force-static';
export const metadata: Metadata = { title: '私たちについて', description: 'Lumièreの理念、メンバー、一般社団法人ヲタ芸普及協会代表のメッセージ。' };

export default function AboutPage() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="inner-hero inner-about about-hero"><div className="inner-hero-bg"><picture><source media="(max-width: 720px)" srcSet="/assets/about-hero-backstage-mobile.jpg" /><img src="/assets/about-hero-backstage.jpg" alt="映像を囲むLumièreメンバー" /></picture></div><div className="inner-hero-copy"><p className="breadcrumb"><a href="/">HOME</a> / LUMIÈRE</p><p className="kicker">LUMIÈRE OFFICIAL</p><h1>光の向こうに、<br />人がいる。</h1><p>協会公式パフォーマンスチームLumièreのプロフィール、想い、活動をご紹介します。</p></div><span className="inner-hero-number">10</span></section>

      <section className="section about about-page">
        <div className="section-label"><span>01</span> OUR MISSION</div>
        <div className="about-copy"><p className="kicker">BEYOND THE GLOW</p><h2>ヲタ芸を、<br /><em>誇れる文化</em>へ。</h2><div className="about-body"><p>光る棒を振る。ただそれだけに見える動きの奥に、緻密な振付、鍛錬、そして仲間との呼吸があります。私たちLumièreは、ヲタ芸を誰もが心を動かされるステージ・エンターテインメントへ進化させるチームです。</p><p>地域イベント、企業公演、映画振付、スクールを通して、年齢や経験を越えて人がつながる場所をつくります。千葉から全国へ、そして世界へ。</p><a className="line-link" href="https://lin.ee/F5EQxq5" target="_blank" rel="noreferrer">LINEで相談する <span>↗</span></a></div></div>
        <div className="about-visuals"><figure className="photo photo-main"><img src="/assets/event-03.jpg" alt="ホノルルフェスティバルに出演したLumière" /></figure><figure className="photo photo-sub"><img src="/assets/member-kejan.jpg" alt="サイリウムを手にするLumièreメンバー" /></figure><p className="vertical-copy">TURN LIGHT INTO CULTURE</p></div>
      </section>

      <section className="section members" id="member">
        <div className="section-label"><span>02</span> THE TEAM</div>
        <div className="member-heading"><div><p className="kicker">MEET THE LIGHT</p><h2>ひとりの個性が、<br /><em>ひとつの光</em>になる。</h2></div><p>振付、講師、映像編集。異なる強みを持つメンバーが、ひとつのステージをつくります。</p></div>
        <div className="member-grid">{members.map((member,index) => <article className="member-card" key={member.name}><div className="member-image"><img src={member.image} alt={`Lumière ${member.jp}`} loading="lazy" /></div><span>{String(index + 1).padStart(2,'0')}</span><h3>{member.name}<small>{member.jp}</small></h3><p>{member.role}</p></article>)}</div>
      </section>

      <section className="values-section">
        <article><span>01</span><p>VALUE</p><h3>技術に、誠実である。</h3><small>一本の光、ひとつの動きまで妥協しない。</small></article>
        <article><span>02</span><p>VALUE</p><h3>誰もが、輝ける。</h3><small>年齢や経験を越えて挑戦できる場所をつくる。</small></article>
        <article><span>03</span><p>VALUE</p><h3>地域から、世界へ。</h3><small>足元のつながりを大切に、大きな舞台へ挑む。</small></article>
      </section>

      <section className="section message-section">
        <div className="section-label"><span>03</span> MESSAGE</div><div className="message-photo"><img src="/assets/director.png" alt="一般社団法人ヲタ芸普及協会 代表 鈴木桃子" loading="lazy" /></div>
        <div className="message-copy"><p className="kicker">FROM THE DIRECTOR</p><h2>誰もが輝ける場所を、<br />光と音でつくりたい。</h2><p>私たちはヲタ芸という独自のパフォーマンスを通じて、光と音が融合する新しいエンターテインメントを発信しています。地域イベントから全国、そして世界へ。出演やメディア活動、スクール事業を通して、もっと多くの方にこの文化の魅力を知っていただけるよう挑戦を続けます。</p><div className="signature"><span>代表 / マネージャー</span><strong>鈴木 桃子</strong></div></div>
      </section>
      <ContactSection /><SiteFooter />
    </main>
  );
}
