(function (win, $) {
   'use strict';
    win.HYFRESH.common = win.HYFRESH.common || {};

    var UTIL = win.HYFRESH.common.util;
    win.HYFRESH.myPage = (function(container){
        var defParams = {
            obj             : container,
            mypageSwiper    : '.mypage_slide .swiper-container',
            mypageSwiperOpts: {
                loop                : true,
                pagination          : '.swiper-pagination',
                paginationClickable : true,
                autoHeight          : true,
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
                this.mypageSwiper  = $(defParams.mypageSwiper);
            },
            buildSwiper : function() {
                defParams.mypageSwiperObj = new Swiper(this.mypageSwiper, defParams.mypageSwiperOpts);
            },
        }
    })('.wrap-mypage')

    $(function () {
        if ($('.wrap-mypage').length) {
            HYFRESH.myPage.init();
        }
    });
})(window, window.jQuery);
