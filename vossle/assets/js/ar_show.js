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
	jQuery( document ).ready( function() {
        jQuery(".copy_and_share_url").click(function() {
            var copyText = document.getElementById("url_changeable");
            console.log(copyText);
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");
            // alert("Copied: " + copyText.value);
            jQuery('.copy_status').show();
        });
    });