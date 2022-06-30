$(function(){
	
	var s5cnt = 0;
	
	function s5MainSlideFn(){
		$('.sec5-tag-item').stop().animate({left:-915*s5cnt},0);
	}

	
	$('.sec5-tag-listBtn').each(function(index){
		$(this).on({
			click:	function(){
				s5cnt=index;
				s5MainSlideFn();
				listBtnEventFn(s5cnt);
			}
		});
	});
	
	function listBtnEventFn(s5cnt){
		$('.sec5-tag-list li').children().removeClass('addListBtn');
		$('.sec5-tag-list li a').eq(s5cnt).addClass('addListBtn');
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});//sec5Ani.js