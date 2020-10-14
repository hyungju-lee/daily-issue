(function (win, $) {
   'use strict';
    win.HYFRESH.common = win.HYFRESH.common || {};

    var UTIL = win.HYFRESH.common.util;
    win.HYFRESH.new = (function(container){
        var defParams = {
            obj                     : container,

            newMarketingBanner      : '.new-marketing-banner',
            newMarketingBannerOpts: {
                slidesPerView       : 'auto',
                spaceBetween        : 9,
                speed               : 300,
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
        };
        return {
            init: function() {
                this.setElement();
                this.bindEvents();
                this.buildSwiper();
            },
            setElement : function() {
                this.obj                      = $(defParams.obj);
                this.newMarketingBanner       = this.obj.find(defParams.newMarketingBanner);
            },
            bindEvents: function() {
            },
            buildSwiper : function() {
                defParams.newMarketingBannerObj       = new Swiper(this.newMarketingBanner, defParams.newMarketingBannerOpts);
            },
        }
    })('.wrap-new')

    $(function () {
        if ($('.wrap-new').length) {
            HYFRESH.new.init();
        }
    });
})(window, window.jQuery);