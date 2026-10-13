<?php
/**
 * Shortcode para exibir a landing GuriDigital dentro do Elementor.
 *
 * Uso:
 * [guri_cine_sintetico]
 * [guri_cine_sintetico url="https://site-pi-one-65.vercel.app/" height="920"]
 */
function guri_cine_sintetico_shortcode($atts) {
    $atts = shortcode_atts(
        array(
            'url' => 'https://site-pi-one-65.vercel.app/',
            'height' => '920',
        ),
        $atts,
        'guri_cine_sintetico'
    );

    $url = esc_url($atts['url']);
    $height = max(320, (int) $atts['height']);

    return sprintf(
        '<div class="guri-cine-sintetico-embed" style="width:100%%;overflow:hidden;background:#fff;"><iframe src="%1$s" title="GuriDigital Cine Sintético" loading="lazy" style="display:block;width:100%%;min-height:%2$dpx;border:0;background:#fff;"></iframe></div>',
        $url,
        $height
    );
}
add_shortcode('guri_cine_sintetico', 'guri_cine_sintetico_shortcode');
