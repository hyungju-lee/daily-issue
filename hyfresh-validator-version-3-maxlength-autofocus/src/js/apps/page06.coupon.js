(function (win, $) {
   'use strict';
    win.HYFRESH.common = win.HYFRESH.common || {};

    var UTIL = win.HYFRESH.common.util;
    win.HYFRESH.myPageCoupon = (function(container){
        var defParams = {
            obj             : container,
            couponSwiper    : '.swiper-container',
            couponSwiperOpts: {
                slidesPerView       : 'auto',
                spaceBetween        : 0,
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
        };
        return {
            init: function() {
                this.setElement();
                this.buildSwiper();
            },
            setElement : function() {
                this.couponSwiper  = $(defParams.couponSwiper);
            },
            buildSwiper : function() {
                defParams.couponSwiperObj = new Swiper(this.couponSwiper, defParams.couponSwiperOpts);
            },
        }
    })('.wrap-mypage')

    $(function () {
        if ($('.wrap-coupon').length) {
            HYFRESH.myPageCoupon.init();
        }
    });
})(window, window.jQuery);
