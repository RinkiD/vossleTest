<?php  if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly 

/* get edit data */
	$user_id = VOSSLE__USER_ID;
	$edit_id  = sanitize_text_field($_GET['ar']);
	$ar_id = base64_decode(urldecode($edit_id));
    if(empty($ar_id)) {
        $url = Vossle::get_page_url('safe_redirect');
        wp_redirect($url);
        exit();
    }
    $url = 'https://dashboard.vossle.com/API/get_ExperienceData';
    $args = array(
        'body' => array('client_id' => $user_id,'id' => $ar_id)
    );
    $response = wp_remote_post( $url, $args );
    $body = wp_remote_retrieve_body( $response );
	$list_array = json_decode($body);
	$editData = array();
	if(!empty($list_array->data)){
		$editData = (array)$list_array->data;
	}
?>
    <div class="container-scroller">
        <!-- partial:partials/_navbar.html -->
        <?php include VOSSLE__PLUGIN_DIR.'includes/merchant-header.php'; ?>
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
           
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-lg-12 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-header mb-0" style="height:64px; background-color:#ffffff; border-bottom: 0px;">
                                    <h4 class="float-left mt-1 p-0" style="font-family: 'Roboto'; font-size: 20px;"><a href="<?php echo esc_url(admin_url('admin.php?page=vossle%2Fvossle.php'))?>" style="text-decoration:none; color:black;">All AR Experience</a> <i class="fas fa-chevron-right"></i> <?php echo esc_html($editData['exp_name']); ?></h4>
                                    <a href="<?php echo esc_url(admin_url('admin.php?page=vossle%2Fvossle.php')); ?>" class="float-right m-0 p-0 mt-1" style="cursor: pointer;"><i class="far fa-times-circle" style="font-size: xx-large;"></i></a>
                                </div>
                                <div class="card-header mb-0" style="height:64px; background-color:#f5f6f6; border-bottom: 0px;">
                                   
                                </div>
                                <div class="card-body" style="background-color:#ffffff; min-height:400px;">
                                    <div class="container mt-5">
                                        <div class="row mt-2">
                                            <div class="col-12 col-md-6 mx-auto qr_code_section">
                                                <div class="text-center">
                                                    <div class="qr_code_replacable"><img src="<?php echo esc_url(VOSSLE__S3_URL.'qrCode/'.$editData['qrcode']); ?>" height="150px"></div>
                                                    <p class="m-0 p-0">or</p>
                                                    <div class="container">
                                                        <div class="row url_div" style=" background-color:#9a9a9a; min-height: 40px; border-radius: 10px;">
                                                            <div class="col-10 url_replacable" style="padding: 10px;"><input type="text" class="m-0 p-0 url_changeable w-100" id="url_changeable" value="<?php echo esc_url(VOSSLE__SERVER_URL.$editData['slug_exp_name']); ?>" style="color: white; background: none; border: 0px; text-align: center; font-size: 1rem; height: 100%;" readonly/></div>
                                                            <div class="col-2" style="padding: 10px;"><i class="far fa-copy copy_and_share_url" style="font-size:2rem; color:white;"></i></div>
                                                            <div class="col-12 copy_status text-white bg-warning" style="display:none;">URL copied successfully.</div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
											<?php if($editData['exp_type'] != 'markerbased'){ $style = 'display:none'; }else{ $style ='display:block';} ?>
                                            <div class="col-12 col-md-6 mx-auto marker_image_section" style="<?php echo esc_attr($style);?>" >
                                                <div class="text-center">
                                                    <div class="marker_image_replacable"><img src="<?php echo esc_url(VOSSLE__S3_URL.'MarkerImage/'.$editData['client_id'].'/'.$editData['marker_image']);?>" height="150px"></div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
            <!-- main-panel ends -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>

