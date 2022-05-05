function show_sub_div(obj)
{
    if(obj.value == 'markerbased')
    { 
        $('#marker_image').show();
        
        $('#markerPreview').show();
        
        $('#icon_file1').show();
        // $('#sub_div').show();
        
        $('#three_d_model_file').show();
        $('#pattern_file').show();
        $('#animation_attributes').show();
    	
        
        $('#button_attributes').hide();
        $('#rotation_attributes').hide();

        $('#arPortal_content').hide();
        $('#arPortal_content02').hide();
        $('#arPortal_content03').hide();
        $('#arPortal_content04').hide();
        $('#arPortal_content05').hide();
        $('#PortalSwap').hide();
        
        $('#markerless_three_d_model_file').hide();
        $('#icon_file').hide();
        $('#arPortal_video_enabled').hide();
        $('#arPortal_video').hide();
        $('#texture_door').hide();
        $('#texture_plank').hide();
        
        /*clear other content*/
        $('#markerless_file_up').val('');
        $('#icon_file_up').val('');
        $('#icon_file_up1').val('');
        $('#ar_content_up').val('');
        $('#ar_content_up02').val('');
        $('#ar_content_up03').val('');
        $('#ar_content_up04').val('');
        $('#ar_content_up05').val('');
        $('#gameIcon').val('');
        $('#assetsUrl').val('');
        $('#ar_video_up').val('');
        /*clear other content*/

         /*hide image preview*/
        $('#preview-1').hide();
        $('#preview1').hide();
        $('#preview-2').hide();
        $('#preview-3').hide();
        $('#preview-4').hide();
        $('#preview-5').hide();
        $('#preview-6').hide();
        $('#preview-7').hide();
        $('#preview-8').hide();
        $('#preview-9').hide();
        $('#preview-10').hide();
        $('#preview-11').hide();
        $('#preview-13').hide();


        /* Hide Game  Configuration */
        $('#gameIcons').hide();
        $('#assets').hide();
        $('#skybox').hide();
        $('#sceneMesh').hide();
        $('#BGMID').hide();
        $('#startA').hide();
        $('#landingA').hide();
        $('#inflightA').hide();
        $('#successA').hide();
        $('#characterM').hide();
        $('#characterA').hide();
        $('#characterMovementA').hide();
        $('#characterMovementT').hide();
        $('#allowToMove').hide();
        $('#move').hide();
        $('#rotate').hide();
        $('#gravity').hide();
        $('#touch').hide();
        $('#bonusMesh').hide();
        $('#time').hide();
        $('#failA').hide();
        $('#screenshotFace').hide();
        $('#idleAnimate').hide();
        $('#turnLeftAnimate').hide();
        $('#turnRightAnimate').hide();
        $('#MiniGame_video_enabled').hide();
        $('#game_texture_door').hide();
        $('#game_texture_plank').hide();
        $('#submitToCont').hide();
        $('#spinid').hide();
        $('#Horizontal').hide();
        /* End Hide Game  Configuration */
    }
    else if(obj.value == 'arPortal')
    {
        $('#pattern_file').hide();
        $('#animation_attributes').hide();
        
        $('#button_attributes').hide();
        $('#rotation_attributes').hide();

        $('#sub_div').hide();
        $('#marker_image').hide();
        $('#markerPreview').hide();
        $('#arPortal_content').hide();
        $('#text_to_display').hide();
        $('#button_image_file').hide();
        $('#button_link').hide();
        $('#image_file').hide();
        $('#audio_file').hide();
        $('#video_file').hide();
        $('#pdf_file').hide();
        $('#three_d_model_file').hide();
        $('#animation_file').hide();
        $('#three_d_animation_file').hide();
        $('#markerless_three_d_model_file').hide();
        $('#icon_file').hide();
        $('#icon_file1').hide();
        $('#arPortal_content').show();
        $('#arPortal_content02').show();
        $('#arPortal_content03').show();
        $('#arPortal_content04').show();
        $('#arPortal_content05').show();
        $('#PortalSwap').show();
        $('#arPortal_video_enabled').show();
        $('#texture_door').show();
        $('#texture_plank').show();

        /*Remove Content*/
        $('#markerless_file_up').val('');
        $('#icon_file_up').val('');
        $('#icon_file_up1').val('');
        $('#text_to_display_fld').val();
        $('#marker_img_file').val('');
        $('#btn_img_file').val('');
        $('#button_link_fld').val('');
        $('#image_file_up').val('');
        $('#audio_file_ip').val('');
        $('#video_file_up').val('');
        $('#pdf_file_up').val('');
        $('#3d_file_up').val('');
        $('#2d_animate_file_up').val('');
        $('#3d_animation_up').val('');
        $('#gameIcon').val('');
        $('#assetsUrl').val('');


         /*hide image preview*/
        $('#preview-1').hide();
        $('#preview1').hide();
        $('#preview-2').hide();
        $('#preview-3').hide();
        $('#preview-4').hide();
        $('#preview-5').hide();
        $('#preview-6').hide();
        $('#preview-9').hide();
        $('#preview-10').hide();

        /* Hide Game  Configuration */
        $('#gameIcons').hide();
        $('#assets').hide();
        $('#skybox').hide();
        $('#sceneMesh').hide();
        $('#BGMID').hide();
        $('#startA').hide();
        $('#landingA').hide();
        $('#inflightA').hide();
        $('#successA').hide();
        $('#characterM').hide();
        $('#characterA').hide();
        $('#characterMovementA').hide();
        $('#characterMovementT').hide();
        $('#allowToMove').hide();
        $('#move').hide();
        $('#rotate').hide();
        $('#gravity').hide();
        $('#touch').hide();
        $('#bonusMesh').hide();
        $('#time').hide();
        $('#failA').hide();
        $('#screenshotFace').hide();
        $('#idleAnimate').hide();
        $('#turnLeftAnimate').hide();
        $('#turnRightAnimate').hide();
        $('#MiniGame_video_enabled').hide();
        $('#game_texture_door').hide();
        $('#game_texture_plank').hide();
        $('#submitToCont').hide();
        $('#spinid').hide();
        $('#Horizontal').hide();
        /* End Hide Game  Configuration */

    }
    else if(obj.value == 'markerless_3d_model')
    {
      $('#animation_attributes').hide();
      $('#pattern_file').hide();
      $('#button_attributes').hide();
      $('#rotation_attributes').hide();

      $('#sub_div').hide();
      $('#marker_image').hide();
      $('#markerPreview').hide();
      $('#icon_file1').hide();
      $('#arPortal_content').hide();
      $('#arPortal_content02').hide();
      $('#arPortal_content03').hide();
      $('#arPortal_content04').hide();
      $('#arPortal_content05').hide();
      $('#PortalSwap').hide();
      $('#text_to_display').hide();
      $('#button_image_file').hide();
      $('#button_link').hide();
      $('#image_file').hide();
      $('#audio_file').hide();
      $('#video_file').hide();
      $('#pdf_file').hide();
      $('#three_d_model_file').hide();
      $('#animation_file').hide();
      $('#three_d_animation_file').hide();
      $('#arPortal_video_enabled').hide();
      $('#arPortal_video').hide();
      $('#texture_door').hide();
      $('#texture_plank').hide();
      
      $('#markerless_three_d_model_file').show();
      $('#icon_file').show();
      
      /*Remove content*/
      $('#marker_img_file').val('');
      $('#icon_file_up1').val('');
      $('#text_to_display_fld').val();
      $('#btn_img_file').val('');
      $('#button_link_fld').val('');
      $('#image_file_up').val('');
      $('#audio_file_ip').val('');
      $('#video_file_up').val('');
      $('#pdf_file_up').val('');
      $('#3d_file_up').val('');
      $('#2d_animate_file_up').val('');
      $('#3d_animation_up').val('');
      $('#ar_content_up').val('');
      $('#ar_content_up02').val('');
      $('#ar_content_up03').val('');
      $('#ar_content_up04').val('');
      $('#ar_content_up05').val('');
      $('#ar_video_up').val('');
      $('#gameIcon').val('');
      $('#assetsUrl').val('');


      /*hide image preview*/
      $('#preview-1').hide();
      $('#preview1').hide();
      $('#preview-2').hide();
      $('#preview-3').hide();
      $('#preview-4').hide();
      $('#preview-5').hide();
      $('#preview-6').hide();
      $('#preview-9').hide();
      $('#preview-10').hide();
      $('#preview-11').hide();
      $('#preview-13').hide();

      /* Hide Game  Configuration */
      $('#gameIcons').hide();
      $('#assets').hide();
      $('#skybox').hide();
      $('#sceneMesh').hide();
      $('#BGMID').hide();
      $('#startA').hide();
      $('#landingA').hide();
      $('#inflightA').hide();
      $('#successA').hide();
      $('#characterM').hide();
      $('#characterA').hide();
      $('#characterMovementA').hide();
      $('#characterMovementT').hide();
      $('#allowToMove').hide();
      $('#move').hide();
      $('#rotate').hide();
      $('#gravity').hide();
      $('#touch').hide();
      $('#bonusMesh').hide();
      $('#time').hide();
      $('#failA').hide();
      $('#screenshotFace').hide();
      $('#idleAnimate').hide();
      $('#turnLeftAnimate').hide();
      $('#turnRightAnimate').hide();
      $('#MiniGame_video_enabled').hide();
      $('#game_texture_door').hide();
      $('#game_texture_plank').hide();
      $('#submitToCont').hide();
      $('#spinid').hide();
      $('#Horizontal').hide();
      /* End Hide Game  Configuration */

    }
    else if(obj.value == 'MiniGameConfigs')
    {
      $('#pattern_file').hide();
      $('#animation_attributes').hide();
      $('#three_d_model_file').hide();
      
      $('#button_attributes').hide();
      $('#rotation_attributes').hide();

      $('#sub_div').hide();
      $('#marker_image').hide();
      $('#markerPreview').hide();
      $('#icon_file1').hide();
      $('#arPortal_content').hide();
      $('#arPortal_content02').hide();
      $('#arPortal_content03').hide();
      $('#arPortal_content04').hide();
      $('#arPortal_content05').hide();
      $('#PortalSwap').hide();
      $('#text_to_display').hide();
      $('#button_image_file').hide();
      $('#button_link').hide();
      $('#image_file').hide();
      $('#audio_file').hide();
      $('#video_file').hide();
      $('#pdf_file').hide();
      $('#animation_file').hide();
      $('#three_d_animation_file').hide();
      $('#arPortal_video_enabled').hide();
      $('#arPortal_video').hide();
      $('#texture_door').hide();
      $('#texture_plank').hide();
      $('#markerless_three_d_model_file').hide();
      $('#icon_file').hide();
      
      /*Remove content*/
      $('#marker_img_file').val('');
      $('#icon_file_up1').val('');
      $('#text_to_display_fld').val();
      $('#btn_img_file').val('');
      $('#button_link_fld').val('');
      $('#image_file_up').val('');
      $('#audio_file_ip').val('');
      $('#video_file_up').val('');
      $('#pdf_file_up').val('');
      $('#3d_file_up').val('');
      $('#2d_animate_file_up').val('');
      $('#3d_animation_up').val('');
      $('#ar_content_up').val('');
      $('#ar_content_up02').val('');
      $('#ar_content_up03').val('');
      $('#ar_content_up04').val('');
      $('#ar_content_up05').val('');
      $('#ar_video_up').val('');

      /*hide image preview*/
      $('#preview-1').hide();
      $('#preview1').hide();
      $('#preview-2').hide();
      $('#preview-3').hide();
      $('#preview-4').hide();
      $('#preview-5').hide();
      $('#preview-6').hide();
      $('#preview-9').hide();
      $('#preview-10').hide();
      $('#preview-11').hide();
      $('#preview-13').hide();

      /* Show Content */
      $('#gameIcons').show();
      $('#assets').show();
      $('#skybox').show();
      $('#sceneMesh').show();
      $('#BGMID').show();
      $('#startA').show();
      $('#landingA').show();
      $('#inflightA').show();
      $('#successA').show();
      $('#characterM').show();
      $('#characterA').show();
      $('#characterMovementA').show();
      $('#characterMovementT').show();
      $('#allowToMove').show();
      $('#move').show();
      $('#rotate').show();
      $('#gravity').show();
      $('#touch').show();
      $('#bonusMesh').show();
      $('#time').show();
      $('#failA').show();
      $('#screenshotFace').show();
      $('#idleAnimate').show();
      $('#turnLeftAnimate').show();
      $('#turnRightAnimate').show();
      $('#MiniGame_video_enabled').show();
      $('#game_texture_door').show();
      $('#game_texture_plank').show();
      $('#submitToCont').show();
      $('#spinid').show();
      $('#Horizontal').show();
      /* End Show Content */
    }
}

function show_div(obj)
{
	$('#marker_image').show();
	$('#icon_file1').show();
	$('#text_to_display').hide();
	$('#button_image_file').hide();
	$('#button_link').hide();
	$('#image_file').hide();
	$('#animation_file').hide();
	$('#3d_model_file').hide();
	$('#icon_file').hide();
	$('#three_d_animation_file').hide();
	$('#pdf_file').hide();
	$('#video_file').hide();
	$('#audio_file').hide();
	$('#pdf_file').hide();
	$('#markerless_three_d_model_file').hide();
	$('#three_d_model_file').hide();
	// $('#button_color_fld').val('');
	// $('#text_color_fld').val('');
	$('#button_attributes').hide();
  
  $('#rotating_needle_fld').val('');
  // $('#resizing_fld_value').val('');
  $('#rotation_attributes').hide();

	if(obj.value=='text')
	{
    	$('#text_to_display').show();
        $('#btn_img_file').val('');
        $('#button_link_fld').val('');
        $('#image_file_up').val('');
        $('#audio_file_ip').val('');
        $('#video_file_up').val('');
        $('#pdf_file_up').val('');
        $('#3d_file_up').val('');
        $('#2d_animate_file_up').val('');
        $('#3d_animation_up').val('');
        
        // $('#button_color_fld').val('');
        // $('#text_color_fld').val('');
        $('#button_attributes').show();
    
        // $('#rotating_needle_fld').val('');
        // $('#resizing_fld_value').val('');
        $('#rotation_attributes').show();
    
        $('#preview-1').hide();
        $('#preview1').hide();
        $('#preview-2').hide();
        $('#preview-3').hide();
        $('#preview-4').hide();
        $('#preview-5').hide();
        $('#preview-6').hide();
        $('#preview-7').hide();
        $('#preview-8').hide();
        $('#preview-9').hide();
        $('#preview-10').hide();
	}
	else if(obj.value=='button')
	{
    	$('#button_image_file').show();
    	$('#button_link').show();
        $('#button_attributes').show();
        $('#rotation_attributes').show();
        
        
        $('#text_to_display_fld').val();
        $('#image_file_up').val('');
        $('#audio_file_ip').val('');
        $('#video_file_up').val('');
        $('#pdf_file_up').val('');
        $('#3d_file_up').val('');
        $('#2d_animate_file_up').val('');
        $('#3d_animation_up').val('');
    
        $('#preview-2').hide();
        $('#preview-3').hide();
        $('#preview-4').hide();
        $('#preview-5').hide();
        $('#preview-6').hide();
        $('#preview-7').hide();
        $('#preview-8').hide();
        $('#preview-9').hide();
        $('#preview-10').hide();
	}
	else if(obj.value=='image')
	{
    	$('#image_file').show();
    
        $('#text_to_display_fld').val();
        $('#btn_img_file').val('');
        $('#button_link_fld').val('');
        $('#audio_file_ip').val('');
        $('#video_file_up').val('');
        $('#pdf_file_up').val('');
        $('#3d_file_up').val('');
        $('#2d_animate_file_up').val('');
        $('#3d_animation_up').val('');
    
        // $('#button_color_fld').val('');
        // $('#text_color_fld').val('');
        $('#button_attributes').hide();
    
        $('#rotating_needle_fld').val('');
        $('#resizing_fld_value').val('');
        $('#rotation_attributes').hide();
    
        $('#preview-1').hide();
        $('#preview1').hide();
        $('#preview-3').hide();
        $('#preview-4').hide();
        $('#preview-5').hide();
        $('#preview-6').hide();
        $('#preview-7').hide();
        $('#preview-8').hide();
        $('#preview-9').hide();
        $('#preview-10').hide();
	}
	else if(obj.value=='audio')
	{
    	$('#audio_file').show();
    
        $('#text_to_display_fld').val();
        $('#btn_img_file').val('');
        $('#button_link_fld').val('');
        $('#image_file_up').val('');
        $('#video_file_up').val('');
        $('#pdf_file_up').val('');
        $('#3d_file_up').val('');
        $('#2d_animate_file_up').val('');
        $('#3d_animation_up').val('');
    
        // $('#button_color_fld').val('');
        // $('#text_color_fld').val('');
        $('#button_attributes').hide();
    
        $('#rotating_needle_fld').val('');
        $('#resizing_fld_value').val('');
        $('#rotation_attributes').hide();
    
        $('#preview-1').hide();
        $('#preview1').hide();
        $('#preview-2').hide();
        $('#preview-4').hide();
        $('#preview-5').hide();
        $('#preview-6').hide();
        $('#preview-7').hide();
        $('#preview-8').hide();
        $('#preview-9').hide();
        $('#preview-10').hide();
	}
	else if(obj.value=='video')
	{
    	$('#video_file').show();
    
        $('#text_to_display_fld').val();
        $('#btn_img_file').val('');
        $('#button_link_fld').val('');
        $('#image_file_up').val('');
        $('#audio_file_ip').val('');
        $('#pdf_file_up').val('');
        $('#3d_file_up').val('');
        $('#2d_animate_file_up').val('');
        $('#3d_animation_up').val('');
    
        // $('#button_color_fld').val('');
        // $('#text_color_fld').val('');
        $('#button_attributes').hide();
    
        $('#rotating_needle_fld').val('');
        // $('#resizing_fld_value').val('');
        $('#rotation_attributes').hide();
    
        $('#preview-1').hide();
        $('#preview1').hide();
        $('#preview-2').hide();
        $('#preview-3').hide();
        $('#preview-5').hide();
        $('#preview-6').hide();
        $('#preview-7').hide();
        $('#preview-8').hide();
        $('#preview-9').hide();
        $('#preview-10').hide();
	}
	else if(obj.value=='pdf')
	{
    	$('#pdf_file').show();
    
        $('#text_to_display_fld').val();
        $('#btn_img_file').val('');
        $('#button_link_fld').val('');
        $('#image_file_up').val('');
        $('#audio_file_ip').val('');
        $('#video_file_up').val('');
        $('#3d_file_up').val('');
        $('#2d_animate_file_up').val('');
        $('#3d_animation_up').val('');
    
        // $('#button_color_fld').val('');
        // $('#text_color_fld').val('');
        $('#button_attributes').hide();
    
        $('#rotating_needle_fld').val('');
        // $('#resizing_fld_value').val('');
        $('#rotation_attributes').hide();
    
        $('#preview-1').hide();
        $('#preview1').hide();
        $('#preview-2').hide();
        $('#preview-3').hide();
        $('#preview-4').hide();
        $('#preview-6').hide();
        $('#preview-7').hide();
        $('#preview-8').hide();
        $('#preview-9').hide();
        $('#preview-10').hide();
	}

	else if(obj.value=='3d_model')
	{
    	$('#three_d_model_file').show();
    	$('#pattern_file').show();
    
        $('#text_to_display_fld').val();
        $('#btn_img_file').val('');
        $('#button_link_fld').val('');
        $('#image_file_up').val('');
        $('#audio_file_ip').val('');
        $('#video_file_up').val('');
        $('#pdf_file_up').val('');
        $('#2d_animate_file_up').val('');
        $('#3d_animation_up').val('');
    
        // $('#button_color_fld').val('');
        // $('#text_color_fld').val('');
        $('#button_attributes').hide();
    
        $('#rotating_needle_fld').val('');
        // $('#resizing_fld_value').val('');
        $('#rotation_attributes').hide();
    
        $('#preview-1').hide();
        $('#preview1').hide();
        $('#preview-2').hide();
        $('#preview-3').hide();
        $('#preview-4').hide();
        $('#preview-5').hide();
        $('#preview-7').hide();
        $('#preview-8').hide();
        $('#preview-9').hide();
        $('#preview-10').hide();
	}
	else if(obj.value=='3d_animation')
	{
        //	$('#marker_image').hide();
    	$('#three_d_animation_file').show();
    
        $('#text_to_display_fld').val();
        $('#btn_img_file').val('');
        $('#button_link_fld').val('');
        $('#image_file_up').val('');
        $('#audio_file_ip').val('');
        $('#video_file_up').val('');
        $('#pdf_file_up').val('');
        $('#3d_file_up').val('');
        $('#2d_animate_file_up').val('');
    
        // $('#button_color_fld').val('');
        // $('#text_color_fld').val('');
        $('#button_attributes').hide();
    
        $('#rotating_needle_fld').val('');
        // $('#resizing_fld_value').val('');
        $('#rotation_attributes').hide();
    
        $('#preview-1').hide();
        $('#preview1').hide();
        $('#preview-2').hide();
        $('#preview-3').hide();
        $('#preview-4').hide();
        $('#preview-5').hide();
        $('#preview-6').hide();
        $('#preview-7').hide();
        $('#preview-8').hide();
        $('#preview-9').hide();
	}
	else if(obj.value=='2d_animation')
	{
        //	$('#marker_image').hide();
    	$('#animation_file').show();
    
        $('#text_to_display_fld').val();
        $('#btn_img_file').val('');
        $('#button_link_fld').val('');
        $('#image_file_up').val('');
        $('#audio_file_ip').val('');
        $('#video_file_up').val('');
        $('#pdf_file_up').val('');
        $('#3d_file_up').val('');
        $('#3d_animation_up').val('');
    
        // $('#button_color_fld').val('');
        // $('#text_color_fld').val('');
        $('#button_attributes').hide();
    
        $('#rotating_needle_fld').val('');
        // $('#resizing_fld_value').val('');
        $('#rotation_attributes').hide();
    
    
        $('#preview-1').hide();
        $('#preview1').hide();
        $('#preview-2').hide();
        $('#preview-3').hide();
        $('#preview-4').hide();
        $('#preview-5').hide();
        $('#preview-6').hide();
        $('#preview-7').hide();
        $('#preview-8').hide();
        $('#preview-10').hide();
	}
	else if(obj.value=='markerless_3d_model')
	{
        // $('#button_color_fld').val('');
        // $('#text_color_fld').val('');
        $('#button_attributes').hide();
    
        $('#rotating_needle_fld').val('');
        // $('#resizing_fld_value').val('');
        $('#rotation_attributes').hide();
    
        
    	$('#marker_image').hide();
        $('#icon_file1').hide();
    	$('#markerless_three_d_model_file').show();
    	$('#icon_file').show();
	}
}


function ar_module_edit(ardata){
   ar_id=ardata.ar_id;
  // document.getElementById("ar_table").style.display = "none";
  //  document.getElementById("save").style.display = "none";
  // document.getElementById("saveandnew").style.display = "none";
  // document.getElementById("Edit").style.display = "block";
  // document.getElementById("exptypediv").style.display = "block";

  $('input[name="exp_name"]').val(ardata.exp_name);

  //  $('input[name="marker_image_edit"]').val(ardata.marker_image);

  // document.getElementById("screenshot_enabled").checked = ardata.screenshot_enabled;
  // document.getElementById("shared_enabled").checked = ardata.shared_enabled;
  // document.getElementById("interactive_enabled").checked = ardata.interactive_enabled;
  // document.getElementById("MeshRunTimeShadow").checked = ardata.MeshRunTimeShadow;

  //$('input[id="exptypediv"]').val(ardata.exp_type);
  //document.getElementById("marker").innerHTML = "current file:"+ardata.marker_image;

  // if(ardata.exp_type!="markerless_3d_model")
  // {
    $('#lat').val(ardata.latitude);
     $('#lng').val(ardata.longitude);
     $('#geo_range').val(ardata.geo_range);
  // }

  if(ardata.exp_type=="text"){
            document.getElementById("text_to_display").style.display = "block";
            
            document.getElementById("text").selected=true;
        //    $('input[name="exp_name"]').val(ardata.exp_name);
           
        //    $('input[name="button_link"]').val(ardata.button_link);
            $('input[name="text_to_display"]').val(ardata.text_to_display);

            //$('input[name="screenshot_enabled"]').checked=true;
            document.getElementById("screenshot_enabled").checked = ardata.screenshot_enabled;
            document.getElementById("shared_enabled").checked = ardata.shared_enabled;
            document.getElementById("ar_load_animation_enabled").checked = ardata.ar_load_animation_enabled;
            
         
            document.getElementById(ardata.ar_load_animation_file).selected=true;
            // document.getElementById("scale").checked = ardata.scale_enabled;
            // document.getElementById("move").checked = ardata.move_enabled;
            // document.getElementById("rotate").checked = ardata.rotate_enabled;
           

            // $('input[name="original_xpos"]').val(ardata.original_xpos);
            // $('input[name="original_ypos"]').val(ardata.original_ypos);
            // $('input[name="original_zpos"]').val(ardata.original_zpos);
            // $('input[name="cons_x"]').val(ardata.cons_x);
            // $('input[name="cons_y"]').val(ardata.cons_y);
            // $('input[name="cons_z"]').val(ardata.cons_z);
            // $('input[name="original_Scale"]').val(ardata.original_Scale);
            // $('input[name="minimum_scale"]').val(ardata.minimum_scale);
            // $('input[name="maximum_scale"]').val(ardata.maximum_scale);
            // $('input[name="x_rotation"]').val(ardata.x_rotation);
            // $('input[name="y_rotation"]').val(ardata.y_rotation);
            // $('input[name="z_rotation"]').val(ardata.z_rotation);
            // $('input[name="x_scale"]').val(ardata.x_scale);
            // $('input[name="y_scale"]').val(ardata.y_scale);
            // $('input[name="z_scale"]').val(ardata.z_scale);




            ////////// rest options hide
            document.getElementById("image_file").style.display = "none";
            document.getElementById("audio_file").style.display = "none";
            document.getElementById("video_file").style.display = "none";
            document.getElementById("button_image_file").style.display = "none";
            document.getElementById("button_link").style.display = "none";
            document.getElementById("pdf_file").style.display = "none";
            document.getElementById("3d_model_file").style.display = "none";
            document.getElementById("animation_file").style.display = "none";
            document.getElementById("3d_anim").style.display = "none";

            document.getElementById("scale_enabled").style.display = "block";
            document.getElementById("move_enabled").style.display = "block";
            document.getElementById("rotate_enabled").style.display = "none";
            
            // document.getElementById("origin_x").style.display = "block";
            // document.getElementById("origin_y").style.display = "block";
            // document.getElementById("origin_z").style.display = "block";
           
            // document.getElementById("cons_x").style.display = "block";
            // document.getElementById("cons_y").style.display = "block";
            // document.getElementById("cons_z").style.display = "block";
            // document.getElementById("origin_Scale").style.display = "block";
            // document.getElementById("min_scale").style.display = "block";
            // document.getElementById("max_scale").style.display = "block";





            // document.getElementById("x_rotate").style.display = "none";
            // document.getElementById("y_rotate").style.display = "none";
            // document.getElementById("z_rotate").style.display = "none";
            // document.getElementById("x_Scale").style.display = "none";
            // document.getElementById("y_scale").style.display = "none";
            // document.getElementById("z_scale").style.display = "none";



            // document.getElementById("ar_form").style.display = "block";
         }
          
          if(ardata.exp_type=="image"){
            document.getElementById("image_file").style.display = "block";
            $('input[name="image_edit"]').val(ardata.image_file);
            // document.getElementById("image_edit").innerHTML = "current file:"+ardata.image_file;
            // document.getElementById("image").selected=true;
            $('input[name="exp_name"]').val(ardata.exp_name);

              //$('input[name="image_file"]').val(ardata.image_file);

            document.getElementById("screenshot_enabled").checked = ardata.screenshot_enabled;
            document.getElementById("shared_enabled").checked = ardata.shared_enabled;
            document.getElementById("ar_load_animation_enabled").checked = ardata.ar_load_animation_enabled;
            
         
            document.getElementById(ardata.ar_load_animation_file).selected=true;
            // document.getElementById("scale").checked = ardata.scale_enabled;
            // document.getElementById("move").checked = ardata.move_enabled;
            // document.getElementById("rotate").checked = ardata.rotate_enabled;
           

            // $('input[name="original_xpos"]').val(ardata.original_xpos);
            // $('input[name="original_ypos"]').val(ardata.original_ypos);
            // $('input[name="original_zpos"]').val(ardata.original_zpos);
            // $('input[name="cons_x"]').val(ardata.cons_x);
            // $('input[name="cons_y"]').val(ardata.cons_y);
            // $('input[name="cons_z"]').val(ardata.cons_z);
            // $('input[name="original_Scale"]').val(ardata.original_Scale);
            // $('input[name="minimum_scale"]').val(ardata.minimum_scale);
            // $('input[name="maximum_scale"]').val(ardata.maximum_scale);
            // $('input[name="x_rotation"]').val(ardata.x_rotation);
            // $('input[name="y_rotation"]').val(ardata.y_rotation);
            // $('input[name="z_rotation"]').val(ardata.z_rotation);
            // $('input[name="x_scale"]').val(ardata.x_scale);
            // $('input[name="y_scale"]').val(ardata.y_scale);
            // $('input[name="z_scale"]').val(ardata.z_scale);


             ////////// rest options hide
            document.getElementById("texttodisplay").style.display = "none";
            document.getElementById("audio_file").style.display = "none";
            document.getElementById("video_file").style.display = "none";
            document.getElementById("button_image_file").style.display = "none";
            document.getElementById("button_link").style.display = "none";
            document.getElementById("pdf_file").style.display = "none";
            document.getElementById("3d_model_file").style.display = "none";
            document.getElementById("animation_file").style.display = "none";
            document.getElementById("3d_anim").style.display = "none";

            document.getElementById("scale_enabled").style.display = "block";
            document.getElementById("move_enabled").style.display = "block";
            document.getElementById("rotate_enabled").style.display = "none";
           

            // document.getElementById("origin_x").style.display = "block";
            // document.getElementById("origin_y").style.display = "block";
            // document.getElementById("origin_z").style.display = "block";

            // document.getElementById("cons_x").style.display = "block";
            // document.getElementById("cons_y").style.display = "block";
            // document.getElementById("cons_z").style.display = "block";
            // document.getElementById("origin_Scale").style.display = "block";
            // document.getElementById("min_scale").style.display = "block";
            // document.getElementById("max_scale").style.display = "block";





            // document.getElementById("x_rotate").style.display = "none";
            // document.getElementById("y_rotate").style.display = "none";
            // document.getElementById("z_rotate").style.display = "none";
            // document.getElementById("x_Scale").style.display = "none";
            // document.getElementById("y_scale").style.display = "none";
            // document.getElementById("z_scale").style.display = "none";



            // document.getElementById("ar_form").style.display = "block";
          }
          if(ardata.exp_type=="audio"){
            document.getElementById("audio_file").style.display = "block";
            // $('input[name="audio_edit"]').val(ardata.audio);
            // document.getElementById("audio_edit").innerHTML = "current file:"+ardata.audio;


             // document.getElementById("audio").selected=true;
            $('input[name="exp_name"]').val(ardata.exp_name);

              //$('input[name="image_file"]').val(ardata.image_file);

            document.getElementById("screenshot_enabled").checked = ardata.screenshot_enabled;
            document.getElementById("shared_enabled").checked = ardata.shared_enabled;
            document.getElementById("ar_load_animation_enabled").checked = ardata.ar_load_animation_enabled;
            
           
            document.getElementById(ardata.ar_load_animation_file).selected=true;
            

             
             ////////// rest options hide
            document.getElementById("texttodisplay").style.display = "none";
            document.getElementById("image_file").style.display = "none";
            document.getElementById("video_file").style.display = "none";
            document.getElementById("button_image_file").style.display = "none";
            document.getElementById("button_link").style.display = "none";
            document.getElementById("pdf_file").style.display = "none";
            document.getElementById("animation_file").style.display = "none";
            document.getElementById("3d_model_file").style.display = "none";
            document.getElementById("3d_anim").style.display = "none";

            document.getElementById("scale_enabled").style.display = "none";
            document.getElementById("move_enabled").style.display = "none";
            document.getElementById("rotate_enabled").style.display = "none";

            
            // document.getElementById("origin_x").style.display = "none";
            // document.getElementById("origin_y").style.display = "none";
            // document.getElementById("origin_z").style.display = "none";
            // document.getElementById("cons_x").style.display = "none";
            // document.getElementById("cons_y").style.display = "none";
            // document.getElementById("cons_z").style.display = "none";
            // document.getElementById("origin_Scale").style.display = "none";
            // document.getElementById("min_scale").style.display = "none";
            // document.getElementById("max_scale").style.display = "none";





            // document.getElementById("x_rotate").style.display = "none";
            // document.getElementById("y_rotate").style.display = "none";
            // document.getElementById("z_rotate").style.display = "none";
            // document.getElementById("x_Scale").style.display = "none";
            // document.getElementById("y_scale").style.display = "none";
            // document.getElementById("z_scale").style.display = "none";



            // document.getElementById("ar_form").style.display = "block";
          }
          if(ardata.exp_type=="video"){
            document.getElementById("video_file").style.display = "block";
           

            // $('input[name="video_edit"]').val(ardata.video_file);
            // document.getElementById("video_edit").innerHTML = "current file:"+ardata.video_file;



            // document.getElementById("video").selected=true;
            $('input[name="exp_name"]').val(ardata.exp_name);

              //$('input[name="image_file"]').val(ardata.image_file);

            document.getElementById("screenshot_enabled").checked = ardata.screenshot_enabled;
            document.getElementById("shared_enabled").checked = ardata.shared_enabled;
            document.getElementById("ar_load_animation_enabled").checked = ardata.ar_load_animation_enabled;
            
         
            document.getElementById(ardata.ar_load_animation_file).selected=true;
            document.getElementById("scale").checked = ardata.scale_enabled;
            document.getElementById("move").checked = ardata.move_enabled;
            document.getElementById("rotate").checked = ardata.rotate_enabled;
           

            $('input[name="original_xpos"]').val(ardata.original_xpos);
            $('input[name="original_ypos"]').val(ardata.original_ypos);
            $('input[name="original_zpos"]').val(ardata.original_zpos);
            $('input[name="cons_x"]').val(ardata.cons_x);
            $('input[name="cons_y"]').val(ardata.cons_y);
            $('input[name="cons_z"]').val(ardata.cons_z);
            $('input[name="original_Scale"]').val(ardata.original_Scale);
            $('input[name="minimum_scale"]').val(ardata.minimum_scale);
            $('input[name="maximum_scale"]').val(ardata.maximum_scale);
            $('input[name="x_rotation"]').val(ardata.x_rotation);
            $('input[name="y_rotation"]').val(ardata.y_rotation);
            $('input[name="z_rotation"]').val(ardata.z_rotation);
            $('input[name="x_scale"]').val(ardata.x_scale);
            $('input[name="y_scale"]').val(ardata.y_scale);
            $('input[name="z_scale"]').val(ardata.z_scale);
 
            ////////// rest options hide
            document.getElementById("texttodisplay").style.display = "none";
            document.getElementById("image_file").style.display = "none";
            document.getElementById("audio_file").style.display = "none";
           document.getElementById("button_image_file").style.display = "none";
            document.getElementById("button_link").style.display = "none";
            document.getElementById("pdf_file").style.display = "none";
            document.getElementById("animation_file").style.display = "none";
            document.getElementById("3d_model_file").style.display = "none";
            document.getElementById("3d_anim").style.display = "none";

            document.getElementById("scale_enabled").style.display = "none";
            document.getElementById("move_enabled").style.display = "none";
            document.getElementById("rotate_enabled").style.display = "none";
            
            document.getElementById("origin_x").style.display = "block";
            document.getElementById("origin_y").style.display = "block";
            document.getElementById("origin_z").style.display = "block";
            document.getElementById("cons_x").style.display = "none";
            document.getElementById("cons_y").style.display = "none";
            document.getElementById("cons_z").style.display = "none";
            document.getElementById("origin_Scale").style.display = "none";
            document.getElementById("min_scale").style.display = "none";
            document.getElementById("max_scale").style.display = "none";





            document.getElementById("x_rotate").style.display = "block";
            document.getElementById("y_rotate").style.display = "block";
            document.getElementById("z_rotate").style.display = "block";
            document.getElementById("x_Scale").style.display = "block";
            document.getElementById("y_scale").style.display = "block";
            document.getElementById("z_scale").style.display = "block";



            document.getElementById("ar_form").style.display = "block";
          }
          if(ardata.exp_type=="button"){

            // $('#ar_category_select').val(ardata.ar_category);
            $("#ar_category_select option[value='"+ardata.ar_category+"']").prop('selected', true);


            document.getElementById("button_image_file").style.display = "block";
            document.getElementById("button_link").style.display = "block";
            
            // $('input[name="button_image_edit"]').val(ardata.button_image_file);
            // document.getElementById("button_image").innerHTML = "current file:"+ardata.button_image_file;


            // document.getElementById("button").selected=true;
            $('input[name="exp_name"]').val(ardata.exp_name);

              //$('input[name="image_file"]').val(ardata.image_file);

            document.getElementById("screenshot_enabled").checked = ardata.screenshot_enabled;
            document.getElementById("shared_enabled").checked = ardata.shared_enabled;
            document.getElementById("ar_load_animation_enabled").checked = ardata.ar_load_animation_enabled;
            
         
            document.getElementById(ardata.ar_load_animation_file).selected=true;
            // document.getElementById("scale").checked = ardata.scale_enabled;
            // document.getElementById("move").checked = ardata.move_enabled;
            // document.getElementById("rotate").checked = ardata.rotate_enabled;
           

            // $('input[name="original_xpos"]').val(ardata.original_xpos);
            // $('input[name="original_ypos"]').val(ardata.original_ypos);
            // $('input[name="original_zpos"]').val(ardata.original_zpos);
            // $('input[name="cons_x"]').val(ardata.cons_x);
            // $('input[name="cons_y"]').val(ardata.cons_y);
            // $('input[name="cons_z"]').val(ardata.cons_z);
            // $('input[name="original_Scale"]').val(ardata.original_Scale);
            // $('input[name="minimum_scale"]').val(ardata.minimum_scale);
            // $('input[name="maximum_scale"]').val(ardata.maximum_scale);
            // $('input[name="x_rotation"]').val(ardata.x_rotation);
            // $('input[name="y_rotation"]').val(ardata.y_rotation);
            // $('input[name="z_rotation"]').val(ardata.z_rotation);
            // $('input[name="x_scale"]').val(ardata.x_scale);
            // $('input[name="y_scale"]').val(ardata.y_scale);
            // $('input[name="z_scale"]').val(ardata.z_scale);

           ////////// rest options hide
            document.getElementById("image_file").style.display = "none";
            document.getElementById("audio_file").style.display = "none";
            document.getElementById("video_file").style.display = "none";
            document.getElementById("texttodisplay").style.display = "none";
            document.getElementById("pdf_file").style.display = "none";
            document.getElementById("3d_model_file").style.display = "none";
            document.getElementById("animation_file").style.display = "none";
            document.getElementById("3d_anim").style.display = "none";

            document.getElementById("scale_enabled").style.display = "block";
            document.getElementById("move_enabled").style.display = "block";
            document.getElementById("rotate_enabled").style.display = "none";
           

            // document.getElementById("origin_x").style.display = "block";
            // document.getElementById("origin_y").style.display = "block";
            // document.getElementById("origin_z").style.display = "block";

            // document.getElementById("cons_x").style.display = "block";
            // document.getElementById("cons_y").style.display = "block";
            // document.getElementById("cons_z").style.display = "block";
            // document.getElementById("origin_Scale").style.display = "block";
            // document.getElementById("min_scale").style.display = "block";
            // document.getElementById("max_scale").style.display = "block";





            // document.getElementById("x_rotate").style.display = "none";
            // document.getElementById("y_rotate").style.display = "none";
            // document.getElementById("z_rotate").style.display = "none";
            // document.getElementById("x_Scale").style.display = "none";
            // document.getElementById("y_scale").style.display = "none";
            // document.getElementById("z_scale").style.display = "none";



            // document.getElementById("ar_form").style.display = "block";
          }
          if(ardata.exp_type=="pdf"){
            document.getElementById("pdf_file").style.display = "block";
            
            $('input[name="pdf_edit"]').val(ardata.pdf_file);
            // document.getElementById("pdf_edit").innerHTML = "current file:"+ardata.pdf_file;


            // document.getElementById("pdf").selected=true;
            $('input[name="exp_name"]').val(ardata.exp_name);

              //$('input[name="image_file"]').val(ardata.image_file);

            document.getElementById("screenshot_enabled").checked = ardata.screenshot_enabled;
            document.getElementById("shared_enabled").checked = ardata.shared_enabled;
            document.getElementById("ar_load_animation_enabled").checked = ardata.ar_load_animation_enabled;
            
         
            document.getElementById(ardata.ar_load_animation_file).selected=true;
            document.getElementById("scale").checked = ardata.scale_enabled;
            document.getElementById("move").checked = ardata.move_enabled;
            document.getElementById("rotate").checked = ardata.rotate_enabled;
           

            // $('input[name="original_xpos"]').val(ardata.original_xpos);
            // $('input[name="original_ypos"]').val(ardata.original_ypos);
            // $('input[name="original_zpos"]').val(ardata.original_zpos);
            // $('input[name="cons_x"]').val(ardata.cons_x);
            // $('input[name="cons_y"]').val(ardata.cons_y);
            // $('input[name="cons_z"]').val(ardata.cons_z);
            // $('input[name="original_Scale"]').val(ardata.original_Scale);
            // $('input[name="minimum_scale"]').val(ardata.minimum_scale);
            // $('input[name="maximum_scale"]').val(ardata.maximum_scale);
            // $('input[name="x_rotation"]').val(ardata.x_rotation);
            // $('input[name="y_rotation"]').val(ardata.y_rotation);
            // $('input[name="z_rotation"]').val(ardata.z_rotation);
            // $('input[name="x_scale"]').val(ardata.x_scale);
            // $('input[name="y_scale"]').val(ardata.y_scale);
            // $('input[name="z_scale"]').val(ardata.z_scale);

            ////////// rest options hide
            document.getElementById("texttodisplay").style.display = "none";
            document.getElementById("image_file").style.display = "none";
            document.getElementById("audio_file").style.display = "none";
            document.getElementById("video_file").style.display = "none";
            document.getElementById("button_image_file").style.display = "none";
            document.getElementById("button_link").style.display = "none";
            document.getElementById("animation_file").style.display = "none";
            document.getElementById("3d_model_file").style.display = "none";
            document.getElementById("3d_anim").style.display = "none";

            document.getElementById("scale_enabled").style.display = "none";
            document.getElementById("move_enabled").style.display = "none";
            document.getElementById("rotate_enabled").style.display = "none";
           
            // document.getElementById("origin_x").style.display = "block";
            // document.getElementById("origin_y").style.display = "block";
            // document.getElementById("origin_z").style.display = "block";

            // document.getElementById("cons_x").style.display = "none";
            // document.getElementById("cons_y").style.display = "none";
            // document.getElementById("cons_z").style.display = "none";
            // document.getElementById("origin_Scale").style.display = "none";
            // document.getElementById("min_scale").style.display = "none";
            // document.getElementById("max_scale").style.display = "none";





            // document.getElementById("x_rotate").style.display = "block";
            // document.getElementById("y_rotate").style.display = "block";
            // document.getElementById("z_rotate").style.display = "block";
            // document.getElementById("x_Scale").style.display = "block";
            // document.getElementById("y_scale").style.display = "block";
            // document.getElementById("z_scale").style.display = "block";



            // document.getElementById("ar_form").style.display = "block";
          }
          if(ardata.exp_type=="3d_model"){
            document.getElementById("3d_model_file").style.display = "block";
           

            // $('input[name="3d_model_edit"]').val(ardata.three_d_model_file);
           // document.getElementById("3d_model_edit").innerHTML = "current file:"+ardata.three_d_model_file;

            // document.getElementById("3d_model").selected=true;
            $('input[name="exp_name"]').val(ardata.exp_name);

              //$('input[name="image_file"]').val(ardata.image_file);

            document.getElementById("screenshot_enabled").checked = ardata.screenshot_enabled;
            document.getElementById("shared_enabled").checked = ardata.shared_enabled;
            document.getElementById("ar_load_animation_enabled").checked = ardata.ar_load_animation_enabled;
            
         
            document.getElementById(ardata.ar_load_animation_file).selected=true;
            document.getElementById("scale").checked = ardata.scale_enabled;
            document.getElementById("move").checked = ardata.move_enabled;
            document.getElementById("rotate").checked = ardata.rotate_enabled;
           

            // $('input[name="original_xpos"]').val(ardata.original_xpos);
            // $('input[name="original_ypos"]').val(ardata.original_ypos);
            // $('input[name="original_zpos"]').val(ardata.original_zpos);
            // $('input[name="cons_x"]').val(ardata.cons_x);
            // $('input[name="cons_y"]').val(ardata.cons_y);
            // $('input[name="cons_z"]').val(ardata.cons_z);
            // $('input[name="original_Scale"]').val(ardata.original_Scale);
            // $('input[name="minimum_scale"]').val(ardata.minimum_scale);
            // $('input[name="maximum_scale"]').val(ardata.maximum_scale);
            // $('input[name="x_rotation"]').val(ardata.x_rotation);
            // $('input[name="y_rotation"]').val(ardata.y_rotation);
            // $('input[name="z_rotation"]').val(ardata.z_rotation);
            // $('input[name="x_scale"]').val(ardata.x_scale);
            // $('input[name="y_scale"]').val(ardata.y_scale);
            // $('input[name="z_scale"]').val(ardata.z_scale);

            

              ////////// rest options hide
            document.getElementById("texttodisplay").style.display = "none";
            document.getElementById("image_file").style.display = "none";
            document.getElementById("audio_file").style.display = "none";
            document.getElementById("video_file").style.display = "none";
            document.getElementById("button_image_file").style.display = "none";
            document.getElementById("button_link").style.display = "none";
            document.getElementById("pdf_file").style.display = "none";
            document.getElementById("animation_file").style.display = "none";
            document.getElementById("3d_anim").style.display = "none";

            document.getElementById("scale_enabled").style.display = "block";
            document.getElementById("move_enabled").style.display = "block";
            document.getElementById("rotate_enabled").style.display = "block";
           
            // document.getElementById("origin_x").style.display = "block";
            // document.getElementById("origin_y").style.display = "block";
            // document.getElementById("origin_z").style.display = "block";

            // document.getElementById("cons_x").style.display = "block";
            // document.getElementById("cons_y").style.display = "block";
            // document.getElementById("cons_z").style.display = "block";
            // document.getElementById("origin_Scale").style.display = "block";
            // document.getElementById("min_scale").style.display = "block";
            // document.getElementById("max_scale").style.display = "block";





            // document.getElementById("x_rotate").style.display = "none";
            // document.getElementById("y_rotate").style.display = "none";
            // document.getElementById("z_rotate").style.display = "none";
            // document.getElementById("x_Scale").style.display = "none";
            // document.getElementById("y_scale").style.display = "none";
            // document.getElementById("z_scale").style.display = "none";



            // document.getElementById("ar_form").style.display = "block";
          }
          if(ardata.exp_type=="markerless_3d_model"){
           
            document.getElementById("ar_category").style.display = "none";
            // document.getElementById("ar_map").style.display = "none";
            // document.getElementById("ar_lat").style.display = "none";
            // document.getElementById("ar_lng").style.display = "none";
            // document.getElementById("ar_geo").style.display = "none";


            document.getElementById("3d_model_file").style.display = "block";
            document.getElementById("icon_file").style.display = "block";
            document.getElementById("marker_imagee").style.display = "none";

            $('input[name="3d_model_edit"]').val(ardata.three_d_model_file);
            $('input[name="icon_file_edit"]').val(ardata.icon_file);
           document.getElementById("3d_model_edit").innerHTML = "current file:"+ardata.three_d_model_file;
           document.getElementById("icon_edit").innerHTML = "current file:"+ardata.icon_file;

            document.getElementById("markerless_3d_model").selected=true;
            $('input[name="exp_name"]').val(ardata.exp_name);

              //$('input[name="image_file"]').val(ardata.image_file);

            document.getElementById("screenshot_enabled").checked = ardata.screenshot_enabled;
            document.getElementById("shared_enabled").checked = ardata.shared_enabled;
           document.getElementById("ar_load_animation").style.display = "none";
           document.getElementById("ar_load_animation_file").style.display = "none";
         
          //  document.getElementById(ardata.ar_load_animation_file).selected=true;
            // $('input[name="original_xpos"]').val('');
            // $('input[name="original_ypos"]').val('');
            // $('input[name="original_zpos"]').val('');
            // $('input[name="cons_x"]').val('');
            // $('input[name="cons_y"]').val('');
            // $('input[name="cons_z"]').val('');
            // $('input[name="original_Scale"]').val('');
            // $('input[name="minimum_scale"]').val('');
            // $('input[name="maximum_scale"]').val('');
            // $('input[name="x_rotation"]').val('');
            // $('input[name="y_rotation"]').val('');
            // $('input[name="z_rotation"]').val('');
            // $('input[name="x_scale"]').val('');
            // $('input[name="y_scale"]').val('');
            // $('input[name="z_scale"]').val('');
            

              ////////// rest options hide
            document.getElementById("texttodisplay").style.display = "none";
            document.getElementById("image_file").style.display = "none";
            document.getElementById("audio_file").style.display = "none";
            document.getElementById("video_file").style.display = "none";
            document.getElementById("button_image_file").style.display = "none";
            document.getElementById("button_link").style.display = "none";
            document.getElementById("pdf_file").style.display = "none";
            document.getElementById("animation_file").style.display = "none";
            document.getElementById("3d_anim").style.display = "none";

            document.getElementById("scale_enabled").style.display = "none";
            document.getElementById("move_enabled").style.display = "none";
            document.getElementById("rotate_enabled").style.display = "none";
           
            // document.getElementById("origin_x").style.display = "none";
            // document.getElementById("origin_y").style.display = "none";
            // document.getElementById("origin_z").style.display = "none";

            // document.getElementById("cons_x").style.display = "none";
            // document.getElementById("cons_y").style.display = "none";
            // document.getElementById("cons_z").style.display = "none";
            // document.getElementById("origin_Scale").style.display = "none";
            // document.getElementById("min_scale").style.display = "none";
            // document.getElementById("max_scale").style.display = "none";





            // document.getElementById("x_rotate").style.display = "none";
            // document.getElementById("y_rotate").style.display = "none";
            // document.getElementById("z_rotate").style.display = "none";
            // document.getElementById("x_Scale").style.display = "none";
            // document.getElementById("y_scale").style.display = "none";
            // document.getElementById("z_scale").style.display = "none";



            // document.getElementById("ar_form").style.display = "block";
          }
          if(ardata.exp_type=="2d_animation"){
            document.getElementById("animation_file").style.display = "block";
            
            $('input[name="2d_animation_edit"]').val(ardata.animation_file);
            document.getElementById("2d_animation_edit").innerHTML = "current file:"+ardata.animation_file;
            document.getElementById("2d_animation").selected=true;
            $('input[name="exp_name"]').val(ardata.exp_name);

              //$('input[name="image_file"]').val(ardata.image_file);

            document.getElementById("screenshot_enabled").checked = ardata.screenshot_enabled;
            document.getElementById("shared_enabled").checked = ardata.shared_enabled;
            document.getElementById("ar_load_animation_enabled").checked = ardata.ar_load_animation_enabled;
            
         
            document.getElementById(ardata.ar_load_animation_file).selected=true;
            document.getElementById("scale").checked = ardata.scale_enabled;
            document.getElementById("move").checked = ardata.move_enabled;
            document.getElementById("rotate").checked = ardata.rotate_enabled;
           

            // $('input[name="original_xpos"]').val(ardata.original_xpos);
            // $('input[name="original_ypos"]').val(ardata.original_ypos);
            // $('input[name="original_zpos"]').val(ardata.original_zpos);
            // $('input[name="cons_x"]').val(ardata.cons_x);
            // $('input[name="cons_y"]').val(ardata.cons_y);
            // $('input[name="cons_z"]').val(ardata.cons_z);
            // $('input[name="original_Scale"]').val(ardata.original_Scale);
            // $('input[name="minimum_scale"]').val(ardata.minimum_scale);
            // $('input[name="maximum_scale"]').val(ardata.maximum_scale);
            // $('input[name="x_rotation"]').val(ardata.x_rotation);
            // $('input[name="y_rotation"]').val(ardata.y_rotation);
            // $('input[name="z_rotation"]').val(ardata.z_rotation);
            // $('input[name="x_scale"]').val(ardata.x_scale);
            // $('input[name="y_scale"]').val(ardata.y_scale);
            // $('input[name="z_scale"]').val(ardata.z_scale);

            
             ////////// rest options hide
             document.getElementById("texttodisplay").style.display = "none";
             document.getElementById("image_file").style.display = "none";
            document.getElementById("audio_file").style.display = "none";
            document.getElementById("video_file").style.display = "none";
            document.getElementById("button_image_file").style.display = "none";
            document.getElementById("button_link").style.display = "none";
            document.getElementById("pdf_file").style.display = "none";
            document.getElementById("3d_model_file").style.display = "none";
            document.getElementById("3d_anim").style.display = "none";

            document.getElementById("scale_enabled").style.display = "block";
            document.getElementById("move_enabled").style.display = "block";
            document.getElementById("rotate_enabled").style.display = "none";
           
            
            // document.getElementById("origin_x").style.display = "block";
            // document.getElementById("origin_y").style.display = "block";
            // document.getElementById("origin_z").style.display = "block";

            // document.getElementById("cons_x").style.display = "block";
            // document.getElementById("cons_y").style.display = "block";
            // document.getElementById("cons_z").style.display = "block";
            // document.getElementById("origin_Scale").style.display = "block";
            // document.getElementById("min_scale").style.display = "block";
            // document.getElementById("max_scale").style.display = "block";





            // document.getElementById("x_rotate").style.display = "none";
            // document.getElementById("y_rotate").style.display = "none";
            // document.getElementById("z_rotate").style.display = "none";
            // document.getElementById("x_Scale").style.display = "none";
            // document.getElementById("y_scale").style.display = "none";
            // document.getElementById("z_scale").style.display = "none";



            // document.getElementById("ar_form").style.display = "block";
          }
          if(ardata.exp_type=="3d_animation"){
            document.getElementById("3d_anim").style.display = "block";
            $('input[name="3d_animation_edit"]').val(ardata.three_d_animation_file);
            document.getElementById("3d_animation_edit").innerHTML = "current file:"+ardata.three_d_animation_file;
            document.getElementById("3d_animation").selected=true;
            $('input[name="exp_name"]').val(ardata.exp_name);

              //$('input[name="image_file"]').val(ardata.image_file);

            document.getElementById("screenshot_enabled").checked = ardata.screenshot_enabled;
            document.getElementById("shared_enabled").checked = ardata.shared_enabled;
            document.getElementById("ar_load_animation_enabled").checked = ardata.ar_load_animation_enabled;
            
         
            document.getElementById(ardata.ar_load_animation_file).selected=true;
            document.getElementById("scale").checked = ardata.scale_enabled;
            document.getElementById("move").checked = ardata.move_enabled;
            document.getElementById("rotate").checked = ardata.rotate_enabled;
           

            // $('input[name="original_xpos"]').val(ardata.original_xpos);
            // $('input[name="original_ypos"]').val(ardata.original_ypos);
            // $('input[name="original_zpos"]').val(ardata.original_zpos);
            // $('input[name="cons_x"]').val(ardata.cons_x);
            // $('input[name="cons_y"]').val(ardata.cons_y);
            // $('input[name="cons_z"]').val(ardata.cons_z);
            // $('input[name="original_Scale"]').val(ardata.original_Scale);
            // $('input[name="minimum_scale"]').val(ardata.minimum_scale);
            // $('input[name="maximum_scale"]').val(ardata.maximum_scale);
            // $('input[name="x_rotation"]').val(ardata.x_rotation);
            // $('input[name="y_rotation"]').val(ardata.y_rotation);
            // $('input[name="z_rotation"]').val(ardata.z_rotation);
            // $('input[name="x_scale"]').val(ardata.x_scale);
            // $('input[name="y_scale"]').val(ardata.y_scale);
            // $('input[name="z_scale"]').val(ardata.z_scale);
         

              ////////// rest options hide
            document.getElementById("texttodisplay").style.display = "none";
            document.getElementById("image_file").style.display = "none";
            document.getElementById("audio_file").style.display = "none";
            document.getElementById("video_file").style.display = "none";
            document.getElementById("button_image_file").style.display = "none";
            document.getElementById("button_link").style.display = "none";
            document.getElementById("pdf_file").style.display = "none";
            document.getElementById("animation_file").style.display = "none";
            document.getElementById("3d_model_file").style.display = "none";

            document.getElementById("scale_enabled").style.display = "block";
            document.getElementById("move_enabled").style.display = "block";
            document.getElementById("rotate_enabled").style.display = "block";
           
            // document.getElementById("origin_x").style.display = "block";
            // document.getElementById("origin_y").style.display = "block";
            // document.getElementById("origin_z").style.display = "block";
            // document.getElementById("cons_x").style.display = "block";
            // document.getElementById("cons_y").style.display = "block";
            // document.getElementById("cons_z").style.display = "block";
            // document.getElementById("origin_Scale").style.display = "block";
            // document.getElementById("min_scale").style.display = "block";
            // document.getElementById("max_scale").style.display = "block";





            // document.getElementById("x_rotate").style.display = "none";
            // document.getElementById("y_rotate").style.display = "none";
            // document.getElementById("z_rotate").style.display = "none";
            // document.getElementById("x_Scale").style.display = "none";
            // document.getElementById("y_scale").style.display = "none";
            // document.getElementById("z_scale").style.display = "none";



            // document.getElementById("ar_form").style.display = "block";
          }
return false;
}

	