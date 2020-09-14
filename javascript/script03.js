(function (win, $) {
    'use strict';
    win.HYFRESH.common = win.HYFRESH.common || {};

    var UTIL = win.HYFRESH.common.util;
    win.HYFRESH.Gnb = (function(){
        var defParams = {
            scrollClass: 'is-scroll',
            swiperOpts : {
                slidesPerView: 'auto',
                spaceBetween : 20,
                loop         : false,
                on: {
                    slideChangeTransitionStart: function () {

                        if (defParams.swiperObj.isBeginning === false) {
                            $('.js-gnb__swiper').addClass('before');
                        } else {
                            $('.js-gnb__swiper').removeClass('before');
                        }

                        if (defParams.swiperObj.isEnd === false) {
                            $('.js-gnb__swiper').addClass('after');
                        } else {
                            $('.js-gnb__swiper').removeClass('after');
                        }

                    }
                }
            },
            swiperObj: null,
            startSwiper: false,
            moveSwiper: false,
        };
        return {
            init : function() {
                this.setElement();
                this.bindEvents();
            },
            setElement : function() {
                this.header          = $('.header');
                this.gnb             = $('.gnb');
                this.containerSwiper = this.gnb.find('.js-gnb__swiper');
                this.gnbList         = this.gnb.find('.gnb__list');
                this.content         = $('.content');
            },
            bindEvents : function() {
                $(win).on('load', $.proxy(this.buildSwiper, this));
                $(win).on('load', $.proxy(this.checkContentMargin, this))
                $(win).on('scroll',  $.proxy(this.scrollGnbFunc, this));
            },
            buildSwiper : function() {
                defParams.swiperObj = new Swiper(this.containerSwiper, defParams.swiperOpts);
            },
            scrollGnbFunc : function() {
                var currentScroll = $(win).scrollTop();
                if (currentScroll <= 0) {
                    if (!defParams.startSwiper) {
                        this.gnbList.removeClass('is-scroll');
                        defParams.setSwiper = true;
                        defParams.swiperObj.destroy();
                        this.buildSwiper();
                        defParams.startSwiper = true;
                        defParams.moveSwiper = false;
                    }
                } else {
                    if (!defParams.moveSwiper) {
                        this.gnbList.addClass('is-scroll')
                        defParams.swiperObj.destroy();
                        this.buildSwiper();
                        defParams.moveSwiper = true;
                        defParams.startSwiper = false;
                    }
                }
                this.checkContentMargin();
            },
            checkContentMargin : function() {
                var headerHeight = this.header.outerHeight(),
                    gnbHeight    = this.gnb.outerHeight(),
                    result       = headerHeight + gnbHeight;
                this.content.css({
                    'padding-top': result + 'px'
                })
            }
        }
    })();
})(window, window.jQuery);
