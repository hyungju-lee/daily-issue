(function (win, $) {
    'use strict';
    win.HYFRESH.common = win.HYFRESH.common || {};

    var UTIL = win.HYFRESH.common.util;

    win.HYFRESH.App = function (container, args) {
        this.init();
    };
    win.HYFRESH.App.prototype = {
        init : function () {
            win.HYFRESH.Header.init();
            win.HYFRESH.Gnb.init();
            win.HYFRESH.Navigation.init();
            win.HYFRESH.Stickywrap.init();
        },
    };

    $(function () {
        new win.HYFRESH.App();
    });
})(window, window.jQuery);
