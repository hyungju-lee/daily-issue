(function (win, $, doc) {
    'use strict';
    win.HYFRESH = win.HYFRESH || {};

    var UTIL = win.HYFRESH.common.util,
        pluginName = 'toggleBtn';

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
            this.btnToggleWrap.on('click', this.opts.btnToggle, $.proxy(this.onClickFunc, this));
            // this.btnToggle.on('click', $.proxy(this.onClickFunc, this));
        },
        onClickFunc : function (e) {
            e.preventDefault();
            $(e.currentTarget).parent().toggleClass('is-active');
        },
    };
    $.fn[pluginName] = function (args) {
        var _this = this;
        new win.HYFRESH[pluginName](_this, args);


        // for (var i = 0, max = _this.length; i < max; i++) {
        //       (function (index) {
        //         new win.HYFRESH[pluginName](_this.eq(index), args);
        //       })(i);
        //   }
    };

    $(function () {
        $('.js-btn-toggle-wrap').toggleBtn();
    });
})(window, window.jQuery, window.document);
