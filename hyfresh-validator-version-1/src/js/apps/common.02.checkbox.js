(function (win, $) {
  "use strict";
  win.HYFRESH = win.HYFRESH || {};

  var UTIL = win.HYFRESH.common.util,
    pluginName = 'agreeCheckbox';

  win.HYFRESH[pluginName] = function (container, args) {
    var defParams = {
      agreeWrap : '.js-terms-agree-wrap',
      agreeItem :'.js-terms-agree-item',
      agreeInputAll : '.js-terms-agree-input-all',
      agreeInput : '.js-terms-agree-input',
      checkboxWrap : '.checkbox-wrap--agree',
      label : '.label',
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
      this.agreeWrap = this.opts.agreeWrap;
      this.agreeItem = this.opts.agreeItem;
      this.agreeInputAll = this.opts.agreeInputAll;
      this.agreeInput = this.opts.agreeInput;
      this.checkboxWrap = $(this.opts.checkboxWrap);
      this.label = this.opts.label;
      this.checkboxWrapLength = 0;
    },
    bindEvents : function () {
      this.checkboxWrap.on('click', this.label, $.proxy(this.onClickFunc, this));
    },
    onClickFunc: function (e) {
      var _this = $(e.currentTarget);
      var _thisAgreeWrap = _this.parents(this.agreeWrap);
      var _thisAgreeAllTrue = _this.prev().hasClass('js-terms-agree-input-all') ? _this.prev() : false;
      var _thisSiblings = _thisAgreeAllTrue ? _this.parents(this.agreeItem).siblings().find(this.agreeInput) : false;

      if (_thisAgreeAllTrue) {
        if (_thisAgreeAllTrue.prop("checked")) {
          _thisSiblings.prop('checked', false);
          this.checkboxWrapLength = 0;
        } else {
          _thisSiblings.prop('checked', true);
          this.checkboxWrapLength = this.checkboxWrap.length - 1;
        }
      } else {
        if (_this.prev().prop("checked")) {
          this.checkboxWrapLength -= 1;
          _thisAgreeWrap.find(this.agreeInputAll).prop("checked", false);
        } else {
          this.checkboxWrapLength += 1;
          if (this.checkboxWrapLength === this.checkboxWrap.length - 1) {
            _thisAgreeWrap.find(this.agreeInputAll).prop("checked", true);
          }
        }
      }
    }
  };
  $.fn[pluginName] = function (args) {
    var _this = this;
    new win.HYFRESH[pluginName](_this, args);
  };

  $(function () {
    $('.js-terms-agree-wrap').agreeCheckbox();
  });
})(window, window.jQuery);
