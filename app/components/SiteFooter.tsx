import { youtubeChannel } from '../data';

export default function SiteFooter() {
  return (
    <>
      <footer>
        <div className="footer-brand"><span className="brand-mark">L</span><div><strong>Lumière</strong><small>一般社団法人ヲタ芸普及協会 所属チーム</small></div></div>
        <div className="footer-page-links"><a href="/about">ABOUT</a><a href="/junior">JUNIOR</a><a href="/services">SERVICE</a><a href="/school">SCHOOL</a><a href="/works">WORKS</a><a href="/movies">MOVIES</a><a href="/organization">ORGANIZATION</a><a href="/shop">SHOP</a><a href="/contact">CONTACT</a></div>
        <div className="footer-links">
          <a href="https://www.instagram.com/lumierewoodbell" target="_blank" rel="noreferrer">INSTAGRAM ↗</a>
          <a href={youtubeChannel} target="_blank" rel="noreferrer">YOUTUBE ↗</a>
          <a href="https://x.com/Lumierewoodbell" target="_blank" rel="noreferrer">X ↗</a>
          <a href="https://lin.ee/F5EQxq5" target="_blank" rel="noreferrer">LINE ↗</a>
        </div>
        <div className="footer-bottom"><span>© 2026 Lumière / Wota Lighting Dance</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
      <div className="mobile-cta"><a href="https://lin.ee/F5EQxq5" target="_blank" rel="noreferrer">LINEで相談</a><a href="tel:08067027899">電話する</a></div>
    </>
  );
}
