(function (win, $) {
  "use strict";
  win.HYFRESH = win.HYFRESH || {};

  var UTIL = win.HYFRESH.common.util,
    pluginName = 'validator';

  win.HYFRESH[pluginName] = function (container, args) {
    var defParams = {
      input: '.inp',
      textInput: '.inp[type=text]',
      formValidator: '[data-validator-form="true"]'
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
      this.input = $(this.opts.input);
      this.textInput = $(this.opts.textInput);
      this.formValidator = $(this.opts.formValidator);
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
      $("body").on("keyup change input", ".inp", $.proxy(this.checkInpFunc, this));
    },
    checkInpFunc: function (e) {
      switch (true) {
        case (!!$(e.target).data("maxlength")) :
          this.maxLengthForm(e);
          break
        case (!!$(e.target).parents("[data-validator-form=\"true\"]")) :
          this.validatorForm();
          if (!!$(e.target).data("validatorPhone")) {
            this.validatorPhoneNum(e);
          }
          break
        case (!!$(e.target).data("validatorPhone")) :
          this.validatorPhoneNum(e);
          break
        default :
          break
      }
    },
    maxLengthForm: function (e) {
      var nowEl = $(e.target);
      var nowElVal = nowEl.val();
      var nowElvalMaxLength = +nowEl.data("maxlength");
      var nowElValStr = nowElVal.split("");

      (nowElValStr.length > nowElvalMaxLength) ? nowElValStr.pop() : nowElValStr;
      nowElVal = nowElValStr.join("");
      nowEl.val(nowElVal);
    },
    validatorPhoneNum: function (e) {
      if (!$(e.target).data("validatorPhone")) return;
      var phone = $(e.target);
      var phoneVal = phone.val();
      var phoneTrim = phoneVal.replace(/[^0-9]/g, '');
      var thLeng = phoneTrim.length;
      switch (true) {
        case (thLeng < 4) :
          phone.val(phoneTrim);
          break;
        case (thLeng >= 4 && thLeng < 6) :
          var phoneHyphen = phoneTrim.substr(0, 3) + '-';
          phoneHyphen += phoneTrim.substr(3);
          phone.val(phoneHyphen);
          break;
        case (thLeng > 6 && thLeng < 11) :
          var phoneHyphen = phoneTrim.substr(0, 3) + '-';
          phoneHyphen += phoneTrim.substr(3, 3) + '-';
          phoneHyphen += phoneTrim.substr(6);
          phone.val(phoneHyphen);
          break;
        case (thLeng >= 11 && thLeng < 12) :
          var phoneHyphen = phoneTrim.substr(0, 3) + '-';
          phoneHyphen += phoneTrim.substr(3, 4) + '-';
          phoneHyphen += phoneTrim.substr(7);
          phone.val(phoneHyphen);
          break;
        case (thLeng >= 12) :
          var phoneHyphen = phoneTrim.substr(0, 4) + '-';
          phoneHyphen += phoneTrim.substr(4, 4) + '-';
          phoneHyphen += phoneTrim.substr(8);
          phone.val(phoneHyphen);
          break
        default :
          break;
      }
    },
    validatorForm: function () {
      var textInputVali = true;
      var allCheckoBox = true;
      this.formValidator.find('input[type=text]').each(function (i) {
        if (!$(this).val()) {
          textInputVali = false;
        }
      })
      if (!this.formValidator.find('[data-validator-checkall="true"] input[type=checkbox]').prop('checked')) {
        allCheckoBox = false;
      }

      if (textInputVali && allCheckoBox) {
        this.formValidator.find('.common-layer__btn').prop('disabled', false);
      } else {
        this.formValidator.find('.common-layer__btn').prop('disabled', true);
      }
    }
  };
  $.fn[pluginName] = function (args) {
    var _this = this;
    new win.HYFRESH[pluginName](_this, args);
  };
  $(function () {
    $('.common-layer').validator();
  });
})(window, window.jQuery);
