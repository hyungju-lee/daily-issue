(function (win, $) {
    'use strict';
    win.HYFRESH = win.HYFRESH || {};
    win.HYFRESH['pageReposition'] = win.HYFRESH['pageReposition'] || [];
    var hasOwnProperty = Object.prototype.hasOwnProperty;

    win.HYFRESH.common = (function(){
        return {
            util: {
                def : function (org, src) {
                    for (var prop in src) {
                       if (!hasOwnProperty.call(src, prop)) continue;
                       if ('object' === $.type(org[prop])) {
                           org[prop] = ('array' === $.type(org[prop])) ? src[prop].slice(0) : this.def(org[prop], src[prop]);
                       } else {
                           org[prop] = src[prop];
                       }
                    }
                    return org;
                 },
                isSupportTransform : (function () {
                    return ('WebkitTransform' in window.document.body.style || 'MozTransform' in window.document.body.style || 'msTransform' in window.document.body.style || 'OTransform' in window.document.body.style || 'transform' in window.document.body.style);
                })(),
            },
            pageReposition : function () {
                var instance = win.HYFRESH['pageReposition'];
                for (var i = 0, max = instance.length; i < max; i++) {
                    instance[i].reInit();
                }
            },
        }
    })();
})(window, window.jQuery);