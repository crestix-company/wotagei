import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ContactSection from '../components/ContactSection';

export const dynamic = 'force-static';
export const metadata: Metadata = { title: 'オンラインストア', description: 'LumièreオリジナルTシャツ、パンツ、グッズのオンラインストア。' };

export default function ShopPage() {
  return <main id="top"><SiteHeader />
    <section className="inner-hero shop-hero"><div className="inner-hero-bg"><img src="/assets/event-01.jpg" alt="LumièreオリジナルTシャツ" /></div><div className="inner-hero-copy"><p className="breadcrumb"><a href="/">HOME</a> / SHOP</p><p className="kicker">LUMIÈRE GOODS</p><h1>光の余韻を、<br />日常へ。</h1><p>チームの世界観をまとえる、オリジナルアイテム。</p></div><span className="inner-hero-number">08</span></section>
    <section className="shop-coming"><p className="kicker">ONLINE STORE</p><span>COMING SOON</span><h2>ただいま、<br />開店準備中です。</h2><p>オリジナルTシャツ、パンツ、その他グッズを順次公開予定です。最新情報はSNSでお知らせします。</p><div className="shop-items"><article><b>T-SHIRT</b><small>ORIGINAL WEAR</small></article><article><b>PANTS</b><small>PERFORMANCE WEAR</small></article><article><b>GOODS</b><small>LIGHT &amp; ACCESSORIES</small></article></div><a className="button button-primary" href="https://www.instagram.com/lumierewoodbell" target="_blank" rel="noreferrer">最新情報を見る <i>↗</i></a></section>
    <ContactSection /><SiteFooter />
  </main>;
}
