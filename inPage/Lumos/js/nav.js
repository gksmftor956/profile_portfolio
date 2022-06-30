(function($, window, document, undefined){
    var winH = $(window).innerHeight();
    var setId = 0;
    var app = 0;

    $('.mobileGnb').css({ height:winH });

    function navResizeFn(){
        winH = $(window).innerHeight();

        $('.mobileGnb').css({ height:winH });
    }
    setTimeout(navResizeFn,100);

    $(window).resize(function(){
        clearTimeout(setId);
        setId = setTimeout(navResizeFn,100);
    });

    //앱바버튼 클릭 이벤트
    $('.appBarBtn').on({
        click:  function(){
            $('.appBar').toggleClass('addAppBar');
            if( app==0 ){
                app=1;
                $('.mobileGnb').stop().animate({ opacity:1, right:0 },600);
            }
            else{
                app=0;
                $('.mobileGnb').stop().animate({ opacity:0, right:-280 },600);
            }
        }
    });

    

})(jQuery, window, document);
//nav.js