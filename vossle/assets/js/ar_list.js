
	jQuery('.selectall').show();

      jQuery(".selectall").click(function() {
        jQuery('.selectall').show();
        jQuery(".individual").prop("checked", jQuery(this).prop("checked"));
      });

      jQuery('.show_analytics_modal').click(function(){
        jQuery("#analytics_modal").modal('show');
      });
 function addNew(){
      var url = window.location.href+'%2Fadd';
      window.location.href = url;
    }

    function edit_ar(id){
      var url = window.location.href+'%2Fedit_experience&ar='+id;
      window.location.href = url;
    }

    function show_ar(id){
      var url = window.location.href+'%2Fshow_experience&ar='+id;
      window.location.href = url;
    }