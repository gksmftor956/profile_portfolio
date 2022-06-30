(function($, window, document, undefined){
	var fwinW = $(window).innerWidth();
	var fwrapW = 0.631578947;
	var fwrapW2 = 0.833333333;
	var familyT = 0;
	
		$('#footer').css({ width:fwinW });

		
		
		function fResizeFn(){
			fwinW = $(window).innerWidth();
			fwrapW = 0.631578947;
			fwrapW2 = 0.833333333;
			
			$('#footer').css({ width:fwinW });
		
		}
		fResizeFn();
		setTimeout(fResizeFn,100);
		
		$(window).resize(function(){
			fResizeFn();
			setTimeout(fResizeFn,100);			
		});
		
		
		
		//패밀리사이트 버튼 클릭 이벤트
		$('.familySBtn').on({
			click:	function(){
				if( familyT==0 ){
					familyT=1;
					$(this).next().stop().slideDown(0);
				}
				else if( familyT==1 ){
					familyT=0;
					$(this).next().stop().slideUp(0);
				}
			}
		});
	
})(jQuery, window, document);
//footer.js