jQuery( document ).ready( function() {
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

    document.getElementById('up_1').onclick = function() {
        document.getElementById('imageLoader').click();
    };

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
    
    document.getElementById('up_6').onclick = function() {
        document.getElementById('splash_screen_up').click();
    };
    
    document.getElementById('up_7').onclick = function() {
        document.getElementById('panel_image_up').click();
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

    /* jQuery("#about_us").on('focusout', function() { */
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
    
    jQuery("#game_instruction").on('keyup', function() {
        let maxLength = 150;
        var textlen = maxLength - jQuery(this).val().length;
        jQuery('#game_instruction_count').html(textlen + ' Character(s) Remaining');
    });
    
    jQuery("#label").on('keyup', function() {
        let maxLength = 25;
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
        
        jQuery('#home').removeClass('d-block');
        jQuery('#home').addClass('d-none');
        jQuery('#sub_game_category').val('');
        jQuery('#tossing_model_pic').hide();
        jQuery('#sv1').show();
        jQuery('#sv_nxt').hide();
        jQuery('#transparent_image_model').hide();
        if(value == "games") {
            jQuery('.exp_type_select').val(value);
            jQuery('#sub_home').removeClass('d-none');
            jQuery('#sub_home').addClass('d-block');
        } else if(value == "toss") {
            sub_game_category = value;
            jQuery('#sub_game_category').val(value);
            jQuery('#sub_home').removeClass('d-block');
            jQuery('#sub_home').addClass('d-none');
            jQuery('#setup').removeClass('d-none');
            jQuery('#setup').addClass('d-block');
            
            jQuery('#tossing_model_pic').hide();
            jQuery('.exp_name_text').text('Game Name');
            jQuery('#tossing_model').show();
            jQuery('.label_for_hide').hide();
            jQuery('#light_setting_section').show();
            jQuery('#sound_file_section').show();
            jQuery('.game_instruction_section').show();
            jQuery('#audio_file_section').show();
            jQuery('.audio_label').text('Background Audio');
            jQuery('.audio_setting_label').text('Background Audio Loop');
            jQuery('.audio_setting_desc').text('Toggle the switch to play audio in loop.');
            jQuery('.content_label').text('Target Model');
            
            jQuery("#text_slab").html(" <i class=\"fas fa-chevron-right\"></i> Games");
            jQuery('#three_d_model_file_ip').attr('placeholder', 'Target 3d model in GLB format (Must be less than 6MB).');
            jQuery('#up_4').attr({'title':'3D model should have bottom anchor.'});
            jQuery('#up_5').attr({'title':'3D model should have bottom anchor.'});
        } else if(value == "dodge_collect") {
            sub_game_category = value;
            jQuery('#sub_game_category').val(value);
            jQuery('#sub_home').removeClass('d-block');
            jQuery('#sub_home').addClass('d-none');
            jQuery('#setup').removeClass('d-none');
            jQuery('#setup').addClass('d-block');

            jQuery('.exp_name_text').text('Game Name');
            jQuery('.content_label').text('Main Model');
            jQuery('.tossing_label').text('Collider Model');
            jQuery('#tossing_model_ip').attr('placeholder', 'Collider model in GLB format.');
            jQuery('#tossing_model').show();
            // jQuery('#dodge_collect_section').show();
            jQuery('.label_for_hide').hide();
            

            jQuery('.game_instruction_section').show();
            jQuery('#audio_file_section').show();
            jQuery('.audio_label').text('Background Audio');
            jQuery('.audio_setting_label').text('Background Audio Loop');
            jQuery('.audio_setting_desc').text('Toggle the switch to play audio in loop.');
            
            jQuery("#text_slab").html(" <i class=\"fas fa-chevron-right\"></i> Games");
            jQuery('#three_d_model_file_ip').attr('placeholder', 'Main model in GLB format.');
        } else {
            jQuery('.exp_type_select').val(value);
            jQuery('#setup').removeClass('d-none');
            jQuery('#setup').addClass('d-block');
        }
        jQuery('#detection_point_box').hide();
        jQuery('.markerbased_display_section_box').hide();
        jQuery('.main_div').removeClass('col-9');
        jQuery('.main_div').addClass('col-12');
        jQuery('#feedback_content').hide();
        jQuery('#add_moreContent').hide();
        jQuery('#add_morePanel').hide();
        jQuery('#audio_content').hide();
        jQuery('#action_control_section').hide();
        jQuery('#camera_setting_section').hide();
        jQuery('#screen_gesture_section').hide();
        jQuery('#enable_shadow_section').hide();
        jQuery('.workflow_struct').addClass('d-none');
        jQuery('.common_struct').removeClass('d-none'); 
        jQuery('#setup').removeClass('setup_box');
        jQuery('.setup_tab_header_box').removeClass('d-block');
        jQuery('.setup_tab_header_box').addClass('d-none');
        // jQuery('#3d_file_up').attr('name','three_d_model_file')
        if(value == "markerless_3d_model") {
            jQuery("#text_slab").html(" <i class=\"fas fa-chevron-right\"></i> Markerless");
            jQuery('#light_setting_section').show();
            jQuery('.light_setting_input').attr('max',3);
            jQuery('.light_setting_input').attr('value',1);
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
            jQuery("#text_slab").html(" <i class=\"fas fa-chevron-right\"></i> Marker Based");
        } else if(value == "work_flow") {
            jQuery("#text_slab").html(" <i class=\"fas fa-chevron-right\"></i> Work Flow");
            
            jQuery('#content_file').hide();
            jQuery('.label_for_hide').hide();
            jQuery('#audio_setting_section').hide();
            
            jQuery('#setup_tab_text').text('Basic Info');
            jQuery('#hide-x-content').show();
            jQuery('#hide-x-panel').show();
            jQuery('#splash_screen').show(); 
            jQuery('#feedback_content').show();
            jQuery('#camera_setting_section').hide();

            jQuery('#audio_file_section').hide();
            jQuery('#panel_image').hide();
            jQuery('#action').hide();
            jQuery('#add_moreContent').hide();
            jQuery('#add_morePanel').hide();
            jQuery('#audio_content').hide();
            jQuery('#action_control_section').show();
            jQuery('#screen_gesture_section').show();
            jQuery('#enable_shadow_section').show();
            jQuery('#sv1').hide();
            jQuery('#sv_nxt').show();
            jQuery('.workflow_struct').removeClass('d-none');
            jQuery('.common_struct').addClass('d-none');
            jQuery('#setup').addClass('setup_box');
            jQuery('.setup_tab_header_box').removeClass('d-none');
            jQuery('.setup_tab_header_box').addClass('d-block');
        }
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
            } else if (sub_game_category == 'dodge_collect') {
                if (this.files[0].size <= 20971520) {
                    let str = jQuery(this).val().replace(/C:\\fakepath\\/i, '');
                    jQuery('#three_d_model_file_ip').val(str);
                } else {
                    jQuery('#errmsg').text('File size can not be more than 20 MB.');
                    jQuery('#errmsgDiv').css('visibility', 'visible');
                    jQuery('#three_d_model_file_ip').css('border', '1px solid red');
                    jQuery('#three_d_model_file_ip').val('File size can not be more than 20 MB.');
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
                    if((ext == 'mp4' || ext == 'm4v')  && value != 'face_detection') {
                        jQuery('#video_setting_section').show();
                        jQuery('#audio_file_section').hide();
                    } else if((ext != 'mp4' || ext != 'm4v')  && value != 'face_detection') {
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
        let value = jQuery('#sub_game_category').val();
        console.log('sub val',value);
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

    /** 
        * ar_form ajax call data
        */

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

});

var imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);

function handleImage(e) {

	console.log("initiated: " + e);
	nameWithExt = e.target.files[0].name;
	console.log("Image uploaded: " + nameWithExt);

	name = nameWithExt.substr(0, nameWithExt.lastIndexOf('.'));

	let extJpg = nameWithExt.substr(nameWithExt.lastIndexOf('.'));

	let confidenceEl = document.getElementById("confidenceLevel");
	let childEls = confidenceEl.getElementsByClassName("confidenceEl");
	for(let i = 0; i < childEls.length; i++){
		childEls[i].src = vossle_ar_experience_params.star2;
	}

	// if (extJpg == '.jpg' || extJpg == '.jpeg' || extJpg == '.JPG' || extJpg == '.JPEG') {
	//     useJpeg(e);
	// } else 
	
	if (extJpg == '.png' || extJpg == '.PNG') {
		globalObj.dpi = 72;
		readImage(e)
	} else {
		console.log("Invalid image format!");
		alert("Invalid image format! Please upload again");
		imageLoader.value = null;
	}

	document.getElementById("sv1").disabled = false;
}

function readImage(e) {
    reader.onload = function (event) {

        var img = new Image();
        img.onload = function () {
            console.log(img.width);
            console.log(img.height);
            if(img.width > 1080 || img.height > 1080) {
                console.log("Height or width size is more than 1000px, Please upload small pixels image.");
                alert("Height or width size is more than 1000px, Please upload small pixels image.");
                imageLoader.value = null;
                return false;
            }
            var canvasEl = document.querySelector('#imageCanvas');
            canvas.width = canvasEl.clientWidth;
            canvas.height = canvasEl.clientHeight;
            hideCanvas.width = img.width;
            hideCanvas.height = img.height;

            globalObj.w = img.width;
            globalObj.h = img.height;

            ctxHide.drawImage(img, 0, 0);

            ctx.drawImage(img, 0, 0, img.width, img.height,     // source rectangle
                0, 0, canvas.width, canvas.height); // destination rectangle

            var imgData = ctxHide.getImageData(0, 0, hideCanvas.width, hideCanvas.height);

            let newArr = [];

            let verifyColorSpace = detectColorSpace(imgData.data);

            if (verifyColorSpace == 1) {
                for (let j = 0; j < imgData.data.length; j += 4) {
                    newArr.push(imgData.data[j]);
                }
            } else if (verifyColorSpace == 3) {
                for (let j = 0; j < imgData.data.length; j += 4) {
                    newArr.push(imgData.data[j]);
                    newArr.push(imgData.data[j + 1]);
                    newArr.push(imgData.data[j + 2]);
                }
            }

            globalObj.nc = verifyColorSpace;

            let uint = new Uint8Array(newArr);

            globalObj.arr = uint;

            let confidence = calculateQuality();
            let confidenceEl = document.getElementById("confidenceLevel");
            let childEls = confidenceEl.getElementsByClassName("confidenceEl");
            for(let i = 0; i < parseInt(confidence.l); i++){
                childEls[i].src = vossle_ar_experience_params.star;
            }
            confidenceEl.scrollIntoView();
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}

document.getElementById("sv1").disabled = true;

var url = null;
var sub_game_category = null;

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
        }
        
        reader.readAsDataURL(input.files[0]); // convert to base64 string
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
    if(dname == 'qrcode') {
        var qrCodeLogo = document.getElementById('qrcode').children;
        img = qrCodeLogo[1].src;
        var domElement = window.document.createElement("a");
        domElement.href = img;
        domElement.download = dname+".png";
        document.body.appendChild(domElement);
        domElement.click();
        document.body.removeChild(domElement);
    } else {
        // img = imageLoader;
        input = imageLoader;
        console.log(input);
        console.log(input.files);
        console.log(input.files[0]);
        if (input.files && input.files[0]) {
            console.log('in if download');
            var reader = new FileReader();
            
            reader.onload = function(e) {
                // jQuery('#blah').attr('src', e.target.result);
                console.log('in reader download' + e.target.result);
                var domElement = window.document.createElement("a");
                domElement.href = e.target.result;
                domElement.download = dname+".png";
                document.body.appendChild(domElement);
                domElement.click();
                // document.body.removeChild(domElement);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
}

var _URL = window.URL || window.webkitURL;

function fileValidation(filename, type) {
    console.log(filename + type);
    let exp_type = jQuery('.exp_type_select').val();
    if(type == 'content' && exp_type == 'face_detection' || type == 'content' && exp_type == 'games'){ type = 'glbModal'; }
    var allowed_types = [];
    switch (type) {
        case 'content':
            allowed_types = ['glb','gltf','zip','fbx','jpg','png','jpeg','mp4','m4v'];
            break;
        case 'glbModal':
            allowed_types = ['glb','gltf'];
            break;
        case 'pattern':
            allowed_types = ['patt'];
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
