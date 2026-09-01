import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ContactSection from '../components/ContactSection';

export const metadata: Metadata = { title: 'ヲタ芸スクール', description: '千葉県いすみ市・出張・オンラインで学べるWLDヲタ芸スクール。初回無料。' };

export default function SchoolPage() {
  return <main id="top"><SiteHeader />
    <section className="inner-hero school-hero"><div className="inner-hero-bg"><img src="/assets/member-subaru.jpg" alt="Lumièreのスクール講師" /></div><div className="inner-hero-copy"><p className="breadcrumb"><a href="/">HOME</a> / SCHOOL</p><p className="kicker">WLD SCHOOL</p><h1>光を持つと、<br />体が動き出す。</h1><p>未経験からステージ実践まで。楽しみながら、確かな基礎を身につける。</p></div><span className="inner-hero-number">05</span></section>
    <section className="section school-benefits"><div className="section-label"><span>01</span> FOR EVERYONE</div><div className="services-intro"><p className="kicker">LEARN YOUR WAY</p><h2>はじめてでも、<br /><em>ちゃんと楽しい。</em></h2><p>サイリウムの持ち方、体の使い方、リズムの取り方から丁寧に。親子・初心者・遠方の方も歓迎します。</p></div><div className="benefit-grid"><article><span>01</span><h3>いすみ市スタジオ</h3><p>鏡のある環境で、講師から直接学ぶ対面レッスン。</p></article><article><span>02</span><h3>出張レッスン</h3><p>3名からご相談可能。学校、地域、チームの練習にも。</p></article><article><span>03</span><h3>オンライン</h3><p>全国どこからでも、自宅で基礎と振付を学べます。</p></article></div></section>
    <section className="price-section"><div className="price-heading"><div className="section-label light"><span>02</span> SCHOOL PRICE</div><p className="kicker">FIRST LESSON FREE</p><h2>はじめの一歩は、<br />無料から。</h2><p>対面・出張・オンラインから、生活に合う方法をお選びください。</p></div><div className="price-list"><article><span>01</span><h3>いすみ市スタジオ</h3><p><b>1時間</b><strong>¥1,000</strong></p><p><b>2時間</b><strong>¥1,500</strong></p><small>税込 / 初回無料</small></article><article><span>02</span><h3>出張スクール</h3><p><b>1時間</b><strong>¥1,600</strong></p><p><b>2時間</b><strong>¥3,000</strong></p><small>3名から / 別途交通費</small></article><article><span>03</span><h3>マンツーマン出張</h3><p><b>1時間</b><strong>¥5,000</strong></p><p><b>2時間</b><strong>¥9,000</strong></p><small>別途交通費</small></article></div></section>
    <section className="school-recommend"><p className="kicker">RECOMMENDED FOR</p><h2>こんな方へ。</h2><div><article>楽しい仲間をつくりたい</article><article>全身を使って健康的に動きたい</article><article>親子で新しい体験をしたい</article><article>チームで打つヲタ芸を学びたい</article></div></section>
    <ContactSection /><SiteFooter />
  </main>;
}
