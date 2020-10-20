(function (win, $, doc) {
    'use strict';
    win.HYFRESH = win.HYFRESH || {};

    var UTIL = win.HYFRESH.common.util,
        pluginName = 'toggleView';

    win.HYFRESH[pluginName] = function (container, args) {
        var defParams = {
            toggleWrap : '.js-toggle-wrap',
            toggleContents: '.js-toggle-content',
            toggleBtn : '.js-toggle-btn',
            expandClass: 'is-expanded',
            initMaxHeight: 'maxvalue',
            btnText : ['전체보기', '닫기'],
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
            this.toggleWrap = $(this.opts.toggleWrap);
            this.toggleContents = this.toggleWrap.find(this.opts.toggleContents);
            this.toggleBtn = this.toggleWrap.find(this.opts.toggleBtn);
        },
        initLayout : function () {
            var initHeight = this.toggleWrap.data(this.opts.initMaxHeight);
            if(!this.toggleWrap.hasClass(this.opts.expandClass)) {
                this.toggleWrap.removeClass(this.opts.expandClass);
                this.toggleContents.css({
                    overflow: 'hidden',
                    maxHeight: initHeight + 'rem'
                })
                if(this.toggleWrap.hasClass('toggle')) {
                    this.toggleBtn.text(this.opts.btnText[0]);
                }
            }
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
            this.toggleBtn.on(this.changeEvents('click'), $.proxy(this.onClickFunc, this));
        },
        onClickFunc : function (e) {
            e.preventDefault();
            var target = $(e.currentTarget),
                targetParentWrap = target.parents(this.opts.toggleWrap),
                targetContents = targetParentWrap.find(this.opts.toggleContents),
                initHeight = targetParentWrap.data(this.opts.initMaxHeight);
            if(targetParentWrap.hasClass(this.opts.expandClass)) {
                this.toggleWrap.removeClass(this.opts.expandClass);
                this.toggleContents.css({
                    overflow: 'hidden',
                    maxHeight: initHeight + 'rem'
                })
                if(this.toggleWrap.hasClass('toggle')) {
                    this.toggleBtn.text(this.opts.btnText[0]);
                }
            } else {
                targetParentWrap.addClass(this.opts.expandClass);
                targetContents.attr('style', '');
                if(targetParentWrap.hasClass('toggle')) {
                    this.toggleBtn.text(this.opts.btnText[1]);
                }
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
        $('.js-toggle-wrap').toggleView();
    });
})(window, window.jQuery, window.document);
