(function (win, $) {
   'use strict';
    win.HYFRESH.common = win.HYFRESH.common || {};

    var UTIL = win.HYFRESH.common.util;
    win.HYFRESH.Gnb = (function(){
        var defParams = {
            scrollClass: 'is-scroll',
            hideClass: 'is-hide',
            detailHeaderClass: 'header--detail',
            gnbOffsetTop: '48',
            slideBeforeClass: 'has-before-slide',
            slideAfterClass: 'has-after-slide',
            gnbInner : '.gnb__inner',
            swiperOpts : {
                slidesPerView: 'auto',
                spaceBetween : 20,
                loop         : false,
                onTouchMove: function() {
                    defParams.swiperObj.isBeginning === false ? $(defParams.gnbInner).addClass(defParams.slideBeforeClass) : $(defParams.gnbInner).removeClass(defParams.slideBeforeClass);
                    defParams.swiperObj.isEnd === false ? $(defParams.gnbInner).addClass(defParams.slideAfterClass) : $(defParams.gnbInner).removeClass(defParams.slideAfterClass);
                } 
            },
            swiperObj: null,
            startSwiper: false,
            moveSwiper: false
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
                $(win).on('load', $.proxy(this.checkContentMargin, this));
                $(win).on('scroll', $.proxy(this.scrollGnbFunc, this));
            },
            buildSwiper : function() {
                defParams.swiperObj = new Swiper(this.containerSwiper, defParams.swiperOpts);
            },
            scrollGnbFunc : function() {
                var currentScroll = $(win).scrollTop();
                if(this.gnb.length) {
                    if (currentScroll <= 0) {
                      if (!defParams.startSwiper) {
                        defParams.setSwiper = true;
                        if (defParams.swiperObj) {
                          defParams.swiperObj.destroy();
                        }
                        this.buildSwiper();
                        defParams.startSwiper = true;
                        defParams.moveSwiper = false;
                      }
                    } else {
                      if (!defParams.moveSwiper) {
                        if (defParams.swiperObj) {
                          defParams.swiperObj.destroy();
                        }
                        this.buildSwiper();
                        defParams.moveSwiper = true;
                        defParams.startSwiper = false;
                      }
                    }
                    if (currentScroll > defParams.gnbOffsetTop) {
                        this.gnbList.addClass(defParams.scrollClass);
                        this.gnb.stop().animate({
                            top: 0
                        },0)
                        this.header.addClass(defParams.hideClass);
                    } else {
                        this.gnbList.removeClass(defParams.scrollClass);
                        this.gnb.stop().animate({
                            top: defParams.gnbOffsetTop
                        },0)
                        this.header.removeClass(defParams.hideClass);
                    }
                }
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