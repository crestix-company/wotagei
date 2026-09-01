export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Lumière ホーム">
        <span className="brand-mark">L</span><span>Lumière</span>
      </a>
      <nav className="desktop-nav" aria-label="メインメニュー">
        <a href="/about">ABOUT</a><a href="/services">SERVICE</a><a href="/works">WORKS</a><a href="/junior">JUNIOR</a><a href="/shop">SHOP</a>
      </nav>
      <a className="header-contact" href="/contact">CONTACT <span>↗</span></a>
      <details className="mobile-menu">
        <summary aria-label="メニューを開く">MENU</summary>
        <div><a href="/">ホーム</a><a href="/about">私たちについて</a><a href="/junior">ジュニアルミエール</a><a href="/services">出演・法人向け</a><a href="/school">スクール</a><a href="/works">活動実績</a><a href="/movies">動画</a><a href="/organization">団体・協会</a><a href="/shop">グッズ</a><a href="/contact">お問い合わせ</a></div>
      </details>
    </header>
  );
}
