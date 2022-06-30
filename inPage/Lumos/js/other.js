(function($, window, document, undefined){

    
    //아래화살표 자동 애니메이션
	step=0;
    function autoArrowFn(){
        step+=22;
        $('.scrollDownImg').stop().animate({left:-step},0);
        if(step > 242){
            step=0;
            $('.scrollDownImg').stop().animate({left:-step},0);
        }
		
    }
    setInterval(autoArrowFn,120);

    //아래화살표버튼 클릭 이벤트
    $('.scrollDownImg').on({
        click:  function(){
            if( $(window).scrollTop() == 0 ){
                $('html, body').stop().animate({ scrollTop: $('#section2').offset().top });
            }
            else if( $(window).scrollTop() == 969 ){
                $('html, body').stop().animate({ scrollTop: $('#section3').offset().top });
            }
            else if( $(window).scrollTop() == 1938 ){
                $('html, body').stop().animate({ scrollTop: $('#section4').offset().top });
            }
            else if( $(window).scrollTop() == 2907 ){
                $('html, body').stop().animate({ scrollTop: $('#section5').offset().top });
            }
        }
    });


    //goTop - 스크롤 탑값이 969이상되면 생기게
    $(window).scroll(function(){
        if( $(window).scrollTop() >= 969 ){
            $('.goTop').stop().animate({ right:20 },0,  function(){
                $('.goTop').stop().animate({ opacity:1 },400);
            });
            
        }
        else{
            $('.goTop').stop().animate({ opacity:0 },400,   function(){
                $('.goTop').stop().animate({ right:100 },0);
            });
            
        }

        //아래화살표버튼 마지막 섹션에서 숨기기
        if( $(window).scrollTop() >= $('#section5').offset().top ){
            $('.scrollDown').stop().animate({ opacity:0 },400,  function(){
                $('.scrollDown').stop().animate({ left: -1000 },0);
            });
        }
        else{
            $('.scrollDown').stop().animate({ left:50+'%' },0,  function(){
                $('.scrollDown').stop().animate({ opacity:1 },400);
            });
            
        }
    });

    //고탑버튼 클릭 이벤트
    $('.goTopBtn').on({
        click:  function(){
            $('html, body').stop().animate({ scrollTop:0 },1000);
        }
    });


})(jQuery, window, document);//other.js