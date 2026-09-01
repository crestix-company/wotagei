import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ContactSection from '../components/ContactSection';
import { members } from '../data';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'メンバー・所属チーム募集',
  description: 'Lumièreのメンバー紹介、Lumièreメンバー募集、一般社団法人ヲタ芸普及協会の所属チーム募集。',
};

export default function MembersPage() {
  return <main id="top"><SiteHeader />
    <section className="inner-hero inner-about"><div className="inner-hero-bg"><img src="/assets/event-03.jpg" alt="Lumière メンバー" /></div><div className="inner-hero-copy"><p className="breadcrumb"><a href="/">HOME</a> / MEMBERS &amp; TEAMS</p><p className="kicker">MEMBERS / TEAM NETWORK</p><h1>ひとりの光から、<br />大きな文化へ。</h1><p>Lumièreのメンバーと、協会とともに活動する仲間をご紹介します。</p></div><span className="inner-hero-number">02</span></section>

    <section className="section members members-page">
      <div className="section-label"><span>02</span> LUMIÈRE MEMBERS</div>
      <div className="member-heading"><div><p className="kicker">MEET THE LIGHT</p><h2>異なる個性が、<br /><em>ひとつの光</em>になる。</h2></div><p>振付、講師、映像編集、パフォーマンス。それぞれの強みを生かし、ひとつのステージをつくります。</p></div>
      <div className="member-grid">{members.map((member,index) => <article className="member-card" key={member.name}><div className="member-image"><img src={member.image} alt={`Lumière ${member.jp}`} loading="lazy" /></div><span>{String(index + 1).padStart(2,'0')}</span><h3>{member.name}<small>{member.jp}</small></h3><p>{member.role}</p></article>)}</div>
    </section>

    <section className="member-recruit" id="recruit">
      <article><p className="kicker">JOIN LUMIÈRE</p><h2>メンバー<br />募集中!!!</h2><p>技術だけでなく、文化を広げたい気持ちを大切にしています。出演、作品づくり、地域活動に一緒に挑戦したい方をお待ちしています。</p><a href="mailto:otagei.fukyuu@gmail.com?subject=Lumièreメンバー応募について">メンバー応募を相談する <span>↗</span></a></article>
      <article><p className="kicker">JOIN THE ASSOCIATION</p><h2>所属チーム<br />募集中</h2><p>一般社団法人ヲタ芸普及協会では、地域や活動歴を問わず、ともにヲタ芸の未来を育てるチームを募集しています。</p><a href="mailto:otagei.fukyuu@gmail.com?subject=協会所属チームについて">所属チームについて相談する <span>↗</span></a></article>
    </section>
    <ContactSection /><SiteFooter />
  </main>;
}
