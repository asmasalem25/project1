$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
	
});

	//show hidden items from work
	$(' .show-more').click(function(){
		$('.our-work .hidden').fadeIn(1000);
	});

//$('.nav navbar-nav .navbar-right li a').click(function(){
//	$('html,body').animate({
	//	srollTop:$('#'+$(this).data('value')).offset().top
	//},1000);
	
//});
});


