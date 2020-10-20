(function (win, $) {
   'use strict';
    win.HYFRESH.common = win.HYFRESH.common || {};

    var UTIL = win.HYFRESH.common.util;
    win.HYFRESH.Stickywrap = (function(){
        var defParams = {
            stickyWrap : '.sticky-wrap',
            expandClass    : 'is-expanded',
            visiblePoint: 1280,
            visibleClass: 'is-show'
        };
        return {
            init : function() {
                if($(defParams.stickyWrap).length) {
                    this.setElement();
                    this.initLayout();
                    this.bindEvents();
                }
            },
            setElement : function() {
                this.stickyWrap = $(defParams.stickyWrap);
                this.flag = this.stickyWrap.find('.flag');
                this.btnFlagToggle = this.stickyWrap.find('.flag__btn-toggle');
                this.btnScrollTop = this.stickyWrap.find('.btn-top');
            },
            initLayout : function() {
                var fullWidth = $('body').innerWidth() - 30;
                if(this.flag.length) {
                    this.flag.addClass(defParams.expandClass);
                    this.flag.find('.flag__inner').css({
                        width: fullWidth + 'px'
                    })
                }
            },
            bindEvents : function() {
                $(win).on('scroll', $.proxy(this.scrollEvent, this));
                this.btnScrollTop.on('click', $.proxy(this.scrollPageTop, this));
                this.btnFlagToggle.on('click', $.proxy(this.checkTargetFlag, this));
            },
            scrollEvent : function(e){
                var currentScroll = $(win).scrollTop();
                if(currentScroll == 0) {
                    this.initLayout();
                } else {
                    this.flag.removeClass(defParams.expandClass);
                    this.flag.find('.flag__inner').attr('style', false);
                }
                if(currentScroll >= defParams.visiblePoint) {
                    this.btnScrollTop.addClass(defParams.visibleClass);
                } else {
                    this.btnScrollTop.removeClass(defParams.visibleClass);
                }
            },
            checkTargetFlag : function(e) {
                e.preventDefault();
                var target       = $(e.currentTarget),
                    targetParent = target.parent();
                if(targetParent.hasClass(defParams.expandClass)) {
                    this.targetFoldFlagFunc(e);
                } else {
                    this.targetExpandFlagFunc(e);
                }
            },
            targetExpandFlagFunc: function(e) {
                var target       = $(e.currentTarget),
                    targetParent = target.parent(),
                    fullWidth = $('body').innerWidth() - 30;
                targetParent.addClass(defParams.expandClass);
                targetParent.find('.flag__inner').css({
                    width: fullWidth + 'px'
                })
            },
            targetFoldFlagFunc: function(e) {
                var target       = $(e.currentTarget),
                targetParent = target.parent();
                targetParent.removeClass(defParams.expandClass);
                targetParent.find('.flag__inner').attr('style', false);
            },
            scrollPageTop: function(e) {
                e.preventDefault();
                $('html, body').stop()
                               .animate({
                                    scrollTop: 0
                                }, 500);
            }
        }
    })();
})(window, window.jQuery);