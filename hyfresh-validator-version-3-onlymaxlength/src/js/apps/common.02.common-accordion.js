(function (win, $, doc) {
    'use strict';
    win.HYFRESH = win.HYFRESH || {};

    var UTIL = win.HYFRESH.common.util,
        pluginName = 'ListAccordion';

    win.HYFRESH[pluginName] = function (container, args) {
        var defParams = {
            itemBox     : '.js-accordion-item',
            btnTitle    : '.js-accordion-tab',
            listContents: '.js-accordion-content',
            expandClass : 'is-expanded',
            ariaExpanded: 'aria-expanded',
            activeIndex : null,
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
            this.itemBox     = this.obj.find(this.opts.itemBox);
            this.itemContent = this.obj.find(this.opts.listContents);
            this.btnTitle    = this.obj.find(this.opts.btnTitle);
        },
        initLayout : function () {
            var expandClass  = this.opts.expandClass,
                btnTitle     = this.opts.btnTitle,
                listContents = this.opts.listContents,
                ariaExpanded = this.opts.ariaExpanded,
                expandClass  = this.opts.expandClass;
            $.map(this.itemBox, function (value, index) {
                if ($(value).hasClass(expandClass)) {
                    if ($(value).find(btnTitle).attr(ariaExpanded) === "true") {
                        $(value).find(listContents).show();
                    } else {
                        $(value).removeClass(expandClass);
                        $(value).find(btnTitle).attr(ariaExpanded, false);
                    }
                } else {
                    $(value).find(btnTitle).attr(ariaExpanded, false);
                    $(value).find(listContents).hide();
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
            var target                = $(e.currentTarget),
                targetParent          = $(e.delegateTarget),
                clientTop             = e.currentTarget.getBoundingClientRect().top;
                this.opts.activeIndex = targetParent.index();
            if (this.oldIndex === this.opts.activeIndex) {
                targetParent.toggleClass(this.opts.expandClass);
                if(UTIL.isSupportTransform) {
                    targetParent.find(this.opts.listContents).stop().slideToggle();
                } else {
                    targetParent.find(this.opts.listContents).stop().toggle();
                }
                targetParent.hasClass(this.opts.expandClass) ? target.attr(this.opts.ariaExpanded, true): target.attr(this.opts.ariaExpanded, false);
            } else {
                this.viewExpandFunc();
            }
            this.oldIndex = this.opts.activeIndex;
            scrollTo(0, e.currentTarget.getBoundingClientRect().top + pageYOffset - clientTop);
        },
        viewExpandFunc: function() {
            this.itemBox.eq(this.oldIndex).removeClass(this.opts.expandClass);
            this.itemBox.eq(this.oldIndex).find(this.opts.listContents).hide();
            this.itemBox.eq(this.oldIndex).find(this.opts.btnTile).attr(this.opts.ariaExpanded, false);
            if(this.itemBox.eq(this.opts.activeIndex).hasClass(this.opts.expandClass)) {
                this.itemBox.eq(this.opts.activeIndex).removeClass(this.opts.expandClass);
                this.itemBox.eq(this.opts.activeIndex).find(this.opts.btnTile).attr(this.opts.ariaExpanded, false);
                if(UTIL.isSupportTransform) {
                    this.itemBox.eq(this.opts.activeIndex).find(this.opts.listContents).slideUp();
                } else {
                    this.itemBox.eq(this.activeIndex).find(this.opts.listContents).hide();
                }
            } else {
                this.itemBox.eq(this.opts.activeIndex).addClass(this.opts.expandClass);
                this.itemBox.eq(this.opts.activeIndex).find(this.opts.btnTitle).attr(this.opts.ariaExpanded, true);
                if(UTIL.isSupportTransform) {
                    this.itemBox.eq(this.opts.activeIndex).find(this.opts.listContents).slideDown();
                } else {
                    this.itemBox.eq(this.activeIndex).find(this.opts.listContents).show();
                }
            }
        }
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
