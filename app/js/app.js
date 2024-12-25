(function($){
	$(document).ready(function(){ 
		
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
