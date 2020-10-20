(function (win, $, doc) {
    'use strict';
    win.HYFRESH = win.HYFRESH || {};

    var UTIL = win.HYFRESH.common.util,
        pluginName = 'removeHistory';

    win.HYFRESH[pluginName] = function (container, args) {
        var defParams = {
            removeWrap : '.js-remove-history-wrap',
            removeBtn : '.js-remove-history-btn',
            removeBtnAll : '.js-remove-history-btn-all',
            removeContent: '.js-remove-history-content',
            noDataWrap : '.no-data-wrap',
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
            this.removeWrap = $(this.opts.removeWrap);
            this.removeBtn = this.removeWrap.find(this.opts.removeBtn);
            this.removeBtnAll = this.removeWrap.find(this.opts.removeBtnAll);
            this.removeContent = this.removeWrap.find(this.opts.removeContent);
            this.noDataWrap = $(this.opts.noDataWrap);
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
            this.removeBtn.on(this.changeEvents('click'), $.proxy(this.onClickFunc, this));
            this.removeBtnAll.on(this.changeEvents('click'), $.proxy(this.onClickFunc, this));
        },
        onClickFunc : function (e) {
            e.preventDefault();
            var target = $(e.currentTarget),
            targetParentContent = target.parents(this.opts.removeContent),
            targetParentWrap = target.parents(this.opts.removeWrap);
            targetParentContent.remove();
            if(target.hasClass('js-remove-history-btn-all')) {
                this.removeAllContents(targetParentWrap);
                console.log('?')
            }
            if(targetParentWrap.find(this.opts.removeContent).length == 0) {
                this.removeAllContents(targetParentWrap);
                console.log('!')
            }
        },
        removeAllContents : function(_parentWrap) {
            if(_parentWrap.parents('.content').find('.page-header').length) {
                $('.page-header').remove();
            }
            _parentWrap.remove();
            this.noDataWrap.show();
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
        $('.js-remove-history-wrap').removeHistory();
    });
})(window, window.jQuery, window.document);
