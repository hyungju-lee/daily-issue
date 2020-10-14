## Common Popup Guide
### Case 1
* CTA의 data-layer-target의 값으로 해당하는 팝업의 id를 매치하여 입력한다.
```html
<a href="#" class="layer-popup-opener" data-layer-target="#common-layer">Common Popup</a>
<div class="common-layer" id="common-layer">...</div>
```


### Case 2
* 팝업이 데이터가 로딩된 후 호출되어야 하는 경우, 버튼에 is-async 클래스를 추가하여 사용한다.
```html
<a href="#" class="layer-popup-opener is-async" data-layer-target="#common-layer">Common Popup</a>
<div class="common-layer" id="common-layer">...</div>
```
* 데이터가 로딩된 후, clickCustom 이벤트를 trigger 하여 팝업을 노출한다.
```javascript
$('.layer-popup-opener.is-async').on('click', function () {
	var _this = $(this);
	_this.trigger('clickCustom');
});
```

### Case 3
* 팝업이 토글 버튼이 없이 열리거나 닫혀야 하는 경우, 해당 레이어의 id를 타겟으로 아래 trigger를 사용한다.
```javascript
//열림
$('#common-layer').trigger('openLayer');

//닫힘
$('#common-layer').trigger('closeLayer');
```
## Common Accordion Guide
* 아코디언 데이터가 동적으로 바뀐 후 아래 method를 호출한다.
```javascript
$(selector).trigger('rerun');
```
주의 : 셀렉터는 한 페이지에 같은 클래스가 여러개일수 있으므로, 해당하는 것만 rerun 되도록 유니크한 것으로 사용한다.
