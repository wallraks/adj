 jQuery(document).ready(function($){
/********************************************************************/
 $( "#tabs" ).tabs();
     $(".selectall").click(function () {
          $('.single').attr('checked', this.checked);
    });
    $(".single").click(function(){
 
        if($(".single").length == $(".single:checked").length) {
            $(".selectall").attr("checked", "checked");
        } else {
            $(".selectall").removeAttr("checked");
        }
    });

	/****************display option jquery*****************/

/*******************************content slider starts**************************************/
	jQuery('.hs_content_text_link').hover(function(e){
e.preventDefault();
$(this).parent().find('.hs_content_main_box').show('slow');
});
jQuery('.hs_content_close').click(function(e){
e.preventDefault();
jQuery('.hs_content_main_box').css("display", "none");
});

/*******************************content slider ends**************************************/

/*******************************animated slider starts**************************************/
jQuery('.hs_animated_inner').hide();
jQuery('.hs_animated_outer').mouseover(function() {
$(this).parent().find('.hs_animated_outer').hide('slow');
    $(this).parent().find('.hs_animated_inner').show('slow');
});
jQuery('.hs_animated_inner').mouseout(function(){
    $(this).parent().find('.hs_animated_inner').hide('slow');
	$(this).parent().find('.hs_animated_outer').show('slow');
});

/*******************************animated slider ends**************************************/

/*******************************drop down starts **************************************/

var vt=0;
jQuery('.hs_drop_down_button').click(function(e){
e.preventDefault();
if(vt==0)
{
jQuery('.hs_drop_down_innerbox').show('slow');
vt++;
}
else
{
jQuery('.hs_drop_down_innerbox').hide('slow');
vt--;
}
});
/*******************************drop down ends**************************************/

/*******************************ultimate pop up starts**************************************/


var visited = $.cookie('visited');
    if (visited != 'yes') {
         var t=$('#hs_settime').val();
 var ti=t+'000';
 var d=$('#hs_direc').val();
setTimeout(function() {
 jQuery('.hs_ultimate_mainbox').show(d); 
}, ti);
    }
jQuery('.hs_ultimate_close_icon').click(function(e){
e.preventDefault();
jQuery('.hs_ultimate_mainbox').css("display", "none");
$.cookie('visited', 'yes', { expires: 1 });
});

jQuery('.hs_ultimate_mainbox').click(function(e){
e.preventDefault();
jQuery(this).css("display", "none");
$.cookie('visited', 'yes', { expires: 1 });
});

/*******************************ultimate pop up ends**************************************/
$('.bxslider').bxSlider({
  /*auto: true,
  autoControls: true*/
});
/********************************************************************/	
});