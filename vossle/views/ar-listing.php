<?php  if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly 
$tour = '1';

$user_id = VOSSLE__USER_ID; 
// print_r($user_id); exit(0);
$url = 'https://apiv2.morkshub.xyz/public/api/getExperienceList';
$args = array(
  'body' => array('userid' => $user_id),
	'timeout'     => '5',
  'redirection' => '5',
  'httpversion' => '1.0',
  'blocking'    => true,
  'headers'     => array(),
  'cookies'     => array(),
);
$response = wp_remote_post( $url, $args );
$body = wp_remote_retrieve_body( $response );
$list_array = json_decode($body);
$arData = array();
$countAr = 0;
if(!empty($list_array->data)){
	$countAr = count($list_array->data);
	$arData = $list_array->data;
	$mkChk = "";
	$mkDis = "";
	if ($countAr == 0) {
	  $mkChk = "checked";
	  $mkDis = "disabled";
	}
}

?>
  <div class="container-scroller">
    <?php include VOSSLE__PLUGIN_DIR.'includes/merchant-header.php'; ?>
    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
      <!-- partial -->
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-header home_card_header my-4" style="background-color:#ffffff; border-bottom: 0px;">
                  <h4 class="float-left mt-2 p-0" style="font-size:20px;">AR Experiences (<?php echo esc_html($countAr); ?>)</h4>
                  <button type="button" class="btn btn-success float-right" style="/* margin-bottom:5px; */border-radius: 12px;font-weight: 600;" onclick="addNew()"><i class="fas fa-plus-circle mx-auto" style="font-size: x-large !important;"></i><span class="mobile_hide" style="font-size: x-large;">&nbsp;&nbsp;Create New AR</span></button>
                </div>
              <?php  wp_nonce_field( Vossle::NONCE ) ?>
            
                  <div class="card-header mb-2 p-3" style="background-color:#ffffff; border-bottom: 0px; color:#1a3b51 !important; font-weight:800 !important;">
                    <div class="container">
                      <div class="row">
                        <div class="col-4 pl-5">Experience Name</div>
                        <div class="col-2 text-center">Date Created</div>
                        <div class="col-2 text-center">Experience Type</div>
                        <div class="col-2 text-center">View Count</div>
                        <div class="col-2 text-center">Actions</div>
                      </div>
                    </div>
                  </div>
                  
                  <?php
                    if (!empty($arData)) {
                      $i=0;
                      $currnt_date = date('Y-m-d H:i:s');
                      foreach($arData as $ar ){
						            $ar = (array)$ar;
                        $i++;
                        $name = ucfirst($ar['exp_name']);
                        $labelClass = '';
                        $arType = '';

                        if (strlen($ar['exp_name']) > 30) {
                          $name = substr($ar['exp_name'], 0, 30) . '...';
                        }

                        if ($ar['exp_type']->exp_type == 'markerless') {
                          $labelClass = "badge-success";
                          $arType = 'Markerless AR';
                          $color = 'background-color:#d5fffb';
                        } else if ($ar['exp_type']->exp_type == 'markerbased') {
                          $labelClass = "badge-danger";
                          $arType = ucfirst($ar['exp_type']);
                          $color = 'background-color:#ffecdf';
                        } else if ($ar['exp_type']->exp_type == 'facedetection') {
                          $labelClass = "badge-warning";
                          $arType = ucfirst('face detection');
                          $color = 'background-color:#ffaf0099';
                        } else if ($ar['exp_type']->exp_type == 'games') {
                          $labelClass = "badge-info";
                          $arType = ucfirst($ar['exp_type']);
                          $color = 'background-color:#8862e09e';
                        }elseif($ar['exp_type']->exp_type == 'workflow'){ 
                        $labelClass = "badge-success";
                        $arType = 'Work flow';
                        $color = 'background-color:#d5fffb';
                      }

                      $ar_id = $ar['id'];
                      $edit_id_encryp = urlencode(base64_encode($ar_id));
                  ?>
                  <div class="card-body px-3 mb-1 pb-2 pt-3" style="background-color:#ffffff;" id="data_<?php echo esc_attr($ar_id); ?>">
                    <div class="container">
                      <div class="row">
                        <div class="col-4">
                          <label class="badge <?php echo esc_attr($labelClass); ?>" style="font-size: 13px;width: 30px;height: 30px;margin-right:20px;padding: 7px; padding-left:4px;"><?php echo esc_html(strtoupper(substr($name, 0,2))); ?></label><a onclick="show_ar('<?php echo esc_html($edit_id_encryp); ?>')" href="javascript:void(0)" style="text-decoration:none; color:black;"><?php echo esc_html($name); ?></a>
                        </div>
                        <div class="col-2 text-center">
                          <?php echo  esc_html(date('Y/m/d', strtotime($ar['created_at']))); ?>
                        </div>
                        <div class="col-2 text-center">
                          <?php echo esc_html($arType); ?>
                        </div>
                        <div class="col-2 text-center px-5">
                          <div class="home_card_batch" style="<?php echo esc_html($color); ?>"><?php echo esc_html('0'); ?></div>
                        </div>
                        <div class="col-2 text-center">
                          <a onclick="edit_ar('<?php echo esc_html($edit_id_encryp); ?>')" href="javascript:void(0)" ><img src="<?php echo esc_url(plugins_url('../assets/images/edit.png', __FILE__ ));?>" style="border-radius: 0;height: 18px; width: auto;" /></a>
                          <a href="javascript:void(0)" class="dl_itm" del-vl="<?php echo esc_html($ar_id); ?>" style="margin-left:15px;" ><img src="<?php echo esc_url(plugins_url('../assets/images/delete.png', __FILE__ ));?>" style="border-radius: 0;height: 18px; width: auto;" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                <?php } } else { echo esc_html("You have not uploaded any AR Experience yet. Please add a new one."); } ?>
               
                <input type="hidden" id="sar">
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="analytics_modal" aria-hidden="true" aria-labelledby="..." tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0" style="background-color:#2f5a77;">
        <div class="modal-body p-0">
          <div class="container-fluid p-0">
            <div class="row">
              <div class="col-12" style="background-color:#2f5a77;"><div id="curve_chart"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal -->
  