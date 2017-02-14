

;(function ($){
	var btn = $('.button-holder a');
	var toolkitHolder = $('.toolkit-holder');

function mouseIn(){
	var parent =  $(this).closest('.button-holder');
	var sib = $(parent).siblings('.toolkit-holder'); 
	$(sib).addClass('hover');
};
function mouseOut(){ 
	toolkitHolder.removeClass('hover') 
}

btn.hover(mouseIn, mouseOut);

})(jQuery)