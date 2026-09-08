import { bitfanUrl } from '../data';

export default function SiteFooter() {
  return (
    <>
      <footer>
      <div className="footer-brand"><span className="brand-logo"><img src="/assets/logo-header.jpg" alt="WLD" /></span><div><strong>一般社団法人ヲタ芸普及協会</strong><small>OFFICIAL PERFORMANCE TEAM / LUMIÈRE</small></div></div>
        <div className="footer-page-links"><a href="/organization">01 ASSOCIATION</a><a href="/members">02 MEMBERS</a><a href="/news">03 NEWS</a><a href="/works">04 WORKS</a><a href="/services">05 SERVICE</a><a href="/school">06 SCHOOL</a><a href="/sponsor">07 SPONSOR</a><a href="/contact">08 CONTACT</a><a href="https://lumiere-woodbell.com/#company" target="_blank" rel="noreferrer">09 SHOP</a><a href="/about">10 LUMIÈRE</a><a href="/blog">11 DIARY</a></div>
        <div className="footer-links">
          <a href="https://www.instagram.com/lumiere20241103" target="_blank" rel="noreferrer">INSTAGRAM ↗</a>
          <a href="https://www.youtube.com/@LumiereWotagei" target="_blank" rel="noreferrer">YOUTUBE ↗</a>
          <a href="https://x.com/Lumierewoodbell" target="_blank" rel="noreferrer">X ↗</a>
          <a href="https://lin.ee/F5EQxq5" target="_blank" rel="noreferrer">LINE ↗</a>
          {bitfanUrl ? (
            <a className="footer-bitfan" href={bitfanUrl} target="_blank" rel="noopener noreferrer" aria-label="LumièreのBitfanを開く（新しいタブ）">
              BITFAN ↗
            </a>
          ) : (
            <button className="footer-bitfan" type="button" disabled>
              BITFAN <span className="footer-bitfan-status">準備中</span>
            </button>
          )}
        </div>
        <div className="footer-bottom"><span>© 2026 一般社団法人ヲタ芸普及協会</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
      <div className="mobile-cta"><a href="https://lin.ee/F5EQxq5" target="_blank" rel="noreferrer">LINEで相談</a><a href="tel:08067027899">電話する</a></div>
    </>
  );
}
