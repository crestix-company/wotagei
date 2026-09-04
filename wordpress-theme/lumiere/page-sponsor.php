<?php
get_header();
$supporters = array('アイドルカフェ', '居酒屋とんちゃん', 'さくら子庵株式会社', '株式会社エステック', 'Lecrat corporation', '太海海釣りセンター', '松鶴丸', '風鈴堂', '薪ストーブ専門店ドリームファイヤー', '楽ちん堂美容室');
?>
<main id="top">
<section class="inner-hero inner-service sponsor-hero"><div class="inner-hero-bg"><picture><source media="(max-width: 720px)" srcset="<?php echo esc_url(lumiere_asset('sponsor-hero-city-performance-mobile.jpg')); ?>"><img src="<?php echo esc_url(lumiere_asset('sponsor-hero-city-performance.jpg')); ?>" alt="夜景を背に光を掲げるLumière"></picture></div><div class="inner-hero-copy"><p class="breadcrumb"><a href="<?php echo esc_url(home_url('/')); ?>">HOME</a> / SPONSOR</p><p class="kicker">PARTNER WITH US</p><h1>応援を、<br>文化の力へ。</h1><p>企業・個人の皆さまと、若者の挑戦、地域のにぎわい、新しい文化の未来を育てます。</p></div><span class="inner-hero-number">07</span></section>

<section class="sponsor-section sponsor-page"><div class="sponsor-copy"><div class="section-label light"><span>07</span> SPONSORSHIP</div><p class="kicker">LIGHT THE FUTURE WITH US</p><h2>一緒だから、<br>届く光がある。</h2><p>ご予算と目的に合わせて、イベント出演、オリジナル演目、SNS・動画での発信、社内・地域向け体験企画などを組み合わせて個別にご提案します。単なる広告枠ではなく、共感が残る取り組みを一緒につくります。</p><a class="button button-light" href="<?php echo esc_url(home_url('/contact/')); ?>">スポンサーについて相談する <span>↗</span></a></div><div class="sponsor-reasons"><article><span>01</span><h3>地域とつながる</h3><p>祭りや学校、地域イベントへの出演を通して、地域のにぎわいづくりに貢献します。</p></article><article><span>02</span><h3>若者の挑戦を支える</h3><p>世代を超えて自己表現できる場と、新しい目標に挑むきっかけを広げます。</p></article><article><span>03</span><h3>記憶に残る共創</h3><p>光と動きを生かした演出やコラボレーションで、貴社・活動の魅力を印象深く届けます。</p></article></div></section>

<section class="corporate-spec sponsor-plan"><div><p class="kicker">PARTNERSHIP IDEAS</p><h2>できること。</h2></div><dl><div><dt>ステージ</dt><dd>企業イベント、周年行事、地域催事などへの出演</dd></div><div><dt>オリジナル</dt><dd>商品・テーマ・楽曲に合わせた演目や振付の制作</dd></div><div><dt>発信</dt><dd>SNS、動画、活動レポートでのパートナー紹介</dd></div><div><dt>体験企画</dt><dd>社内・学校・地域向けのヲタ芸体験やワークショップ</dd></div><div><dt>ご提案</dt><dd>目的、ご予算、実施時期を伺い、内容を個別設計</dd></div></dl></section>
<div class="supporter-strip"><p>SUPPORTED BY</p><div><?php foreach ($supporters as $supporter) : ?><span><?php echo esc_html($supporter); ?></span><?php endforeach; ?></div></div>
<?php get_template_part('template-parts/contact-cta'); ?>
</main>
<?php get_footer(); ?>
