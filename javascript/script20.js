// <ul class="terms-agree__list js-terms-agree-wrap" data-validator-checkall="true">
//     <li class="terms-agree__item js-terms-agree-item">
//         <div class="checkbox-wrap checkbox-wrap--agree">
//             <input type="checkbox" id="checkbox" class="inp js-terms-agree-input js-terms-agree-input-all">
//                 <label for="checkbox" class="label"><span class="blind">동의하기</span></label>
//         </div>
//         <a href="#" class="terms-agree__link">아래 내용에 전체 동의합니다.</a>
//     </li>
//     <li class="terms-agree__item js-terms-agree-item">
//         <div class="checkbox-wrap checkbox-wrap--agree">
//             <input type="checkbox" id="checkbox2" class="inp js-terms-agree-input">
//                 <label for="checkbox2" class="label"><span class="blind">동의하기</span></label>
//         </div>
//         <a href="#" class="terms-agree__link">개인정보 수집 및 이용 동의<span class="text-required">(필수)</span></a>
//     </li>
//     <li class="terms-agree__item js-terms-agree-item">
//         <div class="checkbox-wrap checkbox-wrap--agree">
//             <input type="checkbox" id="checkbox3" class="inp js-terms-agree-input">
//                 <label for="checkbox3" class="label"><span class="blind">동의하기</span></label>
//         </div>
//         <a href="#" class="terms-agree__link">마케팅 정보 제3자 제공에 동의합니다.<span class="text-required">(필수)</span></a>
//     </li>
// </ul>


(function (win, $) {
    "use strict";
    win.HYFRESH = win.HYFRESH || {};

    var UTIL = win.HYFRESH.common.util,
        pluginName = 'agreeCheckbox';

    win.HYFRESH[pluginName] = function (container, args) {
        var defParams = {
            agreeWrap : '.js-terms-agree-wrap',
            agreeItem :'.js-terms-agree-item',
            agreeInputAll : '.js-terms-agree-input-all',
            agreeInput : '.js-terms-agree-input',
            checkboxWrap : '.checkbox-wrap--agree',
            label : '.label',
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
            this.agreeWrap = this.opts.agreeWrap;
            this.agreeItem = this.opts.agreeItem;
            this.agreeInputAll = this.opts.agreeInputAll;
            this.agreeInput = this.opts.agreeInput;
            this.checkboxWrap = $(this.opts.checkboxWrap);
            this.label = this.opts.label;
            this.checkboxWrapLength = 0;
        },
        bindEvents : function () {
            this.checkboxWrap.on('click', this.label, $.proxy(this.onClickFunc, this));
        },
        onClickFunc: function (e) {
            var _this = $(e.currentTarget);
            var _thisAgreeWrap = _this.parents(this.agreeWrap);
            var _thisAgreeAllTrue = _this.prev().hasClass('js-terms-agree-input-all') ? _this.prev() : false;
            var _thisSiblings = _thisAgreeAllTrue ? _this.parents(this.agreeItem).siblings().find(this.agreeInput) : false;

            if (_thisAgreeAllTrue) {
                if (_thisAgreeAllTrue.prop("checked")) {
                    _thisSiblings.prop('checked', false);
                    this.checkboxWrapLength = 0;
                } else {
                    _thisSiblings.prop('checked', true);
                    this.checkboxWrapLength = this.checkboxWrap.length - 1;
                }
            } else {
                if (_this.prev().prop("checked")) {
                    this.checkboxWrapLength -= 1;
                    _thisAgreeWrap.find(this.agreeInputAll).prop("checked", false);
                } else {
                    this.checkboxWrapLength += 1;
                    if (this.checkboxWrapLength === this.checkboxWrap.length - 1) {
                        _thisAgreeWrap.find(this.agreeInputAll).prop("checked", true);
                    }
                }
            }
        }
    };
    $.fn[pluginName] = function (args) {
        var _this = this;
        new win.HYFRESH[pluginName](_this, args);
    };

    $(function () {
        $('.js-terms-agree-wrap').agreeCheckbox();
    });
})(window, window.jQuery);
