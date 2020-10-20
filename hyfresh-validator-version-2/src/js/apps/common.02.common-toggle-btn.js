(function (win, $, doc) {
    'use strict';
    win.HYFRESH = win.HYFRESH || {};

    var UTIL = win.HYFRESH.common.util,
        pluginName = 'ToggleBtn';

    win.HYFRESH[pluginName] = function (container, args) {
        var defParams = {
            btnToggleWrap : '.js-btn-toggle-wrap',
            btnToggle  : '.js-btn-toggle',
            activeClass: 'is-active',
            customEvent : '.' + pluginName + (new Date()).getTime()
        };
        this.obj = container;
        this.opts = UTIL.def(defParams, (args || {}));
        this.init();
    };
    win.HYFRESH[pluginName].prototype = {
        init : function () {
            this.setElements();
            this.bindEvents();
        },
        setElements : function () {
            this.btnToggleWrap = $(this.opts.btnToggleWrap);
            this.btnToggle     = this.btnToggleWrap.find(this.opts.btnToggle);
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
            this.btnToggle.on('click', $.proxy(this.onClickFunc, this));
        },
        onClickFunc : function (e) {
            e.preventDefault();
            var target       = $(e.currentTarget),
                targetParent = target.parent();
            targetParent.toggleClass(this.opts.activeClass);
        },
    };
    $.fn[pluginName] = function (args) {
        var _this = this;
        new win.HYFRESH[pluginName](_this, args);
    };

    $(function () {
        $('.js-btn-toggle-wrap').ToggleBtn();
    });
})(window, window.jQuery, window.document);
