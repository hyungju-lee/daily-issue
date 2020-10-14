(function (win, $, doc) {
    'use strict';
    win.HYFRESH = win.HYFRESH || {};

    var UTIL = win.HYFRESH.common.util,
        pluginName = 'inputGroup';

    win.HYFRESH[pluginName] = function (container, args) {
        var defParams = {
            inputGroup : '.js-input-group',
            input : '.inp',
            legnthOpts: 'data-maxlength',
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
            this.inputGroup     = this.obj.find(this.opts.inputGroup);
        },
        initLayout : function () {
            
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
            this.inputGroup.on(this.changeEvents('focus keyup keypress click propertychange change paste input'),  $.proxy(this.onFocusFunc, this));
        },
        onFocusFunc : function (e) {
            e.preventDefault();
            var target                = $(e.currentTarget);
          
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
        $('.js-input-group').inputGroup();
    });
})(window, window.jQuery, window.document);
