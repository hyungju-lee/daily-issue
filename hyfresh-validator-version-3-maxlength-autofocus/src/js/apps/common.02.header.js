(function (win, $) {
   'use strict';
    win.HYFRESH.common = win.HYFRESH.common || {};

    var UTIL = win.HYFRESH.common.util;
    win.HYFRESH.Header = (function(){
        var defParams = {
            openClass : 'is-opened',
        };
        return {
            init : function() {
                this.setElement();
                this.bindEvents();
            },
            setElement : function() {
                this.header    = $('.header');
                this.btnHeader = this.header.find('.header__btn');
            },
            bindEvents : function() {
                $(win).on('scroll', $.proxy(this.scrollHeaderFunc, this));
                this.btnHeader.on('click', $.proxy(this.openSelectMall, this));
            },
            openSelectMall : function() {
                this.header.hasClass(defParams.openClass) ? this.header.removeClass(defParams.openClass) : this.header.addClass(defParams.openClass);
                return false;
            },
            scrollHeaderFunc : function() {
                var currentScroll = $(win).scrollTop();
                if (currentScroll > 0) {
                    this.header.removeClass(defParams.openClass);
                }
            }
        }
    })();
})(window, window.jQuery);