import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ContactSection from '../components/ContactSection';

export const dynamic = 'force-static';
export const metadata: Metadata = { title: 'ジュニアルミエール', description: '次世代の表現と挑戦を育むジュニアルミエールのご紹介。' };

export default function JuniorPage() {
  return <main id="top"><SiteHeader />
    <section className="inner-hero junior-hero"><div className="inner-hero-bg"><img src="/assets/event-04.jpg" alt="光のパフォーマンスに挑戦するチーム" /></div><div className="inner-hero-copy"><p className="breadcrumb"><a href="/">HOME</a> / JUNIOR</p><p className="kicker">NEXT GENERATION</p><h1>好きから始まる、<br />未来のステージ。</h1><p>楽しむ、学ぶ、仲間とつくる。ジュニアルミエールは、次世代の挑戦を育てます。</p></div><span className="inner-hero-number">04</span></section>
    <section className="section junior-intro"><div className="section-label"><span>01</span> JUNIOR LUMIÈRE</div><div className="junior-copy"><p className="kicker">GROW WITH THE LIGHT</p><h2>上手になる前に、<br /><em>夢中になれること。</em></h2><p>ジュニアルミエールは、光と音に合わせて体を動かす楽しさから始める次世代チームです。基礎を大切にしながら、仲間とひとつの作品をつくる経験を育てます。対象年齢・練習日時・参加方法は、お子さまに合う形をご案内します。</p></div><div className="junior-points"><article><span>01</span><h3>楽しむ</h3><p>音楽と光の中で、自分らしく表現する喜びを知る。</p></article><article><span>02</span><h3>つながる</h3><p>仲間と呼吸を合わせ、互いを認めるチーム体験。</p></article><article><span>03</span><h3>挑戦する</h3><p>練習の先にあるステージを目標に、一歩ずつ成長する。</p></article></div></section>
    <section className="junior-flow"><div><p className="kicker">HOW TO JOIN</p><h2>見学から、<br />ゆっくり始めよう。</h2></div><ol><li><span>01</span><b>お問い合わせ</b><p>年齢や経験、希望をお聞かせください。</p></li><li><span>02</span><b>見学・体験</b><p>雰囲気や練習内容を確かめます。</p></li><li><span>03</span><b>参加相談</b><p>無理のない活動方法を一緒に決めます。</p></li></ol></section>
    <ContactSection /><SiteFooter />
  </main>;
}
