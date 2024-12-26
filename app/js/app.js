(function($){
	$(document).ready(function(){ 
		
		const s2sliderSettings = {
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
		};

		$('.s2-slider-first').slick(s2sliderSettings);

		const slider2Settings = {
		  ...s2sliderSettings,
		  rtl: true
		};

		$('.s2-slider-second').slick(slider2Settings);

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
