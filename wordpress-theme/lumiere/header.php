<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#05070a">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header class="site-header">
    <a class="brand" href="<?php echo esc_url(home_url('/')); ?>" aria-label="一般社団法人ヲタ芸普及協会 ホーム">
        <span class="brand-logo"><img src="<?php echo esc_url(lumiere_asset('logo-header.jpg')); ?>" alt=""></span><span class="brand-title"><strong>一般社団法人ヲタ芸普及協会</strong><small>WOTA PERFORMANCE ASSOCIATION</small></span>
    </a>
    <nav class="desktop-nav" aria-label="メインメニュー">
        <a href="<?php echo esc_url(home_url('/organization/')); ?>">ASSOCIATION</a>
        <a href="<?php echo esc_url(home_url('/members/')); ?>">MEMBERS</a>
        <a href="<?php echo esc_url(home_url('/news/')); ?>">NEWS</a>
        <a href="<?php echo esc_url(home_url('/services/')); ?>">SERVICE</a>
        <a href="<?php echo esc_url(home_url('/sponsor/')); ?>">SPONSOR</a>
    </nav>
    <a class="header-contact" href="<?php echo esc_url(home_url('/contact/')); ?>">CONTACT <span>↗</span></a>
    <details class="mobile-menu">
        <summary aria-label="メニューを開く">MENU</summary>
        <div>
            <a href="<?php echo esc_url(home_url('/')); ?>">ホーム</a>
            <a href="<?php echo esc_url(home_url('/organization/')); ?>">01 協会について</a>
            <a href="<?php echo esc_url(home_url('/members/')); ?>">02 メンバー・所属チーム</a>
            <a href="<?php echo esc_url(home_url('/news/')); ?>">03 出演情報・お知らせ</a>
            <a href="<?php echo esc_url(home_url('/works/')); ?>">04 活動実績</a>
            <a href="<?php echo esc_url(home_url('/services/')); ?>">05 出演依頼</a>
            <a href="<?php echo esc_url(home_url('/school/')); ?>">06 スクール</a>
            <a href="<?php echo esc_url(home_url('/sponsor/')); ?>">07 スポンサー</a>
            <a href="https://lumiere-woodbell.com/#company" target="_blank" rel="noreferrer">09 オンラインショップ</a>
            <a href="<?php echo esc_url(home_url('/about/')); ?>">10 Lumière</a>
            <a href="<?php echo esc_url(home_url('/blog/')); ?>">11 日記</a>
            <a href="<?php echo esc_url(home_url('/contact/')); ?>">お問い合わせ</a>
        </div>
    </details>
</header>
