/* Fixed Product Info */
function fixedProductMeta(){

	var $productMeta = $('.fs_product-single__meta'),
		$productMetaOffset = $productMeta.offset().top - 55,
		$lastImage = $('.fs_product-single__images--big img:last-of-type'),
		$lastImageOffset = $lastImage.offset().top;

	$(window).scroll(function(){
		if ( $(window).scrollTop() > $productMetaOffset && $(window).scrollTop() < $lastImageOffset ){ 
			$productMeta.addClass('fixed');
		} else {
			$productMeta.removeClass('fixed');
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