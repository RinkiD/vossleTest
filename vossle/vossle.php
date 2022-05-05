<?php
/**
 * Vossle is the simplest WordPress plugin for experience augmented reality.
 * Vossle is a nocode augmented reality platform for enterprises.
 *
 * @package vossle
 * @author vossle
 * @license GPL-2.0+
 * @link https://vossle.com
 * @copyright 2021 vossle, LLC. All rights reserved.
 *
 *            @wordpress-plugin
 *            Plugin Name: Vossle
 *            Plugin URI: https://vossle.com
 *            Description: Vossle is a nocode augmented reality platform for enterprises. Create all kinds of AR experiences and wow your customers and help them better connect with your brand or service.
 *            Version: 1.0.5
 *            Author: Vossle
 *            Author URI: https://vossle.com/
 *            Text Domain: vossle
 *            Contributors: vossle2021
 *            License: GPL-2.0+
 *            License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

if ( ! defined( 'ABSPATH' ) ) exit;

// Make sure we don't expose any info if called directly
if ( !function_exists( 'add_action' ) ) {
	echo esc_html('Hi there!  I\'m just a plugin, not much I can do when called directly.');
	exit;
}

define("VOSSLE__PLUGIN_DIR", plugin_dir_path( __FILE__ ) );
define("VOSSLE__SERVER_URL",'https://webar.vossle.com/');
define("VOSSLE__S3_URL",'https://assets.vossle.com/shopify/assets/');

/**
 * Adding Required PHP Classes and initialize it.
 */
require_once( VOSSLE__PLUGIN_DIR . 'class.vossle.php' );
add_action( 'init', array( 'Vossle', 'init' ) );

define("VOSSLE__USER_ID",Vossle::get_user_id());


/**
 * Adding on main menu as vossle plugin Tab
 * @since 1.0
 */
add_action('admin_menu', 'vossle_add_menu'); 
function vossle_add_menu(){
    if(!empty(Vossle::get_api_key())) {
		add_menu_page( 'Vossle Page', 'Vossle', 'manage_options', __FILE__, 'vossle_dashboard_page', plugins_url('assets/images/favicon.png',__FILE__) );
		add_submenu_page(__FILE__, 'Add', 'Add Experience', 'manage_options', __FILE__.'/add', 'vossle_add_ar_experience_page');
		add_submenu_page(__FILE__, 'Edit', 'Edit Experiences', 'manage_options', __FILE__.'/edit_experience', 'vossle_edit_ar_experiences');
		add_submenu_page(__FILE__, 'Show', 'Show Experience', 'manage_options', __FILE__.'/show_experience', 'vossle_show_ar_experiences');
		add_submenu_page(__FILE__, 'Setting', 'Vossle Settings', 'manage_options', __FILE__.'/vossle_settings', 'vossle_settings');
		$path = plugin_dir_url( __FILE__ );

		// Enqueue our script
		wp_enqueue_script( 'wp_custom_js',  $path. 'assets/js/wp_custom.js', array( 'jquery' ), null, true );

		// Get the protocol of the current page
		$protocol = isset( $_SERVER['HTTPS'] ) ? 'https://' : 'http://';

		$params = array(
			// Get the url to the admin-ajax.php file using admin_url()
			'ajaxurl' => admin_url( 'admin-ajax.php', $protocol ),
			'plugin_dir' =>  plugin_dir_path( __FILE__ ),
			'plugin_url' =>  plugins_url(),
			'star' =>  plugins_url('assets/marker_vendor_new_old/icons/star.svg',__FILE__),
			'star2' =>  plugins_url('assets/marker_vendor_new_old/icons/star2.svg',__FILE__),
			'server_url' => 'https://webar.vossle.com/',
			's3_url' => 'https://assets.vossle.com/shopify/assets/',
			's3new_url' => 'https://assets.vossle.com/',
			'user_id' => Vossle::get_user_id(),
		);
		// Print the script to our page
		wp_localize_script( 'wp_custom_js', 'vossle_ar_experience_params', $params );
		//add_submenu_page('vossle', 'Analytics', 'Analytics', 'manage_options', 'vossle/analytics', 'vossle_display_analytics');
		/* remove_submenu_page( 'vossle', 'vossle/edit_experience' ); */
	} else add_menu_page( 'Vossle Page', 'Vossle', 'manage_options', __FILE__, 'vossle_settings',plugins_url('/vossle/assets/images/favicon.png',__DIR__) );
}

/**
 * Function for Vossle Dashboard Page loading
 */
function vossle_dashboard_page() {
	/* css files */
	wp_register_style( 'css_style', plugin_dir_url(__FILE__) .'assets/css/style.css');
	wp_enqueue_style('css_style');
	wp_register_style( 'vossle_pretty-checkbox', plugin_dir_url(__FILE__) .'assets/css/pretty-checkbox.min.css');
	wp_enqueue_style('vossle_pretty-checkbox');
	// wp_register_style( 'vossle_enjoyhint', plugin_dir_url(__FILE__) .'assets/enjoyhint/enjoyhint.css');
	// wp_enqueue_style('vossle_enjoyhint');
	wp_register_style( 'vossle_ar_list', plugin_dir_url(__FILE__) .'assets/css/ar_list.css');
	wp_enqueue_style('vossle_ar_list');
	wp_register_style( 'vossle_fontawesome_kit', plugin_dir_url(__FILE__) . 'assets/css/fontawesome.min.css');
	wp_enqueue_style('vossle_fontawesome_kit');

	/* js scripts */
	wp_enqueue_script('vossle_ar_list', plugin_dir_url(__FILE__) . 'assets/js/ar_list.js');
	// wp_enqueue_script('vossle_enjoyhint', plugin_dir_url(__FILE__) .'assets/enjoyhint/enjoyhint.min.js');
	// wp_enqueue_script('vossle_e03aa7735b', plugin_dir_url(__FILE__) .'assets/js/e03aa7735b.js');
	wp_enqueue_script('custom_js', plugin_dir_url(__FILE__) . 'assets/js/custom.js');
	wp_enqueue_script('off_canvas', plugin_dir_url(__FILE__) . 'assets/js/off-canvas.js');
	wp_enqueue_script('misc_js', plugin_dir_url(__FILE__) . 'assets/js/misc.js');
	wp_enqueue_script('dashboard_js', plugin_dir_url(__FILE__) . 'assets/js/dashboard.js');
	//include VOSSLE__PLUGIN_DIR.'views/ar-listing.php';
	Vossle::view('ar-listing');
}

/**
 * Function for Creating Vossle AR Experience
 */
function vossle_add_ar_experience_page(){

	// check for plugin using plugin name
	
	
	wp_register_style( 'vossle_style-css', plugin_dir_url(__FILE__) .'assets/css/style.css');
	wp_enqueue_style('vossle_style-css'); 
	wp_register_style( 'vossle_meterial_indigo-css', plugin_dir_url(__FILE__) .'assets/css/material.indigo-pink.min.css');
	wp_enqueue_style('vossle_meterial_indigo-css');
	wp_register_style( 'vossle_ar_form', plugin_dir_url(__FILE__) .'assets/css/ar_form.css');
	wp_enqueue_style('vossle_ar_form');

	

	
	/* js script */
	wp_enqueue_script( 'wp_ar_form_js',  plugin_dir_url(__FILE__) . 'assets/js/ar_form.js', array( 'jquery' ), null, true );
	wp_enqueue_script('vossle_material', plugin_dir_url(__FILE__) . 'assets/js/material.min.js');
	wp_enqueue_script('vossle_marker_vendor_new_old', plugin_dir_url(__FILE__) . 'assets/marker_vendor_new_old/exif.js');
	wp_enqueue_script('vossle_marker_vendor_new_old-wasm', plugin_dir_url(__FILE__) . 'assets/marker_vendor_new_old/wasm/NftMarkerCreator_wasm.js');
	wp_enqueue_script('vossle_easyqrcodejs', plugin_dir_url(__FILE__) . 'assets/js/easyqrcodejs/dist/easy.qrcode.min.js');
	// wp_enqueue_script('vossle_e03aa7735b', plugin_dir_url(__FILE__) . 'assets/js/e03aa7735b.js');
	wp_enqueue_script('vossle_marker_index', plugin_dir_url(__FILE__) . 'assets/marker_vendor_new_old/index.js');
	wp_enqueue_script('vossle_custom-js', plugin_dir_url(__FILE__) . 'assets/js/custom.js');
	wp_enqueue_script('vossle_off-canvas', plugin_dir_url(__FILE__) . 'assets/js/off-canvas.js');
	wp_enqueue_script('vossle_misc-js', plugin_dir_url(__FILE__) . 'assets/js/misc.js');
	wp_enqueue_script('vossle_dashboard', plugin_dir_url(__FILE__) . 'assets/js/dashboard.js');
	
	//include VOSSLE__PLUGIN_DIR.'views/ar_form_new_marker.php';
	Vossle::view('ar_form_new_marker');
}

/**
 * Function for Editing Vossle AR Experience
 */
function vossle_edit_ar_experiences(){
	wp_register_style( 'vossle_style-css', plugin_dir_url(__FILE__) . 'assets/css/style.css');
	wp_enqueue_style('vossle_style-css');
	wp_register_style( 'vossle_meterial_indigo-css', plugin_dir_url(__FILE__) . 'assets/css/material.indigo-pink.min.css');
	wp_enqueue_style('vossle_meterial_indigo-css');
	wp_register_style( 'vossle_ar_edit-css', plugin_dir_url(__FILE__) . 'assets/css/ar_edit.css');
	wp_enqueue_style('vossle_ar_edit-css');
	wp_register_style( 'vossle_fontawesome_kit', plugin_dir_url(__FILE__) . 'assets/css/fontawesome.min.css');
	wp_enqueue_style('vossle_fontawesome_kit');
	
	/* js script */
	wp_enqueue_script('vossle_ar_edit', plugin_dir_url(__FILE__) . 'assets/js/ar_edit.js');
	wp_enqueue_script('vossle_material', plugin_dir_url(__FILE__) . 'assets/js/material.min.js');
	wp_enqueue_script('vossle_marker_vendor_new_old', plugin_dir_url(__FILE__) . 'assets/marker_vendor_new_old/exif.js');
	wp_enqueue_script('vossle_marker_vendor_new_old-wasm', plugin_dir_url(__FILE__) . 'assets/marker_vendor_new_old/wasm/NftMarkerCreator_wasm.js');
	wp_enqueue_script('vossle_easyqrcodejs', plugin_dir_url(__FILE__) . 'assets/js/easyqrcodejs/dist/easy.qrcode.min.js');
	// wp_enqueue_script('vossle_e03aa7735b', plugin_dir_url(__FILE__) . 'assets/js/e03aa7735b.js');
	wp_enqueue_script('vossle_marker_index', plugin_dir_url(__FILE__) . 'assets/marker_vendor_new_old/index.js');
	wp_enqueue_script('vossle_custom-js', plugin_dir_url(__FILE__) . 'assets/js/custom.js');
	wp_enqueue_script('vossle_off-canvas', plugin_dir_url(__FILE__) . 'assets/js/off-canvas.js');
	wp_enqueue_script('vossle_misc-js', plugin_dir_url(__FILE__) . 'assets/js/misc.js');
	wp_enqueue_script('vossle_dashboard', plugin_dir_url(__FILE__) . 'assets/js/dashboard.js');
	Vossle::view('ar-form-edit-new-marker');
	//include VOSSLE__PLUGIN_DIR.'views/ar-form-edit-new-marker.php'; 
}

/**
 * Function for Showing Vossle AR Experience
 */
function vossle_show_ar_experiences(){
	wp_register_style( 'vossle_style-css', plugin_dir_url(__FILE__) . 'assets/css/style.css');
	wp_enqueue_style('vossle_style-css');
	wp_register_style( 'vossle_meterial_indigo-css', plugin_dir_url(__FILE__) . 'assets/css/material.indigo-pink.min.css');
	wp_enqueue_style('vossle_meterial_indigo-css');
	wp_register_style( 'vossle_ar_show', plugin_dir_url(__FILE__) . 'assets/css/ar_show.css');
	wp_enqueue_style('vossle_ar_show');
	wp_register_style( 'vossle_fontawesome_kit', plugin_dir_url(__FILE__) . 'assets/css/fontawesome.min.css');
	wp_enqueue_style('vossle_fontawesome_kit');
	
	wp_enqueue_script('vossle_custom', plugin_dir_url(__FILE__) . 'assets/js/custom.js');
	wp_enqueue_script('vossle_ar_show', plugin_dir_url(__FILE__) . 'assets/js/ar_show.js');
	wp_enqueue_script('vossle_material', plugin_dir_url(__FILE__) . 'assets/js/material.min.js');
	wp_enqueue_script('vossle_easyqrcodejs', plugin_dir_url(__FILE__) . 'assets/js/easyqrcodejs/dist/easy.qrcode.min.js');
	// wp_enqueue_script('vossle_e03aa7735b', plugin_dir_url(__FILE__) . 'assets/js/e03aa7735b.js');
	//include VOSSLE__PLUGIN_DIR.'views/ar-show.php';
	Vossle::view('ar-show');
}

function vossle_settings(){
	wp_register_style( 'css_common_style', plugin_dir_url(__FILE__) .'assets/css/common.css');
	wp_enqueue_style('css_common_style');
	Vossle::view('setup');
}

/**
 * Function for Displaying Vossle AR Experience Analytics
 */
function vossle_display_analytics(){
	echo esc_html("<div><h4>coming soon...</h4></div>");
}

/**
 * Setting Page Options
 * - add setting page
 * - save setting page
 * Init setting section, Init setting field and register settings page.
 * @since 1.0
 */
function vossle_admin_settings() {
	add_settings_section ( "vossle_config", "", null, "vossle-plugin" );
	add_settings_field ( "vossle-plugin-text", "This is sample Textbox", "vossle_plugin_options", "vossle", "vossle_config" );
	register_setting ( "vossle_config", "vossle-plugin-text" );
}
add_action ( "admin_init", "vossle_admin_settings" );
 
/**
 * Add simple textfield value to setting page
 * @since 1.0
 */
function vossle_plugin_options() {
	echo esc_html('<div class="postbox" style="width: 65%; padding: 30px;">
	<input type="text" name="vossle" value="'.stripslashes_deep ( esc_attr ( get_option ( "vossle-plugin-text" ) ) ).'" /> Provide any text value here for testing<br />
	</div>');
}
 
/**
 * Append saved textfield value to each post
 * @since 1.0
 */
add_filter ( 'the_content', 'vossle_com_content' );
function vossle_com_content($content) {
	return $content . stripslashes_deep ( esc_attr ( get_option ( 'vossle-plugin-text' ) ) );
}

/**
 * Add CSS to admin pages.
 * load css into the admin pages
 * @param string $css String to be added to admin pages.
 * @return string
 */
function vossle_enqueue_options_style() {
	wp_register_style( 'vossle_style', plugins_url('/assets/css/vossleStyle.css?1', __FILE__));
    wp_enqueue_style( 'vossle_style' );
	wp_register_style( 'vossle_fontawesome_kit', plugin_dir_url(__FILE__) . 'assets/css/fontawesome.min.css');
	wp_enqueue_style('vossle_fontawesome_kit');

	wp_enqueue_script('vossle_fontawsesome_js', plugin_dir_url(__FILE__) . 'assets/js/fontawesome.min.js');

}
add_action( 'admin_enqueue_scripts', 'vossle_enqueue_options_style' );
 
 
add_filter('http_request_args', 'vossle_bal_http_request_args', 100, 1);
function vossle_bal_http_request_args($r) //called on line 237
{
	$r['timeout'] = 15;
	return $r;
}
 
add_action('http_api_curl', 'vossle_bal_http_api_curl', 100, 1);
function vossle_bal_http_api_curl($handle) //called on line 1315
{
	curl_setopt( $handle, CURLOPT_CONNECTTIMEOUT, 15 );
	curl_setopt( $handle, CURLOPT_TIMEOUT, 15 );
}

// function my_scripts() {
		// Some script will enqueue here.
// }
// add_action( 'wp_enqueue_scripts', 'my_scripts' );