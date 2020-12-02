## HJ's daily-issue

### 20200902

1. [케이스뷰 자바스크립트로만 구현하기](https://hyungju-lee.github.io/daily-issue/javascript/script01.js)  
   
   * [두번째 버전](https://hyungju-lee.github.io/daily-issue/javascript/script01_2.js)
   * **적용한 기법 및 느낀점**
   1. 정말 간단한 루프 추상화 (난이도 하)
   2. 이벤트 위임 (.call 메서드 사용)
   3. IE11은 문자열 템플릿도 지원안한다. 에휴..

2. [정규식 활용하여 특정 문자 추출](https://hyungju-lee.github.io/daily-issue/regExp/index-bem-modify_extraction.html)  

   * **위 코드를 작성하며 느낀점**
   1. innerHTML 메서드 -> 스트링 값으로 추출
   2. 특정 문자 '뒤'의 문자를 추출하는 방법은 없는지 궁금함
   
3. [아이폰 사파리 스크롤 바운스 - fixed 메뉴 처리기법](https://hyungju-lee.github.io/daily-issue/iOS/index.html)

   * 스크롤 위치가 0보다 커지면 상단을 fixed 시키고 0이하가 되면 fixed 를 제거한다.  
     이를 통해 스크롤 바운스 현상이 있는 기기에서 fixed 요소가 어색하게 보이는 현상을 해결했다.
     
### 20200911

1. [IE 및 iOS스크롤 바운스 대비 스크롤 스크립트](https://hyungju-lee.github.io/daily-issue/javascript/script02.js)

   * iOS 스크롤 인터렉션 주의사항 - 바운스되는 부분의 에러현상을 없애야된다.
   * IE 스크롤 인터렉션 주의사항 - 방향설정은 수치 '0'이 포함되면 안된다. 확실히 움직인 것! 즉, '차이'가 있는걸로만 제어해야된다.
   
### 20200914

1. [스와이퍼 destroy 사용](https://hyungju-lee.github.io/daily-issue/javascript/script03.js)
2. [스와이퍼 처음/끝 인식 - isBeginning, isEnd](https://hyungju-lee.github.io/daily-issue/javascript/script03.js)
3. [스와이퍼 처음/끝 인식 - isBeginning, isEnd 위 코드 slideChangeTransitionStart 이벤트로 제어했는데 문제가 생겨 touchmove로 수정, 잘됨](https://hyungju-lee.github.io/daily-issue/javascript/script07.js)
4. [자바스크립트로 속성 설정하기 getAttribute / setAttribute](https://hyungju-lee.github.io/daily-issue/javascript/script04.js)
5. [자바스크립트 click](https://hyungju-lee.github.io/daily-issue/javascript/script05.js)
6. [제이쿼리 hasClass메서드 = 자바스크립트 classList.contains](https://hyungju-lee.github.io/daily-issue/javascript/script06.js)
7. [자바스크립트 classList 메서드 정리](https://hyungju-lee.github.io/daily-issue/html/ex01/index01.html)

### 20200915

1. [스와이퍼 네비게이션, 페이지네이션 다 없을 때 키보드 방향키 동작원리 - 화면에 보이는 슬라이드만?](https://hyungju-lee.github.io/daily-issue/html/ex02/index02.html)

### 20200916

1. [케이스뷰 세번째 버전](https://hyungju-lee.github.io/daily-issue/javascript/script01_3.js)
2. [케이스뷰 네번째 버전](https://hyungju-lee.github.io/daily-issue/javascript/script01_4.js)

    * 케이스뷰 3번째, insertBefore 메서드 사용
    * 네번째 버전에서 알게된점
    * 자바스크립트 children과 childNodes의 차이 : childNodes는 text를 포함한 모든 노드를 가지고 온다.
    * [children](https://developer.mozilla.org/ko/docs/Web/API/ParentNode/children)
    * [childNodes](https://developer.mozilla.org/ko/docs/Web/API/Node/childNodes)
    
### 20200917

1. [케이스뷰 - parentNode](https://hyungju-lee.github.io/daily-issue/javascript/script01_5.js)

    * 자바스크립트 parentNode
    
2. [스와이퍼 UI](https://hyungju-lee.github.io/daily-issue/html/ex03/index03.html)

    * dataset 사용
    * nextSibling / nextElementSibling
    * previousSibling / previousElementSibling
    * [nextElementSibling](https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling)
    * [previousElementSibling](https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/previousElementSibling)
 
3. [스와이퍼 2016년 라이브러리 버전.. 이때 라이브러리 버전 API 사용](https://hyungju-lee.github.io/daily-issue/html/ex04/index04.html)

    * 스와이퍼는 과거.. 한 2016년 기준 API와 현재 API 이름이 다르다. 이점 주의하자!
    
4. [스와이퍼 2016년 라이브러리 버전 + IE10까지고려 - 제이쿼리사용](https://hyungju-lee.github.io/daily-issue/html/ex05/index05.html)

    * 자바스크립트 classList - IE10에서 인식X : 제이쿼리 선택자로 대체
    * 자바스크립트 dataset - IE10에서 인식X : setAttribute / getAttribute 로 대체
    * [스와이퍼 옛날 API관련 - 1](https://swiperjs.com/types/interfaces/_swiper_react_d_.swiper.html#onpaginationupdate)
    * [스와이퍼 옛날 API관련 - 2](https://kkotkkio.tistory.com/49)
    * onPaginationRender 이 아니라 onPaginationRendered 였음
    
5. .nvmrc 이슈정리

    * 10.15.3  
      10.16.3

    0.01 버전만 달랐을 뿐인데도 css 결과물에 차이가 발생함
    
### 20200918

1. [스와이퍼 destroy - 스와이퍼 객체가 생성되어있을 때만 실행되도록](https://hyungju-lee.github.io/daily-issue/html/ex06/index01.html)
2. [스와이퍼 에러 조금 수정](https://hyungju-lee.github.io/daily-issue/html/ex06/index02.html)

### 20200929

1. [document.location.hash로 기억하게해서 이전페이지 돌아갈 때 active 탭 기억하게하기](https://hyungju-lee.github.io/daily-issue/html/ex07/)
2. [requestAnimationFrame 활용 - 렌더링 순서에 의해 팝업 밑에서 위로 스르륵 등장하게 하기](https://hyungju-lee.github.io/daily-issue/javascript/script08.js)
3. [위 코드 추가수정](https://hyungju-lee.github.io/daily-issue/javascript/script09.js)
    
    * offset().top 값을 읽기위해선 해당 요소가 렌더링 된 후 읽어야된다. 이번 예시에서 처음에 못읽었던 이유는 display:none 상태에서 읽었기 때문이다. transitionstart 이벤트로 그 값을 읽었다.
    * 제이쿼리 페이드인아웃 메서드는 동작하는 방식이 달라서인지 transitionend 이벤트가 인식이 안됨
    * transitionend / transitionstart / animationend / animationstart 이런 이벤트들에 콜백펑션을 걸었을 때 경우에따라선 .off() 메서드로 해제해줘야됨
    * 제이쿼리 $.map() 사용 = 자바스크립트 .map() 메서드와 동일
    
    * $(e.currentTarget).find('a').index() 값이 계속 0으로 나왔던건 당연한 것. 해당 클릭당한 버튼의 자식요소로 a태그는 하나밖에 없으니까~!
    
### 20200930
    
1. [레이어팝업 추가수정](https://hyungju-lee.github.io/daily-issue/javascript/script10.js)
2. [아코디언 텝메뉴 $.map() 사용](https://hyungju-lee.github.io/daily-issue/javascript/script11.js)
2. [iOS 간헐적으로 첫클릭 이벤트 적용 안되는 이슈 추정이유](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent)

    * 메인페이지에서 iOS 모바일로 볼시 클릭이 처음 한번은 안먹히는 이유
    * 복합적인 이유가 섞인듯, 위 mdn 설명처럼 터치이벤트 상호작용 발생시 클릭이벤트가 실행 안되는 이유 + 스와이퍼 플러그인 (2016이전버전) 으로 인해 여러가지 복합적으로 겹치면서 이런 이슈가 발생한것으로 보임
    
3. [제이쿼리 offset(), position() 차이](http://blog.naver.com/PostView.nhn?blogId=pjh445&logNo=221023705219&redirect=Dlog&widgetTypeCall=true&directAccess=false)

    * offset()은 document 기준 절대좌표
    * position()은 부모..(relative나 absolute나 fixed가 선언된)를 기준 상대좌표

4. [제이쿼리 attr(), prop() 차이](https://electronic-moongchi.tistory.com/41)

    * attr() : html 속성(attribute)을 다룬다.
    * prop() : 자바스크립트 프로퍼티(property)를 다룬다.
    * 이는 자바스크립트에도 있는 차이 - 잘 분간해서 사용하자!! getAttribute, setAttribute, hasAttribute, removeAttribute // 그리고 또 뭐 있었는데..
    
5. [레이어팝업 추가수정 javascript target과 currentTarget 차이](https://hyungju-lee.github.io/daily-issue/javascript/script12.js)

    * [참고링크 - currentTarget](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)
    * [참고링크 - target](https://developer.mozilla.org/ko/docs/Web/API/Event/target)
    
### 20201002

* [레이어팝업 추가수정 - undefined 잘 활용해야됨](https://hyungju-lee.github.io/daily-issue/javascript/script13.js)
    
    1. 제이쿼리 `scrollTop` 또는 자바스크립트 `scrollTo` 메서드를 사용할 때 스크롤되는 영역을 잘 파악하는 것이 중요하다.  
    2. 스크롤 되는 영역을 기준으로 하기 위해선 해당 요소에 `position:relative`를 주고 제이쿼리의 `position().top`을 사용해야된다.
    
### 20201003

* [iOS, AOS 저버전에서 작동을 안하는 코드](https://hyungju-lee.github.io/daily-issue/javascript/script14.js)

    1. transitionstart가 ios12~13버전 이상부터 적용이된다. ios 저버전에선 지원을 안한다.
    2. transitionend가 ios6 부터 적용인데 transitionstart가 지원안될줄은 몰랐다. 
    3. 때문에 코드를 약간 수정해줬다. transitionstart를 아예 빼고 해당 이벤트 인식시 발생하는 콜백함수를 requestAnimationFrame 두번째 실행 함수에게로 옮겼다.
    4. 처음부터 이렇게했어야 했는데, 생각이 짧았다.
    
* [Swiper Observer 옵션 IE10에선 미지원](https://hyungju-lee.github.io/daily-issue/javascript/script15.js)

    1. IE10에선 swiper observer 옵션이 지원이 안된다.
    2. 텝메뉴를 클릭할 때마다 스와이퍼 슬라이드를 update 해줬지만,, 기능은되는데 페이지네이션이 바로 적용안되는 부족함이 있음.
    3. 그래서 할수없이 텝메뉴를 클릭할 때마다 즉 display:none -> block으로 변할 때마다 destroy했다가 다시 생성하는 방식으로 바꿨다.
    4. 그랬더니 아주 잘된다. IE10에서도.
    
### 20201005

* [Swiper Observer 옵션 IE10에선 미지원 해결방법](https://github.com/hyungju-lee/daily-issue/tree/master/javascript/ex01)

    1. IE10 observer / observeParents 속성 적용 안되는 이슈 해결하기  
       destroy() 후 다시 재생성 하는 방법을 사용  
       IE10에서만 적용되도록 if ( navigator.appName == "Microsoft Internet Explorer" ) {} 코드 이용
       
* [caseview에 위 코드 적용하기](https://hyungju-lee.github.io/daily-issue/javascript/script16.js)

    1. 케이스뷰에도 적용해야될 거 같아서 위와 같은 방법으로 했다.
    
* [자바스크립트 getBoundingClientRect()메서드로 offset().top 구현](https://hyungju-lee.github.io/daily-issue/javascript/script17.js)
* [자바스크립트 getBoundingClientRect()메서드로 offset().top 구현2](https://hyungju-lee.github.io/daily-issue/javascript/script18.js)
* [이벤트 두번실행되지 않게!! 반복문 사용할 때 항상 조심! + 이벤트 위임(delegate) 사용해!](https://hyungju-lee.github.io/daily-issue/javascript/script19.js)

### 20201009

1. 처음부터 보이는 슬라이드인지 아니면 처음부터 display:none인지 구분   
   그거에따라 observer 적용 , destroy() 하고 재생성 적용할지말지 결정
   
2. 스와이퍼 플러그인 옵션 : watchOverflow

3. [https://caniuse.com/?search=%3A%3A-webkit-scrollbar](https://caniuse.com/?search=%3A%3A-webkit-scrollbar)

4. ejs 2중 for문 가능

5. [tabMenu center](https://hyungju-lee.github.io/daily-issue/html/ex08/)

6. [allcheck](https://hyungju-lee.github.io/daily-issue/javascript/script20.js)

7. [validator](https://hyungju-lee.github.io/daily-issue/javascript/script21.js)

8. [dropdown box](https://hyungju-lee.github.io/daily-issue/javascript/script22.js)

9. [right to left slide popup](https://hyungju-lee.github.io/daily-issue/javascript/script23.js)

### 20201012

1. [팝업 slide 효과 - 열기](https://hyungju-lee.github.io/daily-issue/javascript/script24.js)
2. [팝업 slide 효과 - 닫기](https://hyungju-lee.github.io/daily-issue/javascript/script25.js)

### 20201014

1. [validator input num 자릿수 체크 + 오토포커스](https://github.com/hyungju-lee/daily-issue/tree/master/hyfresh-validator-version-1/)
2. [validator input num 자릿수,연월일 체크 + 오토포커스](https://github.com/hyungju-lee/daily-issue/tree/master/hyfresh-validator-version-2)
3. [validator input num 자릿수 체크 + 오토포커스](https://github.com/hyungju-lee/daily-issue/tree/master/hyfresh-validator-version-3-maxlength-autofocus)
4. [validator input num 자릿수 체크](https://github.com/hyungju-lee/daily-issue/tree/master/hyfresh-validator-version-3-onlymaxlength)
5. [gulp-nh 개선 및 페이지작업](https://github.com/hyungju-lee/daily-issue/tree/master/life_shopping_201014)

### 20201015

1. [gulp-nh 개선 두번째](https://github.com/hyungju-lee/daily-issue/tree/master/life_shopping_201015)

### 20201016

1. [swiper destroy 이슈 - 인스턴스관련 문제](https://hyungju-lee.github.io/issue/2020/10/16/issue2.html)

### 20201018

1. [jquery prop 으로 유효성검사(validator)](https://hyungju-lee.github.io/daily-issue/html/ex09/)
2. [gulp-file-include if문 for문 사용하기](https://hyungju-lee.github.io/daily-issue/html/ex10/)
3. [IE foreach 안먹히는 이슈 대응 - 폴리필](https://hyungju-lee.github.io/daily-issue/html/ex11/)

### 20201020

1. [아이프레임 이슈 참고자료](http://hyungju12.dothome.co.kr/06_portfolio/new_study/hivework/#id19)
2. [아이프레임 position: fixed 등 예시파일1](https://hyungju-lee.github.io/daily-issue/html/iframe-example/ex01/index.html)
3. [아이프레임 position: fixed 등 예시파일2](https://hyungju-lee.github.io/daily-issue/html/iframe-example/ex02/index.html)
4. [아이프레임 position: fixed 등 예시파일 - fixed 방법](https://hyungju-lee.github.io/daily-issue/html/iframe-example/ex03/index.html)
5. [아이프레임 position: fixed 등 예시파일 - fixed 방법](https://hyungju-lee.github.io/daily-issue/html/iframe-example/ex04/index.html)
6. [스와이퍼 destroy, for in, requestAnimationFrame](https://hyungju-lee.github.io/issue/2020/10/20/issue2.html)
6. [별점 코드정리](https://hyungju-lee.github.io/issue/2020/10/20/issue3.html)
7. [유효성검사 코드정리기법](https://hyungju-lee.github.io/daily-issue/javascript/script26.js)

### 20201023

1. [팝업스르륵열리고 닫히고 - requestAnimationFrame](https://hyungju-lee.github.io/daily-issue/javascript/script27.js)
1. [팝업스르륵열리고 닫히고 - requestAnimationFrame2](https://hyungju-lee.github.io/daily-issue/javascript/script27-1.js)

### 20201027

1. [swiper slide 갯수에따라 touchmove 되게할지 말게할지 정의](https://hyungju-lee.github.io/daily-issue/javascript/script28.js)

    * 특정옵션보다 swiper-no-swiping 클래스를 활용하는 것이 좋다. 이에 대한 옵션은 noSwiping 이 있다.
    * 처음엔 destroy() 메서드를 활용하려고 했다. 하지만 이는 swiper 자체가 적용이안돼서 그를 방지해 css를 추가적으로 줘야되는 단점이 있다.  
      그리고 현재 사용하는 스와이퍼 라이브러리 버전이 옛날꺼라 그런진 모르겠으나 에러메시지도 뜬다. (기능엔 문제없지만)
    * 그래서 위와 같은 방법으로 바꿨다.
    
### 20201029

1. [이벤트위임 및 data- 속성사용, if문 대신 삼항연산자 사용](https://hyungju-lee.github.io/daily-issue/javascript/script29.js)

### 20201102

1. [숫자 촤르르르르르륵 움직이는 인터렉션](https://hyungju-lee.github.io/daily-issue/javascript/script30.js)

    * Math.random() 난수생성
    * reverse()로 배열 반전
    
2. [숫자 촤르르르르르륵 움직이는 인터렉션2](https://hyungju-lee.github.io/daily-issue/javascript/script31.js)

    * transition-duration 소숫점 - IE에서 삐뚤빼뚤. 정확한 시간계산이안되니 덜가거나이래서 그런듯. 딱 떨어지는 정수줘!! Math.round()

### 20201104

1. [스와이퍼 페이지네이션 custom 모드](https://hyungju-lee.github.io/daily-issue/html/ex12/)

    * 웹스톰에 꼭 해당 라이브러리 등록해서 작업해! 진짜 메서드, 프로퍼티 다 뜨네. 넘나 편한것
    
### 20201106

1. [전체동의 여러개 같이있을 때 개별로 인식못해서 생기는 오류해결](https://hyungju-lee.github.io/daily-issue/html/ex13/)

    * 변수에 이전 클릭했던 target 값을 담고, 그 후에 비교 -> 다르면 갱신 -> 같으면 그냥 진행
    
### 20201107

1. [swiper 2개 연동 - 2016년 이전버전 기준으로 작업한거라 API 이름이 좀 다름. 최신꺼쓰면 최신꺼에 맞춰 수정 ㄱㄱ](https://hyungju-lee.github.io/daily-issue/html/ex14/)
2. [삼항연산자 사용](https://hyungju-lee.github.io/daily-issue/html/ex15/)

### 20201109

1. [swiper 2개 연동 - 사파리 이슈 해결, 하지만 손가락 두개 터치할때 이슈는 아직 미해결](https://hyungju-lee.github.io/daily-issue/html/ex16/)
2. [swiper 2개 연동 - 스와이프 될 때마다 텍스트 변환](https://hyungju-lee.github.io/daily-issue/html/ex17/)
3. [유효성 체크 체크박스 없는 경우 대비](https://hyungju-lee.github.io/daily-issue/html/ex18/)

### 20201111

1. [swiper 2개 연동 - 스와이프 될 때마다 텍스트 변환 - 모든 버튼 텍스트가 변환되는 이슈 해결](https://hyungju-lee.github.io/daily-issue/html/ex19/)
2. [아코디언 현상태 유지하도록 수정 - 다른 아코디언 눌러도 펼쳐져있는 아코디언은 펼쳐져있는대로 유지](https://hyungju-lee.github.io/daily-issue/html/ex20/)

### 20201113

1. [swiper 클래스 on/off 될때 update해서 autoheight 되도록하기](https://hyungju-lee.github.io/daily-issue/html/ex21/)
2. [위 코드 토글버튼 common 화](https://hyungju-lee.github.io/daily-issue/html/ex22/)
3. [개발하다보면 볼륨이커서 컨트롤하기 어려워서그런지 코드실행을 제어하기 어려운 경우가 있다고한다. 이때를 위해 reInit() 함수를 작성한다.](https://hyungju-lee.github.io/daily-issue/html/ex23/)
4. [swiper destroy를 위한 reInit() 함수 작성법](https://hyungju-lee.github.io/daily-issue/html/ex24/)

5. Lazy loading swiper destroy 할 때 Uncaught ~~ params 에러 대처방법

    * [참고링크](https://github.com/nolimits4web/Swiper/issues/2038)
        
        * Ok, swiper.destroy(false); helps https://jsfiddle.net/j9k0xtqo/43/
        
### 20201115

1. [dropdown list add, remove / jQuery createElement](https://hyungju-lee.github.io/daily-issue/html/ex25/)
2. [checkbox max length](https://hyungju-lee.github.io/daily-issue/html/ex29/)
3. [input checkbox prop checked -> true / false 이거 css 랜더링 생각해야됨 requestAnimationFrame](https://hyungju-lee.github.io/daily-issue/html/ex26/)    
4. [input validator IE 오류 수정](https://hyungju-lee.github.io/daily-issue/html/ex27/)

    * input checkbox interaction 구현할 때는 IE 꼭 확인하자. 그리고 css 랜더링도 생각하자.

5. [swiper, defParams 의 swiperObject에 정의한걸 this로 수정, 다른데서도 쓸 수 있게](https://hyungju-lee.github.io/daily-issue/html/ex28/)

### 20201116

1. [드롭다운박스 구현 및 수정](https://hyungju-lee.github.io/daily-issue/html/ex30/)

    * 다른곳 클릭했을 때 드롭다운 박스 닫히도록
    * while 문 돌려서 드롭다운 박스 영역 클릭했는지 아닌지 판단
    
2. [드롭다운박스 body 클릭해서 닫힐 때 무한반복문 실행 이슈](https://hyungju-lee.github.io/daily-issue/html/ex31/)

    * 동적으로 생성된 리스트가 아예 없어지는 경우가 있는데, 없어지면서 반복문으로 해당 요소값을 못읽으니까 계속 무한반복문 실행. 이 부분 주의하자.
    
3.  swiper slide flickering in safari - 이슈 

    * 사파리에서는 스 와이프 애니메이션이 종료 될 때 잠시 깜박입니다. 
    * 이것은 매우 성가신 경험을 초래할 수 있습니다. 
    * 비슷한 문제 ([#3124](https://github.com/nolimits4web/swiper/issues/3124))가 "오래된"플래그로 표시된 것을 발견했습니다.  
      하드웨어와 관련된 것 같습니다.

4. swiper slide flickering in safari - 이슈 해결방법

    * [참고 자료](https://github.com/nolimits4web/swiper/issues/3527)
    * `.swiper-slide` 클래스에 `-webkit-transform: translate3d(0,0,0)` 를 추가합니다.
    * `-webkit-` 접두사는 수정이 `Safari`에서만 유효 함을 보장합니다.
    * 이상하게도이 클래스에 추가 된 3D 변환은 전환이 덜 부드러워 보이기 때문에 하드웨어 가속을 비활성화하는 것 같습니다 (인상 일 수 있음).
    
5. dropdown 버튼, body 태그 영역 클릭했을 때 닫히게했는데, dropdown의 경우의 수가 많다보니, 그리고 모든 페이지에..(dropdown 있는 페이지가 아닌데도)  
   body 클릭 이벤트가 걸리다보니 예기치못한 오류 발생 및 쓸데없는 이벤트 발생한다.  
   즉, 다른곳 클릭했을 때 dropdown 닫히도록하는건, popup 딤드 원리 이용하자.  
   투명 얇은 막을 깐 후 투명 얇은 막 클릭시 드롭다운 닫히도록하자!!
   
6. [`switch` 문은 `if`문과 달라서 평가값이 `truthy`, `falsy`가 아닌 `true`, `false`여야 한다.](https://hyungju-lee.github.io/daily-issue/html/ex32/)

### 20201117

1. [reInit 이후 main swiper 텝 클릭 안되는 이슈](https://hyungju-lee.github.io/daily-issue/html/ex33/)

    * tab 메뉴클릭했을 때 가리키는 스와이퍼 개체 -> 스와이퍼 개체 담는 곳 수정했는데 이부분은 수정안해서 스와이퍼 개체를 못찾아서 발생한 이슈
    
2. [while 반복문에 의한, 내가 클릭한게 어떤건지 걸러내는 함수에 의해 발생한 에러](https://hyungju-lee.github.io/daily-issue/html/ex34/)

    * 반복문 처리 제대로안함. 그리고 null 값 담겼을 때 함수 실행 막아야되는데 그것도 처리안했음.. 이 부분 수정
    
3. 개발서버에 스와이퍼가 서로 다 연동되던 이슈 - pagination : pagination을 swiper-container 바깥으로 빼고 적용함 개발에서..

    * 마크업에서 준대로 했다면 에러 안났었을듯.. 왜 자기들 마음대로 적용하는지!?!?!?
    
### 20201118

1. [swiper 적용된 slide의 각 slide를 텝메뉴화 시켰을 때, 클릭 이벤트가 발생 안하던 이슈 해결](https://hyungju-lee.github.io/daily-issue/html/ex35/)

    * 처음에 `onClick`, `onTap` 두개의 이벤트를 동시에 걸었던 이유도 **click**인식이 안될 때가 있었기 때문  
      하지만 위와 같이 했음에도 불구하고 해당 이슈는 해결되지 않았음
    * `onTouchStart` 이벤트로 하면 바로바로 인식하긴하지만 터치하자마자 인식되어서 **click 하려던게 아니었는데도 슬라이드가 이동되는 부작용 발생**
    * `touchstart`, `touchend`의 `clientX` 값을 읽어 **20px 미만 이동했으면 텝메뉴에 따른 슬라이드 이동을하게 함** <- 이런식으로 해결
    
2. JS 공통(common)기능 만들 때 확실한 분기방법을 고려하자. `data-` 속성 또는 확실히 분기된 `class`명칭 등등!!! 최대한 고려하면서 작성하자!!!!

### 20201119

1. [iOS 처음 클릭 이벤트 실행안되는 이슈 해결방법 - 편법](https://hyungju-lee.github.io/daily-issue/html/ex36/)

    * jQuery에서 touch 이벤트시 좌표값 읽어오는 방법이 위 코드에 담겨있음
    
### 20201124

1. [swiper 두개 슬라이드 연동 및 네비게이션 버튼 애니메이션 코드 예시](https://hyungju-lee.github.io/daily-issue/html/ex37/)

### 20201125

* 스와이퍼 플러그인

    * hideOnClick 옵션 - 스와이퍼 컨테이너를 클릭할 때마다 네비게이션 or 페이지네이션에 hiddenClass (디폴트 값은 swiper-button-hidden)을 추가/제거
    
---

* 그런데 문제

    * 윈도우 PC 크롬 모바일 화면에서 확인할 경우
    * touchEvent 와 mouseEvent 가 둘 다 발생하면서 콜백 함수가 두번 실행
    * 이는 스와이퍼의 Tap, Click 이벤트에서도 동일하게 발생
    
    * 그래서 디바운싱 개념을 도입해 50ms 안에 이벤트가 연달아 발생할 경우 앞의 콜백펑션을 취소하도록 설계
    
---

* 추가 정보

    * init에서 페이지네이션, 네비게이션 등의 스타일을 조정할 때, 아직 페이지가 그려지기 전이라 에러가 남
    * 그래서 `requestAnimationFrame` 함수로 CSS 렌더링 이후 스타일이 적용되도록 해야됨
    
    * 하지만 클래스명으로 제어하는 걸로 수정해서 `requestAnimationFrame` 함수 안 써도 됨
    
---

1. [위에 것들 적용된 예시](https://hyungju-lee.github.io/daily-issue/html/ex38/)

---

1. [select option 선택 jquery 사용해서 변경하기](https://hyungju-lee.github.io/daily-issue/html/ex39/)
2. [select option 선택 javascript 사용해서 변경하기](https://hyungju-lee.github.io/daily-issue/html/ex40/)

### 20201130

1. [위에 스와이퍼 safari에서 이슈 - flex이슈](https://hyungju-lee.github.io/daily-issue/html/ex41/)

    * 사파리에선 부모영역이 flex로 늘어나고 그 안에 자식요소에 height:100% 를 한다고해서 그 부모의 height 값을 물려받는 것이 아닌거 같다.
    * 부모의 height 값을 물려받는 줄 알고 height:100% 를 선언했지만 그보다 훨씬 큰 영역을 물려받았다.
    * 아마 그 flex로 늘어난 부모의 부모, display:flex 속성을 가지고 있는 그 영역의 height를 물려받는 것 같다.
    * 즉 다시 그 flex로 늘어지는 요소에도 display:flex 속성을 주고 그 안의 자식요소에도 flex: 1 1 auto 같은 것으로 알맞게 늘어나도록 설정해야된다.
    * 이 부분 해결 및 네비게이션과 페이지네이션을 클릭/터치했을 땐 안사라지도록 설정했다.
    
### 20201202

1. [슬라이드 두개 연결](https://hyungju-lee.github.io/daily-issue/html/ex42/)

    * thumbs 옵션사용하면 편하지만, 스와이퍼 옛날 버전이라 해당 옵션을 지원하지 않음
    * thumbs 옵션은 4.4.0 버전 이상부터 지원하는 거 같음
    * `offsetLeft`와 `getBoundingClientRect` 등등 사용
    
2. [PC 버전 생각 안하고, 그리고 무조건 innderWidth로 가정하고 짠거 수정.. 생각이 짧았음](https://hyungju-lee.github.io/daily-issue/html/ex43/)
3. [인덱스 마지막과 마지막에서 두번째 고려 및 여백값 순서가 어디서 꼬인거같은데 잘못가지고오는 이슈 수정](https://hyungju-lee.github.io/daily-issue/html/ex44/)