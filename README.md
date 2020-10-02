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