// <div class="common-layer common-layer--full" id="review-layer" style="display:none;">
//     <div class="common-layer__dimmed"></div>
//     <div class="common-layer__wrapper">
//         <div class="common-layer__inner" role="dialog">
//             <div class="common-layer__header">
//                 <h1 class="blind">리뷰 작성</h1>
//             </div>
//             <div class="common-layer__content">
//                 <div class="review-layer-section">
//                     <h2 class="review-layer-section__title"><em class="text-point">박보검</em>님<br>사용해보신 제품은 어떠셨나요?</h2>
//                     <div class="rating-wrap js-rating-wrap">
//                         <strong class="rating-wrap__title">상품은 만족하셨나요?</strong>
//                         <span class="star">
//                             <span class="rating js-rating" data-score="5" style="width:100%"></span>
//                             <span class="value"><span class="score js-score">5.0</span> <span class="sub-value js-sub-value">(최고예요!)</span></span>
//                         </span>
//                         <button type="button" class="rating-wrap__btn rating-wrap__btn--minus js-rating-btn-minus"><span class="blind">별점내리기</span></button>
//                         <button type="button" class="rating-wrap__btn rating-wrap__btn--plus js-rating-btn-plus"><span class="blind">별점올리기</span></button>
//                     </div>
//                     <div class="textarea-wrap textarea-wrap--small">
//                         <label for="textarea" class="label">한 줄 소개</label>
//                         <textarea id="textarea" cols="30" rows="10"  placeholder="상품에 대한 한 줄 소개를 입력해주세요." class="textarea"></textarea>
//                         <span class="value"><span class="count">25 </span>/ 100</span>
//                     </div>
//                     <div class="textarea-wrap">
//                         <label for="textarea2" class="label">상품리뷰작성폼</label>
//                         <textarea id="textarea2" cols="30" rows="10"  placeholder="상품에 대한 사용 후기를 입력해 주세요." class="textarea"></textarea>
//                         <span class="value"><span class="count">25 </span>/ 1,000</span>
//                     </div>
//                     <div class="input-file-wrap">
//                         <input type="file" id="file" name="file" class="inp">
//                             <label for="file" class="label">사진 첨부하기</label>
//                             <!-- 첨부한 사진 영역 -->
//                             <ul class="input-file__list">
//                                 <li class="input-file__item">
//                                     <img src="../img/@tmp/@tmp_review.png" alt="">
//                                         <button type="button" class="input-file__btn-delete">첨부파일 삭제</button>
//                                 </li>
//                                 <li class="input-file__item">
//                                     <img src="../img/@tmp/@tmp_review.png" alt="">
//                                         <button type="button" class="input-file__btn-delete">첨부파일 삭제</button>
//                                 </li>
//                                 <li class="input-file__item">
//                                     <img src="../img/@tmp/@tmp_review.png" alt="">
//                                         <button type="button" class="input-file__btn-delete">첨부파일 삭제</button>
//                                 </li>
//                                 <li class="input-file__item">
//                                     <img src="../img/@tmp/@tmp_review.png" alt="">
//                                         <button type="button" class="input-file__btn-delete">첨부파일 삭제</button>
//                                 </li>
//                             </ul>
//                     </div>
//                 </div>
//             </div>
//             <div class="common-layer__btn-wrap">
//                 <button type="button" class="common-layer__btn common-layer__btn--cancel">취소</button>
//                 <button type="submit" class="common-layer__btn">리뷰 등록</button>
//             </div>
//             <div class="common-layer__box-btn-close">
//                 <button type="button" class="common-layer__btn-close">팝업 닫기</button>
//             </div>
//         </div>
//     </div>
// </div>


(function (win, $) {
    "use strict";
    win.HYFRESH = win.HYFRESH || {};

    var UTIL = win.HYFRESH.common.util,
        pluginName = 'validator';

    win.HYFRESH[pluginName] = function (container, args) {
        var defParams = {
            input: '.inp',
            textInput: '.inp[type=text]',
            formValidator: '[data-validator-form="true"]'
        };
        this.obj = container;
        this.opts = UTIL.def(defParams, (args || {}));
        this.init();
    };

    win.HYFRESH[pluginName].prototype = {
        init : function () {
            this.setElements();
            this.bindEvents();
        },
        setElements : function () {
            this.input = $(this.opts.input);
            this.textInput = $(this.opts.textInput);
            this.formValidator = $(this.opts.formValidator);
        },
        changeEvents : function (event) {
            var events = [],
                eventNames = event.split(' ');
            for (var key in eventNames) {
                events.push(eventNames[key] + this.opts.customEvent);
            }
            return events.join(' ');
        },
        bindEvents : function () {
            this.textInput.on("keyup keypress", $.proxy(this.validatorPhoneNum, this))
            this.formValidator.on("keyup keypress click propertychange change paste input", this.opts.input, $.proxy(this.validatorForm, this))
        },
        validatorPhoneNum: function (e) {
            if (!$(e.currentTarget).data("validatorPhone")) return;
            var phone = $(e.currentTarget);
            var phoneVal = phone.val();
            var phoneTrim = phoneVal.replace(/[^0-9]/g, '');
            var thLeng = phoneTrim.length;
            switch (true) {
                case (thLeng < 4) :
                    phone.val(phoneTrim);
                    break;
                case (thLeng >= 4 && thLeng < 6) :
                    var phoneHyphen = phoneTrim.substr(0, 3) + '-';
                    phoneHyphen += phoneTrim.substr(3);
                    phone.val(phoneHyphen);
                    break;
                case (thLeng > 6 && thLeng < 11) :
                    var phoneHyphen = phoneTrim.substr(0, 3) + '-';
                    phoneHyphen += phoneTrim.substr(3, 3) + '-';
                    phoneHyphen += phoneTrim.substr(6);
                    phone.val(phoneHyphen);
                    break;
                case (thLeng >= 11 && thLeng < 12) :
                    var phoneHyphen = phoneTrim.substr(0, 3) + '-';
                    phoneHyphen += phoneTrim.substr(3, 4) + '-';
                    phoneHyphen += phoneTrim.substr(7);
                    phone.val(phoneHyphen);
                    break;
                case (thLeng >= 12) :
                    var phoneHyphen = phoneTrim.substr(0, 4) + '-';
                    phoneHyphen += phoneTrim.substr(4, 4) + '-';
                    phoneHyphen += phoneTrim.substr(8);
                    phone.val(phoneHyphen);
                    break
                default :
                    break;
            }
        },
        validatorForm: function () {
            var textInputVali = true;
            var allCheckoBox = true;
            this.formValidator.find('input[type=text]').each(function (i) {
                if (!$(this).val()) {
                    textInputVali = false;
                }
            })
            if (!this.formValidator.find('[data-validator-checkall="true"] input[type=checkbox]').prop('checked')) {
                allCheckoBox = false;
            }

            if (textInputVali && allCheckoBox) {
                this.formValidator.find('.common-layer__btn').prop('disabled', false);
            } else {
                this.formValidator.find('.common-layer__btn').prop('disabled', true);
            }
        }
    };
    $.fn[pluginName] = function (args) {
        var _this = this;
        new win.HYFRESH[pluginName](_this, args);
    };
    $(function () {
        $('.common-layer').validator();
    });
})(window, window.jQuery);
