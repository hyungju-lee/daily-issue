(function (win, $, doc) {
    'use strict';
    win.HYFRESH = win.HYFRESH || {};

    var UTIL = win.HYFRESH.common.util,
        pluginName = 'CarouselTab';

    win.HYFRESH[pluginName] = function (container, args) {
        var defParams = {
            tabWrap : '.js-carousel-tab-wrap',
            listTab : '.js-carousel-tab-list',
            itemTab : '.js-carousel-tab-item',
            btnTab : '.js-carousel-tab-btn',
            panel : '.js-carousel-tab-panel',
            ariaSelect: 'aria-selected',
            selectClass: 'is-selected',
            initIndex: 0,
            ieValue: 'Microsoft Internet Explorer',
            swiperContainer : '.swiper-container',
            // 탭 안에 slide가 들어갈 경우 classname 추가
            recommendSlide: 'recommend-slide',
            testerReviewSlide: 'tester-review-slide',
            customEvent : '.' + pluginName + (new Date()).getTime()
        };
        this.obj = container;
        this.opts = UTIL.def(defParams, (args || {}));
        this.init();
    };
    win.HYFRESH[pluginName].prototype = {
        init : function () {
            this.setElements();
            this.initLayout();
            this.bindEvents();
        },
        setElements : function () {
            this.tabWrap = $(this.opts.tabWrap);
            this.listTab = this.tabWrap.find(this.opts.listTab);
            this.itemTab = this.tabWrap.find(this.opts.itemTab);
            this.btnTab = this.tabWrap.find(this.opts.btnTab);
            this.panel = this.tabWrap.find(this.opts.panel);
            this.swiperContainer = this.tabWrap.find(this.opts.swiperContainer);
        },
        initLayout : function () {
            this.listTab.removeClass('current-tab-1 current-tab-2 current-tab-3');
            this.listTab.addClass('current-tab-2');
            this.panel.hide().eq(1).show();
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
            this.itemTab.on(this.changeEvents('click'), this.opts.btnTab, $.proxy(this.onClickFunc, this));
        },
        onClickFunc : function (e) {
            var targetParent = $(e.delegateTarget),
                currentIndex = targetParent.index();
            this.listTab.removeClass('current-tab-1 current-tab-2 current-tab-3');
            this.listTab.addClass('current-tab-' + (currentIndex + 1))
            this.panel.hide().eq(currentIndex).show();
            return false;
        },
    };
    $.fn[pluginName] = function (args) {
        var _this = this;
        for (var i = 0, max = this.length; i < max; i++) {
            (function (index) {
                new win.HYFRESH[pluginName](_this.eq(index), args);
            })(i);
        }
    };

    $(function () {
        $('.js-carousel-tab-wrap').CarouselTab();
    });
})(window, window.jQuery, window.document);
