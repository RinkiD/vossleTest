function string_to_slug (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    console.log(str);
    str = str.replace(/[^a-z0-9 -]/g, ''); // remove invalid chars
    console.log(str);
    str = str.replace(/\s+/g, '-'); // collapse whitespace and replace by -
    console.log(str);
    str = str.replace(/-+/g, '-'); // collapse dashes
    console.log(str);
    return str;
}

jQuery( document ).ready( function() {
    jQuery( '#exp_nm' ).on('focusout', function( e ) {
        
        var link = this;

        let text = jQuery(link).val();
        var slug_text = string_to_slug(text);
        var nonce_feild = document.querySelector('[name="_wpnonce"]').value;
        
        url=slug_text;
        var slug_div = document.getElementById('slugExpName');
        slug_div.style.display = "none";
        if(text != ''){
            // This is what we are sending the server
            var data = {
                action: 'vossle_check_experience_name',
                text: text,
                slug: slug_text,
                nonce_ajax : nonce_feild,
            }
            
            // Post to the server
            jQuery.post( vossle_ar_experience_params.ajaxurl, data, function( data ) {
                console.log(data);
                let response = JSON.parse(data);
                console.log(response.status);
                if(response.status == true){
                    document.getElementById("qrcode").innerHTML = "";
    
                    slug_div.style.display = "block";
                    var url_2 = vossle_ar_experience_params.server_url +slug_text;
                    slug_div.innerHTML = '<p class="m-0 p-0 text-success">URL : '+url_2+'</p>';
    
                    var qrcode = new QRCode(document.getElementById("qrcode"), {
                        // ====== Basic ======
                        text: url_2,
                        width: 256,
                        height: 256,
                        colorDark :  "#000000",
                        colorLight : "#ffffff",
                        correctLevel : QRCode.CorrectLevel.H, // L, M, Q, H
                        dotScale: 0.7, // Must be greater than 0, less than or equal to 1. default is 1
                        
                        // ====== Quiet Zone ======
                        quietZone: 25,
                        quietZoneColor: '#ffffff',
    
                        // ====== Logo ======
                        
                        logo:vossle_ar_experience_params.plugin_url+"/vossle/assets/images/logo_black.png",
                        // Relative address, relative to `easy.qrcode.min.js`
                        // logo:"http://127.0.0.1:8020/easy-qrcodejs/demo/logo.png",
                        logoWidth:100, // widht. default is automatic width
                        logoHeight:55, // height. default is automatic height
                        logoBackgroundColor:'#ffffff', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
                        logoBackgroundTransparent:false, // Whether use transparent image, default is false
                    });
                    document.getElementById("sv1").disabled = false;
                } else if(response.status == false) {
                    document.getElementById("sv1").disabled = true;
                    slug_div.style.display = "block";
                    document.getElementById('slugExpName').innerHTML = "<p class='text-danger'>URL Not available.</p>";
                }
            });
        } else {
            document.getElementById('slugExpName').style.display = "none";
        }
        // Prevent the default behavior for the link
        e.preventDefault();
    });

    jQuery( '.dl_itm' ).on('click', function( e ) {
        var link = this;
        var itm = jQuery(link).attr('del-vl');
        console.log('itm',itm);
        var nonce_feild = document.querySelector('[name="_wpnonce"]').value;
        var client = vossle_ar_experience_params.user_id;
        if (itm != '') {
            if (confirm("Are you sure you want to delete this AR Experience?")) {            
                // This is what we are sending the server
                var data = {
                    action: 'vossle_remove_ar_experience',
                    id: itm,
                    client_id:client,
                    remove_ar:'remove',
                    nonce_ajax : nonce_feild,
                }

                jQuery.post( vossle_ar_experience_params.ajaxurl, data, function( data ) {
                    
                    let response = JSON.parse(data);
                    console.log(response.data);
                    
                    if (jQuery.trim(response.data) == itm) {
                        jQuery('#data_' + itm).remove();
                    } else {
                        return false;
                    }
                });
            }
        }
        // Prevent the default behavior for the link
        e.preventDefault();
    });
    
    jQuery( '.ar_form_create' ).on('submit', function( e ) {
        e.preventDefault();
        var exp_type = jQuery.trim(jQuery('#exp_type').val());
        var exp_nm = jQuery('#exp_nm').val();
        var website = jQuery('#about_us').val();
        var content = jQuery('#3d_file_up').val();
        var expSlug = jQuery('#exp_id').val();
        console.log('expSlug',expSlug);
        if(expSlug == ' '){
            if(jQuery('#edit_form').val() == 'edit_form') {
                var sub_game_category = jQuery('input[name=detection_point]').val();
            }
            if (exp_nm == '') {
                    jQuery('#errmsg').text('Please enter experience name');
                    jQuery('#errmsgDiv').css('visibility', 'visible');
                    jQuery('#exp_nm').css('border', '1px solid red');
                    return false;
            }
            
            if (exp_type != 'games' && sub_game_category != 'toss' && content == '') {
                jQuery('#errmsg').text('Please upload content file.');
                jQuery('#errmsgDiv').css('visibility', 'visible');
                jQuery('#3d_file_ip').css('border', '1px solid red');
                return false;
            }

            if (exp_type == '' || exp_type == '0') {
                //alert("Please select Experience type");
                jQuery('#errmsg').text('Please select experience type');
                jQuery('#errmsgDiv').css('visibility', 'visible');
                jQuery('#exp_type').css('border', '1px solid red').focus();
                return false;
            } else if (exp_type == 'markerbased') {
                var markerImage = jQuery('#imageLoader').val();
                if (markerImage == '') {
                    jQuery('#errmsg').text('Please upload marker image');
                    jQuery('#errmsgDiv').css('visibility', 'visible');
                    jQuery('#marker_image_ip').css('border', '1px solid red');
                    return false;
                }
            } else if (exp_type == 'face_detection') {
                var detection_point = jQuery.trim(jQuery('#detection_point').val());
                if (detection_point == '') {
                    jQuery('#errmsg').text('Please select detection point');
                    jQuery('#errmsgDiv').css('visibility', 'visible');
                    jQuery('#detection_point').css('border', '1px solid red');
                    return false;
                }
            }

            var audio_file_check = jQuery('#audio_file_up').val();
            if (audio_file_check != '') {
                var filecheck = fileValidation(audio_file_check, 'audio');
                if (filecheck) {
                    if (document.getElementById('audio_file_up').files[0].size >= 20971520) {
                        jQuery('#errmsg').text('File size can not be more than 20 MB.');
                        jQuery('#errmsgDiv').css('visibility', 'visible');
                        jQuery('#audio_file_ip').css('border', '1px solid red');
                        jQuery('#audio_file_ip').val('File size can not be more than 20 MB.');
                        jQuery('#audio_file_up').val('');
                        return false;
                    }
                } else {
                    jQuery('#errmsg').text('Please upload MP3 file.');
                    jQuery('#errmsgDiv').css('visibility', 'visible');
                    jQuery('#audio_file_ip').css('border', '1px solid red');
                    return false;
                }
            }

            if(website != '') {
                let check = validURL(website);
                console.log(check);
                if(check == false) {
                    jQuery('#errmsg').text('URL is not valid');
                    jQuery('#errmsgDiv').css('visibility', 'visible');
                    jQuery('#about_us').css('border', '1px solid red');
                    return false;
                }
            }
        }
        console.log('hgfgh');
        var formData = new FormData(this);
        
            if(jQuery('#edit_form').val() != 'edit_form') {
                if (exp_type == 'markerbased') {
                    
                    let marker_image = document.getElementById('imageLoader');
                    if(marker_image != '' && marker_image != null) {
                        formData.append('marker_image', marker_image.files[0],marker_image.files[0]['name']);
                    } else {
                        return false;
                    }
                }
                if(expSlug == ' '){ console.log('qrcodee');
                    var qrCodeLogo = document.getElementById('qrcode').children;
                    var qrCodeLogoSrc = qrCodeLogo[1].src;
                    // console.log(JSON.parse(qrCodeLogoSrc));
                    console.log(JSON.stringify(qrCodeLogoSrc));
                    if(qrCodeLogoSrc != '' && qrCodeLogoSrc != null) {
                        formData.append('qrCodeLogo', qrCodeLogoSrc);
                    } else {
                        return false;
                    }
                }
                formData.append('slug_exp_name', url);
            }
            
            if (exp_type == 'games') {
                formData.set('detection_point', sub_game_category);
            }
        
            if(exp_type == 'markerbased') formData.set('exp_type', 1);
            if(exp_type == 'markerless_3d_model') formData.set('exp_type', 2);
            if(exp_type == 'games') formData.set('exp_type', 3);
            if(exp_type == 'tryon') formData.set('exp_type', 4);
            if(exp_type == 'workflow') formData.set('exp_type', 5);
            if(exp_type == 'face_detection') formData.set('exp_type', 6);
       
        formData.append('action', 'vossle_add_ar_experience');
        
        // Display the values
        for (var value of formData.values()) {
            console.log(value);
        }
        // return false;

        jQuery('#sv1').attr("disabled", true);
        jQuery('#overlay').show();
        jQuery("#myBtn").trigger('click');

        // setTimeout(function() {
        //     console.log('wait')
        // }, 5000);

        // This is what we are sending the server
        // var data = {
        //     action: 'vossle_remove_ar_experience',
        //     id: itm,
        //     client_id:client,
        //     remove_ar:'remove',
        // }

        // jQuery.post( vossle_ar_experience_params.ajaxurl, formData, function( data ) {
        //     console.log(data);
        //     let response = JSON.parse(data);
        //     console.log(response.status);
            
        // });
        
        var nonce_feild = document.querySelector('[name="_wpnonce"]').value;
        jQuery.ajax({
            url: vossle_ar_experience_params.ajaxurl,
            nonce_ajax : nonce_feild,
            type: 'POST',
            data: formData,
            dataType: 'json',
            contentType: false, // The content type used when sending data to the server.
            cache: false, // To unable request pages to be cached
            processData: false,
            beforeSend: function() {
                jQuery(".progress").css("display", "block");
                var percentValue = '0%';

                jQuery('#progress-bar').width(percentValue);
            },
            xhr: function() {
                var xhr = jQuery.ajaxSettings.xhr();
                xhr.onprogress = function e() {
                    // For downloads
                    if (e.lengthComputable) {
                        console.log('Downloads');
                        console.log(e.loaded);
                        console.log(e.total);
                        console.log(e.loaded / e.total);
                    }
                };
                xhr.upload.onprogress = function(e) {
                    // For uploads
                    if (e.lengthComputable) {
                        let percentage = e.loaded / e.total * 100;
                        let percentText = percentage.toFixed(2);
                        jQuery("#progress-bar").width(percentText + '%');
                        jQuery("#progress-bar").text(percentText + "%");
                        console.log('Uploads');
                        console.log(e.loaded / e.total * 100);
                        console.log(e.loaded);
                        console.log(e.total);
                        console.log(e.loaded / e.total);
                    }
                };
                return xhr;
            },
            success: function(response) {
                // alert(data);
                if(expSlug == ' '){
                    let data = JSON.parse(response);
                    console.log('data',data.qr_code);
                    var res = data;
                    var slugUrl = data.slug_url;
                    var qrCCode = qrCodeLogoSrc;
                }else{
                    var qrCodeexist = jQuery('#qrCodeexist').val();
                    var res = response;
                    var slugUrl = res.slug_url;
                    var qrCCode =  vossle_ar_experience_params.s3new_url+qrCodeexist;
                }
                jQuery('#sv1').attr("disabled", false);
                jQuery('#overlay').hide();
                jQuery("#myBtn").trigger('click');
                if (res.result == 'failed') {
                    jQuery('#errmsg').text(data.msg);
                    jQuery('#errmsgDiv').css('visibility', 'visible');
                } else {
                    // jQuery("#addBookDialog").modal('hide');
                    jQuery('#ar_hold').val(res.ar);
                    // if(exp_type == 'markerbased'){
                    //     // DownloadEncoded();
                    //     // DownloadFullImage();
                    // }

                    jQuery('.modal-body').text('Great, You have now submitted all information.');
                    jQuery("#myBtn").trigger('click');
                    
                    // window.setTimeout(function() {
                    //     jQuery("#addBookDialog").modal('hide');
                    //     // window.location.href = vossle_ar_experience_params.plugin_url;
                    // }, 1000);

                    
                    jQuery('.breadcrumb li a.active').removeClass('active');
                    jQuery('#finish_tab').addClass('active');
                    
                    jQuery('#setup').removeClass('d-block');
                    jQuery('#setup').addClass('d-none');
                    
                    jQuery('#finish').removeClass('d-none');
                    jQuery('#finish').addClass('d-block');
                    
                    jQuery('.markerbased_display_section_box').hide();
                    
                    jQuery('.main_div').removeClass('col-9');
                    jQuery('.main_div').addClass('col-12');
                    
                    jQuery('.qr_code_replacable').html('<img id="qrcode_image" src="'+qrCCode+'" height="150px" />');
                    // jQuery('.qr_code_btn_replacable').attr("onclick","DownloadImage('qrcode')");
                    
                    if(exp_type == 'markerbased'){
                        jQuery('.qr_code_section').removeClass('col-10');
                        jQuery('.qr_code_section').addClass('col-5');
                        
                        jQuery('.url_div').css('height','60px !important');

                        jQuery('.marker_image_section').show();
                        jQuery('.marker_image_replacable').html('<img src="'+vossle_ar_experience_params.s3_url+'MarkerImage/'+data.marker_image+'" height="200px" />');
                        // jQuery('.marker_image_btn_replacable').attr("href",vossle_ar_experience_params.server_url+"dashboard/assets/MarkerImage/"+data.marker_image);
                    }
                    let slug_url = vossle_ar_experience_params.server_url+slugUrl;
                    //let slug_url = vossle_ar_experience_params.server_url+url;
                    if(slug_url.length < 33){
                        jQuery('.url_replacable').css('margin-top','7px');
                    }
                    jQuery('.url_changeable').val(slug_url);

                    console.log(data);
                }
            },
            error: function(xhr) {
                jQuery('#sv1').attr("disabled", false);
                jQuery('#overlay').hide();
                jQuery("#close_model").trigger('click');
               
                console.log("Unexpected error occoured, Please try again.");
                jQuery('#errmsg').text('Unexpected error occoured, Please try again.');
                jQuery('#errmsgDiv').css('visibility', 'visible');
                return false;
            },

        });
    });

    jQuery( '.ar_form_edit' ).on('submit', function( e ) {
        e.preventDefault();
        var exp_type = jQuery.trim(jQuery('#exp_type').val());
        var exp_nm = jQuery('#exp_nm').val();
        var website = jQuery('#about_us').val();
        var content = jQuery('#three_d_model_file_ip').val();
        var sub_game_category = jQuery("input[name=detection_point]").val();
        
        if (exp_nm == '') {
            jQuery('#errmsg').text('Please enter experience name');
            jQuery('#errmsgDiv').css('visibility', 'visible');
            jQuery('#exp_nm').css('border', '1px solid red');
            return false;
        }

        if (exp_type != 'games' && sub_game_category != 'toss' && content == '') {
            jQuery('#errmsg').text('Please upload content file.');
            jQuery('#errmsgDiv').css('visibility', 'visible');
            jQuery('#3d_file_ip').css('border', '1px solid red');
            return false;
        }

        if (exp_type == '' || exp_type == '0') {
            //alert("Please select Experience type");
            jQuery('#errmsg').text('Please select experience type');
            jQuery('#errmsgDiv').css('visibility', 'visible');
            jQuery('#exp_type').css('border', '1px solid red').focus();
            return false;
        }
        // else if (exp_type == 'markerbased') {
        //     var markerImage = jQuery('#imageLoader').val();
        //     if (markerImage == '') {
        //             jQuery('#errmsg').text('Please upload marker image');
        //             jQuery('#errmsgDiv').css('visibility', 'visible');
        //             jQuery('#marker_image_ip').css('border', '1px solid red');
        //             return false;
        //     }
        // }
        else if (exp_type == 'face_detection') {
            var detection_point = jQuery.trim(jQuery('#detection_point').val());
            if (detection_point == '') {
                jQuery('#errmsg').text('Please select detection point');
                jQuery('#errmsgDiv').css('visibility', 'visible');
                jQuery('#detection_point').css('border', '1px solid red');
                return false;
            }
        }

        var audio_file_check = jQuery('#audio_file_up').val();
        if (audio_file_check != '') {
            var filecheck = fileValidation(audio_file_check, 'audio');
            if (filecheck) {
                if (document.getElementById('audio_file_up').files[0].size >= 20971520) {
                    jQuery('#errmsg').text('File size can not be more than 20 MB.');
                    jQuery('#errmsgDiv').css('visibility', 'visible');
                    jQuery('#audio_file_ip').css('border', '1px solid red');
                    jQuery('#audio_file_ip').val('File size can not be more than 20 MB.');
                    jQuery('#audio_file_up').val('');
                    return false;
                }
            } else {
                jQuery('#errmsg').text('Please upload MP3 file.');
                jQuery('#errmsgDiv').css('visibility', 'visible');
                jQuery('#audio_file_ip').css('border', '1px solid red');
                return false;
            }
        }

        if(website != '') {
            let check = validURL(website);
            console.log(check);
            if(check == false) {
                jQuery('#errmsg').text('URL is not valid');
                jQuery('#errmsgDiv').css('visibility', 'visible');
                jQuery('#about_us').css('border', '1px solid red');
                return false;
            }
        }

        var formData = new FormData(this);
        
        // if (exp_type == 'markerbased') {
        //     let marker_image = document.getElementById('imageLoader');
        //     console.log(marker_image);
        //     if(marker_image != '' && marker_image != null && marker_image.files[0] != null) {
        //         formData.append('marker_image', marker_image.files[0],marker_image.files[0]['name']);
        //     }
        // }
        formData.append('action','vossle_edit_ar_experience');
        // Display the values
        for (var value of formData.values()) {
            console.log(value);
        }
        // return false;
        jQuery('#sv1').attr("disabled", true);
        jQuery('#overlay').show();
        jQuery("#myBtn").trigger('click');

        // setTimeout(function() {
        //     console.log('wait')
        // }, 5000);
        var nonce_feild = document.querySelector('[name="_wpnonce"]').value;
        jQuery.ajax({
            url: vossle_ar_experience_params.ajaxurl,
            nonce_ajax : nonce_feild,
            type: 'POST',
            data: formData,
            dataType: 'json',
            contentType: false, // The content type used when sending data to the server.
            cache: false, // To unable request pages to be cached
            processData: false,
            beforeSend: function() {
                // alert('I am Sending'+formData);
                // console.log(formData);
                jQuery(".progress").css("display", "block");
                var percentValue = '0%';

                jQuery('#progress-bar').width(percentValue);
            },
            xhr: function() {
                var xhr = jQuery.ajaxSettings.xhr();
                xhr.onprogress = function e() {
                // For downloads
                if (e.lengthComputable) {
                    console.log('Downloads');
                    console.log(e.loaded);
                    console.log(e.total);
                    console.log(e.loaded / e.total);
                }
                };
                xhr.upload.onprogress = function(e) {
                // For uploads
                if (e.lengthComputable) {
                    let percentage = e.loaded / e.total * 100;
                    let percentText = percentage.toFixed(2);
                    jQuery("#progress-bar").width(percentText + '%');
                    jQuery("#progress-bar").text(percentText + "%");
                    console.log('Uploads');
                    console.log(e.loaded / e.total * 100);
                    console.log(e.loaded);
                    console.log(e.total);
                    console.log(e.loaded / e.total);
                }
                };
                return xhr;
            },
            success: function(response) { 
                console.log('result',response);
                var res = JSON.parse(response);
                var data = JSON.parse(response);
                jQuery('#sv1').attr("disabled", false);
                jQuery('#overlay').hide();
                jQuery("#close_model").trigger('click');

                if (res.result == 'failed') {
                    jQuery('#errmsg').text(data.msg);
                    jQuery('#errmsgDiv').css('visibility', 'visible');
                    return false;
                } else {
                    jQuery('#ar_hold').val(res.ar);
                    // if(exp_type == 'markerbased' && markerImageCheck != ''){
                    //     DownloadFullImage();
                    // }

                    jQuery('.modal-body').text('Congratulations, You have successfully updated your AR experience.');
                    jQuery("#close_model").trigger('click');

                    // window.setTimeout(function() {
                    //   jQuery("#addBookDialog").modal('hide');
                    // }, 1000);

                    jQuery('.breadcrumb li a.active').removeClass('active');
                    jQuery('#finish_tab').addClass('active');
                    
                    jQuery('#setup').removeClass('d-block');
                    jQuery('#setup').addClass('d-none');
                    
                    jQuery('#finish').removeClass('d-none');
                    jQuery('#finish').addClass('d-block');
                    
                    jQuery('.markerbased_display_section_box').hide();
                    
                    jQuery('.main_div').removeClass('col-9');
                    jQuery('.main_div').addClass('col-12');
                    
                    jQuery('.qr_code_replacable').html('<img id="qrcode_image" src="'+vossle_ar_experience_params.s3_url+'qrCode/'+data.qr_code+'" height="150px" />');
                    // jQuery('.qr_code_btn_replacable').attr("onclick","DownloadImage('qrcode')");
                    
                    if(exp_type == 'markerbased'){
                        jQuery('.qr_code_section').removeClass('col-10');
                        jQuery('.qr_code_section').addClass('col-5');
                        
                        jQuery('.url_div').css('height','60px !important');

                        jQuery('.marker_image_section').show();
                        jQuery('.marker_image_replacable').html('<img src="'+vossle_ar_experience_params.s3_url+'MarkerImage/'+data.marker_image+'" height="200px" />');
                        // jQuery('.marker_image_btn_replacable').attr("href","https://vossle.com/dashboard/assets/MarkerImage/"+data.marker_image);
                    }

                    let slug_url = vossle_ar_experience_params.server_url+data.slug_url;
                    if(slug_url.length < 33){
                        jQuery('.url_replacable').css('margin-top','7px');
                    }
                    jQuery('.url_changeable').val(slug_url);

                    console.log(data);
                }
            },
            error: function(xhr) {
                jQuery('#sv1').attr("disabled", false);
                jQuery('#overlay').hide();
                jQuery("#close_model").trigger('click');
                console.log("Unexpected error occoured, Please try again.");
                jQuery('#errmsg').text('Unexpected error occoured, Please try again.');
                jQuery('#errmsgDiv').css('visibility', 'visible');
                return false;
            },
        });
    });
    
    jQuery( '#exp_id' ).on('change', function( e ) {
        var exp_slug = jQuery('#exp_id').val();
        if(exp_slug){
            var qr_value = jQuery('option:selected', this).attr('data-url');
            jQuery('#qrCodeexist').val(qr_value);
            jQuery('.exp_create').hide();
            jQuery('#sv1').removeAttr('disabled');
        }else{
            jQuery('.exp_create').show();
            jQuery('#sv1').addAttr('disabled','disabled');
        }
    });

});