$(function () {
	
	$('.drawerBt').click(function () {
		$(this).toggleClass('active');
		$('.drawerBg').fadeToggle();
		$('nav').toggleClass('open');
	})
	$('.drawerBg').click(function () {
		$(this).fadeOut();
		$('.drawerBt').removeClass('active');
		$('nav').removeClass('open');
	});
})