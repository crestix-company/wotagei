<?php
get_header();
$fallback_events = array(
    array('date' => '09.12', 'day' => 'SAT', 'title' => '町田八幡神社大祭', 'area' => '千葉県'),
    array('date' => '09.13', 'day' => 'SUN', 'title' => '野田ハロウィンフェスタ', 'area' => '千葉県野田市'),
    array('date' => '09.26', 'day' => 'SAT', 'title' => '君津ふれあい祭り', 'area' => '千葉県君津市'),
    array('date' => '10.17–18', 'day' => 'SAT–SUN', 'title' => 'MAZDA新港店イベント', 'area' => '千葉県千葉市'),
);
$event_posts = get_posts(array(
    'post_type' => 'lumiere_event',
    'posts_per_page' => 12,
    'meta_key' => 'event_date',
    'orderby' => 'meta_value',
    'order' => 'ASC',
    'meta_query' => array(array('key' => 'event_date', 'value' => wp_date('Y-m-d'), 'compare' => '>=', 'type' => 'DATE')),
));
$paged = max(1, (int) get_query_var('paged'));
$news = new WP_Query(array('post_type' => 'post', 'posts_per_page' => 9, 'paged' => $paged, 'ignore_sticky_posts' => false));
?>
<main id="top">
<section class="inner-hero journal-hero news-hero"><div class="inner-hero-bg"><img src="<?php echo esc_url(lumiere_asset('news-hero-kimitsu.jpg')); ?>" alt="君津市房総フェスタでのLumièreのヲタ芸パフォーマンス"></div><div class="inner-hero-copy"><p class="breadcrumb"><a href="<?php echo esc_url(home_url('/')); ?>">HOME</a> / NEWS</p><p class="kicker">LIVE INFO / IMPORTANT NEWS</p><h1>次に会える場所と、<br>大切なお知らせ。</h1><p>出演予定、活動に関するご案内、協会からの重要なお知らせをまとめています。</p></div><span class="inner-hero-number">03</span></section>

<section class="news section news-page"><div class="section-label light"><span>03</span> APPEARANCE SCHEDULE</div><div class="news-heading"><div><p class="kicker">UPCOMING</p><h2>出演情報。</h2></div><p>日程・会場は変更になる場合があります。最新情報は各主催者の案内もあわせてご確認ください。</p></div><div class="schedule">
<?php if ($event_posts) : foreach ($event_posts as $index => $event) : $date_raw = get_post_meta($event->ID, 'event_date', true); $date = $date_raw ? wp_date('m.d', strtotime($date_raw)) : ''; $day = get_post_meta($event->ID, 'event_day', true); $area = get_post_meta($event->ID, 'event_area', true); $link = get_post_meta($event->ID, 'event_link', true) ?: get_permalink($event); ?><a class="schedule-row" href="<?php echo esc_url($link); ?>"><span class="schedule-index"><?php echo esc_html(str_pad((string) ($index + 1), 2, '0', STR_PAD_LEFT)); ?></span><time><b><?php echo esc_html($date); ?></b><small><?php echo esc_html($day); ?></small></time><span class="schedule-title"><?php echo esc_html(get_the_title($event)); ?></span><span class="schedule-area"><?php echo esc_html($area); ?></span><span class="schedule-arrow">↗</span></a><?php endforeach; else : foreach ($fallback_events as $index => $event) : ?><a class="schedule-row" href="<?php echo esc_url(home_url('/contact/')); ?>"><span class="schedule-index"><?php echo esc_html(str_pad((string) ($index + 1), 2, '0', STR_PAD_LEFT)); ?></span><time><b><?php echo esc_html($event['date']); ?></b><small><?php echo esc_html($event['day']); ?></small></time><span class="schedule-title"><?php echo esc_html($event['title']); ?></span><span class="schedule-area"><?php echo esc_html($event['area']); ?></span><span class="schedule-arrow">↗</span></a><?php endforeach; endif; ?>
</div>
<div class="wp-news-block"><div class="wp-news-title"><span>NEWS</span><h3>お知らせ</h3><p>WordPressの投稿編集画面で「ブログのトップに固定」を選ぶと、重要なお知らせを先頭に固定できます。</p></div><div class="wp-news-grid">
<?php if ($news->have_posts()) : while ($news->have_posts()) : $news->the_post(); ?><a class="<?php echo is_sticky() ? 'is-pinned' : ''; ?>" href="<?php the_permalink(); ?>"><time><?php echo is_sticky() ? 'PINNED / ' : ''; echo esc_html(get_the_date('Y.m.d')); ?></time><h4><?php the_title(); ?></h4><p><?php echo esc_html(wp_trim_words(get_the_excerpt(), 26)); ?></p><span>READ ↗</span></a><?php endwhile; wp_reset_postdata(); else : ?><a class="is-pinned" href="<?php echo esc_url(home_url('/blog/')); ?>"><time>PINNED / NEWS</time><h4>重要なお知らせはこちらに固定表示されます</h4><p>管理画面の投稿から更新できます。</p><span>READ ↗</span></a><?php endif; ?>
</div></div><?php if ($news->max_num_pages > 1) echo wp_kses_post(paginate_links(array('total' => $news->max_num_pages, 'current' => $paged, 'type' => 'list'))); ?></section>
<?php get_template_part('template-parts/contact-cta'); ?>
</main>
<?php get_footer(); ?>
