/**
 * Created by Karl Jean-Brice
 */
$(document).ready(function () {

   
	 $('body').on('click', '.scroll-nav', function (e) {
        var linkHref = $(this).attr('href');
        e.preventDefault();
       	$('html, body').animate({
       		scrollTop: $(linkHref).offset().top
       	},1000);
    });

   $('body').on('mouseenter', '.image-container', function (e) {
        var image_layer = $(this);
        var hidden_element = image_layer.find('div.image-layer');

        hidden_element.removeClass('hide-element');
        if(hidden_element.is(":visible")){
        	hidden_element.hide();
        }
        hidden_element.fadeIn(600);
    });

     $('body').on('mouseleave', '.image-container', function (e) {
        var image_layer = $(this);
        var hidden_element = image_layer.find('div.image-layer');
        hidden_element.fadeOut(600); 
    });

});


