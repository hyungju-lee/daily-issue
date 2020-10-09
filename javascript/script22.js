// <div class="dropdown js-dropdown" style="float:left;position: relative;">
//     <button type="button" class="products__control-btn products__control-btn--sort js-dropdown__btn" style="float: none">추천순</button>
//     <ul class="dropdown__list js-dropdown__list" style="display:none;position: absolute;top: 100%;left: 0;z-index: 10;background-color: #fff">
//         <li class="dropdown__item"><button type="button" class="dropdown__btn-list js-dropdown__btn-list">추천순</button></li>
//         <li class="dropdown__item"><button type="button" class="dropdown__btn-list js-dropdown__btn-list">출시일순</button></li>
//         <li class="dropdown__item"><button type="button" class="dropdown__btn-list js-dropdown__btn-list">인기상품순</button></li>
//         <li class="dropdown__item"><button type="button" class="dropdown__btn-list js-dropdown__btn-list">후기많은순</button></li>
//         <li class="dropdown__item"><button type="button" class="dropdown__btn-list js-dropdown__btn-list">낮은가격순</button></li>
//         <li class="dropdown__item"><button type="button" class="dropdown__btn-list js-dropdown__btn-list">높은가격순</button></li>
//     </ul>
// </div>

(function (win, $, doc) {
    'use strict';
    win.HYFRESH = win.HYFRESH || {};

    var UTIL = win.HYFRESH.common.util,
        pluginName = 'dropdown';

    win.HYFRESH[pluginName] = function (container, args) {
        var defParams = {
            dropdown: '.js-dropdown',
            dropdownBtn: '.js-dropdown__btn',
            dropdownContent: '.js-dropdown__list',
            dropdownContentBtn: 'js-dropdown__btn-list'
        };
        this.obj = container;
        this.opts = UTIL.def(defParams, (args || {}));
        this.init();
    };
    win.HYFRESH[pluginName].prototype = {
        init: function () {
            this.setElements();
            this.bindEvents();
        },
        setElements: function () {
            this.dropdown = $(this.opts.dropdown);
            this.dropdownBtn = $(this.opts.dropdownBtn);
            this.dropdownContent = $(this.opts.dropdownContent);
            this.dropdownContentBtn = $(this.opts.dropdownContentBtn);
            this.el = ""
            this.dropdownBtnTrue = false;
            this.dropdownTrue = false;
        },
        changeEvents: function (event) {
            var events = [],
                eventNames = event.split(' ');
            for (var key in eventNames) {
                events.push(eventNames[key] + this.opts.customEvent);
            }
            return events.join(' ');
        },
        bindEvents: function () {
            this.dropdown.on('click', $.proxy(this.whatBtnFunc, this));
        },
        whatBtnFunc : function (e) {
            this.isDropDownBtnFunc(e);
            if (!this.dropdownBtnTrue) {
                this.isDropDownContBtnFunc(e);
            }
            if (this.dropdownTrue) {
                this.dropdownBtnFunc(e);
            }
        },
        isDropDownBtnFunc : function (e) {
            this.el = e.target;
            if ($(this.el).hasClass('js-dropdown__btn')) {
                this.dropdownBtnTrue = true;
                this.dropdownTrue = true;
            } else {
                while (!$(this.el).hasClass('js-dropdown__btn')) {
                    this.el = this.el.parentElement;
                    if ($(this.el).hasClass('js-dropdown__btn')) {
                        this.dropdownBtnTrue = true;
                        this.dropdownTrue = true;
                        return;
                    } else if (this.el.nodeName  === 'BODY') {
                        this.el = null;
                        this.dropdownBtnTrue = false;
                        this.dropdownTrue = false;
                        return
                    }
                }
            }
        },
        isDropDownContBtnFunc : function (e) {
            this.el = e.target;
            if ($(this.el).hasClass('js-dropdown__btn-list')) {
                this.dropdownTrue = true;
            } else {
                while (!$(this.el).hasClass('js-dropdown__btn-list')) {
                    this.el = this.el.parentElement;
                    if ($(this.el).hasClass('js-dropdown__btn-list')) {
                        this.dropdownTrue = true;
                        return;
                    } else if (this.el.nodeName  === 'BODY') {
                        this.el = null;
                        this.dropdownTrue = false;
                        return
                    }
                }
            }
        },
        dropdownBtnFunc: function (e) {
            e.preventDefault();
            if ($(this.el).hasClass('js-dropdown__btn')) {
                if ($(this.el).next().is(':visible')) {
                    this.dropdownContent.css('display', 'none');
                } else {
                    this.dropdownContent.css('display', 'none');
                    $(this.el).next().css('display', 'block');
                }
            } else if ($(this.el).hasClass('js-dropdown__btn-list')) {
                $(this.el).parents('.js-dropdown__list').prev().text($(this.el).text());
                $(this.el).parents('.js-dropdown__list').css('display', 'none');
            }
        },
    };
    $.fn[pluginName] = function (args) {
        var _this = this;
        new win.HYFRESH[pluginName](_this, args);
    };

    $(function () {
        $('.dropdown').dropdown();
    });
})(window, window.jQuery, window.document);
