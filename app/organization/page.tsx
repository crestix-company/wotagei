import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ContactSection from '../components/ContactSection';

export const metadata: Metadata = { title: '団体・協会について', description: 'WOOD BELL、一般社団法人ヲタ芸普及協会、Lumière、ジュニアルミエール、スクールの関係。' };

export default function OrganizationPage() {
  return <main id="top"><SiteHeader />
    <section className="inner-hero organization-hero"><div className="inner-hero-bg"><img src="/assets/event-05.jpg" alt="Lumièreのチーム活動" /></div><div className="inner-hero-copy"><p className="breadcrumb"><a href="/">HOME</a> / ORGANIZATION</p><p className="kicker">OUR ECOSYSTEM</p><h1>一つのチームから、<br />文化の輪へ。</h1><p>活動、育成、企業連携。それぞれの窓口と役割を分かりやすく。</p></div><span className="inner-hero-number">01</span></section>
    <section className="section organization-section"><div className="section-label"><span>01</span> STRUCTURE</div><div className="organization-heading"><p className="kicker">WHO DOES WHAT</p><h2>つくる。育てる。<br /><em>社会とつなぐ。</em></h2><p>一般・ファン向けの活動と、法人・団体向けの窓口を整理し、必要な情報へ迷わず進める構成です。</p></div><div className="org-map"><div className="org-root"><span>ASSOCIATION</span><h3>一般社団法人<br />ヲタ芸普及協会</h3><p>文化普及・法人団体窓口・所属チーム連携</p></div><div className="org-branches" id="teams"><a href="/about"><span>PERFORMANCE</span><h3>Lumière</h3><p>出演・振付・メディア</p></a><a href="/junior"><span>NEXT GENERATION</span><h3>ジュニアルミエール</h3><p>次世代チーム</p></a><a href="/school"><span>EDUCATION</span><h3>WLD SCHOOL</h3><p>対面・出張・オンライン</p></a><div><span>RELATED PROJECT</span><h3>WOOD BELL</h3><p>関連活動・制作サポート</p></div></div></div></section>
    <section className="org-contact-path"><div><span>FOR BUSINESS</span><h2>企業・自治体・<br />団体の方へ</h2><p>出演、振付、メディア、スポンサー、協会連携のご相談。</p><a href="/contact">法人窓口へ ↗</a></div><div><span>FOR EVERYONE</span><h2>一般・ファン・<br />参加希望の方へ</h2><p>スクール、ジュニア、チーム所属、活動についてのご相談。</p><a href="/contact">一般窓口へ ↗</a></div></section>
    <ContactSection /><SiteFooter />
  </main>;
}
