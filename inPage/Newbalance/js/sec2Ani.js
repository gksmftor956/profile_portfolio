$(function(){
	
	s2t0 = 0;
	s2t1 = 0;
	s2t2 = 0;
	
	// $(window).scroll(function(){
		// console.log( $(window).scrollTop() );
	// });
	
	//1.
	$(window).scroll(function(){
		if( $(window).scrollTop() >=500 ){
			if( s2t0==0 ){
				s2t0=1;
				sec2Ani0Fn();
			}
		}	
		else{
			s2t0=0;
			sec2Ani0FormatFn();
		}
	});
	
	//2.
	$(window).scroll(function(){
		if( $(window).scrollTop() >=800 ){
			if( s2t1==0 ){
				s2t1=1;
				sec2Ani1Fn();
			}
		}	
		else{
			s2t1=0;
			sec2Ani1FormatFn();
		}
	});
	
	//3.
	$(window).scroll(function(){
		if( $(window).scrollTop() >=1300 ){
			if( s2t2==0 ){
				s2t2=1;
				sec2Ani2Fn();
			}
		}	
		else{
			s2t2=0;
			sec2Ani2FormatFn();
		}
	});
	
	
	
	
	
	//애니메이션
	function sec2Ani0Fn(){
		$('.sec2-collection-inner-p0 .collection-inner-img').stop().animate({top:-70,right:220},1500,'easeOutBack');
		$('.sec2-collection-inner-p0 .collection-inner-txt').stop().animate({left:220},1500,'easeOutBack');
	}	
	function sec2Ani1Fn(){		
		$('.sec2-collection-inner-p1 .collection-inner-img').stop().animate({top:0,left:220},1500,'easeOutBack');
		$('.sec2-collection-inner-p1 .collection-inner-txt').stop().animate({right:220},1500,'easeOutBack');
	}	
	function sec2Ani2Fn(){		
		$('.sec2-collection-inner-p2 .sec2-collection-list0').stop().animate({top:0},400, function(){
			$('.sec2-collection-inner-p2 .sec2-collection-list1').stop().animate({top:0},400, function(){
				$('.sec2-collection-inner-p2 .sec2-collection-list2').stop().animate({top:0},400, function(){
					$('.sec2-collection-inner-p2 .sec2-collection-list3').stop().animate({top:0},400, function(){
						$('.sec2-collection-inner-p2 .sec2-collection-list4').stop().animate({top:0},400, function(){
							$('.sec2-collection-inner-p2 .sec2-collection-list5').stop().animate({top:0},400);
						});
					});
				});
			});
		});
	}
	
	
	//초기화
	function sec2Ani0FormatFn(){
		$('.sec2-collection-inner-p0 .collection-inner-img').stop().animate({top:70,right:0},1500,'easeOutBack');
		$('.sec2-collection-inner-p0 .collection-inner-txt').stop().animate({left:0},1500,'easeOutBack');
	}	
	function sec2Ani1FormatFn(){		
		$('.sec2-collection-inner-p1 .collection-inner-img').stop().animate({top:130,left:0},1500,'easeOutBack');
		$('.sec2-collection-inner-p1 .collection-inner-txt').stop().animate({right:0},1500,'easeOutBack');	
	}	
	function sec2Ani2FormatFn(){
		$('.sec2-collection-inner-p2 .sec2-collection-list').stop().animate({top:150},1500,'easeOutBack');	
	}
	
	
	
	
	
	
	
	
	
	
});//sec2Ani.js