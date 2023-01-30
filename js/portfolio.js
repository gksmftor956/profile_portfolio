(function($, window, document, undefined){
    var app = 0;
    var cnt = 0;
    var setId = 0;
    var setId2 = 0;
    var c = 0;

    //////////////////////////////////////////////////////////////////////////////////////////
    //헤더
    $('.mainBtn').each(function(index){
        $(this).on({
            click:  function(){
                if( index==0 ){
                    $('html, body').stop().animate({ scrollTop:$('#mainSection').offset().top },1000);
                }
/*                 else if( index==1 ){
                    $('html, body').stop().animate({ scrollTop:$('#profileSection').offset().top },1000);
                } */
                else if( index==1 ){
                    $('html, body').stop().animate({ scrollTop:$('#gallerySection').offset().top },1000);
                }
                else if( index==2 ){
                    $('html, body').stop().animate({ scrollTop:$('#slideSection').offset().top },1000);
                }
                else if( index==3 ){
                    $('html, body').stop().animate({ scrollTop:$('#slide3d_Section').offset().top },1000);
                }
            }
        });
    });
    $('.gnbMainBtn').each(function(index){
        $(this).on({
            click:  function(){
                if( index==0 ){
                    $('html, body').stop().animate({ scrollTop:$('#mainSection').offset().top },1000);
                }
/*                 else if( index==1 ){
                    $('html, body').stop().animate({ scrollTop:$('#profileSection').offset().top },1000);
                } */
                else if( index==1 ){
                    $('html, body').stop().animate({ scrollTop:$('#gallerySection').offset().top },1000);
                }
                else if( index==2 ){
                    $('html, body').stop().animate({ scrollTop:$('#slideSection').offset().top },1000);
                }
                else if( index==3 ){
                    $('html, body').stop().animate({ scrollTop:$('#slide3d_Section').offset().top },1000);
                }
            }
        });
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
    //헤더 끝
    //////////////////////////////////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////////////////////////////////////
    //메인섹션
    $(window).ready(function(){
        $('.mainTitle').stop().animate({ marginTop:-200, opacity:1 },1000);
    });

    var winW  = 0;
    var winH  = 0;
    var vidW  = 0;
    var vidH  = 0;
    var marT  = 0;
    var marL  = 0;
    var setId = 0;
    var player = 0;
    var sound = 'off'; //꺼진상태임.
    var videoId = 0;
        
        setInterval(resizefn,100);

        //비디오 반응형 함수
        function resizefn(){
            winW = $(window).innerWidth();
            winH = $(window).innerHeight();
            vidW = $('.mainVideo').innerWidth();
            vidH = $('.mainVideo').innerHeight();
            //marT = (winH-vidH)/2;
            marT = (winH-vidH);
            marL = (winW-vidW)/2;
            
            
            

            $('#mainSection .content').css({ height: winH });

            //창너비가 비디오너비보다 크면 : 비디오너비를 창너비로 설정 높이를 'auto'                        
            if( winW > vidW ){
                $('.mainVideo').css({ width: winW, height: 'auto' });
            }
            //창높이가 비디오높이보다 크면 : 비디오높이를 창높이로 설정 너비는 'auto'
            if( winH > vidH ){
                $('.mainVideo').css({ width: 'auto', height: winH });
            }
            $('.mainVideo').css({ marginTop: marT, marginLeft: marL });
            
            

        }
        //BOM
        $(window).resize(function(){
            clearTimeout(setId);
            setId = setTimeout(resizefn,10);
        });

    //////////////////////////////////////////////////////////////////////////////////////////
    //갤러리
    var titleWrapW = $('#gallerySection .title_wrap').innerWidth();
    var h2FontS = titleWrapW*0.0858676207513417;
    var h3FontS = titleWrapW*0.0322003577817531;
    var detailsBtnFontS = titleWrapW*0.0322003577817531;
    var setGalId = 0;

    function galleryResizeFn(){
        titleWrapW = $('#gallerySection .title_wrap').innerWidth();
        h2FontS = titleWrapW*0.0858676207513417;
        h3FontS = titleWrapW*0.0322003577817531;
        detailsBtnFontS = titleWrapW*0.0322003577817531;

        $('#gallerySection .title_wrap h2').css({ fontSize:h2FontS });
        $('#gallerySection .title_wrap h3').css({ fontSize:h3FontS });
        $('#gallerySection .detailsBtn').css({ fontSize:detailsBtnFontS });
    }
    setTimeout(galleryResizeFn,10);

    $(window).resize(function(){
        clearTimeout(setGalId);
        setGalId = setTimeout(galleryResizeFn,10);
    });


    /////////////////////////////////////////////////////////////////////////////////////////
    //섹션2
    //반응형
    var winW = $(window).innerWidth();
    var sec1ViewW = $('.section2-slide-view').innerWidth();
    var sec1N = 3;
    var sec1ImgW =sec1ViewW/sec1N;
    var sec1SetId = 0;

    if(winW>1024){
        sec1N=3;
    }
    else if(winW>600){
        sec1N=2;
    }
    else{
        sec1N=1;
    }
    sec1ImgW =sec1ViewW/sec1N;
    $('.slide').css({width:sec1ImgW});
    $('.section2-slide-wrap').css({width:sec1ImgW*33, marginLeft:-sec1ImgW*11});

    function sec1SlideFn(){
        winW = $(window).innerWidth();
        sec1ViewW = $('.section2-slide-view').innerWidth();
        sec1N = 3;
        sec1ImgW =sec1ViewW/sec1N;
        sec1SetId = 0;

        if(winW>1024){
            sec1N=3;
        }
        else if(winW>600){
            sec1N=2;
        }
        else{
            sec1N=1;
        }
        sec1ImgW =sec1ViewW/sec1N;
        $('.slide').css({width:sec1ImgW});
        $('.section2-slide-wrap').css({width:sec1ImgW*33, marginLeft:-sec1ImgW*11});     
        
    }
    setTimeout(sec1SlideFn,10);

    $(window).resize(function(){
        clearTimeout(sec1SetId);
        sec1SetId=setTimeout(sec1SlideFn,10);
        cnt=0;
        $('.section2-slide-wrap').stop().animate({ left:0 },0);
    });

    //슬라이드 함수
    function slideFn(){
        $('.section2-slide-wrap').stop().animate({ left:-sec1ImgW*cnt },600, function(){
            if( cnt>10 ){ cnt=0; }
            if( cnt<0 ){ cnt=10; }
            $('.section2-slide-wrap').stop().animate({ left:-sec1ImgW*cnt },0);
        });
        cnt>10?z=0:z=cnt;
        pageBtnEventFn();
        
    }

    //다음 슬라이드 카운트 함수
    function nextSlideCountFn(){
        cnt++;
        slideFn();
    }
    //이전 슬라이드 카운트 함수
    function prevSlideCountFn(){
        cnt--;
        slideFn();
    }

    //다음 슬라이드 버튼 클릭이벤트
    $('.nextBtn').on({
        click:  function(){
            if( !$('.section2-slide-wrap').is(':animated') ){
                nextSlideCountFn();
            }
            pauseFn();
            
        }
    });
    //이전 슬라이드 버튼 클릭이벤트
    $('.prevBtn').on({
        click:  function(){
            if( !$('.section2-slide-wrap').is(':animated') ){
                prevSlideCountFn();
            }
            pauseFn();
            
        }
    });

    //페이지버튼 이벤트 함수
    function pageBtnEventFn(){
        $('.pageBtn').removeClass('addPage');
        $('.pageBtn').eq(z).addClass('addPage');
    }

    //페이지버튼 클릭 이벤트
    $('.pageBtn').each(function(index){
        $(this).on({
            click:  function(){
                cnt=index;
                slideFn();
                pauseFn();
            }
        });
    });

    //터치 이벤트
    $('.section2-slide-container').swipe({
        swipeLeft:  function(){
            if( !$('.section2-slide-wrap').is(':animated') ){
                nextSlideCountFn();
            }
            pauseFn();
        },
        swipeRight: function(){
            if( !$('.section2-slide-wrap').is(':animated') ){
                prevSlideCountFn();
            }
            pauseFn();
        }
    });

    //오토타이머 함수
    function autoTimerFn(){
        setId = setInterval(nextSlideCountFn,3000);
    }
    autoTimerFn();

    //일시정지 함수
    function pauseFn(){
        clearInterval(setId);
        c=0;
        clearInterval(setId2);
        
        setId2 = setInterval(function(){
            c++;
            if( c>=3 ){
                nextSlideCountFn();
                autoTimerFn();
                c=0;
                clearInterval(setId2);
            }
        },1000);
    }

    //마우스 올리면 슬라이드가 멈추고
    //마우스 떼면 즉시 다음 슬라이드 넘어가고
    //3초 오토타이머 실행
    $('.section2-slide-container').on({
        mouseenter: function(){
            clearInterval(setId);
        },
        mouseleave: function(){
            //nextSlideCountFn();
            pauseFn();
            //clearInterval(setId);
            //setInterval(nextSlideCountFn,3000);
        }
    });
    //섹션2 끝
    /////////////////////////////////////////////////////////////////////////////

    //섹션3 시작
    /////////////////////////////////////////////////////////////////////////////////
    
        var cnt3D = 0;
        var a = [0,1,2,3,4,5,6,7,8,9,10];
        var imsi = null;
    
            
            //다음페이지 버튼
            $('.nextPage3DBtn').on({
                click:  function(){
                    imsi = a.shift();   //맨 앞을 삭제하고 맨뒤에 삽입
                    a.push(imsi);
                    slide3DFn();             
                }
            });
            //이전페이지 버튼
            $('.prevPage3DBtn').on({
                click:  function(){
                    imsi = a.pop();    //맨 뒤를 삭제하고 맨 앞에 삽입
                    a.unshift(imsi);
                    slide3DFn();                
                }
            });        
    
            function slide3DFn(){
                $('.slide3d').eq(a[0]).css({ left: -720 }).fadeIn(1000, function(){
                    $(this).css({ zIndex:2, transform:'scale(0.2) perspective(5000px) rotateY(-89deg)' })
                });
                $('.slide3d').eq(a[1]).css({ left: -680 }).fadeIn(1000, function(){
                    $(this).css({ zIndex:2, transform:'scale(0.4) perspective(4000px) rotateY(-88.5deg)' })
                });
                $('.slide3d').eq(a[2]).css({ left: -620 }).fadeIn(1000, function(){
                    $(this).css({ zIndex:3, transform:'scale(0.7) perspective(3000px) rotateY(-86deg)' });
                });
                $('.slide3d').eq(a[3]).css({ left: -500 }).fadeIn(1000, function(){
                    $(this).css({ zIndex:4, transform:'scale(1) perspective(8000px) rotateY(-79deg)' });
                });
                $('.slide3d').eq(a[4]).css({ left: -400 }).fadeIn(1000, function(){
                    $(this).css({ zIndex:5, transform:'scale(1.2) perspective(9000px) rotateY(-69deg)' });
                });
                $('.slide3d').eq(a[5]).css({ left:    0 }).fadeIn(1000, function(){
                    $(this).css({ zIndex:6, transform:'scale(1.4) perspective(10000px) rotateY(360deg)' });
                });
                $('.slide3d').eq(a[6]).css({ left:  400 }).fadeIn(1000, function(){
                    $(this).css({ zIndex:5, transform:'scale(1.2) perspective(9000px) rotateY(69deg)' });
                });
                $('.slide3d').eq(a[7]).css({ left:  500 }).fadeIn(1000, function(){
                    $(this).css({ zIndex:4, transform:'scale(1) perspective(8000px) rotateY(79deg)' });
                });
                $('.slide3d').eq(a[8]).css({ left:  620 }).fadeIn(1000, function(){
                    $(this).css({ zIndex:3, transform:'scale(0.7) perspective(3000px) rotateY(86deg)' });
                });
                $('.slide3d').eq(a[9]).css({ left:  680 }).fadeIn(1000, function(){
                    $(this).css({ zIndex:2, transform:'scale(0.4) perspective(4000px) rotateY(88.5deg)' });
                });
                $('.slide3d').eq(a[10]).css({ left:  720 }).fadeIn(1000, function(){
                    $(this).css({ zIndex:1, transform:'scale(0.2) perspective(5000px) rotateY(89deg)' });
                });
            }

            //터치 이벤트
            $('.slide3d_container').swipe({
                swipeLeft:  function(){
                    if( !$('.slide3d').is(':animated') ){
                        imsi = a.shift();   //맨 앞을 삭제하고 맨뒤에 삽입
                        a.push(imsi);
                        slide3DFn();                          
                    }
                },
                swipeRight: function(){
                    if( !$('.slide3d').is(':animated') ){
                        imsi = a.pop();    //맨 뒤를 삭제하고 맨 앞에 삽입
                        a.unshift(imsi);
                        slide3DFn();                
                    }
                }
            });






})(jQuery, window, document);
//portfolio.js