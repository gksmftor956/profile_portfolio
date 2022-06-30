(function($, window, document, undefined){
    var winH = $(window).innerHeight();
    

    //section-nav 이벤트
    $(window).scroll(function(){
        if($(window).scrollTop() == 0 ){
            
            $('.section-nav').stop().animate({ opacity:0 },400, function(){
                $('.section-nav').stop().animate({ right:-250 },0);
            });
        }
        if( $(window).scrollTop() >= $('#section2').offset().top ){
            $('.section-nav').stop().animate({ right:50 },0,  function(){
                $('.section-nav').stop().animate({ opacity:1 },400);
            });
            
        }

        if( $(window).scrollTop() < $('#section2').offset().top-300 ){
            $('.sectionNav-wrap').removeClass('addSecNav');
            $('.sectionNav-wrap0').addClass('addSecNav');        
        }
        if( $(window).scrollTop() >= $('#section2').offset().top ){
            $('.sectionNav-wrap').removeClass('addSecNav');
            $('.sectionNav-wrap1').addClass('addSecNav');
        }
        if( $(window).scrollTop() >= $('#section3').offset().top ){
            $('.sectionNav-wrap').removeClass('addSecNav');
            $('.sectionNav-wrap2').addClass('addSecNav');
        }
        if($(window).scrollTop() >= $('#section4').offset().top ){
            $('.sectionNav-wrap').removeClass('addSecNav');
            $('.sectionNav-wrap3').addClass('addSecNav');
        }
        if($(window).scrollTop() >= $('#section5').offset().top ){
            $('.sectionNav-wrap').removeClass('addSecNav');
            $('.sectionNav-wrap4').addClass('addSecNav');
        }
    });

    ////section-nav - 버튼 클릭 이벤트
    $('.secPageBtn').each(function(index){
        $(this).on({
            click:  function(){
                if(index==0){
                    $('html, body').stop().animate({ scrollTop:0 });
                }
                else if(index==1){
                    $('html, body').stop().animate({ scrollTop:$('#section2').offset().top });
                }
                else if(index==2){
                    $('html, body').stop().animate({ scrollTop:$('#section3').offset().top });
                }
                else if(index==3){
                    $('html, body').stop().animate({ scrollTop:$('#section4').offset().top });
                }
                else if(index==4){
                    $('html, body').stop().animate({ scrollTop:$('#section5').offset().top });
                }
            }
        });
    });

    //섹션별 컨텐츠 애니메이션
	$(window).scroll(function(){
		if($(this).scrollTop() > $('#section2').offset().top-70 ){
			$('#section2 .content').addClass('addTrans');
		}
		else{
			$('#section2 .content').removeClass('addTrans');
		}
		if($(this).scrollTop() > $('#section3').offset().top-70 ){
			$('#section3 .content').addClass('addTrans');
		}
		else{
			$('#section3 .content').removeClass('addTrans');
		}
		if($(this).scrollTop() > $('#section4').offset().top-70 ){
			$('#section4 .content').addClass('addTrans');
		}
		else{
			$('#section4 .content').removeClass('addTrans');
		}
		if($(this).scrollTop() > $('#section5').offset().top-100 ){
			$('#section5 .content').addClass('addTrans');
		}
		else{
			$('#section5 .content').removeClass('addTrans');
		}
	});
	//새로고침시 즉시 애니메이션실행
	$(window).ready(function(){
		if( $(window).scrollTop() == 969 ){
			$('#section2 .content').addClass('addTrans');
		}
		else if( $(window).scrollTop() == 1938 ){
			$('#section3 .content').addClass('addTrans');
		}
		else if( $(window).scrollTop() == 2907 ){
			$('#section4 .content').addClass('addTrans');
		}
		else if( $(window).scrollTop() == 3876 ){
			$('#section5 .content').addClass('addTrans');
		}
    });
    



})(jQuery, window, document);//sectionAll.js