(function($, window, document, undefined){
	var winW = $(window).innerWidth();
	var appT = 0;
	var mBtnT = 0;
	var toggle = 0;
	
	//헤더 스크롤 이벤트
	$(window).scroll(function(){
		if( $(this).scrollTop() >=10 ){
			$('#header').addClass('addFixed');
		}
		else{
			$('#header').removeClass('addFixed');
		}			

	});
	
	
	//메인버튼 마우스엔터시 서브메뉴 나타나기
	$('.mainBtn').on({
		mouseenter:	function(){
			$('.sub').css({display:'none'}).stop().slideUp(300).stop().animate({opacity:0},300);
			$(this).next().stop().slideDown(0).stop().animate({opacity:1},300);
		},
		focusin:	function(){
			$('.sub').css({display:'none'}).stop().slideUp(300).stop().animate({opacity:0},300);
			$(this).next().stop().slideDown(0).stop().animate({opacity:1},300);		
		},
		click:	function(){
			if( toggle==0 ){
				toggle=1;
				$(this).next().stop().slideDown(0).stop().animate({opacity:1},300);
			}
			else if( toggle==1 ){
				toggle=0;
				$('.sub').css({display:'none'}).stop().slideUp(300).stop().animate({opacity:0},300);
			}
		}
	});
	
	$('.sub').on({
		mouseleave:	function(){ //마우스 아웃
			$(this).css({display:'none'}).stop().slideUp(300).stop().animate({opacity:0},300);
		}
	});
	
	$('#header').on({
		mouseleave:	function(){
			$('.sub').css({display:'none'}).stop().slideUp(300).stop().animate({opacity:0},300);
		}
	});
	
	//앱바버튼 클릭 시 모바일 네비게이션 오른쪽에서 왼쪽으로 나오기
	$('.appBarBtn').on({
		click:	function(){
			if( appT==0 ){
				appT=1;
				$('.mobile-nav').stop().animate({ left:0 },500);
			}
			else if( appT==1 ){
				appT=0;
				$('.mobile-nav').stop().animate({ left:2000 },500);
			}
		}
	});
	

	
	//모바일 네비게이션 클릭 시 서브메뉴 나오기
	$('.mobileMainBtn').on({
		click:	function(){
			if( mBtnT==0 ){
				mBtnT=1;
				$(this).addClass('addMobile');
				$(this).next().slideDown(300);
			}
			else if( mBtnT==1 ){
				mBtnT=0;
				$(this).removeClass('addMobile');
				$(this).next().slideUp(300);
			}
		}
	});
	
})(jQuery, window, document);
//header.js