<?php
/**
 * Lumière WLD theme functions.
 */

if (!defined('ABSPATH')) {
    exit;
}

function lumiere_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', array('height' => 160, 'width' => 160, 'flex-height' => true, 'flex-width' => true));
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script'));
    add_theme_support('responsive-embeds');
    add_theme_support('woocommerce');
    register_nav_menus(array('primary' => 'メインメニュー'));
}
add_action('after_setup_theme', 'lumiere_setup');

function lumiere_assets() {
    $version = wp_get_theme()->get('Version');
    wp_enqueue_style('lumiere-style', get_stylesheet_uri(), array(), $version);
    wp_enqueue_script('lumiere-site', get_template_directory_uri() . '/assets/site.js', array(), $version, true);
}
add_action('wp_enqueue_scripts', 'lumiere_assets');

function lumiere_asset($file) {
    return get_template_directory_uri() . '/assets/' . ltrim($file, '/');
}

function lumiere_mod($key, $default = '') {
    $value = get_theme_mod('lumiere_' . $key, $default);
    if ('instagram_url' === $key && 'https://www.instagram.com/lumierewoodbell' === untrailingslashit((string) $value)) {
        return 'https://www.instagram.com/lumiere20241103';
    }
    return $value;
}

function lumiere_phone_href() {
    return preg_replace('/[^0-9+]/', '', lumiere_mod('phone', '080-6702-7899'));
}

function lumiere_customize_register($customizer) {
    $customizer->add_section('lumiere_contact', array(
        'title' => 'ヲタ芸普及協会 連絡先・SNS',
        'priority' => 30,
        'description' => 'サイト全体で使用する連絡先とSNSリンクです。',
    ));

    $fields = array(
        'line_url' => array('LINE URL', 'https://lin.ee/F5EQxq5', 'esc_url_raw'),
        'email' => array('メールアドレス', 'otagei.fukyuu@gmail.com', 'sanitize_email'),
        'phone' => array('電話番号', '080-6702-7899', 'sanitize_text_field'),
        'instagram_url' => array('Instagram URL', 'https://www.instagram.com/lumiere20241103', 'esc_url_raw'),
        'youtube_url' => array('YouTube URL', 'https://www.youtube.com/@%E3%83%AB%E3%83%9F%E3%82%A8%E3%83%BC%E3%83%AB2024', 'esc_url_raw'),
        'x_url' => array('X URL', 'https://x.com/Lumierewoodbell', 'esc_url_raw'),
    );

    foreach ($fields as $key => $field) {
        $customizer->add_setting('lumiere_' . $key, array('default' => $field[1], 'sanitize_callback' => $field[2]));
        $customizer->add_control('lumiere_' . $key, array('section' => 'lumiere_contact', 'label' => $field[0], 'type' => 'text'));
    }
}
add_action('customize_register', 'lumiere_customize_register');

function lumiere_register_event_type() {
    register_post_type('lumiere_event', array(
        'labels' => array(
            'name' => '出演情報',
            'singular_name' => '出演情報',
            'add_new_item' => '出演情報を追加',
            'edit_item' => '出演情報を編集',
            'menu_name' => '出演情報',
        ),
        'public' => true,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-tickets-alt',
        'has_archive' => true,
        'rewrite' => array('slug' => 'events'),
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
    ));
    register_post_type('lumiere_work', array(
        'labels' => array('name' => '活動実績', 'singular_name' => '活動実績', 'add_new_item' => '活動実績を追加', 'edit_item' => '活動実績を編集', 'menu_name' => '活動実績'),
        'public' => true, 'show_in_rest' => true, 'menu_icon' => 'dashicons-awards', 'has_archive' => true,
        'rewrite' => array('slug' => 'work-detail'), 'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
    ));
    register_post_type('lumiere_video', array(
        'labels' => array('name' => '動画', 'singular_name' => '動画', 'add_new_item' => '動画を追加', 'edit_item' => '動画を編集', 'menu_name' => '動画ギャラリー'),
        'public' => true, 'show_in_rest' => true, 'menu_icon' => 'dashicons-video-alt3', 'has_archive' => true,
        'rewrite' => array('slug' => 'video'), 'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
    ));
    register_post_type('lumiere_member', array(
        'labels' => array('name' => 'メンバー', 'singular_name' => 'メンバー', 'add_new_item' => 'メンバーを追加', 'edit_item' => 'メンバーを編集', 'menu_name' => 'メンバー'),
        'public' => true, 'show_in_rest' => true, 'menu_icon' => 'dashicons-groups', 'has_archive' => false,
        'rewrite' => array('slug' => 'member'), 'supports' => array('title', 'editor', 'thumbnail', 'page-attributes'),
    ));
}
add_action('init', 'lumiere_register_event_type');

function lumiere_add_event_meta_box() {
    add_meta_box('lumiere_event_details', '開催情報', 'lumiere_event_meta_box', 'lumiere_event', 'normal', 'high');
    add_meta_box('lumiere_work_details', '実績情報', 'lumiere_work_meta_box', 'lumiere_work', 'normal', 'high');
    add_meta_box('lumiere_video_details', '動画情報', 'lumiere_video_meta_box', 'lumiere_video', 'normal', 'high');
    add_meta_box('lumiere_member_details', 'メンバー情報', 'lumiere_member_meta_box', 'lumiere_member', 'normal', 'high');
}

function lumiere_render_meta_fields($post, $nonce_action, $nonce_name, $fields) {
    wp_nonce_field($nonce_action, $nonce_name);
    foreach ($fields as $key => $field) {
        $value = get_post_meta($post->ID, $key, true);
        printf('<p><label for="%1$s"><strong>%2$s</strong></label><br><input style="width:100%%;max-width:560px" type="%3$s" id="%1$s" name="%1$s" value="%4$s"></p>', esc_attr($key), esc_html($field[0]), esc_attr($field[1]), esc_attr($value));
    }
}

function lumiere_work_meta_box($post) {
    lumiere_render_meta_fields($post, 'lumiere_save_work', 'lumiere_work_nonce', array(
        'work_year' => array('年', 'number'), 'work_category' => array('カテゴリ', 'text'), 'work_video_url' => array('YouTube URL', 'url'),
    ));
}

function lumiere_video_meta_box($post) {
    lumiere_render_meta_fields($post, 'lumiere_save_video', 'lumiere_video_nonce', array(
        'video_url' => array('YouTube URL', 'url'), 'video_date' => array('撮影・公開時期', 'text'), 'video_event' => array('イベント名', 'text'), 'video_collaborator' => array('コラボ先', 'text'),
    ));
}

function lumiere_member_meta_box($post) {
    lumiere_render_meta_fields($post, 'lumiere_save_member', 'lumiere_member_nonce', array(
        'member_roman' => array('英字表記', 'text'), 'member_role' => array('役割・担当', 'text'),
    ));
    echo '<p>表示順は右側の「ページ属性」内にある「順序」で設定できます。数字が小さい順に表示されます。</p>';
}
add_action('add_meta_boxes', 'lumiere_add_event_meta_box');

function lumiere_event_meta_box($post) {
    wp_nonce_field('lumiere_save_event', 'lumiere_event_nonce');
    $fields = array(
        'event_date' => array('開催日', 'date'),
        'event_day' => array('曜日表記（例：SAT）', 'text'),
        'event_area' => array('開催地域', 'text'),
        'event_link' => array('詳細URL', 'url'),
    );
    echo '<div class="lumiere-event-fields">';
    foreach ($fields as $key => $field) {
        $value = get_post_meta($post->ID, $key, true);
        printf('<p><label for="%1$s"><strong>%2$s</strong></label><br><input style="width:100%%;max-width:560px" type="%3$s" id="%1$s" name="%1$s" value="%4$s"></p>', esc_attr($key), esc_html($field[0]), esc_attr($field[1]), esc_attr($value));
    }
    echo '</div>';
}

function lumiere_save_event_meta($post_id) {
    if (!isset($_POST['lumiere_event_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['lumiere_event_nonce'])), 'lumiere_save_event')) return;
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;
    $sanitizers = array('event_date' => 'sanitize_text_field', 'event_day' => 'sanitize_text_field', 'event_area' => 'sanitize_text_field', 'event_link' => 'esc_url_raw');
    foreach ($sanitizers as $key => $sanitizer) {
        if (isset($_POST[$key])) update_post_meta($post_id, $key, call_user_func($sanitizer, wp_unslash($_POST[$key])));
    }
}
add_action('save_post_lumiere_event', 'lumiere_save_event_meta');

function lumiere_save_simple_meta($post_id, $nonce_name, $nonce_action, $fields) {
    if (!isset($_POST[$nonce_name]) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST[$nonce_name])), $nonce_action)) return;
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;
    foreach ($fields as $key => $sanitize) if (isset($_POST[$key])) update_post_meta($post_id, $key, call_user_func($sanitize, wp_unslash($_POST[$key])));
}
function lumiere_save_work_meta($post_id) { lumiere_save_simple_meta($post_id, 'lumiere_work_nonce', 'lumiere_save_work', array('work_year' => 'absint', 'work_category' => 'sanitize_text_field', 'work_video_url' => 'esc_url_raw')); }
function lumiere_save_video_meta($post_id) { lumiere_save_simple_meta($post_id, 'lumiere_video_nonce', 'lumiere_save_video', array('video_url' => 'esc_url_raw', 'video_date' => 'sanitize_text_field', 'video_event' => 'sanitize_text_field', 'video_collaborator' => 'sanitize_text_field')); }
function lumiere_save_member_meta($post_id) { lumiere_save_simple_meta($post_id, 'lumiere_member_nonce', 'lumiere_save_member', array('member_roman' => 'sanitize_text_field', 'member_role' => 'sanitize_text_field')); }
add_action('save_post_lumiere_work', 'lumiere_save_work_meta');
add_action('save_post_lumiere_video', 'lumiere_save_video_meta');
add_action('save_post_lumiere_member', 'lumiere_save_member_meta');

function lumiere_create_core_pages() {
    $pages = array(
        'about' => '私たちについて',
        'services' => 'サービス',
        'works' => '活動実績',
        'contact' => 'お問い合わせ',
        'junior' => 'ジュニアルミエール',
        'school' => 'ヲタ芸スクール',
        'movies' => '動画ギャラリー',
        'organization' => '団体・協会について',
        'members' => 'メンバー・所属チーム',
        'news' => '出演情報・お知らせ',
        'sponsor' => 'スポンサー募集',
        'shop' => 'オンラインストア',
        'blog' => '日記',
    );
    foreach ($pages as $slug => $title) {
        if (!get_page_by_path($slug)) {
            wp_insert_post(array('post_type' => 'page', 'post_status' => 'publish', 'post_title' => $title, 'post_name' => $slug));
        }
    }
    flush_rewrite_rules();
}
add_action('after_switch_theme', 'lumiere_create_core_pages');

function lumiere_handle_contact() {
    if (!isset($_POST['lumiere_contact_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['lumiere_contact_nonce'])), 'lumiere_contact')) wp_die('送信を確認できませんでした。');
    if (!empty($_POST['company_website'])) {
        wp_safe_redirect(home_url('/contact/?sent=1'));
        exit;
    }
    $name = isset($_POST['contact_name']) ? sanitize_text_field(wp_unslash($_POST['contact_name'])) : '';
    $email = isset($_POST['contact_email']) ? sanitize_email(wp_unslash($_POST['contact_email'])) : '';
    $type = isset($_POST['contact_type']) ? sanitize_text_field(wp_unslash($_POST['contact_type'])) : '';
    $message = isset($_POST['contact_message']) ? sanitize_textarea_field(wp_unslash($_POST['contact_message'])) : '';
    if (!$name || !is_email($email) || !$message) {
        wp_safe_redirect(home_url('/contact/?error=1'));
        exit;
    }
    $to = lumiere_mod('email', 'otagei.fukyuu@gmail.com');
    $subject = '[ヲタ芸普及協会 HP] ' . ($type ?: 'お問い合わせ') . ' / ' . $name;
    $body = "お名前: {$name}\nメール: {$email}\n目的: {$type}\n\n{$message}";
    $sent = wp_mail($to, $subject, $body, array('Reply-To: ' . $name . ' <' . $email . '>'));
    wp_safe_redirect(home_url('/contact/?' . ($sent ? 'sent=1' : 'error=1')));
    exit;
}
add_action('admin_post_nopriv_lumiere_contact', 'lumiere_handle_contact');
add_action('admin_post_lumiere_contact', 'lumiere_handle_contact');

function lumiere_social_meta() {
    if (defined('WPSEO_VERSION') || defined('RANK_MATH_VERSION') || class_exists('All_in_One_SEO_Pack')) return;
    $title = is_front_page() ? 'ヲタ芸を、次の文化へ。 | 一般社団法人ヲタ芸普及協会' : wp_get_document_title();
    $description = 'ヲタ芸文化の普及・育成・地域連携に取り組む一般社団法人ヲタ芸普及協会。';
    $image = lumiere_asset('og.png');
    echo '<meta name="description" content="' . esc_attr($description) . '">' . "\n";
    echo '<meta property="og:type" content="website">' . "\n";
    echo '<meta property="og:locale" content="ja_JP">' . "\n";
    echo '<meta property="og:title" content="' . esc_attr($title) . '">' . "\n";
    echo '<meta property="og:description" content="' . esc_attr($description) . '">' . "\n";
    $url = is_singular() ? get_permalink() : home_url('/');
    echo '<meta property="og:url" content="' . esc_url($url) . '">' . "\n";
    echo '<meta property="og:image" content="' . esc_url($image) . '">' . "\n";
    echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
}
add_action('wp_head', 'lumiere_social_meta', 5);
