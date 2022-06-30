//javascript
//팝업창 코딩

//웹사이트 로딩시 팝업창 띄울 때
//쿠키이름 보내서 같은 쿠키 이름이 존재하면
//쿠키 value값 openPopupFn() 팝업창 오픈함수에서 리턴
//그러면 그 값이 no 이면 팝업창 안 띄운다. 쿠키 실행 결과
//쿠키는 만료일(expireDays)이 되면 자동 소멸된다.
//그럼 다음에 팝업창은 계속 띄울 수 있다.
function getCookie(name){
    //쿠키 정보 확인
    //console.log( '쿠키이름: ' + name );
    //console.log( '쿠키정보 확인: ' + document.cookie.length );
    //console.log( '쿠키정보 확인: ' + document.cookie.indexOf('=') );
    // =(등호 표시) 문자 위치
    pos = document.cookie.indexOf('='); //16(17번째 위치)

    //쿠키이름 추출
    getCookieName = document.cookie.slice(0,pos);

    //본인 쿠키 이름과 비교 확인 후 리턴
    if( getCookieName == name ){
        //쿠키 value 값 추출
        getCookieValue = document.cookie.slice(-2); //뒤에서 2글자 no 추출
        return getCookieValue;
    }

}


function openPopupFn(){
    //팝업창을 띄우기 전에 컴퓨터 시스템에 쿠키 정보를
    //가져와서( getCookie() 함수 )
    //현재 쿠키이름이랑 비교해서 같으면 쿠키 value 값을 리턴
    //팝업창 오픈 함수가 조건판단 실행 된다.
    //팝업창 뜨고 안뜨고 제어한다.

    var eventCookie = getCookie('popup_2020_09_02');

        //console.log( '리턴 쿠키 value 값: ' + eventCookie );
        if( !eventCookie ){ //no가 아니면 쿠키가 없으면 팝업창을 띄워라.
            window.open('popup.html','_blank','width=500, height=483, left=0, top=0');
        }

}




;(function($, window, document, undefined ){

    var kuly = {
        val:    function(){

        },
        init:   function(){
            var that = this;
                //document.href='index.html#main1_page';
               $('#main1_page').show();
                $.mobile.ajaxLinksEnabled = false;
                $.mobile.ajaxFormsEnabled = false;
                $.mobile.ajaxEnabled = false;

                that.fnNav();
                that.fnUtil();
                that.fnMain1();
                that.fnMain1_section1();
                that.fnMain1_section2();
                that.fnMain2();
                that.fnMain3();
                that.fnMain4();
                that.fnMain5();
                that.fnMain6();
                that.fnMain7();
                that.fnMain8();  
        },
        fnNav:  function(){
            var mainBtnW = 0;  //버튼 너비
            var curIndex = 0;  //클릭한 현재 버튼 인덱스 번호
            var setId = 0;

                //반응형 버튼너비 함수
                function resizeFn(){
                    mainBtnW = $('.mainBtn').innerWidth();
                    //버튼 장식 애니메이션 기본값 위치 설정
                    $('.navDeco').stop().animate({ left: mainBtnW*curIndex }, 300); 
                }
                setTimeout(resizeFn,100);

                $(window).resize(function(){
                    clearTimeout(setId);
                    setId = setTimeout(resizeFn,100);
                });



            //메인 버튼 클릭 이벤트
            //상단에 네비게이션(메인메뉴)
            $('.mainBtn').each(function(index){ 
                $(this).on({
                    click:  function(){
                       //현재 클릭한 인덱스 번호를 
                       //변수 기억  curIndex
                       curIndex = index;
                        
                       $('.main_page, #main6_page').stop().fadeOut(0);
                       $('.main_page').eq(index).stop().fadeIn(500);


                       //메인버튼 하단 가로줄의 애니이션 장식
                       $('.navDeco').stop().animate({ left: mainBtnW*curIndex }, 300); 
                       $('.mainBtn').removeClass('addNav'); 
                       $(this).addClass('addNav'); //버튼의 글자 색상 보라색

                    }
                });
            });

            //끼워넣기 
            //폼닫기
            //네비게이션과 연동이 되어야 현재 위치를 찾아간다.
            //로그인 폼창 닫기(메인6의 폼을 닫아준다)
            $('.loginCloseBtn').on({
                click:  function(){
                    $('#main6_page').stop().fadeOut(0); //로그인폼닫기
                    //이전에 클릭 메인메뉴의 선택 페이지가 노출
                    $('.main_page').stop().fadeOut(0); //모든 메인페이지 닫기
                    $('#main1_page').stop().fadeIn(500); //홈으로 이동 메인페이지1열기

                    //메인버튼 하단 가로줄의 애니이션 장식
                    curIndex=0; //폼을 닫으면 초기화
                    $('.navDeco').stop().animate({ left: mainBtnW*curIndex }, 300); 
                    $('.mainBtn').removeClass('addNav'); 
                    $('.mainBtn').eq(0).addClass('addNav'); //버튼의 글자 색상 보라색

                }
            });


            //하단 네비게이션(앱바메뉴) - 클릭이벤트 완료
            $('.navBtn').each(function(index){
                $(this).on({
                    click:  function(){
                        switch(index){
                            case 0:     //버튼이 0 : 홈
                                $('.main_page, #main6_page').stop().fadeOut(0);
                                $('#main1_page').stop().fadeIn(500);
                                
                                //메인버튼 하단 가로줄의 애니이션 장식
                                curIndex=0; //폼을 닫으면 초기화
                                $('.navDeco').stop().animate({ left: mainBtnW*curIndex }, 300); 
                                $('.mainBtn').removeClass('addNav'); 
                                $('.mainBtn').eq(0).addClass('addNav'); //버튼의 글자 색상 보라색


                                break;
                            case 1:     //버튼이 1 : 카테고리
                                // $('.main_page').fadeOut(0); //모든 메인페이지 안보임
                                // $('#main8_page').fadeIn(500); //마이컬리만 보임
                                break;
                            case 2:     //버튼이 2 : 검색
                                // $('.main_page').fadeOut(0); //모든 메인페이지 안보임
                                // $('#main7_page').fadeIn(500); //마이컬리만 보임
                                break;
                            case 3:     //버튼이 3 : 마이컬리
                                $('.main_page').fadeOut(0); //모든 메인페이지 안보임
                                $('#main6_page').fadeIn(500); //마이컬리만 보임
                        }

                    }
                });    
            });
        },
        fnUtil: function(){
            //팝업창 제어 쿠키 설정 쿠키 가져오기
            var pos = '';
            var getCookieName = '';
            var getCookieValue = '';

            //상단 팝업
            $('.headerPopupBtn').on({
                click:  function(){
                    $('.header_popup').hide();

                    // 폼창의 상단 addClass 추가
                    $('.main_page, #main6_page').addClass('addPopup');
                    
                }
            });


            //하단 팝업 닫기 버튼 이벤트 - 쿠키설정(굽다)
            $('.footPopupBtn').on({
                click:  function(){
                    //팝업창 닫기
                    $('.foot_poup_wrap').hide();
                    $('.goTopBtn_wrap').addClass('addFootpopup');
                    $('.main_footer > div').addClass('addFootPopup');

                    //쿠키 설정 함수 호출 실행
                    //setCookieFn('쿠키이름', 'value', 1(하루));
                    setCookieFn('marketkuly', 'no', 1);

                }
            });

            //쿠키 설정 함수
            function setCookieFn(name, value, expireDays){
                var toDay = new Date();
                    toDay.setDate( toDay.getDate() + expireDays );

                    document.cookie = name + '=' + value + '; path=/; expires=' + toDay.toGMTString() + ';'
            }

            //로딩시 자동으로 모달 팝업창 뜬다
            //그러나 수정 함수 만들어 팝업창 뜨는걸 제어 해준다.
            //1. 모달창 띄우기 함수
            function footPopupFn(){
                //쿠키정보 가져와서 비교하고
                //쿠키가 없으면 팝업창 뜬다.
                getCookieFn('marketkuly');
                //3. 비교 판단 팝업창 뜨기 / 안뜨기
                if( !getCookieValue ){  //쿠키정보가 없으면 보임
                    $('.foot_poup_wrap').show();
                }
                else{   //쿠키정보가 있으면 안보임
                    $('.foot_poup_wrap').hide();
                }
                
            }
            //로딩시 실행 모달 팝업창
            setTimeout(footPopupFn,100);

            //2. 모달창 뜰때 쿠키 이름 받아서 비교 판단 리턴
            function getCookieFn(name){
                //marketkuly=no
                //= 포지션 찾기
                var pos = document.cookie.indexOf('=');
                //쿠키이름 추출
                var getCookieName = document.cookie.slice(0,pos);
                    if( name == getCookieName ){
                        return getCookieValue = document.cookie.slice(-2);
                    }
            }



            //goTop
            $('.goTopBtn').on({
                click:  function(){
                    $('html, body').stop().animate({ scrollTop: 0 }, 800);
                }
            });

            //윈도우 창의 상단에서 스크롤(BOM: scroll() ) 탑값이 100px이상이면 
            //goTop 버튼이 부드럽게 나타난다.
            //그렇지않으면(스크롤 탑값이 100px미만이면 ) 
            //부드럽게 사라진다.
            $('.goTopBtn_wrap').stop().fadeOut(0);

            $(document).scroll(function(){
                if( $(document).scrollTop() >= $('#section2').offset().top ){                    
                    $('.goTopBtn_wrap').stop().fadeIn(600);
                }
                else{
                    $('.goTopBtn_wrap').stop().fadeOut(600);
                }
            });
            
        },
        fnMain1:  function(){

            //메인슬라이드 반응형 
            var winW = 0;
            var setId = 0;
            var setId2 = 0;
            var setId3 = 0;
            var cnt = 0;
            var second = 0;

                function resizeFn(){
                    winW = $(window).innerWidth();
                        $('.main1_slide_wrap .slide').css({ width: winW, maxWidth: winW });
                        $('.main1_slide_wrap').css({ width: winW*15, marginLeft:-(winW*1), height: $('.main1_slide_wrap .slide').innerHeight()  });                        
                        $('.main1_slide_wrap').stop().animate({ left: -(winW * cnt) }, 0);
                }
                setTimeout(resizeFn, 100);

                $(window).resize(function(){
                    clearTimeout(setId);
                    setId = setTimeout(resizeFn, 100);
                });


                //메인 슬라이드 
                function mainSlide(){
                    //카운트 넘버
                    $('.main1_slide_count_num').text( (cnt+1)>13 ? 1 : cnt+1 );

                    $('.main1_slide_wrap').stop().animate({ left: -(winW * cnt) }, 600, function(){
                        if(cnt>12){ cnt=0  }
                        if(cnt<0) { cnt=12 }
                        $('.main1_slide_wrap').stop().animate({ left: -(winW * cnt) }, 0);
                    });
                    
                }    


                //다음 슬라이드 카운트 함수
                function nextSlideCountFn(){
                   cnt++;
                   mainSlide();
                }
                //이전 슬라이드 카운트 함수
                function prevSlideCountFn(){
                   cnt--;
                   mainSlide();
                }

                //터치이벤트 
                $('.main1_slide_wrap').on({
                    swipeleft:  function(e){
                        
                        clearInterval(setId2);
                        nextSlideCountFn();

                        //슬라이드가 중지된 이후 
                        //카운트 타이머 설정 5초간
                        //터치가 없으면  다시 자동 타이머 실행
                        second=0; //초기화 카운트 - 버튼 클릭시마다
                        clearInterval(setId3);//카운트 타이머 중지 초기화 - 버튼 클릭시마다
                        setId3 = setInterval(function(){
                            second++;
                            console.log(second);
                            if(second>=5){
                                nextSlideCountFn();//즉시 다음슬라이드
                                autoTimerFn(); //자동타이머 4초 후에 실행
                                clearInterval(setId3);
                            }
                        },1000);


                    },
                    swiperight:  function(){
                        clearInterval(setId2);
                        prevSlideCountFn();

                        //슬라이드가 중지된 이후 
                        //카운트 타이머 설정 5초간
                        //터치가 없으면  다시 자동 타이머 실행
                        second=0; //초기화 카운트 - 버튼 클릭시마다
                        clearInterval(setId3);//카운트 타이머 중지 초기화 - 버튼 클릭시마다
                        setId3 = setInterval(function(){
                            second++;
                            if(second>=5){
                                prevSlideCountFn();//즉시 이전슬라이드
                                autoTimerFn(); //4초후에 자동타이머실행
                                clearInterval(setId3);
                            }
                        },1000);                        
                        
                    }
                });

                //자동타이머 
                function autoTimerFn(){
                    setId2 = setInterval(nextSlideCountFn,4000);
                }                 
                setTimeout(autoTimerFn,10);

        },
        fnMain1_section1:  function(){

            var winW = 0; 
            var imgW = 0;
            var imgW10 = 0;
            var setId = 0;
            var secH = 0; //섹션높이
            var secH10 = 0; //섹션높이
            var alvW = 0;
            var alvH = 0;
            var alvH10 = 0;
            var alvT = 0;
            var alvT10 = 0;
            var butH = 0;


                function resizeFn(){
                    winW = $(window).innerWidth();
                    imgW = (winW * 0.437);
                    imgW10 = (winW * 0.689141);

                           //이미지너비를 창너비 비율
                           $('.section_product li').css({ width: imgW }); 
                           $('.section10_product li').css({ width: imgW10 }); 

                           $('.section1_product ul').css({ width: imgW*7 }); 

                           //allView 너비, 높이, 패딩탑
                            alvW = (winW * 0.310844);
                            butH = $('.allView span').innerHeight();                            
                            alvH = $('.section_product li').eq(0).find('img').innerHeight();  
                            alvH10 = $('.section10_product li').eq(0).find('img').innerHeight();  
                            alvT = (alvH-butH)/2;                         
                            alvT10 = (alvH10-butH)/2;   

                                    $('.allView').css({ width: alvW });
                                    $('.allView a').css({ height: alvH });
                                    $('#section10 .allView a').css({ height: alvH10 });
                                    $('.allView span').css({ top: alvT });
                                    $('#section10 .allView span').css({ top: alvT10 });

                            //올뷰 버튼이 추가되면서 각 섹션의 마지막 버튼너비가 추가로 ul에 게산
                            $('.section3_product ul') .css({ width: (imgW*6+alvW) }); 
                            $('.section7_product ul') .css({ width: (imgW*6+alvW) }); 
                            $('.section8_product ul') .css({ width: (imgW*6+alvW) }); 
                            $('.section9_product ul') .css({ width: (imgW*6+alvW) }); 
                            $('.section10_product ul').css({ width: (imgW10*5+alvW) }); 
                            
                            
                            //scroll-x:scroll : 스크롤바를 감추기
                            //섹션1~9의 높이 설정 반응형
                            secH = $('.section_product li').eq(0).find('img').innerHeight()+180;
                                    $('.section13789').css({ height: secH });
 
                            //섹션1~9의 높이 설정 반응형
                            secH10 = $('.section10_product li').eq(0).find('img').innerHeight()+180;
                                    $('#section10').css({ height: secH10 });
 
                }
                setTimeout(resizeFn,100);

                $(window).resize(function(){
                    clearTimeout(setId);
                   setId = setTimeout(resizeFn,100);
                });

        },
        fnMain1_section2:  function(){
            
            var winW = 0; 
            var imgW = 0;
            var titW = 0;
            var padT = 0;
            var padB = 0;
            var setId = 0;

                function resizeFn(){
                    winW = $(window).innerWidth();
                    imgW = (winW * 0.276891);
                    titW = (winW * 0.50);
                    padT = (imgW-35)/2;
                    
                            if( winW > 500 ){
                                imgW = (winW * 0.276891);
                                titW = (winW * 0.50);
                                padT = (imgW-35)/2;
                            }
                            else{
                                imgW = (winW * 1)-30;
                                titW = (winW * 1)-30;
                                padT = 10;
                                padB = 20;
                            }
                            $('.img_wrap').css({ width: imgW });
                            $('.tit_wrap').css({ width: titW });
                            $('.tit_wrap div').css({ paddingTop: padT, paddingBottom: padB });
  
                }
                setTimeout(resizeFn,100);

                $(window).resize(function(){
                    clearTimeout(setId);
                   setId = setTimeout(resizeFn,100);
                });

        },
        fnMain2:  function(){

        },
        fnMain3:  function(){

        },
        fnMain4:  function(){

        },
        fnMain5:  function(){
            var val = [];

            //로그인 창
            //체크박스
            //선택하면 체크가 되도록 
            //true(클래스 추가 addClass(배경이미지로 변경 ui)) 하고 
            //다시 클릭하면 false

            $('#idSave').on({
                click:  function(){
                    // 선택이 되어 있다면 checked
                    // if( $(this).is(':checked')){ //체크하면(선택되면) == true
                    if( $(this).prop('checked') ){ //체크하면(선택되면) == true
                        $(this).prop('checked', true).addClass('addChk'); //체크(선택되고)하고 
                        val[0] = $(this).val(); 
                    }
                    else{
                        $(this).prop('checked', false).removeClass('addChk'); //체크(선택해제)
                    }
                }
            });

            $('#autoSave').on({
                click:  function(){
                    // 선택이 되어 있다면 checked
                    // if( $(this).is(':checked')){ //체크하면(선택되면) == true
                    if( $(this).prop('checked') ){ //체크하면(선택되면) == true
                        $(this).prop('checked', true).addClass('addChk'); //체크(선택되고)하고 
                        val[1] = $(this).val(); 
                    }
                    else{
                        $(this).prop('checked', false).removeClass('addChk'); //체크(선택해제)
                    }
                }
            });

            $('#secConnect').on({
                click:  function(){
                    // 선택이 되어 있다면 checked
                    // if( $(this).is(':checked')){ //체크하면(선택되면) == true
                    if( $(this).prop('checked') ){ //체크하면(선택되면) == true
                        $(this).prop('checked', true).addClass('addChk'); //체크(선택되고)하고 
                        val[2] = $(this).val(); 
                    }
                    else{
                        $(this).prop('checked', false).removeClass('addChk'); //체크(선택해제)
                    }
                }
            });




        },
        fnMain6:  function(){
            //회원가입창

            var winW = 0;
            var leftW = 0;
            var setId = 0;
            var winH = 0;
            var docH = 0;
            var cnt = 0;

            var gen = [];
            var chk = [];

                function resizeFn(){
                    winW = $(window).innerWidth();
                    winH = $(window).innerHeight();
                    
                    leftW = winW - (100+40+20);
                    // $('.gaipId_wrap').css({ width: leftW });
                    // $('#main6_page_member_gaip').css({ height: winH });
                }
                setTimeout(resizeFn,100);

                $(window).resize(function(){
                    clearTimeout(setId);
                    setId = setTimeout(resizeFn,100);
                });

                //회원가입 버튼 클릭 이벤트
                $('#memberInBtn').on({
                    click:  function(){
                        $('#global_header').hide(); //Global 헤더
                        $('.foot_poup_wrap').hide(); //Global 팝업창하단
                        $('#main1_page').hide();  //인트로 메인1
                        $('#main6_page').hide();  //로그인창
                        $('#main6_page_member_gaip').show(); //회원가입창
                    }
                });

                //회원 가입창 닫기
                //로그인창으로 뒤로 이동
                $('.gaipBackBtn').on({
                    click:  function(){
                        $('#global_header').show(); //Global 헤더
                        $('.foot_poup_wrap').show(); //Global 팝업창하단
                        $('#main1_page').show();  //인트로 메인1
                        $('#main6_page').show();  //로그인창
                        $('#main6_page_member_gaip').hide(); //회원가입창
                    }
                });

                //생년월일 포커스
                $('.birthWrap').on({
                    focusin:  function(){
                        $(this).addClass('addFocus');
                       
                    },
                    focusout:   function(){
                        $(this).removeClass('addFocus');
                    }
                });

                //성별 체크 :  아러개 중에 한개만 선택
                $('.gender_chk').on({
                    click:  function(){
                                               
                        //선택된 라디오만(인덱스) 체크되고 나머지 모두 해제된다
                        $('.gender_chk').prop('checked', false).removeClass('addRadio');
                        $(this).prop('checked', true).addClass('addRadio');                      
                        gen[0] =  $(this).val();
                        
                        console.log( gen[0] );
                        // console.log( $('.gender_chk').eq(0).prop('checked') );
                        // console.log( $('.gender_chk').eq(1).prop('checked') );
                        // console.log( $('.gender_chk').eq(2).prop('checked') );

                    }
                });


                //추천인 추가선택
                $('.choo_chk').on({
                    click:  function(){
                       $('.choo_chk').prop('checked', false).removeClass('addRadio'); 
                       $(this).prop('checked', true).addClass('addRadio'); 
                       gen[1] =  $(this).val();
                       console.log( gen[1] );
                    }
                });


                //이용약관동의
                $('.acceptChk').each(function(index){
                    $(this).on({
                        click:  function(){
                            
                            //한개씩 각각 체크
                            if( $(this).is(':checked') ){ //선택하면(1번째클릭)
                                $(this).prop('checked', true).addClass('addAccCheck');
                            }
                            else{ //선택하면(2번째클릭) 토글기능 한번은 선택 헌번은 해제
                                $(this).prop('checked', false).removeClass('addAccCheck');
                            }

                            //첫번째 버튼인 경우만
                            //모두 체크 버튼 allCheck
                            if( index == 0 ){ 
                                if( $(this).is(':checked')  ){
                                    $('.acceptChk').prop('checked', true).addClass('addAccCheck'); //모두체크 
                                }
                                else{
                                    $('.acceptChk').prop('checked', false).removeClass('addAccCheck'); //모두체크 
                                }
                            }

                            //4번이 체크되면
                            //4번 5번 6번이 모두 체크 / 해제 된다.(SMS, EMAIL)
                            if( index == 4 ){
                                if( $(this).is(':checked')  ){
                                    $(this).prop('checked', true).addClass('addAccCheck');
                                    $('.acceptChk').eq(5).prop('checked', true).addClass('addAccCheck');
                                    $('.acceptChk').eq(6).prop('checked', true).addClass('addAccCheck');
                                }
                                else{
                                    $(this).prop('checked', false).removeClass('addAccCheck');
                                    $('.acceptChk').eq(5).prop('checked', false).removeClass('addAccCheck');
                                    $('.acceptChk').eq(6).prop('checked', false).removeClass('addAccCheck');
                                }
                            }



                            //전체선택된 상태에서 
                            //한개라도 선택이 해제되면 
                            //0번 모두체크버튼이 해제된다.
                            var cnt = 0;
                            for(var i=0; i<$('.acceptChk').length; i++){
                                if( !$('.acceptChk').eq(i).is(':checked') ){
                                    cnt++;
                                }                                                                    
                            }
                            //체크해제된게 한개라도 있다면 그러면 첫번째를 해제 시킨다.
                            if( cnt>0 ){
                                $('.acceptChk').eq(0).prop('checked', false).removeClass('addAccCheck');
                            }    



                            //5번이나 6번이 해제되면 4번 해제
                            if( !$('.acceptChk').eq(5).is(':checked') || !$('.acceptChk').eq(6).is(':checked')  ){
                                $('.acceptChk').eq(4).prop('checked', false).removeClass('addAccCheck');
                            }

                            //5번 6번 모두 체크되면 4번 체크
                            if( $('.acceptChk').eq(5).is(':checked') && $('.acceptChk').eq(6).is(':checked') ){
                                $('.acceptChk').eq(4).prop('checked', true).addClass('addAccCheck');
                            }

                            //첫번쩨(0)를 제외한 나머지(1 ~ 7) 모두가 체크되면
                            //첫번째를 체크해준다.
                            var cnt2 = 0;
                            for(var i=1; i<$('.acceptChk').length; i++){
                                if( $('.acceptChk').eq(i).is(':checked') ){
                                    cnt2++;
                                }                                                                    
                            }

                            //체크가 7개 모두 되면 첫번째 체크
                            if( cnt2 == 7 ){
                                $('.acceptChk').eq(0).prop('checked', true).addClass('addAccCheck');
                            }


                        }
                    })
                });


                

        },
        fnMain7:  function(){

        },
        fnMain8:  function(){

        }
    }

    kuly.init();
    
})(jQuery, window, document);
//marketKuly.js



