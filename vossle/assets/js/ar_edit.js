jQuery( document ).ready( function() {
        


    var url = null;
    var innerImageURL = null;
    var fullMarkerURL = null;
    var imageName = null;
    var patternDataImage = null;
    var sub_game_category = null;
    var value = jQuery('.exp_type_select').val();
    
    console.log('value',value);

    jQuery('.main_div').removeClass('col-9');
    jQuery('.main_div').addClass('col-12');
    jQuery('#tossing_model_pic').hide();
    if(value == "games") {
        sub_game_category = jQuery("input[name=detection_point]").val();
        console.log('sub_game_category',sub_game_category);
        jQuery('#tossing_model').show();
        jQuery('.label_for_hide').hide();
        jQuery('#audio_file_section').show();
        jQuery('.game_instruction_section').show();
        jQuery('.audio_label').text('Background Audio');
        jQuery('.audio_setting_label').text('Background Audio Loop');
        jQuery('.audio_setting_desc').text('Toggle the switch to play audio in loop.');
        jQuery("#text_slab").html(" <i class=\"fas fa-chevron-right\"></i> Games");
        if(sub_game_category == 'toss') {
            jQuery('#tossing_model_pic').show();
            jQuery('#sound_file_section').show();
            jQuery('#light_setting_section').show();
            jQuery('.content_label').text('Target Model');
            jQuery('#three_d_model_file_ip').attr('placeholder', 'Target 3d model in GLB format (Must be less than 6MB).');
            jQuery('#up_4').attr({'title':'3D model should have bottom anchor.'});
            jQuery('#up_5').attr({'title':'3D model should have bottom anchor.'});
        } else if(sub_game_category == 'dodge_collect') {
            jQuery('.exp_name_text').text('Game Name');
            jQuery('.content_label').text('Main Model');
            jQuery('.tossing_label').text('Collider Model');
            jQuery('#dodge_collect_section').show();
            jQuery('#three_d_model_file_ip').attr('placeholder', 'Main model in GLB format.');
            jQuery('#tossing_model_ip').attr('placeholder', 'Collider model in GLB format.');
        }
    }
    
    var content_check = jQuery("#three_d_model_file_ip").val();
    if(fileValidation(content_check, 'video')) {
        jQuery('#video_setting_section').show();
        jQuery('#audio_file_section').hide();
        jQuery('#content_file_type').val('video');
    } else {
        jQuery('#video_setting_section').hide();
        jQuery('#audio_file_section').show();
        jQuery('#audio_setting_section').show();
    }

    jQuery('#feedback_content').hide();
    jQuery('#add_moreContent').hide();
    jQuery('#add_morePanel').hide();
    jQuery('#audio_content').hide();
    jQuery('#action_control_section').hide();
    jQuery('#camera_setting_section').hide();
    jQuery('#screen_gesture_section').hide();
    jQuery('#enable_shadow_section').hide();
    if(value == "markerless_3d_model") {
        jQuery("#text_slab").html(" <i class=\"fas fa-chevron-right\"></i> Markerless");
        jQuery('#light_setting_section').show();
    } else if(value == "face_detection") {
        jQuery("#text_slab").html(" <i class=\"fas fa-chevron-right\"></i> Face Detection");
        jQuery('#detection_point_box').show();
        jQuery('#audio_file_section').hide();
        jQuery('#audio_setting_section').hide();
        jQuery('.label_for_hide').hide();
        jQuery('#three_d_model_file_ip').attr('placeholder', 'Upload content file in GLB format.');
    } else if(value == "markerbased") {
        jQuery('.main_div').removeClass('col-12');
        jQuery('.main_div').addClass('col-9');
        jQuery('.markerbased_display_section_box').show();
        jQuery('.markerbased_display_section_box').css("background-color", "#e9ebeb");
        jQuery("#text_slab").html(" <i class=\"fas fa-chevron-right\"></i> Marker Based");
    }else if(value == "work_flow") {
        jQuery("#text_slab").html(" <i class=\"fas fa-chevron-right\"></i> Work Flow");
        jQuery('.label_for_hide').hide();
        jQuery('#splash_screen').show();
        jQuery('#audio_file_section').show();
        jQuery('#panel_image').show();
        jQuery('#action').show();
        jQuery('#feedback_content').show();
        jQuery('#add_moreContent').show();
        jQuery('#add_morePanel').show();
        jQuery('#audio_content').show();
        jQuery('#action_control_section').show();
        jQuery('#camera_setting_section').show();
        jQuery('#screen_gesture_section').show();
        jQuery('#enable_shadow_section').show();
        // jQuery('#3d_file_up').attr('name','work_content[]');
    }
    
    document.getElementById('up_2').onclick = function() {
        document.getElementById('audio_file_up').click();
    };

    document.getElementById('up_3').onclick = function() {
        document.getElementById('sound_file_up').click();
    };

    document.getElementById('up_4').onclick = function() {
        document.getElementById('3d_file_up').click();
    };

    document.getElementById('up_5').onclick = function() {
        document.getElementById('tossing_model_up').click();
    };

    jQuery('.copy_status').hide();

    jQuery(".rdio").on('change', function() {
        if (jQuery(this).val() == "1")
            jQuery('#arPortal_video').show();
        else
            jQuery('#arPortal_video').hide();
    });

    jQuery(".radio").on('change', function() {
        if (jQuery(this).val() == "1")
            jQuery('#MiniGame_video').show();
        else
            jQuery('#MiniGame_video').hide();
    });

    jQuery("#exp_type").on('change', function() {
        let exp_type = jQuery(this).val();
        if (exp_type == 'arPortal' || exp_type == 'MiniGameConfigs') {
            jQuery('.move_enabled').hide();
            jQuery('.move_enabled_input').prop('checked', false);
            jQuery('.scale_enabled').hide();
            jQuery('.scale_enabled_input').prop('checked', false);
        } else {
            jQuery('.move_enabled').show();
            jQuery('.move_enabled_input').prop('checked', true);
            jQuery('.scale_enabled').show();
            jQuery('.scale_enabled_input').prop('checked', true);
        }
    });

    jQuery('#rmPreview').click(function() {
        /*for marker image*/
        jQuery('#blah').attr('src', '#');
        jQuery('#preview').hide();
        jQuery('#imageLoader').val('');
        jQuery('#marker_image_ip').val('');
    });
    
    jQuery(".cstm_camera").on('change', function() {
        if (jQuery(this).val() == "1") {
            jQuery('#cstm_cmra_txt_div').show();
            jQuery('#cstm_cmra_vid_div').show();
        } else {
            jQuery('#cstm_cmra_txt_div').hide();
            jQuery('#cstm_cmra_vid_div').hide();
        }

    });

    // jQuery("#about_us").on('focusout', function() {
    jQuery('#about_us').bind('focusout keyup', function(e){
		jQuery('#display_count').html('');
        if(this.value != '') {
            let check = validURL(this.value);
            console.log(this.value);
            console.log(check);
            if(check == false) {
                jQuery('#sv1').attr("disabled", true);
                console.log('false sub-set');
                jQuery('#display_count').html('<span class="text-danger">URL is not valid</span>');
            } else {
                jQuery('#display_count').html('<span class="text-success">URL is valid</span>');
                jQuery('#sv1').removeAttr("disabled");
            }
        }else{
            jQuery('#sv1').removeAttr("disabled");
        }
    });

    jQuery("#label").on('keyup', function() {
        let maxLength = 25;
        var textlen = maxLength - jQuery(this).val().length;
        jQuery('#label_instruction_count').hide();
        if((jQuery(this).val().length) > maxLength){
            jQuery('#label_instruction_count').show();
        jQuery('#label_instruction_count').html('label cross the charecter limit.');
        }
    });
    
    jQuery(".choose_option").on('click', function() {
        var value = jQuery(this).attr('val');
        console.log(value);
        
        jQuery('.breadcrumb li a.active').removeClass('active');
        jQuery('#setup_tab').addClass('active');
        
        jQuery('#home').removeClass('show');
        jQuery('#home').addClass('hide');
        
        if(value == "games") {
            jQuery('.exp_type_select').val(value);
            jQuery('#sub_home').removeClass('hide');
            jQuery('#sub_home').addClass('show');
        } else if(value == "toss") {
            sub_game_category = value;
            jQuery('#sub_home').removeClass('show');
            jQuery('#sub_home').addClass('hide');
            jQuery('#setup').removeClass('hide');
            jQuery('#setup').addClass('show');

            jQuery('#tossing_model').show();
            jQuery('.label_for_hide').hide();
            jQuery('#sound_file_section').show();
            jQuery('#light_setting_section').show();
            jQuery('#audio_file_section').show();
            jQuery('.content_label').text('Target Model');
            jQuery('.audio_label').text('Background Audio');
            jQuery('.audio_setting_label').text('Background Audio Loop');
            jQuery('.audio_setting_desc').text('Toggle the switch to play audio in loop.');
            
            jQuery("#text_slab").html(" <i class=\"fas fa-chevron-right\"></i> Games");
            jQuery('#three_d_model_file_ip').attr('placeholder', 'Target 3d model in GLB format (Must be less than 6MB).');
        } else {
            jQuery('.exp_type_select').val(value);
            jQuery('#setup').removeClass('hide');
            jQuery('#setup').addClass('show');
        }

        jQuery('#detection_point_box').hide();
        jQuery('.markerbased_display_section_box').hide();
        jQuery('.main_div').removeClass('col-9');
        jQuery('.main_div').addClass('col-12');

        if(value == "markerless_3d_model") {
            jQuery("#text_slab").html(" <i class=\"fas fa-chevron-right\"></i> Markerless");
            jQuery('#light_setting_section').show();
        } else if(value == "face_detection") {
            jQuery("#text_slab").html(" <i class=\"fas fa-chevron-right\"></i> Face Detection");
            jQuery('#detection_point_box').show();
            jQuery('#audio_file_section').hide();
            jQuery('.label_for_hide').hide();
            jQuery('#three_d_model_file_ip').attr('placeholder', 'Upload content file in GLB format.');
        } else if(value == "markerbased") {
            jQuery('.main_div').removeClass('col-12');
            jQuery('.main_div').addClass('col-9');
            jQuery('.markerbased_display_section_box').show();
            jQuery('.markerbased_display_section_box').css("background-color", "#e9ebeb");
            jQuery("#text_slab").html(" <i class=\"fas fa-chevron-right\"></i> MarkerBased");
        }
    });

    jQuery("#game_instruction").on('keyup', function() {
        let maxLength = 200;
        var textlen = maxLength - jQuery(this).val().length;
        jQuery('#game_instruction_count').html(textlen + ' Character(s) Remaining');
    });

    jQuery(".copy_and_share_url").click(function() {
        var copyText = document.getElementById("url_changeable");
        console.log(copyText);
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        // alert("Copied: " + copyText.value);
        jQuery('.copy_status').show();
    });

    jQuery('#3d_file_up').on('change', function() {
        jQuery('#errmsg').text('');
        jQuery('#errmsgDiv').css('visibility', 'hidden');
        jQuery('#three_d_model_file_ip').css('border', '1px solid #ced4da');
        jQuery('#content_file_type').val('');
        var filecheck = fileValidation(jQuery(this).val(), 'content');
        if (filecheck) {
            if (sub_game_category == 'toss') {
                if (this.files[0].size <= 6291456) {
                    let str = jQuery(this).val().replace(/C:\\fakepath\\/i, '');
                    jQuery('#three_d_model_file_ip').val(str);
                } else {
                    jQuery('#errmsg').text('File size can not be more than 6 MB.');
                    jQuery('#errmsgDiv').css('visibility', 'visible');
                    jQuery('#three_d_model_file_ip').css('border', '1px solid red');
                    jQuery('#three_d_model_file_ip').val('File size can not be more than 6 MB.');
                    jQuery('#3d_file_up').val('');
                    return false;
                }
            } else if (sub_game_category != 'toss') {
                if (this.files[0].size <= 20971520) {
                    let str = jQuery(this).val().replace(/C:\\fakepath\\/i, '');
                    jQuery('#three_d_model_file_ip').val(str);
                    let filename = jQuery(this).val();
                    var ext = filename.split('.').pop().toLowerCase();
                    console.log('MP4 File available : '+ext);
                    let value = jQuery('.exp_type_select').val();
                    if((ext == 'mp4' || ext == 'm4v') && value != 'face_detection') {
                        jQuery('#video_setting_section').show();
                        jQuery('#content_file_type').val('video');
                        if(value != 'work_flow'){
                        jQuery('#audio_file_section').hide();
                        jQuery('#audio_setting_section').hide();
                        jQuery('#content_file_type').val('');
                        }
                    } else if(value != 'face_detection') {
                        jQuery('#video_setting_section').hide();
                        jQuery('#audio_file_section').show();
                    } else if(value == 'face_detection') {
                        jQuery('#video_setting_section').hide();
                        jQuery('#audio_file_section').hide();
                    }
                } else {
                    jQuery('#errmsg').text('File size can not be more than 20 MB.');
                    jQuery('#errmsgDiv').css('visibility', 'visible');
                    jQuery('#three_d_model_file_ip').css('border', '1px solid red');
                    jQuery('#three_d_model_file_ip').val('File size can not be more than 20 MB.');
                    jQuery('#3d_file_up').val('');
                    return false;
                }
            }
        } else {
            jQuery('#errmsg').text('File not supported !!!');
            jQuery('#errmsgDiv').css('visibility', 'visible');
            jQuery('#three_d_model_file_ip').css('border', '1px solid red');
            jQuery('#three_d_model_file_ip').val('File type not supported.');
            jQuery('#3d_file_up').val('');
            return false;
        }
    });

    jQuery('#tossing_model_up').on('change', function() {
        jQuery('#errmsg').text('');
        jQuery('#errmsgDiv').css('visibility', 'hidden');
        jQuery('#tossing_model_ip').css('border', '1px solid #ced4da');
        var filecheck = fileValidation(jQuery(this).val(), 'content');
        let value =  jQuery("input[name=detection_point]").val();
        if (filecheck) {
            if (this.files[0].size <= 1048576) {
                let str = jQuery(this).val().replace(/C:\\fakepath\\/i, '');
                jQuery('#tossing_model_ip').val(str);
                    if(value == 'toss'){
                        jQuery('#tossing_model_pic').show();
                    }
                
            } else {
                jQuery('#errmsg').text('File size can not be more than 1 MB.');
                jQuery('#errmsgDiv').css('visibility', 'visible');
                jQuery('#tossing_model_ip').css('border', '1px solid red');
                jQuery('#tossing_model_ip').val('File size can not be more than 1 MB.');
                jQuery('#tossing_model_up').val('');
                return false;
            }
        } else {
            jQuery('#errmsg').text('Only glb file allowed.');
            jQuery('#errmsgDiv').css('visibility', 'visible');
            jQuery('#tossing_model_up').val('');
            jQuery('#tossing_model_ip').val('Only glb file allowed');
            jQuery('#tossing_model_ip').css('border', '1px solid red');
        }
    });

    jQuery('#audio_file_up').on('change', function() {
        jQuery('#errmsg').text('');
        jQuery('#errmsgDiv').css('visibility', 'hidden');
        jQuery('#audio_file_ip').css('border', '1px solid #ced4da');
        var filecheck = fileValidation(jQuery(this).val(), 'audio');
        if (filecheck) {
            if (this.files[0].size <= 20971520) {
                let str = jQuery(this).val().replace(/C:\\fakepath\\/i, '');
                jQuery('#audio_file_ip').val(str);
                jQuery('#audio_setting_section').show();
            } else {
                jQuery('#audio_setting_section').hide();
                jQuery('#errmsg').text('File size can not be more than 20 MB.');
                jQuery('#errmsgDiv').css('visibility', 'visible');
                jQuery('#audio_file_ip').css('border', '1px solid red');
                jQuery('#audio_file_ip').val('File size can not be more than 20 MB.');
                jQuery('#audio_file_up').val('');
                return false;
            }
        } else {
            console.log('audio_file in else');
            jQuery('#audio_file_ip').val('');
            jQuery('#audio_file_ip').addClass('myClass').attr('placeholder', 'Only MP3 file allowed');
            jQuery('#audio_file_ip').css('border', '1px solid red');
            jQuery('#errmsg').text('Only MP3 file allowed');
            jQuery('#errmsgDiv').css('visibility', 'visible');
        }
    });

    jQuery('#sound_file_up').on('change', function() {
        jQuery('#errmsg').text('');
        jQuery('#errmsgDiv').css('visibility', 'hidden');
        jQuery('#sound_file_ip').css('border', '1px solid #ced4da');
        var filecheck = fileValidation(jQuery(this).val(), 'audio');
        if (filecheck) {
            if (this.files[0].size <= 20971520) {
                let str = jQuery(this).val().replace(/C:\\fakepath\\/i, '');
                jQuery('#sound_file_ip').val(str);
            } else {
                jQuery('#errmsg').text('File size can not be more than 20 MB.');
                jQuery('#errmsgDiv').css('visibility', 'visible');
                jQuery('#sound_file_ip').css('border', '1px solid red');
                jQuery('#sound_file_ip').val('File size can not be more than 20 MB.');
                jQuery('#sound_file_up').val('');
                return false;
            }
        } else {
            jQuery('#sound_file_up').val('');
            jQuery('#sound_file_ip').addClass('myClass').attr('placeholder', 'Only MP3 file allowed');
            jQuery('#sound_file_ip').css('border', '1px solid red');
            jQuery('#errmsg').text('Only MP3 file allowed');
            jQuery('#errmsgDiv').css('visibility', 'visible');
        }
    });
    jQuery('#splash_screen_up').on('change', function() {
        jQuery('#errmsg').text('');
        jQuery('#errmsgDiv').css('visibility', 'hidden');
        jQuery('#splash_screen_ip').css('border', '1px solid #ced4da');
        var filecheck = fileValidation(jQuery(this).val(), 'image');
        if (filecheck) {
            if (this.files[0].size <= 5242880) {
                let str = jQuery(this).val().replace(/C:\\fakepath\\/i, '');
                jQuery('#splash_screen_ip').val(str);
            } else {
                jQuery('#errmsg').text('Splash screen size can not be more than 5 MB.');
                jQuery('#errmsgDiv').css('visibility', 'visible');
                jQuery('#splash_screen_ip').css('border', '1px solid red');
                jQuery('#splash_screen_ip').val('File size can not be more than 5 MB.');
                jQuery('#splash_screen_up').val('');
                return false;
            }
        } else {
            jQuery('#errmsg').text('Only jpg, jpeg and png files are allowed.');
            jQuery('#errmsgDiv').css('visibility', 'visible');
            jQuery('#splash_screen_up').val('');
            jQuery('#splash_screen_ip').val('Only jpg, jpeg and png files are allowed.');
            jQuery('#splash_screen_ip').css('border', '1px solid red');
        }
    });
    
    jQuery('#panel_image_up').on('change', function() {
        jQuery('#errmsg').text('');
        jQuery('#errmsgDiv').css('visibility', 'hidden');
        jQuery('#panel_image_ip').css('border', '1px solid #ced4da');
        var filecheck = fileValidation(jQuery(this).val(), 'image');
        if (filecheck) {
            if (this.files[0].size <= 5242880) {
                let str = jQuery(this).val().replace(/C:\\fakepath\\/i, '');
                jQuery('#panel_image_ip').val(str);
            } else {
                jQuery('#errmsg').text('Splash screen size can not be more than 5 MB.');
                jQuery('#errmsgDiv').css('visibility', 'visible');
                jQuery('#panel_image_ip').css('border', '1px solid red');
                jQuery('#panel_image_ip').val('File size can not be more than 5 MB.');
                jQuery('#panel_image_up').val('');
                return false;
            }
        } else {
            jQuery('#errmsg').text('Only jpg, jpeg and png files are allowed.');
            jQuery('#errmsgDiv').css('visibility', 'visible');
            jQuery('#panel_image_up').val('');
            jQuery('#panel_image_ip').val('Only jpg, jpeg and png files are allowed.');
            jQuery('#panel_image_ip').css('border', '1px solid red');
        }
    });

    document.getElementById('up_6').onclick = function() {
        document.getElementById('splash_screen_up').click();
    };
    
    document.getElementById('up_7').onclick = function() {
        document.getElementById('panel_image_up').click();
    };
    
    jQuery("#add_moreContent").click(function(){
        var count = jQuery('.sparkLines').length+1;

        var html = '<div class="form-group row sparkLines" id="content_file'+count+'" style="margin-bottom:2rem;"><label for="3d_file_up'+count+'" class="col-sm-3 col-form-label content_label" title="Content File" style="color: #c2c2c2; font-size: 16px; margin-top: 5px; font-weight: 500;">Content File '+count+'</label><div class="col-sm-8"><input type="file" name="work_content['+count+']" id="3d_file_up'+count+'" class="file-upload-default"><div class="input-group col-xs-12"><input type="text" id="three_d_model_file_ip'+count+'" class="form-control file-upload-info" disabled="" placeholder="Upload content file in GLB, jpg, png and MP4 format." /><span class="input-group-append"><button class="file-upload-browse btn btn-info contentclass" type="button" div-id="'+count+'" id="up_4'+count+'" style="border-radius: 10px; position: absolute; margin-left: -150px; height: 45px; width: 150px;" data-bs-toggle="tooltip" data-bs-placement="left" title = "Upload Model" >Upload</button></span></div><span style="display:none" id="preview-6'+count+'">&nbsp;<img id="blah_6'+count+'" src="#" alt="" style="width:80px"><a href="javascript:void(0)" id="rmPreview_6'+count+'">Remove</a><span></div><div class="col-sm-1"><a onclick="removecontentrow('+count+')" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></a></div></div>';

        html += '<div class="form-group row" id="video_setting_section'+count+'" style="margin-bottom:2rem; display:none;"><label for="transparent_background" class="col-form-label col-sm-3" title="Video Setting" style="color: #c2c2c2; font-size: 16px; margin-top: 5px; font-weight: 500;">Video Setting '+count+'</label><div class="col-sm-3"><label class="switch"><input type="checkbox" id="transparent_background'+count+'" value="Yes" name="transparent_background'+count+'" data-bs-toggle="tooltip" data-bs-placement="left" title = "Switch it on to transparent the background." /><span class="slider round"></span></label><label for="transparent_background_label" style="color: #c2c2c2;font-size: 16px;margin-top: 9px;font-weight: 500;">Transparent Background</label></div><label class="col-form-label col-sm-3" for="background_color" style="color: #c2c2c2;font-size: 16px;margin-top: 9px;font-weight: 500;">Background Color</label><div class="col-sm-3"><input class="form-control" type="color" id="background_color'+count+'" name="button_color'+count+'" placeholder="Please provide RGB color." data-bs-toggle="tooltip" data-bs-placement="left" title = "Green Screen Background Color" /></div></div><input type="hidden" name="content_file_type'+count+'" id="content_file_type'+count+'" value="" />';

        html += '<div class="form-group row" id="camera_setting_section'+count+'" style="margin-bottom:2rem;"><label for="camera_background" class="col-form-label col-sm-3" title="Video Setting" style="color: #c2c2c2; font-size: 16px; margin-top: 5px; font-weight: 500;">Content Anchored to Camera '+count+'</label><div class="col-sm-3"><label class="switch"><input type="checkbox" id="camera_background'+count+'" value="1" name="camera_background'+count+'" data-bs-toggle="tooltip" data-bs-placement="left" title = "Switch it on." /><span class="slider round"></span></label></div></div>';

        html += '<div class="form-group row" id="action'+count+'" style="margin-bottom:2rem;"><label for="action" id="action_label'+count+'" class="col-sm-3 col-form-label" style="color: #c2c2c2; font-size: 16px; margin-top: 5px; font-weight: 500;">Choose Action '+count+'</label><div class="col-sm-9"><select name="actions['+count+']" id="actions'+count+'" class="form-control" ><option value="tap">Tap</option><option value="shake">Shake</option><option value="swipe">Swipe</option><option value="parallel">Parallel</option><option value="timed">Timed</option></select></div></div>';
        if(count <= 5){
        jQuery('#multiple_content').append(html);
        }else{
        alert("You can't upload more than 5 files.");
        }
    });


    jQuery("#add_morePanel").click(function(){
    var count = jQuery('.panelblock').length+1;
    var html = '<div class="form-group row panelblock" id="panel_image'+count+'" style="margin-bottom:2rem;"><label for="panel_image_up" class="col-sm-3 col-form-label panel_label" title="Panel Image" style="color: #c2c2c2; font-size: 16px; margin-top: 5px; font-weight: 500;">Panel Image '+count+'</label><div class="col-sm-8"><input type="file" name="image_filep['+count+']" id="panel_image_up'+count+'" class="file-upload-default" /><div class="input-group col-xs-12"><input type="text" id="panel_image_ip'+count+'" class="form-control file-upload-info" disabled="" placeholder="Upload panel image in jpg / png format."  /><span class="input-group-append"><button class="file-upload-browse btn btn-info panelclass" type="button" id="up_7'+count+'" style="border-radius: 10px; position: absolute; margin-left: -150px; height: 45px; width: 150px;" data-bs-toggle="tooltip" div-id="'+count+'" data-bs-placement="left" title = "Upload Model">Upload</button></span></div></div><div class="col-sm-1"><a onclick="removepanelrow('+count+')" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></a></div></div>';
    if(count <= 5){
    jQuery('#multiple_panel').append(html);
    }else{
    alert("You can't upload more than 5 files.");
    }
    });   

    jQuery(document).on('click', '.contentclass', function(e){
    e.preventDefault();
    var id = jQuery(this).attr('div-id');
    console.log(id);
    jQuery("#3d_file_up"+id).trigger('click');
    });
    jQuery(document).on('click', '.panelclass', function(e){
    e.preventDefault();

    var id = jQuery(this).attr('div-id');
    jQuery("#panel_image_up"+id).trigger('click');
    });


    jQuery(document).on('change', '#3d_file_up2', function(e){
        jQuery('#errmsg').text('');
        jQuery('#content_file_type2').val('');
        jQuery('#errmsgDiv').css('visibility', 'hidden');
        jQuery('#three_d_model_file_ip2').css('border', '1px solid #ced4da');
        var filecheck = fileValidation(jQuery(this).val(), 'content');
        if (filecheck) {
            if (sub_game_category != 'toss') {
                if (this.files[0].size <= 20971520) {
                    let str = jQuery(this).val().replace(/C:\\fakepath\\/i, '');
                    jQuery('#three_d_model_file_ip2').val(str);
                    let filename = jQuery(this).val();
                    var ext = filename.split('.').pop().toLowerCase();
                    console.log('MP4 File available : '+ext);
                    let value = jQuery('.exp_type_select').val();
                    if((ext == 'mp4' || ext == 'm4v')  && value != 'face_detection') {
                        jQuery('#video_setting_section2').show();
                        jQuery('#content_file_type2').val('video');
                        if(value != 'work_flow'){
                        jQuery('#audio_file_section').hide();
                        jQuery('#content_file_type2').val('');
                        }
                    } else if((ext != 'mp4' || ext != 'm4v')  && value != 'face_detection') {
                        jQuery('#video_setting_section2').hide();
                        jQuery('#audio_file_section').show();
                    } else if(value == 'face_detection') {
                        jQuery('#video_setting_section2').hide();
                        jQuery('#audio_file_section').hide();
                    }
                } else {
                    jQuery('#errmsg').text('File size can not be more than 20 MB.');
                    jQuery('#errmsgDiv').css('visibility', 'visible');
                    jQuery('#three_d_model_file_ip2').css('border', '1px solid red');
                    jQuery('#three_d_model_file_ip2').val('File size can not be more than 20 MB.');
                    jQuery('#3d_file_up2').val('');
                    return false;
                }
            }
        } else {
            jQuery('#errmsg').text('Files not suported !!!');
            jQuery('#errmsgDiv').css('visibility', 'visible');
            jQuery('#three_d_model_file_ip2').css('border', '1px solid red');
            jQuery('#three_d_model_file_ip2').val('File type not supported.');
            jQuery('#3d_file_up2').val('');
            return false;
        }
    });
    jQuery(document).on('change', '#3d_file_up3', function(e){
        jQuery('#errmsg').text('');
        jQuery('#content_file_type3').val('');
        jQuery('#errmsgDiv').css('visibility', 'hidden');
        jQuery('#three_d_model_file_ip3').css('border', '1px solid #ced4da');
        var filecheck = fileValidation(jQuery(this).val(), 'content');
        if (filecheck) {
            if (sub_game_category != 'toss') {
                if (this.files[0].size <= 20971520) {
                    let str = jQuery(this).val().replace(/C:\\fakepath\\/i, '');
                    jQuery('#three_d_model_file_ip3').val(str);
                    let filename = jQuery(this).val();
                    var ext = filename.split('.').pop().toLowerCase();
                    console.log('MP4 File available : '+ext);
                    let value = jQuery('.exp_type_select').val();
                    if((ext == 'mp4' || ext == 'm4v')  && value != 'face_detection') {
                        jQuery('#video_setting_section3').show();
                        jQuery('#content_file_type3').val('video');
                        if(value != 'work_flow'){
                        jQuery('#audio_file_section').hide();
                        jQuery('#content_file_type3').val('');
                        }
                    } else if((ext != 'mp4' || ext != 'm4v')  && value != 'face_detection') {
                        jQuery('#video_setting_section3').hide();
                        jQuery('#audio_file_section').show();
                    } else if(value == 'face_detection') {
                        jQuery('#video_setting_section3').hide();
                        jQuery('#audio_file_section').hide();
                    }
                } else {
                    jQuery('#errmsg').text('File size can not be more than 20 MB.');
                    jQuery('#errmsgDiv').css('visibility', 'visible');
                    jQuery('#three_d_model_file_ip3').css('border', '1px solid red');
                    jQuery('#three_d_model_file_ip3').val('File size can not be more than 20 MB.');
                    jQuery('#3d_file_up3').val('');
                    return false;
                }
            }
        } else {
            jQuery('#errmsg').text('Files not suported !!!');
            jQuery('#errmsgDiv').css('visibility', 'visible');
            jQuery('#three_d_model_file_ip3').css('border', '1px solid red');
            jQuery('#three_d_model_file_ip3').val('File type not supported.');
            jQuery('#3d_file_up3').val('');
            return false;
        }
    });
    jQuery(document).on('change', '#3d_file_up4', function(e){
        jQuery('#errmsg').text('');
        jQuery('#content_file_type4').val('');
        jQuery('#errmsgDiv').css('visibility', 'hidden');
        jQuery('#three_d_model_file_ip4').css('border', '1px solid #ced4da');
        var filecheck = fileValidation(jQuery(this).val(), 'content');
        if (filecheck) {
            if (sub_game_category != 'toss') {
                if (this.files[0].size <= 20971520) {
                    let str = jQuery(this).val().replace(/C:\\fakepath\\/i, '');
                    jQuery('#three_d_model_file_ip4').val(str);
                    let filename = jQuery(this).val();
                    var ext = filename.split('.').pop().toLowerCase();
                    console.log('MP4 File available : '+ext);
                    let value = jQuery('.exp_type_select').val();
                    if((ext == 'mp4' || ext == 'm4v')  && value != 'face_detection') {
                        jQuery('#video_setting_section4').show();
                        jQuery('#content_file_type4').val('video');
                        if(value != 'work_flow'){
                        jQuery('#audio_file_section').hide();
                        jQuery('#content_file_type4').val('');
                        }
                    } else if((ext != 'mp4' || ext != 'm4v')  && value != 'face_detection') {
                        jQuery('#video_setting_section4').hide();
                        jQuery('#audio_file_section').show();
                    } else if(value == 'face_detection') {
                        jQuery('#video_setting_section4').hide();
                        jQuery('#audio_file_section').hide();
                    }
                } else {
                    jQuery('#errmsg').text('File size can not be more than 20 MB.');
                    jQuery('#errmsgDiv').css('visibility', 'visible');
                    jQuery('#three_d_model_file_ip4').css('border', '1px solid red');
                    jQuery('#three_d_model_file_ip4').val('File size can not be more than 20 MB.');
                    jQuery('#3d_file_up4').val('');
                    return false;
                }
            }
        } else {
            jQuery('#errmsg').text('Files not suported !!!');
            jQuery('#errmsgDiv').css('visibility', 'visible');
            jQuery('#three_d_model_file_ip4').css('border', '1px solid red');
            jQuery('#three_d_model_file_ip4').val('File type not supported.');
            jQuery('#3d_file_up4').val('');
            return false;
        }

    });
    jQuery(document).on('change', '#3d_file_up5', function(e){
        jQuery('#errmsg').text('');
        jQuery('#errmsgDiv').css('visibility', 'hidden');
        jQuery('#three_d_model_file_ip5').css('border', '1px solid #ced4da');
        var filecheck = fileValidation(jQuery(this).val(), 'content');
        jQuery('#content_file_type5').val('');
        if (filecheck) {
            if (sub_game_category != 'toss') {
                if (this.files[0].size <= 20971520) {
                    let str = jQuery(this).val().replace(/C:\\fakepath\\/i, '');
                    jQuery('#three_d_model_file_ip5').val(str);
                    let filename = jQuery(this).val();
                    var ext = filename.split('.').pop().toLowerCase();
                    console.log('MP4 File available : '+ext);
                    let value = jQuery('.exp_type_select').val();
                    if((ext == 'mp4' || ext == 'm4v')  && value != 'face_detection') {
                        jQuery('#video_setting_section5').show();
                        jQuery('#content_file_type5').val('video');
                        if(value != 'work_flow'){
                        jQuery('#audio_file_section').hide();
                            jQuery('#content_file_type5').val('');
                        }
                    } else if((ext != 'mp4' || ext != 'm4v')  && value != 'face_detection') {
                        jQuery('#video_setting_section5').hide();
                        jQuery('#audio_file_section').show();
                    } else if(value == 'face_detection') {
                        jQuery('#video_setting_section5').hide();
                        jQuery('#audio_file_section').hide();
                    }
                } else {
                    jQuery('#errmsg').text('File size can not be more than 20 MB.');
                    jQuery('#errmsgDiv').css('visibility', 'visible');
                    jQuery('#three_d_model_file_ip5').css('border', '1px solid red');
                    jQuery('#three_d_model_file_ip5').val('File size can not be more than 20 MB.');
                    jQuery('#3d_file_up5').val('');
                    return false;
                }
            }
        } else {
            jQuery('#errmsg').text('Files not suported !!!');
            jQuery('#errmsgDiv').css('visibility', 'visible');
            jQuery('#three_d_model_file_ip5').css('border', '1px solid red');
            jQuery('#three_d_model_file_ip5').val('File type not supported.');
            jQuery('#3d_file_up5').val('');
            return false;
        }
    });

    // panel images
    jQuery(document).on('change', '#panel_image_up2', function(e){
    let str = jQuery(this).val().replace(/C:\\fakepath\\/i, '');
    jQuery('#panel_image_ip2').val(str);
    });
    jQuery(document).on('change', '#panel_image_up3', function(e){
    let str = jQuery(this).val().replace(/C:\\fakepath\\/i, '');
    jQuery('#panel_image_ip3').val(str);
    });
    jQuery(document).on('change', '#panel_image_up4', function(e){
    let str = jQuery(this).val().replace(/C:\\fakepath\\/i, '');
    jQuery('#panel_image_ip4').val(str);
    });
    jQuery(document).on('change', '#panel_image_up5', function(e){
    let str = jQuery(this).val().replace(/C:\\fakepath\\/i, '');
    jQuery('#panel_image_ip5').val(str);
    });

    function removepanelrow(count){
        jQuery('#panel_image'+count).remove();
    }
    function removecontentrow(count){
        jQuery('#content_file'+count).remove();
        jQuery('#action'+count).remove();
    } 

    jQuery('#detection_point').on('change', function() {
        var detect = jQuery('#detection_point').val();
        if(detect == 'head'){
            jQuery('#head_section1').show();
            jQuery('#head_section2').show();
        }else{
            jQuery('#head_section1').hide();
            jQuery('#head_section2').hide();
        }
    });
    
    jQuery('#place_head').click(function(){
        if(jQuery("#place_head").prop('checked') == true) {
            jQuery('#above_head').prop('checked', false);
        } else if(jQuery("#place_head").prop('checked') == false) {
            jQuery('#above_head').prop('checked', true);
        }
    });

    jQuery('#above_head').click(function(){
        if(jQuery("#above_head").prop('checked') == true) {
            jQuery('#place_head').prop('checked', false);
        } else if(jQuery("#above_head").prop('checked') == false) {
            jQuery('#place_head').prop('checked', true);
        }
    });
    
    jQuery('#tossing_image_modal').on('change', function() {
        jQuery('#errmsg').text('');
        jQuery('#errmsgDiv').css('visibility', 'hidden');
        jQuery('#tossing_model_imge_ip').css('border', '1px solid #ced4da');
        var filecheck = fileValidation(jQuery(this).val(), 'image');
        if (filecheck) {
            if (this.files[0].size <= 5242880) {
                let str = jQuery(this).val().replace(/C:\\fakepath\\/i, '');
                jQuery('#tossing_model_imge_ip').val(str);
            
            } else {
                jQuery('#errmsg').text('Tossing model Image size cannot be more than 5 MB.');
                jQuery('#errmsgDiv').css('visibility', 'visible');
                jQuery('#tossing_model_imge_ip').css('border', '1px solid red');
                jQuery('#tossing_model_imge_ip').val('File size cannot be more than 5 MB.');
                jQuery('#tossing_image_modal').val('');
                return false;
            }
        } else {
            jQuery('#errmsg').text('Only jpg, jpeg and png files are allowed.');
            jQuery('#errmsgDiv').css('visibility', 'visible');
            jQuery('#tossing_image_modal').val('');
            jQuery('#tossing_model_imge_ip').val('Only jpg, jpeg and png files are allowed.');
            jQuery('#tossing_model_imge_ip').css('border', '1px solid red');
        }
    });
    
    jQuery(document).on('click', '#toss_pic_up_6', function(e){
        e.preventDefault();
        jQuery("#tossing_image_modal").trigger('click');
    });

    // Get the modal
    var modal = document.getElementById("addBookDialog");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementById("close_model");

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

function readFile(file, onLoadCallback){
    var reader = new FileReader();
    reader.onload = onLoadCallback;
    reader.readAsDataURL(file);
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            jQuery('#blah').attr('src', e.target.result);
            jQuery('#preview').show();
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function readURL1(input, preview, imgsrc) {
    console.log(input, preview, imgsrc);
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            jQuery('#' + imgsrc).attr('src', e.target.result);
            jQuery('#' + preview).show();
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

function DownloadImage(dname = null) {
    // tech from https://stackoverflow.com/questions/3665115/create-a-file-in-memory-for-user-to-download-not-through-server
    let img = null;
    if(dname == 'qrcode'){
        var qrCodeLogo = document.getElementById('qrcode').children;
        img = qrCodeLogo[1].src;
    }else{
        img = fullMarkerURL;
    }
    var domElement = window.document.createElement("a");
    domElement.href = img;
    domElement.download = dname+".png";
    document.body.appendChild(domElement);
    domElement.click();
    document.body.removeChild(domElement);
}

var _URL = window.URL || window.webkitURL;

function fileValidation(filename, type) {
    console.log(filename + type);
    let exp_type = jQuery('.exp_type_select').val();
    console.log('exp_type',exp_type);
    if((type == 'content' && exp_type == 'face_detection') || (type == 'content' && exp_type == 'games')){ type = 'glbModal'; }
    var allowed_types = [];
    switch (type) {
        case 'content':
            allowed_types = ['glb','gltf','zip','fbx','jpg','png','jpeg','mp4','m4v'];
            break;
        case 'pattern':
            allowed_types = ['patt'];
            break;
        case 'glbModal':
            allowed_types = ['glb','gltf'];
            break;
        case 'image':
            allowed_types = ['png', 'jpg', 'jpeg'];
            break;
        case 'video':
            allowed_types = ['mp4','m4v'];
            break;
        case 'audio':
            allowed_types = ['mp3'];
            break;
        case 'pdf':
            allowed_types = ['pdf'];
            break;
        case 'button':
            allowed_types = ['png', 'jpg', 'jpeg'];
            break;
        case 'zip':
            allowed_types = ['zip'];
            break;
        case 'meshFile':
            allowed_types = ['fbx', 'obj'];
            break;
        case 'app':
            allowed_types = ['fbx', 'obj', 'zip'];
            break;
        case 'arPortal':
            allowed_types = ['png', 'jpg', 'jpeg'];
            break;
    }
    console.log(allowed_types + type);
    var ext = filename.split('.').pop().toLowerCase();
    console.log(ext);
    if (jQuery.inArray(ext, allowed_types) == -1) {
        console.log('In If');
        return false;
    } else {
        console.log('In Else');
        return true;
    }
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false;
    return true;
}
