<?php
get_header();

$fallback_events = array(
    array('date' => '09.12', 'day' => 'SAT', 'title' => '町田八幡神社大祭', 'area' => '千葉県'),
    array('date' => '09.13', 'day' => 'SUN', 'title' => '野田ハロウィンフェスタ', 'area' => '千葉県野田市'),
    array('date' => '09.26', 'day' => 'SAT', 'title' => '君津ふれあい祭り', 'area' => '千葉県君津市'),
    array('date' => '09.26', 'day' => 'SAT', 'title' => '東の原公園祭り', 'area' => '千葉県'),
    array('date' => '10.17–18', 'day' => 'SAT–SUN', 'title' => 'MAZDA新港店イベント', 'area' => '千葉県千葉市'),
    array('date' => '11.03', 'day' => 'TUE', 'title' => '千葉日報カルチャー祭', 'area' => '千葉県'),
);

$event_posts = get_posts(array(
    'post_type' => 'lumiere_event',
    'posts_per_page' => 8,
    'meta_key' => 'event_date',
    'orderby' => 'meta_value',
    'order' => 'ASC',
    'meta_query' => array(array('key' => 'event_date', 'value' => wp_date('Y-m-d'), 'compare' => '>=', 'type' => 'DATE')),
));

$association_menu = array(
    array('01', 'ABOUT THE ASSOCIATION', 'ヲタ芸普及協会について', '協会の理念、活動内容、代表挨拶、各活動の役割をご紹介します。', '/organization/', 'logo.jpg'),
    array('02', 'MEMBERS / TEAMS', 'メンバー・所属チーム', 'Lumièreメンバー募集中!!! 協会に所属して活動するヲタ芸チームも募集しています。', '/members/', 'event-03.jpg'),
    array('03', 'NEWS / LIVE INFO', '出演情報・お知らせ', '直近の出演予定と大切なお知らせを、見逃さないよう分かりやすく掲載します。', '/news/', 'event-05.jpg'),
    array('04', 'ACHIEVEMENTS', 'これまでの実績', '海外公演、イベント、メディア、地域活動の歩み。', '/works/', 'event-01.jpg'),
    array('05', 'PERFORMANCE REQUEST', '出演依頼・お仕事のご相談', '企業イベント、地域のお祭り、学校行事、映像作品まで。', '/services/', 'event-06.jpg'),
    array('06', 'SCHOOL / INSTRUCTOR', 'スクール・講師派遣', 'いすみ市でヲタ芸に通いたい方、学校・団体への講師派遣、オンライン受講はこちら。', '/school/', 'pro-dancer.jpg'),
    array('07', 'SPONSORSHIP', 'スポンサー募集', 'ご支援内容に合わせた出演・企画・PRをご提案。文化と若者の挑戦をともに育てませんか。', '/sponsor/', 'event-02.jpg'),
    array('09', 'ONLINE SHOP', 'オンラインショップ', 'オリジナルウェアやグッズをご覧いただけます。', 'https://lumiere-woodbell.com/#company', 'logo-wordmark.jpg'),
    array('10', 'LUMIÈRE OFFICIAL', 'Lumière 公式ページ', 'プロフィール、メンバー、チームの想いをご紹介します。', '/about/', 'member-kejan.jpg'),
    array('11', 'DIARY', '日記', '活動レポート、練習風景、イベントの裏側を記録します。', '/blog/', 'event-04.jpg'),
);
?>
<main id="top">
    <section class="hero">
        <video class="hero-video" autoplay muted loop playsinline poster="<?php echo esc_url(lumiere_asset('event-01.jpg')); ?>"><source src="<?php echo esc_url(lumiere_asset('hero-loop.mp4')); ?>" type="video/mp4"></video>
        <div class="hero-scrim"></div><div class="hero-grid"></div><div class="hero-light hero-light-one"></div><div class="hero-light hero-light-two"></div>
        <div class="hero-copy"><p class="eyebrow">一般社団法人 ヲタ芸普及協会 / CHIBA, JAPAN</p><h1><span>ヲタ芸を、</span><strong>次の文化へ。</strong></h1><p class="hero-lead">ヲタ芸を、日本発の誇れるパフォーマンス文化へ。<br class="desktop-break">育成・公演・地域連携を通して、誰もが光を放てる未来をつくります。</p><div class="hero-actions"><a class="button button-primary" href="<?php echo esc_url(home_url('/contact/')); ?>">協会へ相談する <span>↗</span></a><a class="button button-text" href="<?php echo esc_url(home_url('/organization/')); ?>">協会について <span>↗</span></a></div></div>
        <p class="hero-side-note">OFFICIAL PERFORMANCE TEAM / LUMIÈRE</p>
        <div class="hero-proof"><p><b>01</b><span>ヲタ芸文化の<br>普及・育成</span></p><p><b>02</b><span>地域・企業・学校との<br>連携</span></p><p><b>03</b><span>国内外への<br>文化発信</span></p></div>
        <a class="scroll-cue" href="#intro" aria-label="次のセクションへ">SCROLL <span>↓</span></a>
    </section>

    <div class="ticker" aria-label="一般社団法人ヲタ芸普及協会 活動領域"><div><span>CULTURE</span><i>✦</i><span>EDUCATION</span><i>✦</i><span>PERFORMANCE</span><i>✦</i><span>TEAM NETWORK</span><i>✦</i><span>REGIONAL PARTNERSHIP</span><i>✦</i><span>WOTA LIGHTING DANCE</span><i>✦</i></div></div>

    <section class="association-portal" id="intro">
        <div class="association-feature">
            <div class="association-movie"><iframe src="https://www.youtube-nocookie.com/embed/47wKIysCJ58?rel=0" title="協会所属チームLumière 公式パフォーマンス映像" allowfullscreen loading="lazy"></iframe></div>
            <div class="association-identity"><img src="<?php echo esc_url(lumiere_asset('logo.jpg')); ?>" alt="WLD WOTA LIGHTING DANCE"><p class="kicker">一般社団法人 ヲタ芸普及協会</p><h2>光でつなぐ、<br>文化の未来。</h2><p>普及、次世代育成、地域・企業との連携を通して、ヲタ芸の可能性を社会へ広げます。</p><a href="<?php echo esc_url(home_url('/organization/')); ?>">協会について詳しく見る <span>↗</span></a></div>
        </div>
        <div class="association-menu-heading"><div class="section-label light"><span>01</span> ASSOCIATION MENU</div><div><p class="kicker">10 PAGES</p><h2>知りたいことへ、<br>まっすぐ進む。</h2></div><p>各番号は、それぞれの詳しいページへつながります。協会、出演、スクール、スポンサーなど目的からお選びください。</p></div>
        <div class="association-menu-grid"><?php foreach ($association_menu as $item) : $is_external = 0 === strpos($item[4], 'http'); $item_url = $is_external ? $item[4] : home_url($item[4]); ?><a class="association-menu-card" href="<?php echo esc_url($item_url); ?>"<?php echo $is_external ? ' target="_blank" rel="noreferrer"' : ''; ?>><div class="association-menu-image"><img src="<?php echo esc_url(lumiere_asset($item[5])); ?>" alt="" loading="lazy"></div><div class="association-menu-copy"><span><?php echo esc_html($item[0] . ' / ' . $item[1]); ?></span><h3><?php echo esc_html($item[2]); ?></h3><p><?php echo esc_html($item[3]); ?></p><i>↗</i></div></a><?php endforeach; ?></div>
    </section>

    <section class="news section" id="news">
        <div class="section-label light"><span>03</span> LIVE INFO / NEWS</div><div class="news-heading"><div><p class="kicker">UPCOMING / 2026</p><h2>出演情報と、<br>大切なお知らせ。</h2></div><p>重要な情報は先頭に固定し、出演予定と協会からのお知らせを分かりやすく更新します。</p></div>
        <div class="schedule">
            <?php if ($event_posts) : foreach ($event_posts as $index => $event) :
                $date_raw = get_post_meta($event->ID, 'event_date', true);
                $date = $date_raw ? wp_date('m.d', strtotime($date_raw)) : '';
                $day = get_post_meta($event->ID, 'event_day', true);
                $area = get_post_meta($event->ID, 'event_area', true);
                $link = get_post_meta($event->ID, 'event_link', true) ?: get_permalink($event);
            ?>
                <a class="schedule-row" href="<?php echo esc_url($link); ?>"><span class="schedule-index"><?php echo esc_html(str_pad((string)($index + 1), 2, '0', STR_PAD_LEFT)); ?></span><time><b><?php echo esc_html($date); ?></b><small><?php echo esc_html($day); ?></small></time><span class="schedule-title"><?php echo esc_html(get_the_title($event)); ?></span><span class="schedule-area"><?php echo esc_html($area); ?></span><span class="schedule-arrow">↗</span></a>
            <?php endforeach; else : foreach ($fallback_events as $index => $event) : ?>
                <a class="schedule-row" href="<?php echo esc_url(home_url('/contact/')); ?>"><span class="schedule-index"><?php echo esc_html(str_pad((string)($index + 1), 2, '0', STR_PAD_LEFT)); ?></span><time><b><?php echo esc_html($event['date']); ?></b><small><?php echo esc_html($event['day']); ?></small></time><span class="schedule-title"><?php echo esc_html($event['title']); ?></span><span class="schedule-area"><?php echo esc_html($event['area']); ?></span><span class="schedule-arrow">↗</span></a>
            <?php endforeach; endif; ?>
        </div>
        <?php $news = new WP_Query(array('post_type' => 'post', 'posts_per_page' => 3, 'ignore_sticky_posts' => false)); if ($news->have_posts()) : ?>
            <div class="wp-news-block"><div class="wp-news-title"><span>NEWS</span><h3>お知らせ</h3></div><div class="wp-news-grid">
                <?php while ($news->have_posts()) : $news->the_post(); ?><a class="<?php echo is_sticky() ? 'is-pinned' : ''; ?>" href="<?php the_permalink(); ?>"><time><?php echo is_sticky() ? 'PINNED / ' : ''; echo esc_html(get_the_date('Y.m.d')); ?></time><h4><?php the_title(); ?></h4><span>READ ↗</span></a><?php endwhile; wp_reset_postdata(); ?>
            </div></div>
        <?php endif; ?>
    </section>

    <section class="home-global"><div class="home-global-image"><img src="<?php echo esc_url(lumiere_asset('event-01.jpg')); ?>" alt="ホノルルフェスティバル2026の協会所属チームLumière"></div><div class="home-global-copy"><p class="kicker">FROM CHIBA TO THE WORLD</p><h2>地域に根ざし、<br>世界へ届ける。</h2><p>協会所属チームLumièreは、2026年にハワイ・ホノルルフェスティバルへ出演し、第3回パフォーマーカップで優勝。現場で磨いた技術と情熱を、文化の未来へ還元します。</p><a class="button button-primary" href="<?php echo esc_url(home_url('/works/')); ?>">協会・所属チームの実績 <span>↗</span></a></div></section>

    <section class="home-join"><div><p class="kicker">TEAM &amp; SPONSOR</p><h2>この光を、<br>一緒に先へ。</h2></div><div><p>一般社団法人ヲタ芸普及協会では、所属チームとスポンサーを募集しています。活動地域や規模にかかわらず、まずは目指したい未来をお聞かせください。</p><div class="home-join-links"><a href="<?php echo esc_url(home_url('/members/#recruit')); ?>">メンバー・所属チーム募集 <span>↗</span></a><a href="<?php echo esc_url(home_url('/sponsor/')); ?>">スポンサーについて <span>↗</span></a></div></div></section>

    <?php get_template_part('template-parts/contact-cta'); ?>
</main>
<?php get_footer(); ?>
