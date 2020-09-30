(function (win, $, doc) {
    'use strict';
    win.HYFRESH = win.HYFRESH || {};

    var UTIL = win.HYFRESH.common.util,
        pluginName = 'ListAccordion';

    win.HYFRESH[pluginName] = function (container, args) {
        var defParams = {
            itemBox : '.js-accordion-item',
            btnTitle : '.js-accordion-tab',
            listContents : '.js-accordion-content',
            expandClass : 'is-expanded',
            ariaExpanded: 'aria-expanded',
            customEvent : '.' + pluginName + (new Date()).getTime()
        };
        this.obj = container;
        this.opts = UTIL.def(defParams, (args || {}));
        this.init();
    };
    win.HYFRESH[pluginName].prototype = {
        init : function () {
            this.setElements();
            this.initLayout();
            this.bindEvents();
        },
        setElements : function () {
            this.itemBox = this.obj.find(this.opts.itemBox);
            this.itemContent = this.obj.find(this.opts.listContents);
            this.btnTitle = this.obj.find(this.opts.btnTitle);
        },
        initLayout : function () {
            $.map(this.itemBox, function (value, index) {
                if ($(value).hasClass('is-expanded')) {
                    if ($(value).find('.js-accordion-tab').attr('aria-expanded') === "true") {
                        $(value).find('.js-accordion-content').show();
                    } else {
                        $(value).removeClass('is-expanded');
                        $(value).find('.js-accordion-tab').attr('aria-expanded', false);
                    }
                } else {
                    $(value).find('.js-accordion-tab').attr('aria-expanded', false);
                }
            })
        },
        changeEvents : function (event) {
            var events = [],
                eventNames = event.split(' ');
            for (var key in eventNames) {
                events.push(eventNames[key] + this.opts.customEvent);
            }
            return events.join(' ');
        },
        bindEvents : function () {
            this.itemBox.on(this.changeEvents('click'), this.opts.btnTitle, $.proxy(this.onClickFunc, this));
        },
        onClickFunc : function (e) {
            e.preventDefault();
            var target = $(e.currentTarget),
                parentTarget = $(e.delegateTarget),
                targetContent = parentTarget.find(this.opts.listContents);
            if(parentTarget.hasClass(this.opts.expandClass)) {
                parentTarget.removeClass(this.opts.expandClass);
                if(UTIL.isSupportTransform) {
                    targetContent.slideUp();
                } else {
                    targetContent.hide();
                }
                target.attr(this.opts.ariaExpanded, false);
            } else {
                parentTarget.addClass(this.opts.expandClass);
                if(UTIL.isSupportTransform) {
                    targetContent.slideDown();
                } else {
                    targetContent.show();
                }
                target.attr(this.opts.ariaExpanded, true);
            }
        },

    };
    $.fn[pluginName] = function (args) {
        var _this = this;
        for (var i = 0, max = this.length; i < max; i++) {
            (function (index) {
                new win.HYFRESH[pluginName](_this.eq(index), args);
            })(i);
        }
    };

    $(function () {
        $('.js-accordion-list').ListAccordion();
    });
})(window, window.jQuery, window.document);
