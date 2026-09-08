<footer>
    <div class="footer-brand"><span class="brand-logo"><img src="<?php echo esc_url(lumiere_asset('logo-header.jpg')); ?>" alt="WLD"></span><div><strong>一般社団法人ヲタ芸普及協会</strong><small>OFFICIAL PERFORMANCE TEAM / LUMIÈRE</small></div></div>
    <div class="footer-page-links">
        <a href="<?php echo esc_url(home_url('/organization/')); ?>">01 ASSOCIATION</a>
        <a href="<?php echo esc_url(home_url('/members/')); ?>">02 MEMBERS</a>
        <a href="<?php echo esc_url(home_url('/news/')); ?>">03 NEWS</a>
        <a href="<?php echo esc_url(home_url('/works/')); ?>">04 WORKS</a>
        <a href="<?php echo esc_url(home_url('/services/')); ?>">05 SERVICE</a>
        <a href="<?php echo esc_url(home_url('/school/')); ?>">06 SCHOOL</a>
        <a href="<?php echo esc_url(home_url('/sponsor/')); ?>">07 SPONSOR</a>
        <a href="<?php echo esc_url(home_url('/contact/')); ?>">08 CONTACT</a>
        <a href="https://lumiere-woodbell.com/#company" target="_blank" rel="noreferrer">09 SHOP</a>
        <a href="<?php echo esc_url(home_url('/about/')); ?>">10 LUMIÈRE</a>
        <a href="<?php echo esc_url(home_url('/blog/')); ?>">11 DIARY</a>
    </div>
    <div class="footer-connect">
        <div class="footer-links">
            <a href="<?php echo esc_url(lumiere_mod('instagram_url', 'https://www.instagram.com/lumiere20241103')); ?>" target="_blank" rel="noreferrer">INSTAGRAM ↗</a>
            <a href="<?php echo esc_url(lumiere_mod('footer_youtube_url', 'https://www.youtube.com/@LumiereWotagei')); ?>" target="_blank" rel="noreferrer">YOUTUBE ↗</a>
            <a href="<?php echo esc_url(lumiere_mod('x_url', 'https://x.com/Lumierewoodbell')); ?>" target="_blank" rel="noreferrer">X ↗</a>
            <a href="<?php echo esc_url(lumiere_mod('line_url', 'https://lin.ee/F5EQxq5')); ?>" target="_blank" rel="noreferrer">LINE ↗</a>
        </div>
        <?php $bitfan_url = esc_url(lumiere_mod('bitfan_url', ''), array('http', 'https')); ?>
        <?php if ($bitfan_url) : ?>
            <a class="bitfan-button" href="<?php echo $bitfan_url; ?>" target="_blank" rel="noopener noreferrer" aria-label="LumièreのBitfanを開く（新しいタブ）">
                <span class="bitfan-button-copy"><span class="bitfan-button-eyebrow">Lumière</span><span class="bitfan-button-name">Bitfan</span></span><span class="bitfan-button-arrow" aria-hidden="true">↗</span>
            </a>
        <?php else : ?>
            <button class="bitfan-button" type="button" disabled>
                <span class="bitfan-button-copy"><span class="bitfan-button-eyebrow">Lumière</span><span class="bitfan-button-name">Bitfan</span></span><span class="bitfan-button-status">準備中</span>
            </button>
        <?php endif; ?>
    </div>
    <div class="footer-bottom"><span>© <?php echo esc_html(wp_date('Y')); ?> 一般社団法人ヲタ芸普及協会</span><a href="#top">BACK TO TOP ↑</a></div>
</footer>
<div class="mobile-cta"><a href="<?php echo esc_url(lumiere_mod('line_url', 'https://lin.ee/F5EQxq5')); ?>" target="_blank" rel="noreferrer">LINEで相談</a><a href="tel:<?php echo esc_attr(lumiere_phone_href()); ?>">電話する</a></div>
<?php wp_footer(); ?>
</body>
</html>
