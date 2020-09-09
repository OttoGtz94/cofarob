$(document).ready(function(){
	$(window).scroll(function(){
		var windowWidth = $(window).width();
		if (windowWidth > 800){
			//alert('Soy mayor a 800px');
			var scroll = $(window).scrollTop();

			$('header .texto').css({
				'transform': 'translate(0px,' + scroll / 2 + '%)'
			});

			$('.acerca-de article').css({
				'transform': 'translate(0px, -' + scroll / 10 + '%)'
			});

			//$('.foto').css({
			//	'transform': 'translate(20px,' + scroll / 10 + '%)'
			//});
		}
	});

	$(window).resize(function(){
		//alert('Soy menor de 800px');
		var windowWidth = $(window).width();
		if (windowWidth < 800){
			$('.acerca-de article').css({
					'transform': 'translate(0px, 0px)'
			});
		}
	});
	
});