(function (win, $) {
   'use strict';
    win.HYFRESH.common = win.HYFRESH.common || {};

    var UTIL = win.HYFRESH.common.util;
    win.HYFRESH.Navigation = (function(){
        var defParams = {
            hideClass    : 'is-hide',
            lastScrollTop: 0
        };
        return {
            init : function() {
                this.setElement();
                this.initLayout();
                this.bindEvents();
            },
            setElement : function() {
                this.navigation = $('.navigation');
            },
            initLayout : function() {
                this.navigation.removeClass(defParams.hideClass);
            },
            bindEvents : function() {
                $(win).on('load', $.proxy(this.initLayout, this));
                $(win).on('scroll', $.proxy(this.scrollNavigationFunc, this));
            },
            scrollNavigationFunc : function(e){
                var currentScroll = $(win).scrollTop(),
                    bottom        = document.body.scrollHeight - innerHeight,
                    move          = currentScroll - defParams.lastScrollTop;
                if (move < 0) {
                    if (currentScroll <= 0) return
                    this.navigation.removeClass(defParams.hideClass);
                } else {
                if (move > 0) {
                    if (currentScroll >= bottom) return
                        this.navigation.addClass(defParams.hideClass);
                    }
                }
                defParams.lastScrollTop = currentScroll;
            }
        }
    })();
})(window, window.jQuery);