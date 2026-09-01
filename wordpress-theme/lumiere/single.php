<?php get_header(); ?>
<main id="top"><?php while(have_posts()): the_post(); ?><section class="single-hero"><p class="breadcrumb"><a href="<?php echo esc_url(home_url('/')); ?>">HOME</a> / JOURNAL</p><time><?php echo esc_html(get_the_date('Y.m.d')); ?></time><h1><?php the_title(); ?></h1></section><article class="single-content"><?php if(has_post_thumbnail()): ?><figure><?php the_post_thumbnail('full'); ?></figure><?php endif; ?><?php the_content(); ?></article><?php endwhile; ?></main>
<?php get_footer(); ?>
