(function (win, $) {
   'use strict';
    win.HYFRESH.common = win.HYFRESH.common || {};

    var UTIL = win.HYFRESH.common.util;
    win.HYFRESH.productDetail = (function(container){
        var defParams = {
            obj                     : container,
            expandClass: 'is-expanded',
            expandText : ['상품정보 더보기','상품정보 접기'],
            reviewExpandText : ['펼치기', '닫기'],
            productOverviewSwiper: '.product-overview-slide',
            productOverviewSwiperOpts : {
                slidesPerView      : 'auto',
                loop               : true,
                pagination         : '.swiper-pagination',
                paginationClickable: true,
                onPaginationRendered: function(swiperClass, paginationEl) {
                    var bullet = $(paginationEl).find('.swiper-pagination-bullet');
                    for (var i=0; i<bullet.length; i++) {
                        bullet[i].innerText = 'slide' + (i + 1);
                    }
                }
            },
            productReviewAutoSwiper    : '.review-auto-slide',
            productReviewAutoSwiperOpts: {
                direction     : 'vertical',
                autoplay      : 2500,
                speed         : 1000,
                loop          : true,
                onlyExternal  : true,
                noSwiping     : true,
                observer      : true,
                observeParents: true,
            },
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
                  productReviewAutoSwiperOpts : defParams.productReviewAutoSwiperOpts,
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
            bindEvents: function() {
                this.btnProductDetail.on('click', $.proxy(this.toggleProductDetail, this));
                this.btnToggleReview.on('click', $.proxy(this.toggleReview, this));
                this.btnToggleInquiry.on('click', $.proxy(this.toggleInquiry, this));
            },
            buildSwiper : function() {
                this.swiperObjs.productOverviewSwiperObj   = new Swiper(this.productOverviewSwiper, defParams.productOverviewSwiperOpts);
                this.swiperObjs.productReviewAutoSwiperObj = new Swiper(this.productReviewAutoSwiper, defParams.productReviewAutoSwiperOpts);
                this.swiperObjs.recommendSwiperObj         = new Swiper(this.recommendSwiper, defParams.recommendSwiperOpts);
                this.swiperObjs.testerSwiperObj            = new Swiper(this.testerSwiper, defParams.testerSwiperOpts);
            },
            toggleProductDetail : function(e) {
                if(this.productDetail.hasClass(defParams.expandClass)) {
                    this.productDetail.removeClass(defParams.expandClass);
                    this.btnProductDetail.text(defParams.expandText[0]);
                } else {
                    this.productDetail.addClass(defParams.expandClass);
                    this.btnProductDetail.text(defParams.expandText[1]);
                }
                e.preventDefault();
            },
            toggleReview : function(e) {
                var target = $(e.currentTarget),
                    targetParent = target.parent('.product-review__text-wrap');
                if(targetParent.hasClass(defParams.expandClass)) {
                    targetParent.removeClass(defParams.expandClass);
                    target.find('.text').text(defParams.reviewExpandText[0]);
                } else {
                    targetParent.addClass(defParams.expandClass);
                    target.find('.text').text(defParams.reviewExpandText[1]);
                }
            },
            toggleInquiry : function(e) {
                var target = $(e.currentTarget),
                    targetParent = target.parent('.inquiry__item');
                if(targetParent.hasClass(defParams.expandClass)) {
                    targetParent.removeClass(defParams.expandClass);
                } else {
                    targetParent.addClass(defParams.expandClass);
                }
            }
        }
    })('.wrap-product-detail')

    $(function () {
        if ($('.wrap-product-detail').length) {
            HYFRESH.productDetail.init();
        }
    });
})(window, window.jQuery);
