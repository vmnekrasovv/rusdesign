(function($){
	$(document).ready(function(){ 
		

		$('.s2-slider-first').slick({
			speed: 700,
			slidesToShow: 4,
			slidesToScroll: 1,
			swipeToSlide: true,
			autoplay: true,
			arrows: false,
			variableWidth: false,
			centerMode: true,
			autoplaySpeed: 2000,
			responsive: [
				{
				  breakpoint: 1800,
				  settings: {
				    slidesToShow: 3
				  }
				},
				{
				  breakpoint: 1400,
				  settings: {
				    slidesToShow: 2
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
				    slidesToShow: 1,
				    centerMode: false
				  }
				}
			]
		});

		$('.s2-slider-second').slick({
			speed: 700,
			slidesToShow: 4,
			slidesToScroll: 1,
			swipeToSlide: true,
			autoplay: true,
			arrows: false,
			variableWidth: false,
			centerMode: true,
			autoplaySpeed: 2000,
			rtl: true,
			responsive: [
				{
				  breakpoint: 1800,
				  settings: {
				    slidesToShow: 3
				  }
				},
				{
				  breakpoint: 1400,
				  settings: {
				    slidesToShow: 2
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
				    slidesToShow: 1,
				    centerMode: false
				  }
				}
			]
		});

	});

	$(window).on('load resize', function(){
	
		let window_width = window.innerWidth;

		let navbar = $('.navbar .container');
		let navbarDrop = $('.navbar-dropdown');
		let menu = $('.menu');
		let auth = $('.auth');

		if(window_width < 769){
			menu.add(auth).appendTo(navbarDrop);
		} else {
			menu.add(auth).appendTo(navbar);
		}
	});

})(jQuery);
