<?php
get_header();
$paged = max(1, (int) get_query_var('paged'));
$journal = new WP_Query(array('post_type' => 'post', 'posts_per_page' => 9, 'paged' => $paged, 'ignore_sticky_posts' => true));
?>
<main id="top">
<section class="inner-hero journal-hero"><div class="inner-hero-bg"><img src="<?php echo esc_url(lumiere_asset('event-05.jpg')); ?>" alt="Lumièreの活動記録"></div><div class="inner-hero-copy"><p class="breadcrumb"><a href="<?php echo esc_url(home_url('/')); ?>">HOME</a> / DIARY</p><p class="kicker">DIARY / ACTIVITY RECORD</p><h1>光の裏側にある、<br>人と物語。</h1><p>活動レポート、練習風景、イベントの記録を発信します。</p></div><span class="inner-hero-number">11</span></section>
<section class="section movie-gallery"><div class="section-label"><span>01</span> LATEST STORIES</div><div class="gallery-heading"><div><p class="kicker">TEAM JOURNAL</p><h2>挑戦の過程も、<br><em>文化の一部。</em></h2></div></div><div class="movie-card-grid blog-card-grid">
<?php if ($journal->have_posts()) : while ($journal->have_posts()) : $journal->the_post(); ?><a href="<?php the_permalink(); ?>"><div><?php if (has_post_thumbnail()) { the_post_thumbnail('large'); } else { ?><img src="<?php echo esc_url(lumiere_asset('event-04.jpg')); ?>" alt=""><?php } ?><span class="movie-play">↗</span></div><p><?php echo esc_html(get_the_date('Y.m.d')); ?> / JOURNAL</p><h3><?php the_title(); ?></h3><small><?php echo esc_html(wp_trim_words(get_the_excerpt(), 38)); ?></small><i>READ MORE ↗</i></a><?php endwhile; wp_reset_postdata(); else : ?>
<a href="<?php echo esc_url(home_url('/works/')); ?>"><div><img src="<?php echo esc_url(lumiere_asset('event-01.jpg')); ?>" alt="ホノルルフェスティバル"><span class="movie-play">↗</span></div><p>2026.03 / OVERSEAS</p><h3>ホノルルフェスティバル2026に出演しました</h3><small>千葉から世界へ。現地のステージで届けた光と、チームが得た新しい景色。</small><i>READ MORE ↗</i></a>
<?php endif; ?>
</div><?php if ($journal->max_num_pages > 1) echo wp_kses_post(paginate_links(array('total' => $journal->max_num_pages, 'current' => $paged, 'type' => 'list'))); ?></section>
<?php get_template_part('template-parts/contact-cta'); ?>
</main>
<?php get_footer(); ?>
