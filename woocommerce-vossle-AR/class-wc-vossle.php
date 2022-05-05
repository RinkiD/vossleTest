<?php 
require __DIR__ . '/vendor/autoload.php';

use Automattic\WooCommerce\Client;
use Automattic\WooCommerce\HttpClient\HttpClientException;

/**
 * Integration Demo.
 *
 * @package   Woocommerce Vossle
 * @category Integration
 * @author  Queppelin tech Pvt. Ltd.
 */
if ( ! class_exists( 'WC_custom_Vossle' ) ) :
class WC_custom_Vossle extends WC_Integration {
  /**
   * Init and hook in the integration.
   */
  public function __construct() {
    global $woocommerce;
    $this->id                 = 'vossle';
    $this->method_title       = __( 'Vossle setup');
    $this->method_description = __( 'Vossle will use product on AR.');
    // Load the settings.
    $this->init_form_fields();
    //$this->vossle_authenticateAPI();
    $this->init_settings();
    // Define user set variables.
    $this->custom_name          = $this->get_option( 'custom_name' );
    // Actions.
    add_action( 'woocommerce_update_options_integration_' .  $this->id, array( $this, 'process_admin_options' ) );
  }

  /**
   * Initialize integration settings form fields.
   */
  public function init_form_fields() {
    $this->form_fields = array(
      'vos_custom_name' => array(
        'title'             => __( 'Enter Vossle Key'),
        'type'              => 'text',
        'description'       => __( 'Enter Vossle Key'),
        'desc_tip'          => true,
        'default'           => 'abcd123456',
        'css'      => 'width:170px;',
      ),
      'vos_tryon_button' => array(
				'title'         => __( 'Enable Try Product Button' ),
				'label'         => __( 'Check this button to show try on button.' ),
				'description'   => sprintf( __( 'Unchecking the checkbox above will hide the Vossle AR button on product page.' )),
				'type'          => 'checkbox',
				'checkboxgroup' => '',
				'default'       => get_option( $this->get_option_key() ) ? 'no' : 'yes', // don't enable on updates, only default on new installs
        
      ),
      'vos_tryon_button_title' => array(
				'title'         => __( 'Title for tryon button' ),
				'description'   => sprintf( __( 'use this title for create button on product page.' )),
        'type'          => 'text',
				'desc_tip'          => true,
        'default'           => 'Try on Vossle',
        'css'      => 'width:170px;',
			),
      'vos_tryon_button_color' => array(
				'title'         => __( 'Color for tryon button' ),
				'description'   => sprintf( __( 'use this color for create button on product page.' )),
        'type'          => 'text',
				'desc_tip'          => true,
        'default'           => '#1a3b51',
        'css'      => 'width:170px;',
			),
     
    );
    $url = 'http://localhost/wordpress/';
    $consumer_key = 'ck_f84841562d0700b93e0ccde8f1b89e4484c01836';
    $consumer_secret = 'cs_584acc5a141e3511550be4fec7de270d2b223da1';
    $options = [
      'wp_api' => true,
      'version' => 'wc/v3',
      'query_string_auth' => true // Force Basic Authentication as query string true and using under HTTPS
  ];
    $woocommerce = new Client($url, $consumer_key, $consumer_secret, $options);
    //print_r($woocommerce);
    // $store_url = 'http://localhost/wordpress';
    // $endpoint = '/wc-auth/v1/authorize';
    // $params = [
    //     'app_name' => 'Vossle',
    //     'scope' => 'write',
    //     'user_id' => 1,
    //     'return_url' => 'http://localhost/wordpress',
    //     'callback_url' => 'http://localhost/wordpress'
    // ];
    // $query_string = http_build_query( $params );

    // echo $store_url . $endpoint . '?' . $query_string;
    try {
    //print_r($woocommerce->get('products'));
    $args = array(
      'post_type'   => 'product'
    );
     
    $products = get_posts( $args );
    //print_r($products);
    } catch (HttpClientException $e) {
      echo '<pre><code>' . print_r($e->getMessage(), true) . '</code><pre>'; // Error message.
      echo '<pre><code>' . print_r($e->getRequest(), true) . '</code><pre>'; // Last request data.
      echo '<pre><code>' . print_r($e->getResponse(), true) . '</code><pre>'; // Last response data.
    }


  }


}
endif; 
?>