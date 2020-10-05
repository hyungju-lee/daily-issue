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
            swiperContainer : '.swiper-container',
            customEvent : '.' + pluginName + (new Date()).getTime()
        };
        this.obj = container;
        this.opts = UTIL.def(defParams, (args || {}));
        this.init();
    };
    win.HYFRESH[pluginName].prototype = {
        onClickFunc : function (e) {
            e.preventDefault();
            var targetParent = $(e.delegateTarget),
                targetParentIndex = targetParent.index(),
                productDetail = HYFRESH.productDetail;
            this.opts.initIndex = targetParentIndex;
            this.initLayout();
            if(this.panel.eq(targetParentIndex).find(this.swiperContainer).length) {
                if ( navigator.appName == "Microsoft Internet Explorer" ) {
                    switch (true) {
                        case (this.panel.eq(targetParentIndex).find(this.swiperContainer).hasClass('recommend-slide')):
                            productDetail.swiperObjs.recommendSwiperObj.destroy();
                            productDetail.swiperObjs.recommendSwiperObj
                                = new Swiper(productDetail.recommendSwiper, productDetail.swiperOpts.recommendSwiperOpts);
                            break;
                        case (this.panel.eq(targetParentIndex).find(this.swiperContainer).hasClass('tester-review-slide')):
                            productDetail.swiperObjs.testerSwiperObj.destroy();
                            productDetail.swiperObjs.testerSwiperObj
                                = new Swiper(productDetail.testerSwiper, productDetail.swiperOpts.testerSwiperOpts);
                            break;
                        default:
                            break;
                    }
                    console.log('실행')
                }
            }
            return false;
        },
    };

    $(function () {
        $('.js-tab-wrap').CommonTab();
    });
})(window, window.jQuery, window.document);
