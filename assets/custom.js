/* make this modular */
var toggleModule = function() {
	$('body').addClass('ac_no-scroll');
	$('.product-single__related-products').addClass('slide-in');
	$('.product-single__related-products *').addClass('ac_no-click');

	$('body').on('click', function(e){
	  if ( !$(e.target).hasClass('ac_no-click') ) {
	    $('product-single__related-products').removeClass('slide-in');
	    $('body').removeClass('ac_no-scroll');          
	  }
	});

	$(document).keyup(function(e){
	  if ( e.keyCode === 27 ){
	    $('.product-single__related-products').removeClass('slide-in');
	    $('body').removeClass('ac_no-scroll');
	  }
	});
}

/* Fixed Product Info */
function fixedProductMeta(){

	// necessary to have two elements here?
	var $productMetaStatic = $('.fs_product-single__meta'),
		$productMetaStaticOffset = $productMetaStatic.offset().top - 55,
		$productMetaAnimated = $('.fs_product-single__meta--fixed'),
		$lastImage = $('.fs_product-single__images--big img:last-of-type'),
		$lastImageOffset = $lastImage.offset().top;

	$(window).scroll(function(){
		if ( $(window).scrollTop() > $productMetaStaticOffset && $(window).scrollTop() < $lastImageOffset ){ 
			$productMetaStatic.attr('style','opacity:0');
			$productMetaAnimated.addClass('slide-in');
		} else {
			$productMetaStatic.attr('style','opacity:1');
			$productMetaAnimated.removeClass('slide-in');
		}
	});
}

/* Related Products */
function relatedProducts(){
	var $lastImage = $('.fs_product-single__images--big img:last-of-type'),
		$lastImageOffset = $lastImage.offset().top;

	// get styles in order for this
	$(window).scroll(function(){
		if ( $(window).scrollTop() > $lastImageOffset ) {
			$('.product-single__related-products').addClass('slide-in');
		} else {
			$('.product-single__related-products').removeClass('slide-in');
		}
	});
}

$(document).ready(function(){
	fixedProductMeta();
	relatedProducts();

	// reset function on window resize
	$(window).resize(function(){
		fixedProductMeta();
		relatedProducts();
	});
});