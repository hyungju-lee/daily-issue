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