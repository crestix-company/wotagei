<?php
get_header();
$member_posts = get_posts(array('post_type' => 'lumiere_member', 'posts_per_page' => -1, 'orderby' => 'menu_order title', 'order' => 'ASC'));
$fallback_members = array(
    array('KEJAN', 'ケジャン', 'リーダー・振付', 'member-kejan.jpg'),
    array('SUBARU', 'スバル', 'サブリーダー・講師', 'member-subaru.jpg'),
    array('CHLOE', 'クロエ', '映像編集・パフォーマー', 'member-chloe.jpg'),
    array('HIRO', 'ヒロ', 'サポートメンバー', 'member-hiro.jpg'),
    array('SEIREI', '青零', 'サポートメンバー', 'member-seirei.jpg'),
);
?>
<main id="top">
<section class="inner-hero inner-about"><div class="inner-hero-bg"><img src="<?php echo esc_url(lumiere_asset('event-03.jpg')); ?>" alt="Lumière メンバー"></div><div class="inner-hero-copy"><p class="breadcrumb"><a href="<?php echo esc_url(home_url('/')); ?>">HOME</a> / MEMBERS &amp; TEAMS</p><p class="kicker">MEMBERS / TEAM NETWORK</p><h1>ひとりの光から、<br>大きな文化へ。</h1><p>Lumièreのメンバーと、協会とともに活動する仲間をご紹介します。</p></div><span class="inner-hero-number">02</span></section>

<section class="section members members-page"><div class="section-label"><span>02</span> LUMIÈRE MEMBERS</div><div class="member-heading"><div><p class="kicker">MEET THE LIGHT</p><h2>異なる個性が、<br><em>ひとつの光</em>になる。</h2></div><p>振付、講師、映像編集、パフォーマンス。それぞれの強みを生かし、ひとつのステージをつくります。</p></div><div class="member-grid">
<?php if ($member_posts) : foreach ($member_posts as $i => $member) : $roman = get_post_meta($member->ID, 'member_roman', true); $role = get_post_meta($member->ID, 'member_role', true); ?><article class="member-card"><div class="member-image"><?php if (has_post_thumbnail($member)) echo get_the_post_thumbnail($member, 'large', array('loading' => 'lazy', 'alt' => 'Lumière ' . get_the_title($member))); else echo '<img src="' . esc_url(lumiere_asset('logo.jpg')) . '" alt="Lumière">'; ?></div><span><?php echo esc_html(str_pad((string) ($i + 1), 2, '0', STR_PAD_LEFT)); ?></span><h3><?php echo esc_html($roman ?: get_the_title($member)); ?><small><?php echo esc_html(get_the_title($member)); ?></small></h3><p><?php echo esc_html($role); ?></p></article><?php endforeach; else : foreach ($fallback_members as $i => $member) : ?><article class="member-card"><div class="member-image"><img src="<?php echo esc_url(lumiere_asset($member[3])); ?>" alt="Lumière <?php echo esc_attr($member[1]); ?>" loading="lazy"></div><span><?php echo esc_html(str_pad((string) ($i + 1), 2, '0', STR_PAD_LEFT)); ?></span><h3><?php echo esc_html($member[0]); ?><small><?php echo esc_html($member[1]); ?></small></h3><p><?php echo esc_html($member[2]); ?></p></article><?php endforeach; endif; ?>
</div></section>

<section class="member-recruit" id="recruit"><article><p class="kicker">JOIN LUMIÈRE</p><h2>メンバー<br>募集中!!!</h2><p>技術だけでなく、文化を広げたい気持ちを大切にしています。出演、作品づくり、地域活動に一緒に挑戦したい方をお待ちしています。</p><a href="mailto:otagei.fukyuu@gmail.com?subject=Lumièreメンバー応募について">メンバー応募を相談する <span>↗</span></a></article><article><p class="kicker">JOIN THE ASSOCIATION</p><h2>所属チーム<br>募集中</h2><p>一般社団法人ヲタ芸普及協会では、地域や活動歴を問わず、ともにヲタ芸の未来を育てるチームを募集しています。</p><a href="mailto:otagei.fukyuu@gmail.com?subject=協会所属チームについて">所属チームについて相談する <span>↗</span></a></article></section>
<?php get_template_part('template-parts/contact-cta'); ?>
</main>
<?php get_footer(); ?>
