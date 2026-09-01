export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="一般社団法人ヲタ芸普及協会 ホーム">
        <span className="brand-logo"><img src="/assets/logo-header.jpg" alt="" /></span><span className="brand-title"><strong>一般社団法人ヲタ芸普及協会</strong><small>WOTA PERFORMANCE ASSOCIATION</small></span>
      </a>
      <nav className="desktop-nav" aria-label="メインメニュー">
        <a href="/organization">ASSOCIATION</a><a href="/members">MEMBERS</a><a href="/news">NEWS</a><a href="/services">SERVICE</a><a href="/sponsor">SPONSOR</a>
      </nav>
      <a className="header-contact" href="/contact">CONTACT <span>↗</span></a>
      <details className="mobile-menu">
        <summary aria-label="メニューを開く">MENU</summary>
        <div><a href="/">ホーム</a><a href="/organization">01 協会について</a><a href="/members">02 メンバー・所属チーム</a><a href="/news">03 出演情報・お知らせ</a><a href="/works">04 活動実績</a><a href="/services">05 出演依頼</a><a href="/school">06 スクール</a><a href="/sponsor">07 スポンサー</a><a href="https://lumiere-woodbell.com/#company" target="_blank" rel="noreferrer">09 オンラインショップ</a><a href="/about">10 Lumière</a><a href="/blog">11 日記</a><a href="/contact">お問い合わせ</a></div>
      </details>
    </header>
  );
}
