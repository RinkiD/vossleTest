<?php

//phpcs:disable VariableAnalysis
// There are "undefined" variables here because they're defined in the code that includes this file as a template.

?>
<?php if ( $type == 'plugin' ) :?>
<div class="updated" id="vossle_setup_prompt">
	<form name="vossle_activate" action="<?php echo esc_url( Vossle::get_page_url() ); ?>" method="POST">
		<div class="vossle_activate">
			<div class="aa_a">A</div>
			<div class="aa_button_container">
				<div class="aa_button_border">
					<input type="submit" class="aa_button" value="<?php esc_attr_e( 'Set up your Vossle account', 'vossle' ); ?>" />
				</div>
			</div>
			<div class="aa_description"><?php _e('<strong>Almost done</strong> - configure Vossle and say goodbye to spam', 'vossle');?></div>
		</div>
	</form>
</div>
<?php elseif ( $type == 'spam-check' ) :?>
<div class="notice notice-warning">
	<p><strong><?php esc_html_e( 'Vossle has detected a problem.', 'vossle' );?></strong></p>
	<p><?php esc_html_e( 'Some comments have not yet been checked for spam by Vossle. They have been temporarily held for moderation and will automatically be rechecked later.', 'vossle' ); ?></p>
	<?php if ( $link_text ) { ?>
		<p><?php echo esc_html($link_text); ?></p>
	<?php } ?>
</div>
<?php elseif ( $type == 'alert' ) :?>
<div class='error'>
	<p><strong><?php printf( esc_html__( 'Vossle Error Code: %s', 'vossle' ), $code ); ?></strong></p>
	<p><?php echo esc_html( $msg ); ?></p>
	<p><?php

	/* translators: the placeholder is a clickable URL that leads to more information regarding an error code. */
	printf( esc_html__( 'For more information: %s' , 'vossle'), '<a href="https://vossle.com/errors/' . $code . '">https://vossle.com/errors/' . $code . '</a>' );

	?>
	</p>
</div>
<?php elseif ( $type == 'notice' ) :?>
<div class="vossle-alert vossle-critical">
	<h3 class="vossle-key-status failed"><?php echo esc_html($notice_header); ?></h3>
	<p class="vossle-description">
		<?php echo esc_html($notice_text); ?>
	</p>
</div>
<?php elseif ( $type == 'missing-functions' ) :?>
<div class="vossle-alert vossle-critical">
	<h3 class="vossle-key-status failed"><?php esc_html_e('Network functions are disabled.', 'vossle'); ?></h3>
	<p class="vossle-description"><?php printf( __('Your web host or server administrator has disabled PHP&#8217;s <code>gethostbynamel</code> function.  <strong>Vossle cannot work correctly until this is fixed.</strong>  Please contact your web host or firewall administrator and give them <a href="%s" target="_blank">this information about Vossle&#8217;s system requirements</a>.', 'vossle'), 'https://blog.vossle.com/vossle-hosting-faq/'); ?></p>
</div>
<?php elseif ( $type == 'servers-be-down' ) :?>
<div class="vossle-alert vossle-critical">
	<h3 class="vossle-key-status failed"><?php esc_html_e("Your site can&#8217;t connect to the Vossle servers.", 'vossle'); ?></h3>
	<p class="vossle-description"><?php printf( __('Your firewall may be blocking Vossle from connecting to its API. Please contact your host and refer to <a href="%s" target="_blank">our guide about firewalls</a>.', 'vossle'), 'https://blog.vossle.com/vossle-hosting-faq/'); ?></p>
</div>
<?php elseif ( $type == 'active-dunning' ) :?>
<div class="vossle-alert vossle-critical">
	<h3 class="vossle-key-status"><?php esc_html_e("Please update your payment information.", 'vossle'); ?></h3>
	<p class="vossle-description"><?php printf( __('We cannot process your payment. Please <a href="%s" target="_blank">update your payment details</a>.', 'vossle'), 'https://vossle.com/account/'); ?></p>
</div>
<?php elseif ( $type == 'cancelled' ) :?>
<div class="vossle-alert vossle-critical">
	<h3 class="vossle-key-status"><?php esc_html_e("Your Vossle plan has been cancelled.", 'vossle'); ?></h3>
	<p class="vossle-description"><?php printf( __('Please visit your <a href="%s" target="_blank">Vossle account page</a> to reactivate your subscription.', 'vossle'), 'https://vossle.com/account/'); ?></p>
</div>
<?php elseif ( $type == 'suspended' ) :?>
<div class="vossle-alert vossle-critical">
	<h3 class="vossle-key-status failed"><?php esc_html_e("Your Vossle subscription is suspended.", 'vossle'); ?></h3>
	<p class="vossle-description"><?php printf( __('Please contact <a href="%s" target="_blank">Vossle support</a> for assistance.', 'vossle'), 'https://vossle.com/contact/'); ?></p>
</div>
<?php elseif ( $type == 'active-notice' && $time_saved ) :?>
<div class="vossle-alert vossle-active">
	<h3 class="vossle-key-status"><?php echo esc_html( $time_saved ); ?></h3>
	<p class="vossle-description"><?php printf( __('You can help us fight spam and upgrade your account by <a href="%s" target="_blank">contributing a token amount</a>.', 'vossle'), 'https://vossle.com/account/upgrade/'); ?></p>
</div>
<?php elseif ( $type == 'missing' ) :?>
<div class="vossle-alert vossle-critical">
	<h3 class="vossle-key-status failed"><?php esc_html_e( 'There is a problem with your API key.', 'vossle'); ?></h3>
	<p class="vossle-description"><?php printf( __('Please contact <a href="%s" target="_blank">Vossle support</a> for assistance.', 'vossle'), 'https://vossle.com/contact/'); ?></p>
</div>
<?php elseif ( $type == 'no-sub' ) :?>
<div class="vossle-alert vossle-critical">
	<h3 class="vossle-key-status failed"><?php esc_html_e( 'You don&#8217;t have an Vossle plan.', 'vossle'); ?></h3>
	<p class="vossle-description">
		<?php printf( __( 'In 2012, Vossle began using subscription plans for all accounts (even free ones). A plan has not been assigned to your account, and we&#8217;d appreciate it if you&#8217;d <a href="%s" target="_blank">sign into your account</a> and choose one.', 'vossle'), 'https://vossle.com/account/upgrade/' ); ?>
		<br /><br />
		<?php printf( __( 'Please <a href="%s" target="_blank">contact our support team</a> with any questions.', 'vossle' ), 'https://vossle.com/contact/' ); ?>
	</p>
</div>
<?php elseif ( $type == 'new-key-valid' ) :
	global $wpdb;
	
	$check_pending_link = false;
	
	$at_least_one_comment_in_moderation = !! $wpdb->get_var( "SELECT comment_ID FROM {$wpdb->comments} WHERE comment_approved = '0' LIMIT 1" );
	
	if ( $at_least_one_comment_in_moderation)  {
		$check_pending_link = 'edit-comments.php?vossle_recheck=' . wp_create_nonce( 'vossle_recheck' );
	}
	
	?>
<div class="vossle-alert vossle-active">
	<h3 class="vossle-key-status"><?php esc_html_e( 'Vossle is now active on your site. Happy Journey !!!', 'vossle' ); ?></h3>
	<?php if ( $check_pending_link ) { ?>
		<p class="vossle-description"><?php printf( __( 'Would you like to <a href="%s">check pending comments</a>?', 'vossle' ), esc_url( $check_pending_link ) ); ?></p>
	<?php } ?>
</div>
<?php elseif ( $type == 'new-key-invalid' ) :?>
<div class="vossle-alert vossle-critical">
	<h3 class="vossle-key-status"><?php esc_html_e( 'The key you entered is invalid. Please double-check it.' , 'vossle'); ?></h3>
</div>
<?php elseif ( $type == 'existing-key-invalid' ) :?>
<div class="vossle-alert vossle-critical">
	<h3 class="vossle-key-status"><?php echo esc_html( __( 'Your API key is no longer valid.' , 'vossle' ) ); ?></h3>
	<p class="vossle-description"><?php printf( __( 'Please enter a new key or <a href="%s" target="_blank">contact Vossle support</a>.' , 'vossle' ), 'https://vossle.com/contact/' ); ?></p>
</div>
<?php elseif ( $type == 'new-key-failed' ) :?>
<div class="vossle-alert vossle-critical">
	<h3 class="vossle-key-status"><?php esc_html_e( 'The API key you entered could not be verified.' , 'vossle'); ?></h3>
	<p class="vossle-description"><?php printf( __('The connection to vossle.com could not be established. Please refer to <a href="%s" target="_blank">our guide about firewalls</a> and check your server configuration.', 'vossle'), 'https://blog.vossle.com/vossle-hosting-faq/'); ?></p>
</div>
<?php elseif ( $type == 'limit-reached' && in_array( $level, array( 'yellow', 'red' ) ) ) :?>
<div class="vossle-alert vossle-critical">
	<?php if ( $level == 'yellow' ): ?>
	<h3 class="vossle-key-status failed"><?php esc_html_e( 'You&#8217;re using your Vossle key on more sites than your Plus subscription allows.', 'vossle' ); ?></h3>
	<p class="vossle-description">
		<?php printf( __( 'Your Plus subscription allows the use of Vossle on only one site. Please <a href="%s" target="_blank">purchase additional Plus subscriptions</a> or upgrade to an Enterprise subscription that allows the use of Vossle on unlimited sites.', 'vossle' ), 'https://docs.vossle.com/billing/add-more-sites/' ); ?>
		<br /><br />
		<?php printf( __( 'Please <a href="%s" target="_blank">contact our support team</a> with any questions.', 'vossle' ), 'https://vossle.com/contact/'); ?>
	</p>
	<?php elseif ( $level == 'red' ): ?>
	<h3 class="vossle-key-status failed"><?php esc_html_e( 'You&#8217;re using Vossle on far too many sites for your Plus subscription.', 'vossle' ); ?></h3>
	<p class="vossle-description">
		<?php printf( __( 'To continue your service, <a href="%s" target="_blank">upgrade to an Enterprise subscription</a>, which covers an unlimited number of sites.', 'vossle'), 'https://vossle.com/account/upgrade/' ); ?>
		<br /><br />
		<?php printf( __( 'Please <a href="%s" target="_blank">contact our support team</a> with any questions.', 'vossle' ), 'https://vossle.com/contact/'); ?>
	</p>
	<?php endif; ?>
</div>
<?php endif;?>
