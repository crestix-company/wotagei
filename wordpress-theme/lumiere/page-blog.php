<?php
get_header();
$paged = max(1, (int) get_query_var('paged'));
$journal = new WP_Query(array('post_type' => 'post', 'posts_per_page' => 9, 'paged' => $paged, 'ignore_sticky_posts' => true));
$daily_photos = array(
    array('image' => 'diary-01.jpg', 'alt' => '夜のイベントを終えたLumièreメンバーと来場者', 'label' => 'AFTER THE PERFORMANCE', 'layout' => 'portrait'),
    array('image' => 'diary-02.jpg', 'alt' => '撮影現場で記念写真に収まるLumièreと来場者', 'label' => 'BEHIND THE SCENES', 'layout' => 'portrait'),
    array('image' => 'diary-03.jpg', 'alt' => 'イベント会場で交流するLumièreメンバー', 'label' => 'LOCAL CONNECTION', 'layout' => 'portrait'),
    array('image' => 'diary-04.jpg', 'alt' => '海辺の会場でポーズをとるLumièreメンバー', 'label' => 'TEAM TIME', 'layout' => 'feature'),
    array('image' => 'diary-05.jpg', 'alt' => '交流会で記念写真に収まるLumièreメンバーと関係者', 'label' => 'SPECIAL MOMENT', 'layout' => 'landscape'),
    array('image' => 'diary-06.jpg', 'alt' => '海外ゲストと交流するLumièreメンバー', 'label' => 'NEW ENCOUNTER', 'layout' => 'landscape'),
    array('image' => 'diary-07.jpg', 'alt' => '地域のキャラクターとポーズをとるLumièreメンバー', 'label' => 'FESTIVAL NIGHT', 'layout' => 'square'),
    array('image' => 'diary-08.jpg', 'alt' => '活動を支える仲間と笑顔で過ごすLumièreメンバー', 'label' => 'OFF THE STAGE', 'layout' => 'square'),
    array('image' => 'diary-09.jpg', 'alt' => 'テレビで紹介されたLumièreのヲタ芸パフォーマンス', 'label' => 'ON AIR', 'layout' => 'square'),
    array('image' => 'diary-10.jpg', 'alt' => 'イベントで披露されたLumièreのヲタ芸', 'label' => 'WOTAGEI CULTURE', 'layout' => 'panorama'),
    array('image' => 'diary-11.jpg', 'alt' => '地域イベントで来場者と記念写真に収まるLumièreメンバー', 'label' => 'LOCAL DAYS', 'layout' => 'portrait'),
    array('image' => 'diary-12.jpg', 'alt' => '講習会で参加者と交流するLumièreメンバー', 'label' => 'WORKSHOP', 'layout' => 'end'),
    array('image' => 'diary-13.jpg', 'alt' => '講習後に参加者と笑顔で記念撮影するLumièreメンバー', 'label' => 'NEW CONNECTION', 'layout' => 'end'),
);
?>
<main id="top">
<section class="inner-hero journal-hero daily-hero"><div class="inner-hero-bg"><img src="<?php echo esc_url(lumiere_asset('diary-08.jpg')); ?>" alt="笑顔で過ごすLumièreメンバーと仲間たち"></div><div class="inner-hero-copy"><p class="breadcrumb"><a href="<?php echo esc_url(home_url('/')); ?>">HOME</a> / DIARY</p><p class="kicker">DIARY / LUMIÈRE EVERYDAY</p><h1>光のそばにある、<br>いつもの笑顔。</h1><p>ステージの外で生まれる出会い、会話、何気ない瞬間を記録します。</p></div><span class="inner-hero-number">11</span></section>
<section class="daily-section" id="daily"><div class="daily-heading"><div class="section-label"><span>01</span> LUMIÈRE EVERYDAY</div><div><p class="kicker">OFF THE STAGE</p><h2>ステージの外にも、<br><em>光は続いている。</em></h2></div><p>練習の合間、イベントでの出会い、活動を終えたあとの笑顔。Lumièreらしさが見える日々の記録です。</p></div><div class="daily-grid">
<?php foreach ($daily_photos as $index => $photo) : ?><figure class="daily-photo daily-photo-<?php echo esc_attr($photo['layout']); ?>"><img src="<?php echo esc_url(lumiere_asset($photo['image'])); ?>" alt="<?php echo esc_attr($photo['alt']); ?>"<?php echo $index > 2 ? ' loading="lazy"' : ''; ?>><figcaption><span><?php echo esc_html(str_pad((string) ($index + 1), 2, '0', STR_PAD_LEFT)); ?></span><small><?php echo esc_html($photo['label']); ?></small></figcaption></figure><?php endforeach; ?>
</div></section>
<section class="section movie-gallery"><div class="section-label"><span>02</span> LATEST STORIES</div><div class="gallery-heading"><div><p class="kicker">TEAM JOURNAL</p><h2>挑戦の過程も、<br><em>文化の一部。</em></h2></div></div><div class="movie-card-grid blog-card-grid">
<?php if ($journal->have_posts()) : while ($journal->have_posts()) : $journal->the_post(); $is_performer_cup = get_the_title() === '第3回パフォーマーカップ 優勝'; $entry_url = $is_performer_cup ? 'https://youtu.be/J49x2aqFN5s?si=IJysGHDyzkAkul7A' : get_permalink(); ?><a href="<?php echo esc_url($entry_url); ?>"<?php echo $is_performer_cup ? ' target="_blank" rel="noreferrer"' : ''; ?>><div><?php if (has_post_thumbnail()) { the_post_thumbnail('large'); } else { ?><img src="<?php echo esc_url(lumiere_asset('event-04.jpg')); ?>" alt=""><?php } ?><span class="movie-play">↗</span></div><p><?php echo esc_html(get_the_date('Y.m.d')); ?> / JOURNAL</p><h3><?php the_title(); ?></h3><small><?php echo esc_html(wp_trim_words(get_the_excerpt(), 38)); ?></small><i><?php echo $is_performer_cup ? 'WATCH VIDEO' : 'READ MORE'; ?> ↗</i></a><?php endwhile; wp_reset_postdata(); else : ?>
<a href="<?php echo esc_url(home_url('/works/')); ?>"><div><img src="<?php echo esc_url(lumiere_asset('event-01.jpg')); ?>" alt="ホノルルフェスティバル"><span class="movie-play">↗</span></div><p>2026.03 / OVERSEAS</p><h3>ホノルルフェスティバル2026に出演しました</h3><small>千葉から世界へ。現地のステージで届けた光と、チームが得た新しい景色。</small><i>READ MORE ↗</i></a>
<a href="https://youtu.be/J49x2aqFN5s?si=IJysGHDyzkAkul7A" target="_blank" rel="noreferrer"><div><img src="<?php echo esc_url(lumiere_asset('performance-blue-stage.jpg')); ?>" alt="第3回パフォーマーカップ"><span class="movie-play">↗</span></div><p>2026 / COMPETITION</p><h3>第3回パフォーマーカップ 優勝</h3><small>積み重ねてきた技術とチームワークが、ひとつの結果につながりました。</small><i>WATCH VIDEO ↗</i></a>
<?php endif; ?>
</div><?php if ($journal->max_num_pages > 1) echo wp_kses_post(paginate_links(array('total' => $journal->max_num_pages, 'current' => $paged, 'type' => 'list'))); ?></section>
<?php get_template_part('template-parts/contact-cta'); ?>
</main>
<?php get_footer(); ?>
