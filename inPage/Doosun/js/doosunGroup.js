;(function($, window, document, undefined){
    
    var doosunGroup = {
        val:    function(){

        },
        init:   function(){
            var that = this;

            this.headerFn();
            this.mainSection();
            this.thumbnailFn();
            this.companyIntroFn();
            this.equipmentIntroFn();
            this.lastSectionFn();
            this.footerFn();
        },
        headerFn:   function(){
            var scr = t = app = winW = r = gnbH = 0;
	
                gnbH = $('.gnb').innerHeight();
                
                setTimeout(resizeFn,100);
                
                //반응형 BOM : 브라우저 오브 모델링
                $(window).resize(function(){	//크기 변화가 있을 때만 실행 
                    
                    resizeFn();
                    
                });
            
                //반응형 함수
                function resizeFn(){
                    gnbH = $('.gnb').innerHeight();	//gnb 박스 높이 자동인식
                    winW = $(window).innerWidth();
                    
                    //반응형 창너비가 900초과 그리고 900이하
                    if( winW > 900 ){
                        //메인버튼 이벤트
                        if( r==0 ){	//버블링 막는 알고리즘
                            r=1;
                            $('.sub').stop().slideUp(0);
                            $('.mainBtn').on({	//off('mouseenter')
                                mouseenter:	function(){
                                    $('.sub').stop().slideUp(300);
                                    $(this).next().stop().slideDown(300);
                                }
                            });
                            
                            //GNB 마우스 떠나면
                            $('.gnb').on({	//off('mouseleave')
                                mouseleave:	function(){
                                    $('.sub').stop().slideUp(300);
                                }
                            });
                        }	
                    }
                    else{
                        if( r==1 ){
                            r=0;
                            $('.sub').stop().slideDown(0);
                            // $('.sub').css({display:'block'});
                            $('.mainBtn').off('mouseenter');
                            $('.gnb').off('mouseleave');
                        }
                    }			
                }
    
            
        
                //헤더 영역에 마우스 오버시 배경 부드럽게 변경
/*                 $('#header').on({
                    mouseenter:	function(){
                        $('#header').addClass('addFixed');
                    },
                    click:	function(){
                        $('#header').addClass('addFixed');
                    },
                    mouseleave:	function(){
                        if( scr==0 && app==0 ){	//스크롤을 안된 경우 그리고 GNB가 안보인 경우
                            $('#header').removeClass('addFixed');
                            $('.gnb').hide();	//app==0 이어도 올라가는 순간 보일 수 있기때문
                        }
                    }
                }); */
        
                //앱바 버튼 이벤트
                $('.appBarBtn').on({
                    click:	function(){
                        $(this).toggleClass('addAppbar');
                        if( app==0 ){
                            app=1;
                            $('.gnb').stop().show().animate({ top:-2 },300);
                        }
                        else{
                            app=0;
                            $('.gnb').stop().animate({ top:-gnbH },300,	function(){
                                $('.gnb').hide();
                            });
                        }
                    }

                });
        
                //스크롤 이벤트
                $(window).scroll(function(){
                    if( $(window).scrollTop() >= 10 ){
                        scr=1;
                        $('#header').addClass('addFixed');
            			/* if( t==0 ){
                            t=1;
                            $('html, body').stop().animate({ scrollTop:$('.thumbnail').offset().top-65 },800);
                        } */
                    }
                    else{
                        scr=0;
                        t=0;
                        if( app==0 ){
                            $('#header').removeClass('addFixed');
                        }
                        
                    }
                });
        },
        mainSection:    function(){
            var cnt = winW = winH = z = mainSetId = mainSetId2 = count = 0;
            var winW = $(window).innerWidth();
            // var winH = $(window).innerHeight();
            var bannerH = winW*0.3125;
         
                
                function mainResizeFn(){
                    winW = $(window).innerWidth();
                    //winH = $(window).innerHeight();
                    bannerH = winW*0.3125;
                 
                    
        			$('.slide').css({ width:winW, height:bannerH });
                    /* $('#section2').css({ marginTop:winH }); */
                    
                    //리사이즈 변화시 left 값 애니메이션 시간을 0으로 설정
                    $('.mainSlide-wrap').stop().animate({ left:-(winW*cnt) },0);
                    // mainSlideFn();	//창크기 변화시 반응하여 슬라이드 최적화
                }
            
                setTimeout(mainResizeFn,100);
                
                $(window).resize(function(){
                    mainResizeFn();
                });
                
                
                //메인슬라이드 함수
                function mainSlideFn(){
                    $('.mainSlide-wrap').stop().animate({ left:-(winW*cnt) },700,	function(){
                        if( cnt>2 ){ cnt=0; }
                        if( cnt<0 ){ cnt=2; }
                        $('.mainSlide-wrap').stop().animate({ left:-(winW*cnt) },0);
                    });
                    cnt>2?z=0:z=cnt;
                    mainPageEventFn();
                }
                
                //페이지 이벤트 함수
                function mainPageEventFn(){
                    $('.mainSlidePageBtn').removeClass('addPage');
                    $('.mainSlidePageBtn').eq(z).addClass('addPage');
                }
                
                //페이지버튼 클릭 이벤트
                $('.mainSlidePageBtn').each(function(idx){
                    $(this).on({
                        click:	function(){
                            cnt=idx;
                            mainSlideFn();
                            pauseTimerFn();
                        }
                    });
                });
                
                //다음 카운트
                function mainNextCountFn(){
                    cnt++;
                    mainSlideFn();
                }
                //이전 카운트
                function mainPrevCountFn(){
                    cnt--;
                    mainSlideFn();
                }
                
                
                //다음슬라이드 버튼 클릭 이벤트
                $('.mainSlideNextBtn').on({
                    click:	function(){
                        if( !$('.mainSlide-wrap').is(':animated') ){
                            mainNextCountFn();
                            pauseTimerFn();
                        }
                    }
                });
                //이전슬라이드 버튼 클릭 이벤트
                $('.mainSlidePrevBtn').on({
                    click:	function(){
                        if( !$('.mainSlide-wrap').is(':animated') ){
                            mainPrevCountFn();
                            pauseTimerFn();
                        }
                    }
                });
                
                
                //터치 이벤트
                $('.mainSlide-container').swipe({
                    swipeLeft:	function(){
                        if( !$('.mainSlide-wrap').is(':animated') ){
                            mainNextCountFn();
                            pauseTimerFn();
                        }
                    },
                    swipeRight:	function(){
                        if( !$('.mainSlide-wrap').is(':animated') ){
                            mainPrevCountFn();
                            pauseTimerFn();
                        }	
                    }
                });
                
                
                //자동 타이머 함수
                function autoMainTimerFn(){
                    mainSetId = setInterval(mainNextCountFn,3000);
                }
                autoMainTimerFn();
                
                
                //일시정지 함수 3초간 이벤트 없으면 자동 재실행
                function pauseTimerFn(){
                    count=0;
                    clearInterval(mainSetId2);
                    clearInterval(mainSetId);
                    
                    mainSetId2 = setInterval(function(){
                        count++;
                        // console.log( count );
                        if( count >= 3 ){
                            mainNextCountFn();
                            autoMainTimerFn();
                            clearInterval(mainSetId2);
                        }
                    },1000);
                }

/*                 //메인슬라이드 배너 클릭시 해당 섹션이동
                $('.mainBannerBtn0').on({
                    click:  function(){
                        $('.companyIntro').stop().hide();
                        $('.printing').stop().show();
                        $('#equipmentIntro').stop().show();
                        s4ResizeFn();
                        imgW = $('.equipmentIntro-content .image').innerWidth();
                        $('.equipmentIntro-content .image').css({ height:imgW });                        
                    }
                });
                $('.mainBannerBtn1').on({
                    click:  function(){
                        $('.companyIntro').stop().hide();
                        $('.elec').stop().show();
                        $('#equipmentIntro').stop().show();
                        s4ResizeFn();
                        imgW = $('.equipmentIntro-content .image').innerWidth();
                        $('.equipmentIntro-content .image').css({ height:imgW });                        
                    }
                });
                $('.mainBannerBtn2').on({
                    click:  function(){
                        $('.companyIntro').stop().hide();
                        $('.vina').stop().show();
                        $('#equipmentIntro').stop().show();
                        s4ResizeFn();
                        imgW = $('.equipmentIntro-content .image').innerWidth();
                        $('.equipmentIntro-content .image').css({ height:imgW });                        
                    }
                }); */

        },
        thumbnailFn:    function(){
            var thumbCnt = thumbSetId = thumbSetId2 = thumbT = 0;
            var thumbConW = $('.cosmetic_container').innerWidth();
            var thumbN = 4;
            var	thumbSlideW = thumbConW / thumbN;
            /* var thumbImageH = thumbSlideW*0.692753623; */
                $('.cosmetic_slide').css({ width:thumbSlideW });
                /* $('.cosmetic_wrap').css({ width:thumbSlideW*12, marginLeft:-(thumbSlideW*4) }); */
                
            function cosmeticResizeFn(){
                thumbConW = $('.cosmetic_container').innerWidth();
                if( thumbConW >= 1200 ){
                    thumbN=4;
                }
                else if( thumbConW >= 650 ){
                    thumbN=2;
                }
                else {
                    thumbN=1;
                }
                thumbSlideW = thumbConW / thumbN;
                $('.cosmetic_slide').css({ width:thumbSlideW });
                /* $('.cosmetic_wrap').css({ width:thumbSlideW*12, marginLeft:-(thumbSlideW*4) }); */
                
                //메인슬라이드 left:반응형결정
                /* $('.cosmetic_wrap').stop().animate({left:-(thumbSlideW*thumbCnt)},0); */
                // mainSlideFn();

            }
            setTimeout(cosmeticResizeFn,100);
            
            $(window).resize(function(){
                cosmeticResizeFn();
            });


            //코스메틱 썸네일 슬라이드
/*             function cosmeticSlideFn(){
                $('.cosmetic_wrap').stop().animate({left:-thumbSlideW*thumbCnt},600,	function(){
                    if( thumbCnt>3 ){ thumbCnt=0; }
                    if( thumbCnt<0 ){ thumbCnt=3; }
                    $('.cosmetic_wrap').stop().animate({left:-thumbSlideW*thumbCnt},0);
                });
            } */

            //코스메틱 썸네일 마우스엔터 효과-슬라이드 시
/*             $('.cosmeticThumbBtn').on({
                mouseenter: function(){
                    $('.cosmetic_thumbnail_logo').css({ transform:'scale'+'(1)', backgroundColor:'transparent' });
                    $('.cosmeticThumbBtn > img').css({ transform:'scale'+'(1)' });
                    $(this).find('.cosmetic_thumbnail_logo').css({ transform:'scale'+'(1.15)', backgroundColor:'rgba'+'(255,255,255,0.5)' });
                    $(this).find('img').css({ transform:'scale'+'(1.1)' });
                },
                focusin:    function(){
                    $('.cosmetic_thumbnail_logo').css({ transform:'scale'+'(1)', backgroundColor:'transparent' });
                    $('.cosmeticThumbBtn > img').css({ transform:'scale'+'(1)' });
                    $(this).find('.cosmetic_thumbnail_logo').css({ transform:'scale'+'(1.15)', backgroundColor:'rgba'+'(255,255,255,0.5)' });
                    $(this).find('img').css({ transform:'scale'+'(1.1)' });
                },
                click:  function(){
                    $('.cosmetic_thumbnail_logo').css({ transform:'scale'+'(1)', backgroundColor:'transparent' });
                    $('.cosmeticThumbBtn > img').css({ transform:'scale'+'(1)' });
                    $(this).find('.cosmetic_thumbnail_logo').css({ transform:'scale'+'(1.15)', backgroundColor:'rgba'+'(255,255,255,0.5)' });
                    $(this).find('img').css({ transform:'scale'+'(1.1)' });
                },
                mouseleave: function(){
                    $('.cosmetic_thumbnail_logo').css({ transform:'scale'+'(1)', backgroundColor:'transparent' });
                    $('.cosmeticThumbBtn > img').css({ transform:'scale'+'(1)' });
                }
            }); */
            
            
            //다음 카운트 함수
/*             function cosmeticNextCountFn(){
                thumbCnt++;
                cosmeticSlideFn();
            } */
            //이전 카운트 함수
/*             function cosmeticPrevCountFn(){
                thumbCnt--;
                cosmeticSlideFn();
            } */
            
            
/*             //다음 버튼 클릭 이벤트
            $('.nextBtn').on({
                click:	function(){
                    if( !$('.cosmetic_wrap').is(':animated') ){
                        cosmeticNextCountFn();
                        pauseFn();
                    }
                }
            });
            //이전 버튼 클릭 이벤트
            $('.prevBtn').on({
                click:	function(){
                    if( !$('.cosmetic_wrap').is(':animated') ){
                        cosmeticPrevCountFn();
                        pauseFn();
                    }
                }
            }); */
            
            //터치이벤트
/*             $('.cosmetic_container').swipe({
                swipeLeft:	function(){
                    if( !$('.cosmetic_wrap').is(':animated') ){
                        cosmeticNextCountFn();
                        cosmeticPauseFn();
                    }
                },
                swipeRight:	function(){
                    if( !$('.cosmetic_wrap').is(':animated') ){
                        cosmeticPrevCountFn();
                        cosmeticPauseFn();
                    }
                }
            }); */
            
            //오토 타이머 함수
/*             function cosmeticAutoTimerFn(){
                thumbSetId = setInterval(cosmeticNextCountFn,3000);
            }
            cosmeticAutoTimerFn(); */
            
            //일시정지 함수
/*             function cosmeticPauseFn(){
                thumbT=0;
                clearInterval(thumbSetId2);
                clearInterval(thumbSetId);
                
                thumbSetId2 = setInterval(function(){
                    thumbT++;
                    if( thumbT >= 3 ){
                        thumbT=0;
                        cosmeticNextCountFn();
                        cosmeticAutoTimerFn();
                        clearInterval(thumbSetId2);
                    }
                },1000);
            } */        

        
            //마우스 올리면 슬라이드가 멈추고
            //마우스 떼면 즉시 다음 슬라이드 넘어가고
            //3초 오토타이머 실행
/*             $('.cosmetic_container').on({
                mouseenter: function(){
                    clearInterval(thumbSetId);
                },
                mouseleave: function(){
                    //cosmeticNextCountFn();
                    cosmeticPauseFn();
                    //clearInterval(thumbSetId);
                    //setInterval(cosmeticNextCountFn,3000);
                }
            }); */

        },
        companyIntroFn: function(){
            //1. 변수설정
            var winW = $(window).innerWidth();
            var s3Cnt = 0;
            var s3z = s3Cnt==0?2:s3Cnt-1; //그냥 '2;' 도 가능. : 기본이 next 이기때문.
            var s3winW = 1343;	//기준값
            var s3conH = s3winW*0.429323288;	//비율변경(텍스트늘어나서) (원래비율0.411764706)
            var s3conH2 = s3winW*0.470764706;	//비율2 0.461764706
            var pagW = $('.sunEduImageBtn-wrap').innerWidth();
            var pagH = pagW*0.421875;
                
                $('.companyIntro-left').css({ height:s3conH });
                if( winW > 1060 ){
                    $('.companyIntro .specialContent').css({ height:s3conH });
                }
                else{
                    $('.companyIntro .specialContent').css({ height:100+'%' });
                }
                

            //2. 반응형 함수와 계산식
            function s3ResizeFn(){
                pagW = $('.sunEduImageBtn-wrap').innerWidth();
                pagH = pagW*0.421875;    

                if( $(window).innerWidth() <= 1343 ){
                    s3winW = $(window).innerWidth();	//기준값 이하이면 창너비
                }
                else{
                    s3winW = 1343;	//기준값
                }
                winW = $(window).innerWidth();
                s3conH = s3winW*0.429323288;	//비율
                s3conH2 = s3winW*0.470764706;
                $('.companyIntro-left').css({ height:s3conH });
                if( winW > 1060 ){
                    $('.companyIntro .specialContent').css({ height:s3conH });
                }
                else{
                    $('.companyIntro .specialContent').css({ height:100+'%' });
                }

            }
            
            //3. 로드시 실행 함수
            setTimeout(s3ResizeFn,100);
            
            //4. window객체 resize 리사이즈
            $(window).resize(function(){
                s3ResizeFn();
            });


/*             
            //1-1.메인 다음 슬라이드 함수
            function nextCompanyIntroFn(){
                $('.companyIntro-inner').css({zIndex:1}).stop().animate({opacity:0},0);
                $('.companyIntro-inner').eq(s3Cnt==0?2:s3Cnt-1).css({zIndex:2}).stop().animate({opacity:1},0);
                $('.companyIntro-inner').eq(s3Cnt).css({zIndex:3}).stop().animate({opacity:1},700);
                imagePageBtnEventFn();
            }
            
            //1-2.메인 이전 슬라이드 함수
            function prevCompanyIntroFn(){
                $('.companyIntro-inner').css({zIndex:1}).stop().animate({opacity:0},0);
                $('.companyIntro-inner').eq(s3Cnt==2?0:s3Cnt+1).css({zIndex:2}).stop().animate({opacity:1},0);
                $('.companyIntro-inner').eq(s3Cnt).css({zIndex:3}).stop().animate({opacity:1},700);
                imagePageBtnEventFn();
            }
            
            
            //2-1.다음 카운트 함수
            function nextS3CountFn(){
                s3Cnt++;
                if( s3Cnt>2 ){
                    s3Cnt=0;
                }
                nextCompanyIntroFn();
            }
            //2-2.이전 카운트 함수
            function prevS3CountFn(){
                s3Cnt--;
                if( s3Cnt<0 ){
                    s3Cnt=2;
                }
                prevCompanyIntroFn();
            }
            
            
            //3-1.다음 슬라이드 버튼 클릭 이벤트
            $('.arrRBtn').on({
                click:	function(){
                    if( !$('.companyIntro-inner').is(':animated') ){
                        nextS3CountFn();
                    }
                }
            });
            //3-2.이전 슬라이드 버튼 클릭 이벤트
            $('.arrLBtn').on({
                click:	function(){
                    if( !$('.companyIntro-inner').is(':animated') ){
                        prevS3CountFn();
                    }
                }
            });
            
            
            //4-1.이미지 페이지버튼 이벤트 함수
            function imagePageBtnEventFn(){
                if( s3Cnt==0 ){
                    $('.pageImageBtn').eq(0).css({backgroundImage:'url(./img/slide1.jpg)'});
                    $('.pageImageBtn').eq(1).css({backgroundImage:'url(./img/slide2.jpg)'});
                }
                else if( s3Cnt==1 ){
                    $('.pageImageBtn').eq(0).css({backgroundImage:'url(./img/slide0.jpg)'});
                    $('.pageImageBtn').eq(1).css({backgroundImage:'url(./img/slide2.jpg)'});			
                }
                else if( s3Cnt==2 ){
                    $('.pageImageBtn').eq(0).css({backgroundImage:'url(./img/slide0.jpg)'});
                    $('.pageImageBtn').eq(1).css({backgroundImage:'url(./img/slide1.jpg)'});				
                }
            }
            //4-2.이미지 페이지버튼 클릭 이벤트
            $('.pageImageBtn').each(function(index){
                $(this).on({
                    click:	function(){
                        
                        if( s3Cnt==0 && index==0 ){
                            s3Cnt=1;
                            nextCompanyIntroFn();
                        }
                        else if( s3Cnt==0 && index==1 ){
                            s3Cnt=2;
                            prevCompanyIntroFn();
                        }
                        else if( s3Cnt==1 && index==0 ){
                            s3Cnt=0;
                            prevCompanyIntroFn();
                        }
                        else if( s3Cnt==1 && index==1 ){
                            s3Cnt=2;
                            nextCompanyIntroFn();
                        }
                        else if( s3Cnt==2 && index==0 ){
                            s3Cnt=0;
                            nextCompanyIntroFn();
                        }
                        else if( s3Cnt==2 && index==1 ){
                            s3Cnt=1;
                            prevCompanyIntroFn();
                        }
                    }
                });
            }); */



        },
        equipmentIntroFn: function(){
            
            //1. 반응형 스크립트 변수 설정 및 초기값 : 슬라이드의 너비를 자동계산을 컨테이너 박스 너비(기준값:1570px) 나누기 3으로 = 슬라이드1개의 너비
            var s4Cnt = z = setId4 = setId5 = s4T = 0;
            var imgW = $('.equipmentIntro-content .image').innerWidth();
            var winW = $(window).innerWidth();	//창 너비
            var s4ConW = $('#equipmentIntro .container').innerWidth();	//컨테이너 박스의 너비
            var col = 3;				//슬라이드 개수(칸수)
            var equipSlideW = s4ConW/col;	//슬라이드 너비
            var capH = $('.captionMain').innerHeight();
            
            $('.equipmentIntro-inner').css({ width:equipSlideW });
            
            $('.equipmentIntro-wrap').css({ width:(equipSlideW*24), marginLeft:-(equipSlideW*3) });	

            $('.equipmentIntro-content .image').css({ height:imgW });

            $('.caption > h5').css({ height:capH });


            //2. 반응형 함수
                function s4ResizeFn(){
                    imgW = $('.equipmentIntro-content .image').innerWidth();
                    winW = $(window).innerWidth();
                    s4ConW = $('#equipmentIntro .container').innerWidth();
                    capH = $('.captionMain').innerHeight();
                    
                    if( winW > 1024 ){
                        col = 3;
                    }
                    else if( winW > 600 ){	//600 ~ 1024
                        col = 2;
                    }
                    else{
                        col = 1;
                    }
                    equipSlideW = s4ConW/col;
                    $('.equipmentIntro-inner').css({ width:equipSlideW });
                    $('.equipmentIntro-wrap').css({ width:(equipSlideW*24), marginLeft:-(equipSlideW*3) });
                    $('.equipmentIntro-content .image').css({ height:imgW });
                    $('.caption > h5').css({ height:capH });
                    
                    //메인 슬라이드 함수 호출 반응형 적용
                    $('.equipmentIntro-wrap').stop().animate({ left:-(equipSlideW*s4Cnt) },0);
                    
                }
                s4ResizeFn();
                setIdTs = setTimeout(s4ResizeFn,100);
                
                //3. 반응형 구현 이벤트
                $(window).resize(function(){
                    s4ResizeFn();
                    setIdTs = setTimeout(s4ResizeFn,100);
                });
                
                //썸네일클릭 시 그룹별 회사소개 펼쳐보기 기능
                $('.groupBtn').each(function(index){
                    $(this).on({
                        click:	function(){

                            if( index==0 ){
                                $('.companyIntro').stop().hide();
                                $('.printing').stop().show();
                                $('#equipmentIntro').stop().show();
                                s4ResizeFn();
                                imgW = $('.equipmentIntro-content .image').innerWidth();
                                $('.equipmentIntro-content .image').css({ height:imgW });
                            }
                            else if( index==1 ){
                                $('.companyIntro').stop().hide();
                                $('.vina').stop().show();
                                $('#equipmentIntro').stop().show();
                                s4ResizeFn();
                                imgW = $('.equipmentIntro-content .image').innerWidth();
                                $('.equipmentIntro-content .image').css({ height:imgW });
                            }
                            else if( index==2 ){
                                $('.companyIntro').stop().hide();
                                $('.elec').stop().show();
                                $('#equipmentIntro').stop().show();
                                s4ResizeFn();
                                imgW = $('.equipmentIntro-content .image').innerWidth();
                                $('.equipmentIntro-content .image').css({ height:imgW });
                            }
                            else if( index==3 ){    /* 코스메틱 슬라이드 4*3개이기때문에 3,7,11*/
                                $('#equipmentIntro').stop().hide();
                                $('.companyIntro').stop().hide();
                                $('.korea').stop().show();
                            }
    /*                         else if( index==7 ){
                                $('#equipmentIntro').stop().hide();
                                $('.companyIntro').stop().hide();
                                $('.korea').stop().show();
                            }
                            else if( index==11 ){
                                $('#equipmentIntro').stop().hide();
                                $('.companyIntro').stop().hide();
                                $('.korea').stop().show();
                            } */
                            else if( index==4 ){    /* 코스메틱 슬라이드 4*3개이기때문에 4,8,12*/
                                $('#equipmentIntro').stop().hide();
                                $('.companyIntro').stop().hide();
                                $('.vietnam').stop().show();
                            }
    /*                         else if( index==8 ){
                                $('#equipmentIntro').stop().hide();
                                $('.companyIntro').stop().hide();
                                $('.vietnam').stop().show();
                            }
                            else if( index==12 ){
                                $('#equipmentIntro').stop().hide();
                                $('.companyIntro').stop().hide();
                                $('.vietnam').stop().show();
                            } */
                            else if( index==5 ){    /* 코스메틱 슬라이드 4*3개이기때문에 5,9,13*/
                                $('#equipmentIntro').stop().hide();
                                $('.companyIntro').stop().hide();
                                $('.india').stop().show();
                            }
    /*                         else if( index==9 ){
                                $('#equipmentIntro').stop().hide();
                                $('.companyIntro').stop().hide();
                                $('.india').stop().show();
                            }
                            else if( index==13 ){
                                $('#equipmentIntro').stop().hide();
                                $('.companyIntro').stop().hide();
                                $('.india').stop().show();
                            } */
                            else if( index==6 ){    /* 코스메틱 슬라이드 4*3개이기때문에 6,10,14*/
                                $('#equipmentIntro').stop().hide();
                                $('.companyIntro').stop().hide();
                                $('.indonesia').stop().show();
                            }
    /*                         else if( index==10 ){
                                $('#equipmentIntro').stop().hide();
                                $('.companyIntro').stop().hide();
                                $('.indonesia').stop().show();
                            }
                            else if( index==14 ){
                                $('#equipmentIntro').stop().hide();
                                $('.companyIntro').stop().hide();
                                $('.indonesia').stop().show();
                            } */
                            else if( index==7 ){   /* 15 */
                                $('#equipmentIntro').stop().hide();
                                $('.companyIntro').stop().hide();
                                $('.lohas').stop().show();
                            }
                            else if( index==8 ){   /* 16 */
                                $('#equipmentIntro').stop().hide();
                                $('.companyIntro').stop().hide();
                                $('.scholarship').stop().show();
                            }
                            else if( index==9 ){   /* 17 */
                                $('#equipmentIntro').stop().hide();
                                $('.companyIntro').stop().hide();
                                $('.sunEdu').stop().show();
                            }
                        }
                    });
                });          
                //메인슬라이드 배너 클릭시 해당 섹션이동
                $('.mainBannerBtn0').on({
                    click:  function(){
                        $('.companyIntro').stop().hide();
                        $('.printing').stop().show();
                        $('#equipmentIntro').stop().show();
                        s4ResizeFn();
                        imgW = $('.equipmentIntro-content .image').innerWidth();
                        $('.equipmentIntro-content .image').css({ height:imgW });                        
                    }
                });
                $('.mainBannerBtn1').on({
                    click:  function(){
                        $('.companyIntro').stop().hide();
                        $('.elec').stop().show();
                        $('#equipmentIntro').stop().show();
                        s4ResizeFn();
                        imgW = $('.equipmentIntro-content .image').innerWidth();
                        $('.equipmentIntro-content .image').css({ height:imgW });                        
                    }
                });
                $('.mainBannerBtn2').on({
                    click:  function(){
                        $('.companyIntro').stop().hide();
                        $('.vina').stop().show();
                        $('#equipmentIntro').stop().show();
                        s4ResizeFn();
                        imgW = $('.equipmentIntro-content .image').innerWidth();
                        $('.equipmentIntro-content .image').css({ height:imgW });                        
                    }
                });                      
                
                
                //테두리 애니메이션
                //마우스 오버시 애니메이션
                //마우스 아웃시 사라짐
                $('.slideBtn').on({
                    mouseenter:	function(){
                        $(this).prev().find('i').eq(0).animate({ width: 100+'%' },300);
                        $(this).prev().find('i').eq(1).animate({ height:100+'%' },300);
                        $(this).prev().find('i').eq(2).animate({ width: 100+'%' },300);
                        $(this).prev().find('i').eq(3).animate({ height:100+'%' },300);
                        // $(this).prev().find('i').eq(0).animate({width:100+'%'},500);
                    },
                    mouseleave:	function(){
                        $(this).prev().find('i').eq(0).animate({ width: 0+'%' },0);
                        $(this).prev().find('i').eq(1).animate({ height:0+'%' },0);
                        $(this).prev().find('i').eq(2).animate({ width: 0+'%' },0);
                        $(this).prev().find('i').eq(3).animate({ height:0+'%' },0);				
                    },
                    focusin:	function(){
                        $(this).prev().find('i').eq(0).animate({ width: 100+'%' },300);
                        $(this).prev().find('i').eq(1).animate({ height:100+'%' },300);
                        $(this).prev().find('i').eq(2).animate({ width: 100+'%' },300);
                        $(this).prev().find('i').eq(3).animate({ height:100+'%' },300);
                    },
                    focusout:	function(){
                        $(this).prev().find('i').eq(0).animate({ width: 0+'%' },0);
                        $(this).prev().find('i').eq(1).animate({ height:0+'%' },0);
                        $(this).prev().find('i').eq(2).animate({ width: 0+'%' },0);
                        $(this).prev().find('i').eq(3).animate({ height:0+'%' },0);				
                    }
                });
            
            
            
                //섹션4의 메인 슬라이드 함수
                function s4MainSlideFn(){
                    $('.equipmentIntro-wrap').stop().animate({ left:-(equipSlideW*s4Cnt) },500,function(){
                        if( s4Cnt>17 ){s4Cnt=0;}
                        if( s4Cnt<0 ){s4Cnt=17;}
                        $('.equipmentIntro-wrap').stop().animate({ left:-(equipSlideW*s4Cnt) },0);
                    });
                    pageEventFn();
                }
                
                //다음 카운트 함수
                function nextCountFn(){
                    s4Cnt++;
                    if( s4Cnt>17 ){
                        s4Cnt=0;
                    }
                    s4MainSlideFn();
                }
            
                //이전 카운트 함수
                function prevCountFn(){
                    s4Cnt--;
                    if( s4Cnt<0 ){
                        s4Cnt=17;
                    }
                    s4MainSlideFn();
                }
            
                //다음,이전 슬라이드 터치이벤트
                $('.equipmentIntro-container').swipe({
                    swipeLeft:	function(){
                        if( !$('.equipmentIntro-wrap').is(':animated') ){
                            pauseFn();
                            nextCountFn();
                        }
                    },
                    swipeRight:	function(){
                        if( !$('.equipmentIntro-wrap').is(':animated') ){
                            pauseFn();
                            prevCountFn();
                        }
                    }
                });
                
                //페이지이벤트 함수
                function pageEventFn(){
                    // if( z>17 ){z=0;}
                    s4Cnt<0?z=17:z=s4Cnt;
                    $('.pageBtn').removeClass('addPageBtnS4');
                    $('.pageBtn').eq(z).addClass('addPageBtnS4');
                }
                
                //페이지 버튼 클릭 이벤트
                $('.pageBtn').each(function(index){
                    $(this).on({
                        click:	function(){
                            s4Cnt=index;
                            s4MainSlideFn();
                            pauseFn();
                        }
                    });
                });
            
            
                //오토 타이머 함수
                function autoTimerS4Fn(){
                    setId4 = setInterval(nextCountFn,3000);
                }
                autoTimerS4Fn();
            
            
                //일시정지 함수
                function pauseFn(){
                    clearInterval(setId5);
                    clearInterval(setId4);
                    s4T=0;
                    
                    setId5=setInterval(function(){
                        s4T++;
                        if( s4T>=5 ){
                            s4T=0;
                            autoTimerS4Fn();
                            nextCountFn();
                            clearInterval(setId5);
                        }
                    },1000);
                    
                }
        },
        lastSectionFn:  function(){

            var cnt = setId = setId2 = t = 0;
            var winW = $(window).innerWidth();
            var n = 5;
            var	slideW = winW / n;
            var imageH = slideW*0.666666667;
                $('.news_slide').css({ width:slideW });
                $('.news_wrap').css({ width:slideW*15, marginLeft:-(slideW*5) });
                
                
            function s6ResizeFn(){
                winW = $(window).innerWidth();
                if( winW >= 1200 ){
                    n=5;
                }
                else if( winW >= 1024 ){
                    n=4;
                }
                else if( winW >= 800 ){
                    n=3;
                }
                else if( winW >= 500 ){
                    n=2;
                }
                else {
                    n=1;
                }
                slideW = winW / n;
                $('.news_slide').css({ width:slideW });
                $('.news_wrap').css({ width:slideW*15, marginLeft:-(slideW*5) });
                
                //메인슬라이드 left:반응형결정
                $('.news_wrap').stop().animate({left:-(slideW*cnt)},0);
                // mainSlideFn();

                imageH = slideW*0.666666667;
                $('.news_slide img').css({ height:imageH });
            }
            
            setTimeout(s6ResizeFn,100);
            
            $(window).resize(function(){
                s6ResizeFn();
            });
            
            
            //메인 슬라이드
            function mainSlideFn(){
                $('.news_wrap').stop().animate({left:-slideW*cnt},600,	function(){
                    if( cnt>4 ){ cnt=0; }
                    if( cnt<0 ){ cnt=4; }
                    $('.news_wrap').stop().animate({left:-slideW*cnt},0);
                });
            }
            
            
            //다음 카운트 함수
            function nextCountFn(){
                cnt++;
                mainSlideFn();
            }
            //이전 카운트 함수
            function prevCountFn(){
                cnt--;
                mainSlideFn();
            }
            
            
            //다음 버튼 클릭 이벤트
            $('.nextBtn').on({
                click:	function(){
                    if( !$('.news_wrap').is(':animated') ){
                        nextCountFn();
                        pauseFn();
                    }
                }
            });
            //이전 버튼 클릭 이벤트
            $('.prevBtn').on({
                click:	function(){
                    if( !$('.news_wrap').is(':animated') ){
                        prevCountFn();
                        pauseFn();
                    }
                }
            });
            
            //터치이벤트
            $('.news_container').swipe({
                swipeLeft:	function(){
                    if( !$('.news_wrap').is(':animated') ){
                        nextCountFn();
                        pauseFn();
                    }
                },
                swipeRight:	function(){
                    if( !$('.news_wrap').is(':animated') ){
                        prevCountFn();
                        pauseFn();
                    }
                }
            });
            
            //오토 타이머 함수
            function autoTimerFn(){
                setId = setInterval(nextCountFn,3000);
            }
            autoTimerFn();
            
            //일시정지 함수
            function pauseFn(){
                t=0;
                clearInterval(setId2);
                clearInterval(setId);
                
                setId2 = setInterval(function(){
                    t++;
                    if( t >= 3 ){
                        t=0;
                        nextCountFn();
                        autoTimerFn();
                        clearInterval(setId2);
                    }
                },1000);
            }        

        
            //마우스 올리면 슬라이드가 멈추고
            //마우스 떼면 즉시 다음 슬라이드 넘어가고
            //3초 오토타이머 실행
            $('.news_view').on({
                mouseenter: function(){
                    clearInterval(setId);
                },
                mouseleave: function(){
                    //nextCountFn();
                    pauseFn();
                    //clearInterval(setId);
                    //setInterval(nextCountFn,3000);
                }
            });

            $('.news_slide > div').on({
                mouseenter: function(){
                    $('.news_slide > div img').css({ transform:'scale'+'(1)' });
                    $('.news_slide > div a').css({ opacity:0 });
                    $(this).find('img').css({ transform:'scale'+'(1.05)' });
                    $(this).find('a').css({ opacity:0.2 });
                },
                mouseleave: function(){
                    $('.news_slide > div img').css({ transform:'scale'+'(1)' });
                    $('.news_slide > div a').css({ opacity:0 });
                }
            });
        },
        footerFn:   function(){

            //구글지도 모달창 반응형 변수
            var winW = $(window).innerWidth();
            var winH = $(window).innerHeight();
            var mapW = $('.googleMap').innerWidth();
            var mapH = mapW*0.784313725;
            var mapP = (winH-mapH)/2;
            var mapWrapH = $('.googleMap-wrap').innerHeight();
            var fSetId = 0;
            

            
            $('.modal-wrap').css({ height:winH });
            $('.googleMap-wrap').css({ top:(winH-mapWrapH)/2 });
            if( winW > 1024 ){
                $('.googleMap').css({ height:mapH });
                $('.googleMap-title').css({ top:-30 });
                $('.close-wrap').css({ top:mapP-25 });
                
            }
            else{
                $('.googleMap').css({ height:mapH/1.6 });
                $('.googleMap-title').css({ top:-20 });
                $('.close-wrap').css({ top:(winH-mapWrapH)/2-25 });
            }
            
            
            //구굴지도 모달창 반응형 함수
            function modalFn(){
                winW = $(window).innerWidth();
                winH = $(window).innerHeight();
                mapW = $('.googleMap').innerWidth();
                mapH = mapW*0.784313725;
                mapP = (winH-mapH)/2;
                mapWrapH = $('.googleMap-wrap').innerHeight();
                fSetId = 0;

                
                $('.modal-wrap').css({ height:winH });
                $('.googleMap-wrap').css({ top:(winH-mapWrapH)/2 });
                if( winW > 1024 ){
                    $('.googleMap').css({ height:mapH });
                    $('.googleMap-title').css({ top:-30 });
                    $('.close-wrap').css({ top:mapP-25 });
                    
                }
                else{
                    $('.googleMap').css({ height:mapH/1.6 });
                    $('.googleMap-title').css({ top:-20 });
                    $('.close-wrap').css({ top:(winH-mapWrapH)/2-25 });
                }
                
            }
            setTimeout(modalFn,10);

            $(window).resize(function(){
                clearTimeout(fSetId);
                fSetId = setTimeout(modalFn,10);
            });

            //찾아오시는 길 클릭 시 구글지도 모달창
            $('.mapBtn').on({
                click:  function(){
                    $('.modal-wrap').css({ zIndex:6 });
                }
            });
            $('.closeBtn').on({
                click:  function(){
                    $('.modal-wrap').css({ zIndex:1 });
                }
            });

            //썸네일 클릭 시 해당 회사소개로 스크롤이동
            var url;
            $('.smoothBtn').on({
                click:	function(event){
                    event.preventDefault();	
                    
                    url = $(this).attr('href');
                    $('html,body').stop().animate({ scrollTop: $( url ).offset().top-20 },800);		
                }
            });

	        //고탑 클릭이벤트
	        $('.goTopBtn').on({
	        	click:	function(event){
	        		event.preventDefault();
	        		$('html, body').stop().animate({ scrollTop:0 },1000);
	        	}
	        });
        
	        //고탑메뉴 스크롤탑값이 50이상일때 나타나고 그 외에는 사라진다.
	        $(window).scroll(function(){
	        	if( $(this).scrollTop() >= 50 ){
	        		$('.goTop-wrap').css({ display:'block' });
	        	}
	        	else{
	        		$('.goTop-wrap').css({ display:'none' });
	        	}
            });
        }
    }
    doosunGroup.init();


})(jQuery, window, document);
//doosunGroup.js