<?php
/**
 * Plugin Name: WooCommerce Vossle AR
 * Plugin URI: https://wordpress.org/plugins/woocommerce-vossle-AR/
 * Description: Allows Products for AR into WooCommerce store pages.
 * Author: WooCommerce
 * Author URI: https://woocommerce.com
 * Version: 1.0
 * WC requires at least: 3.2
 * WC tested up to: 1.0.0
 * Tested up to: 1.0.0
 * License: GPLv2 or later
 * Text Domain: woocommerce-vossle
 * Domain Path: languages/
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
if ( ! class_exists( 'WC_vossle' ) ) :
class WC_vossle {
  /**
  * Construct the plugin.
  */
  public function __construct() {
    add_action( 'plugins_loaded', array( $this, 'init' ) );
  }
  /**
  * Initialize the plugin.
  */
  public function init() {
    // Checks if WooCommerce is installed.
    if ( class_exists( 'WC_Integration' ) ) {
      // Include our integration class.
      include_once 'class-wc-vossle.php'; 
      // Register the integration.
      add_filter( 'woocommerce_integrations', array( $this, 'add_integration' ) );
    }
  }
  /**
   * Add a new integration to WooCommerce.
   */
  public function add_integration( $integrations ) {
    $integrations[] = 'WC_custom_Vossle';
    return $integrations;
  }
  
}
$WC_vossle = new WC_vossle( __FILE__ );
endif;
function wc_vossle_tryout_btn($atts) {
  global $post;
    $no_exists_value = get_option( 'woocommerce_vossle_settings' );
    $vossle_btn = $no_exists_value['vos_tryon_button_title'];
    $vossle_color = $no_exists_value['vos_tryon_button_color'];
    $vossle_btn_enable = $no_exists_value['vos_tryon_button'];
    $post_meta_value = get_post_meta( $post->ID, 'vossle_url', true );
    $Content = '';
    if($vossle_btn_enable == 'yes'){
      $Content = '<a href="'.$post_meta_value.'" class="demoClass"><img class="alignnone wp-image-2153 size-medium" src="https://studiohomey.com/wp-content/uploads/2021/12/AR-icon.png-300x104.png" alt="'.$vossle_btn.'" width="150" height="100"></a>'; 
    }
  return $Content;
}
add_shortcode('wc-vossle-ar-button', 'wc_vossle_tryout_btn');
?>
