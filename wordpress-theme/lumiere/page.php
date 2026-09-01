<?php get_header(); ?>
<main id="top"><section class="inner-hero generic-hero"><div class="inner-hero-copy"><p class="breadcrumb"><a href="<?php echo esc_url(home_url('/')); ?>">HOME</a></p><p class="kicker">LUMIÈRE</p><h1><?php the_title(); ?></h1></div></section><article class="section entry-content"><?php while(have_posts()): the_post(); the_content(); endwhile; ?></article></main>
<?php get_footer(); ?>
