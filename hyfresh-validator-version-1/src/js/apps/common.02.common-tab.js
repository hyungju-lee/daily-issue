(function (win, $, doc) {
    'use strict';
    win.HYFRESH = win.HYFRESH || {};

    var UTIL = win.HYFRESH.common.util,
        pluginName = 'CommonTab';

    win.HYFRESH[pluginName] = function (container, args) {
        var defParams = {
            tabWrap : '.js-tab-wrap',
            listTab : '.js-tab-list',
            itemTab : '.js-tab-item',
            btnTab : '.js-tab-btn',
            panel : '.js-tab-panel',
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
            this.panel.hide().eq(this.opts.initIndex).show();
            this.itemTab.removeClass(this.opts.selectClass).eq(this.opts.initIndex).addClass(this.opts.selectClass);
            this.btnTab.attr(this.opts.ariaSelect, false);
            this.itemTab.eq(this.opts.initIndex).find(this.btnTab).attr(this.opts.ariaSelect, true);
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
            e.preventDefault();
            var targetParent = $(e.delegateTarget),
                targetParentIndex = targetParent.index(),
                productDetail = HYFRESH.productDetail;
            this.opts.initIndex = targetParentIndex;
            this.initLayout();
            if(this.panel.eq(targetParentIndex).find(this.swiperContainer).length) {
                if ( navigator.appName == this.opts.ieValue ) {
                    switch (true) {
                        case (this.panel.eq(targetParentIndex).find(this.swiperContainer).hasClass(this.opts.recommendSlide)):
                            productDetail.swiperObjs.recommendSwiperObj.destroy();
                            productDetail.swiperObjs.recommendSwiperObj
                                = new Swiper(productDetail.recommendSwiper, productDetail.swiperOpts.recommendSwiperOpts);
                            break;
                        case (this.panel.eq(targetParentIndex).find(this.swiperContainer).hasClass(this.opts.testerReviewSlide)):
                            productDetail.swiperObjs.testerSwiperObj.destroy();
                            productDetail.swiperObjs.testerSwiperObj
                                = new Swiper(productDetail.testerSwiper, productDetail.swiperOpts.testerSwiperOpts);
                            break;
                        default:
                            break;
                    }
                }
            }
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
        $('.js-tab-wrap').CommonTab();
    });
})(window, window.jQuery, window.document);
