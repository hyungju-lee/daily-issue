(function (win, $) {
    'use strict';
    win.HYFRESH.common = win.HYFRESH.common || {};

    var UTIL = win.HYFRESH.common.util;
    win.HYFRESH.productDetail = (function(container){
        var defParams = {
            recommendSwiper: '.recommend-slide',
            recommendSwiperOpts : {
                slidesPerView       : 'auto',
                spaceBetween        : 9,
                pagination          : '.swiper-pagination',
                paginationClickable : true,
                observer            : true,
                observeParents      : true,
                onPaginationRendered: function(swiperClass, paginationEl) {
                    var bullet = $(paginationEl).find('.swiper-pagination-bullet');
                    for (var i=0; i<bullet.length; i++) {
                        bullet[i].innerText = 'slide' + (i + 1);
                    }
                }
            },
            testerSwiper: '.tester-review-slide',
            testerSwiperOpts : {
                slidesPerView      : 'auto',
                spaceBetween       : 15,
                pagination         : '.swiper-pagination',
                paginationClickable: true,
                observer           : true,
                observeParents     : true,
                onPaginationRendered: function(swiperClass, paginationEl) {
                    var bullet = $(paginationEl).find('.swiper-pagination-bullet');
                    for (var i=0; i<bullet.length; i++) {
                        bullet[i].innerText = 'slide' + (i + 1);
                    }
                }
            },
        };
        return {
            init: function() {
                this.setElement();
                this.bindEvents();
                this.buildSwiper();
            },
            setElement : function() {
                this.obj                     = $(defParams.obj);
                this.swiperOpts              = {
                    recommendSwiperOpts : defParams.recommendSwiperOpts,
                    testerSwiperOpts : defParams.testerSwiperOpts,
                };
                this.swiperObjs              = {},
                    this.productOverviewSwiper   = this.obj.find(defParams.productOverviewSwiper);
                this.productReviewAutoSwiper = this.obj.find(defParams.productReviewAutoSwiper);
                this.recommendSwiper         = this.obj.find(defParams.recommendSwiper);
                this.testerSwiper            = this.obj.find(defParams.testerSwiper);
                this.productDetail           = this.obj.find('.product-detail');
                this.btnProductDetail        = this.productDetail.find('.product-detail__btn');
                this.btnToggleReview         = this.obj.find('.product-review__btn-toggle');
                this.btnToggleInquiry        = this.obj.find('.inquiry__btn-toggle');
            },
            buildSwiper : function() {
                this.swiperObjs.productOverviewSwiperObj   = new Swiper(this.productOverviewSwiper, defParams.productOverviewSwiperOpts);
                this.swiperObjs.productReviewAutoSwiperObj = new Swiper(this.productReviewAutoSwiper, defParams.productReviewAutoSwiperOpts);
                this.swiperObjs.recommendSwiperObj         = new Swiper(this.recommendSwiper, defParams.recommendSwiperOpts);
                this.swiperObjs.testerSwiperObj            = new Swiper(this.testerSwiper, defParams.testerSwiperOpts);
            },
        }
    })('.wrap-product-detail')

    $(function () {
        if ($('.wrap-product-detail').length) {
            HYFRESH.productDetail.init();
        }
    });
})(window, window.jQuery);
