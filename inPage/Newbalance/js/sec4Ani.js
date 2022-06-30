$(function(){
	
	s4t0 = 0;
	s4t1 = 0;
	
	
	
	
	// $(window).scroll(function(){
		// console.log( $(window).scrollTop() );
	// });
	
	
	
	$(window).scroll(function(){
		if( $(window).scrollTop() >=4734 ){
			if( s4t0==0 ){
				s4t0=1;
				sec4Ani0Fn();
			}
			
		}
		else{
			s4t0=0;
			sec4Ani0FormatFn();
		}
	});
	
	$(window).scroll(function(){
		if( $(window).scrollTop() >=5100 ){
			if( s4t1==0 ){
				s4t1=1;
				sec4Ani1Fn();
			}
			
		}
		else{
			s4t1=0;
			sec4Ani1FormatFn();
		}
	});
	
	
	
	
	
	
	
	function sec4Ani0Fn(){
		$('.livefit-inner-img').stop().animate({top:-55},1500,'easeOutBack');
	}	
	function sec4Ani1Fn(){	
		$('.livefit-inner-list').stop().animate({top:0},1500,'easeOutBack');
	}
	
	function sec4Ani0FormatFn(){
		$('.livefit-inner-img').stop().animate({top:50},1500,'easeOutBack');
	}	
	function sec4Ani1FormatFn(){	
		$('.livefit-inner-list').stop().animate({top:150},1500,'easeOutBack');
	}
	
	
	
	
	
	
	
	
	
});//sec4Ani.js