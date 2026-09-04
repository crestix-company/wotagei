<?php
get_header();
$supporter_groups = array(
    array('id' => 'gold', 'en' => 'GOLD SUPPORTERS', 'title' => 'ゴールドサポーター', 'members' => array(
        array('name' => 'サミー畑'),
        array('name' => '居酒屋とんちゃん様'),
        array('name' => 'Lecrat corporation様'),
        array('name' => '大野雅一様'),
        array('name' => '神崎利昭様'),
        array('name' => 'Tomomi様'),
        array('name' => '株式会社PLAY', 'detail' => '代表 黒田和道様'),
        array('name' => '中村松洋様'),
        array('name' => '太海フラワー', 'detail' => '磯釣りセンター様'),
    )),
    array('id' => 'platinum', 'en' => 'PLATINUM SUPPORTERS', 'title' => 'プラチナサポーター', 'members' => array(
        array('name' => 'さくら子庵様'),
        array('name' => '小倉和江様'),
        array('name' => '三好一彩様'),
        array('name' => '株式会社エステック', 'detail' => '代表取締役 大場公二様'),
    )),
    array('id' => 'diamond', 'en' => 'DIAMOND SUPPORTER', 'title' => 'ダイヤモンドサポーター', 'members' => array(
        array('name' => '株式会社コラボカフェ', 'detail' => '代表 櫻井光太郎様'),
    )),
    array('id' => 'special', 'en' => 'SPECIAL PARTNERS', 'title' => '特別協賛', 'members' => array(
        array('name' => '株式会社リバールーツ'),
        array('name' => '有限会社INDE INTE', 'detail' => '大塚和宏様'),
    )),
);
?>
<main id="top">
<section class="inner-hero inner-service sponsor-hero"><div class="inner-hero-bg"><picture><source media="(max-width: 720px)" srcset="<?php echo esc_url(lumiere_asset('sponsor-hero-city-performance-mobile.jpg')); ?>"><img src="<?php echo esc_url(lumiere_asset('sponsor-hero-city-performance.jpg')); ?>" alt="夜景を背に光を掲げるLumière"></picture></div><div class="inner-hero-copy"><p class="breadcrumb"><a href="<?php echo esc_url(home_url('/')); ?>">HOME</a> / SPONSOR</p><p class="kicker">PARTNER WITH US</p><h1>応援を、<br>文化の力へ。</h1><p>企業・個人の皆さまと、若者の挑戦、地域のにぎわい、新しい文化の未来を育てます。</p></div><span class="inner-hero-number">07</span></section>

<section class="sponsor-section sponsor-page"><div class="sponsor-copy"><div class="section-label light"><span>07</span> SPONSORSHIP</div><p class="kicker">LIGHT THE FUTURE WITH US</p><h2>一緒だから、<br>届く光がある。</h2><p>ご予算と目的に合わせて、イベント出演、オリジナル演目、SNS・動画での発信、社内・地域向け体験企画などを組み合わせて個別にご提案します。単なる広告枠ではなく、共感が残る取り組みを一緒につくります。</p><a class="button button-light" href="<?php echo esc_url(home_url('/contact/')); ?>">スポンサーについて相談する <span>↗</span></a></div><div class="sponsor-reasons"><article><span>01</span><h3>地域とつながる</h3><p>祭りや学校、地域イベントへの出演を通して、地域のにぎわいづくりに貢献します。</p></article><article><span>02</span><h3>若者の挑戦を支える</h3><p>世代を超えて自己表現できる場と、新しい目標に挑むきっかけを広げます。</p></article><article><span>03</span><h3>記憶に残る共創</h3><p>光と動きを生かした演出やコラボレーションで、貴社・活動の魅力を印象深く届けます。</p></article></div></section>

<section class="corporate-spec sponsor-plan"><div><p class="kicker">PARTNERSHIP IDEAS</p><h2>できること。</h2></div><dl><div><dt>ステージ</dt><dd>企業イベント、周年行事、地域催事などへの出演</dd></div><div><dt>オリジナル</dt><dd>商品・テーマ・楽曲に合わせた演目や振付の制作</dd></div><div><dt>発信</dt><dd>SNS、動画、活動レポートでのパートナー紹介</dd></div><div><dt>体験企画</dt><dd>社内・学校・地域向けのヲタ芸体験やワークショップ</dd></div><div><dt>ご提案</dt><dd>目的、ご予算、実施時期を伺い、内容を個別設計</dd></div></dl></section>
<section class="supporter-section" id="supporters"><div class="supporter-heading"><div class="section-label light"><span>01</span> OUR SUPPORTERS</div><div><p class="kicker">SUPPORTED BY</p><h2>この光を支える、<br><em>パートナーの皆さま。</em></h2></div><p>日頃よりあたたかなご支援をいただいている皆さまをご紹介します。</p></div><div class="supporter-groups">
<?php foreach ($supporter_groups as $group_index => $group) : ?><article class="supporter-group" data-tier="<?php echo esc_attr($group['id']); ?>"><header><div><span><?php echo esc_html($group['en']); ?></span><h3><?php echo esc_html($group['title']); ?></h3></div><i><?php echo esc_html(str_pad((string) ($group_index + 1), 2, '0', STR_PAD_LEFT)); ?></i></header><ul><?php foreach ($group['members'] as $member) : ?><li><strong><?php echo esc_html($member['name']); ?></strong><?php if (!empty($member['detail'])) : ?><small><?php echo esc_html($member['detail']); ?></small><?php endif; ?></li><?php endforeach; ?></ul></article><?php endforeach; ?>
</div></section>
<?php get_template_part('template-parts/contact-cta'); ?>
</main>
<?php get_footer(); ?>
