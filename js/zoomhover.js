
$(function(){
	$(window).load(function(){
		var thumbSize = 150;
		var magnifySize = 350;

		$(".magnify").each(function(){
			$(this).css({width:(thumbSize)});
		});

		var objWidth = $('.magnify').width();
		var objHeight = $('.magnify').height();

		$(".magnify").each(function(){
			$(this).wrapAll('<span class="magnify_cover"></span>');
			$(this).parent('.magnify_cover').css({
				width: (objWidth),
				height: (objHeight),
				position: 'relative'
			});
			if($(this).parents().hasClass('left')) {
				$(this).parent('.magnify_cover').css({
					margin: '0 10px 10px 0',
					float:'left'
				});
			}
			if($(this).parents().hasClass('right')) {
				$(this).parent('.magnify_cover').css({
					margin: '0 0 10px 10px',
					float:'right'
				});
			}
			
		});

		$(".magnify").hover(function(){
			if($(this).parents().hasClass('left')) {
				$(this).css({top:'0',left:'0',position: 'absolute'});
			}
			if($(this).parents().hasClass('right')) {
				$(this).css({top:'0',right:'0',position: 'absolute'});
			}
			$(this).stop().animate({width:(magnifySize)},500,function(){
				$(this).addClass('shadow');
			});
		}, function(){
			$(this).stop().animate({width:(thumbSize)},300,function(){
				if($(this).parents().hasClass('left')) {
					$(this).css({top:'',left:'',position: 'relative'});
				}
				if($(this).parents().hasClass('right')) {
					$(this).css({top:'',right:'',position: 'relative'});
				}
				$(this).removeClass('shadow');
			});
		});
	});
});
