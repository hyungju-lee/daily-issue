(function (win, $) {
    'use strict';
    win.HYFRESH.common = win.HYFRESH.common || {};

    var UTIL = win.HYFRESH.common.util;
    win.HYFRESH.regularDelivery = (function (container){
        var defParams = {
            obj: container,
            weeklyDeliverySwiper : '.weekly-delivery__slide',
            weeklyDeliverySwiperOpts : {
                slidesPerView      : 'auto',
                spaceBetween : 7,
                observer           : true,
                observeParents     : true,
                watchOverflow      : true,
                onInit: function (swiper) {
                    if (swiper.slides.length < 5) {
                        // swiper.destroy()
                        swiper.wrapper[0].classList.add("swiper-no-swiping");
                    }
                }
            },
        };
        return {
            init: function() {
                this.setElements();
                this.bindEvents();
                this.buildSwiper();
            },
            setElements : function() {
                this.obj = $(defParams.obj);
                this.weeklyDeliverySwiper = this.obj.find(defParams.weeklyDeliverySwiper);
            },
            bindEvents: function() {
            },
            buildSwiper : function() {
                defParams.weeklyDeliverySwiperObj = new Swiper(this.weeklyDeliverySwiper, defParams.weeklyDeliverySwiperOpts);
            },
        }
    })('.content-regular-delivery');

    $(function () {
        if ($('.content-regular-delivery').length) {
            HYFRESH.regularDelivery.init();
        }
    });
})(window, window.jQuery);
