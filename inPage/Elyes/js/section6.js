(function($, window, document, undefined){
	
	//지도마크 마우스엔터 리브 상세내용 이벤트
	$('.mapPBtn').each(function(index){
		$(this).on({
			mouseenter:	function(){
				if( index==0 ){
					$('.mapEx').css({ display:'none' });
					$('.mapEx0').css({ display:'inline-block' });
				}
				else if( index==1 ){
					$('.mapEx').css({ display:'none' });
					$('.mapEx1').css({ display:'inline-block' });
				}
				else if( index==2 ){
					$('.mapEx').css({ display:'none' });
					$('.mapEx2').css({ display:'inline-block' });
				}
				else if( index==3 ){
					$('.mapEx').css({ display:'none' });
					$('.mapEx3').css({ display:'inline-block' });
				}
				else if( index==4 ){
					$('.mapEx').css({ display:'none' });
					$('.mapEx4').css({ display:'inline-block' });
				}
				else if( index==5 ){
					$('.mapEx').css({ display:'none' });
					$('.mapEx5').css({ display:'inline-block' });
				}
				else if( index==6 ){
					$('.mapEx').css({ display:'none' });
					$('.mapEx6').css({ display:'inline-block' });
				}
				else if( index==7 ){
					$('.mapEx').css({ display:'none' });
					$('.mapEx7').css({ display:'inline-block' });
				}
			}
		});
	});
	$('.mapEx').on({
		mouseleave:	function(){
			$('.mapEx').css({ display:'none' });
		}
	});
	$('.map-wrap').on({
		mouseleave:	function(){
			$('.mapEx').css({ display:'none' });
		}
	});
	
})(jQuery, window, document);
//section6.js