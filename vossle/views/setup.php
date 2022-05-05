<?php
	if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly 
	//phpcs:disable VariableAnalysis
	// There are "undefined" variables here because they're defined in the code that includes this file as a template.
?>	
<div class="container-fluid m-0 p-0 vossle-body-wrapper">
	<div class="vossle-head">
		<div class="inner-image">
			<img src="<?php echo esc_url( plugins_url( '../assets/images/logo_white.png', __FILE__ ) ); ?>" alt="Vossle Logo" class="vossle_logo" />
		</div>
	</div>
	<div class="main-panel">
		<div class="main-panel-wrapper">
			<div class="row">
				<div class="col-12">
					<?php Vossle::display_status(); ?>
					<div class="card p-0">	
						<div class="card-header">
							<?php esc_attr_e('Vossle Configuration Page', 'vossle'); ?>
						</div>
						<div class="card-body">
							<form action="<?php echo esc_url( Vossle::get_page_url() );  ?>" method="post">
								<?php wp_nonce_field( Vossle::NONCE ) ?>
								<input type="hidden" name="action" value="enter-key">
								<h5 class="card-title"><?php esc_attr_e( 'API Configuration' , 'vossle' ); ?></h5>
								<label for="basic-url" class="form-label"><?php esc_attr_e('Your API Key', 'vossle'); ?></label>
								<div class="input-group mb-3">
									<span class="input-group-text" id="basic-addon3">Enter API Key</span>
									<input type="text" class="form-control" name="key" id="basic-url" aria-describedby="basic-addon3" value="<?php echo Vossle::get_api_key();   ?>" />
								</div>
								<div class="d-grid gap-2 col-3 mx-auto">
									<button class="btn btn-outline-primary" type="submit"><?php esc_attr_e( 'Submit' , 'vossle' ); ?></button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>