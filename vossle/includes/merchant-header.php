<?php if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly ?>
<style>
  .vossle_logo{
    margin-left: 126%;
      margin-top: 19%;
  }
  .card{
    margin-top:40px !important;
  }
</style>
<nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
  <div class="navbar-brand-wrapper d-flex align-items-top" style="padding-left:20px !important;">
    <a href="">
      <img src="<?php echo esc_url( plugins_url( '../assets/images/logo_white.png', __FILE__ ) ); ?>" alt="Vossle Logo" class="vossle_logo" />
    </a>
  </div>  
</nav>

<input type="hidden" id="not_id" value="">