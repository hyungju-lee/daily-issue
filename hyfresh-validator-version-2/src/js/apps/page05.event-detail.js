(function (win, $) {
   'use strict';
    win.HYFRESH.common = win.HYFRESH.common || {};

    var UTIL = win.HYFRESH.common.util;
    win.HYFRESH.event = (function(container){
        var defParams = {
            obj                     : container,
            expandClass: 'is-expanded',
            expandText: ['상세정보 보기', '상세정보 접기'],
            recommendSwiper         : '.recommend-slide',
            recommendSwiperOpts     : {
                slidesPerView       : 'auto',
                spaceBetween        : 9,
                observer            : true,
                observeParents      : true,
            },

            ongoingSwiper           : '.event-ongoing__slide',
            ongoingSwiperOpts       : {
                slidesPerView       : 'auto',
                spaceBetween        : 9,
                pagination          : '.swiper-pagination',
                paginationClickable : true,
                preloadImages       : false,
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
                observer            : true,
                observeParents      : true,
                onPaginationRendered: function(swiperClass, paginationEl) {
                    var bullet = $(paginationEl).find('.swiper-pagination-bullet');
                    for (var i=0; i<bullet.length; i++) {
                        bullet[i].innerText = 'slide' + (i + 1);
                    }
                }
            },
            photoSwiper: '.photo-slide',
            photoSwiperOpts : {
                slidesPerView: 'auto',
                spaceBetween : 9,
            },
        };
        return {
            init: function() {
                this.setElement();
                this.bindEvents();
                this.buildSwiper();
            },
            setElement : function() {
                this.obj             = $(defParams.obj);
                this.recommendSwiper = this.obj.find(defParams.recommendSwiper);
                this.ongoingSwiper   = this.obj.find(defParams.ongoingSwiper);
                this.testerSwiper    = this.obj.find(defParams.testerSwiper);
                this.photoSwiper     = this.obj.find(defParams.photoSwiper);
                this.productDetail           = this.obj.find('.product-detail');
                this.btnProductDetail        = this.productDetail.find('.product-detail__btn');
            },
            bindEvents: function() {
                this.btnProductDetail.on('click', $.proxy(this.toggleProductDetail, this));
            },
            buildSwiper : function() {
                this.recommendSwiperObj = new Swiper(this.recommendSwiper, defParams.recommendSwiperOpts);
                this.ongoingSwiperObj   = new Swiper(this.ongoingSwiper, defParams.ongoingSwiperOpts);
                this.testerSwiperObj    = new Swiper(this.testerSwiper, defParams.testerSwiperOpts);
                this.photoSwiperObj     = new Swiper(this.photoSwiper, defParams.photoSwiperOpts);
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
        }
    })('.wrap-event')

    $(function () {
        if ($('.wrap-event').length) {
            HYFRESH.event.init();
        }
    });
})(window, window.jQuery);
