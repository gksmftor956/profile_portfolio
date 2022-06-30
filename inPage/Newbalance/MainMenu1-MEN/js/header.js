$(function(){
	
	//메인버튼 호버 시
	$('.mainBtn').on({
		mouseenter:	function(){ //마우스 오버시
			$('.sub').stop().slideUp(0); //초기화
			$(this).next().stop().slideDown(0); //1개만 내려오게
			
			$('.mainBtn').removeClass('addMainBtn'); //초기화
			$(this).addClass('addMainBtn'); //1개만
		},
		focusin:	function(){ //접근 focus
			$('.sub').stop().slideUp(0); //초기화
			$(this).next().stop().slideDown(0); //1개만 내려오게
			
			$('.mainBtn').removeClass('addMainBtn'); //초기화
			$(this).addClass('addMainBtn'); //1개만
		}
	});
	//리서치버튼 호버 시
	$('.header-bottom-researchBtn').on({
		mouseenter:	function(){ //마우스 오버시
			$('.research-sub').stop().slideUp(0); //초기화
			$(this).next().stop().slideDown(0); //1개만 내려오게
		},
		focusin:	function(){ //접근 focus
			$('.research-sub').stop().slideUp(0); //초기화
			$(this).next().stop().slideDown(0); //1개만 내려오게
		}
	});
	
	//리서치창 클릭 시
	$('.researchInput').on({
		focusin:	function(){
			$('.research-box-inner').stop().show(0);
		}
	});
	//한번 클릭 후 마우스리브로 떠난 상태에서 또 클릭 시 보이지 않던 것 개선!
	$('.researchInput').on({
		click:	function(){
			$('.research-box-inner').stop().show(0);
		}
	});
	
	$('.research-sub-row1-wrap').on({
		mouseleave:	function(){
			$('.research-box-inner').stop().hide(0);
		}
	});
	$('.research-sub-row1').on({
		mouseleave:	function(){
			$('.research-box-inner').stop().hide(0);
		}
	});
			
			
			
	
	
	//메인버튼 떠날 시
	$('.header-bottom-left').on({
		mouseleave:	function(){ //마우스 아웃
			$('.sub').stop().slideUp(0);
			$('.mainBtn').removeClass('addMainBtn');
		}
	});
	
	/*
	$('.sub-row1').on({
		mouseleave:	function(){ //마우스 아웃
			$('.sub').stop().slideUp(0);
			$('.mainBtn').removeClass('addMainBtn');
		}
	});
	*/
	
	//새로운 발견!! mouseenter로 sub menu 닫기
	$('.sub-row2').on({
		mouseenter:	function(){
			$('.sub').stop().slideUp(0);
			$('.mainBtn').removeClass('.addMainBtn');
		}
	});

	// 리서치버튼 떠날 시
	$('.header-bottom-right').on({
		mouseleave:	function(){ //마우스 아웃
			$('.research-sub').stop().slideUp(0);
		}	
	});
	
	/*
	$('.research-sub-row1').on({
		mouseleave:	function(){ //마우스 아웃
			$('.research-sub').stop().slideUp(0);
		}
	});
	*/
	
	// 새로운 발견!! mouseenter로 sub menu 닫기
	$('.research-sub-row2').on({
		mouseenter:	function(){ //마우스 오버시
			$('.research-sub').stop().slideUp(0); //초기화
		}	
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});//header.js