(function (win, $) {
  "use strict";
  win.HYFRESH = win.HYFRESH || {};

  var UTIL = win.HYFRESH.common.util,
    pluginName = 'validator';

  win.HYFRESH[pluginName] = function (container, args) {
    var defParams = {
      input: '.inp',
      textInput: '.inp[type=text]',
      numInput: '.inp[type=number]',
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
      this.numInput = $(this.opts.numInput);
      this.formValidator = $(this.opts.formValidator);
      this.valDate = {
        nowEl : null,
        nowElVal : null,
        nowElValStr : null,
        nowElMaxLength : null,
        dateWrap : null,
        dateYear : null,
        dateMonth : null,
        dateDate : null,
        dateYearVal : false,
        dateMonthVal : false,
        dateDateVal : false
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
      $("body").on("keyup change input", this.opts.input, $.proxy(this.divisionFunc, this))
    },
    divisionFunc: function (e) {
      if (!!$(e.target).data("date")) {
        this.validatorYearMonthDate(e);
      } else if (!!$(e.target).data("validatorPhone")) {
        this.validatorPhoneNum(e);
      } else if (!!$(e.target).parents("[data-validator-form=\"true\"]")) {
        this.validatorForm(e);
      }
    },
    validatorYearMonthDate: function (e) {
      if (e.keyCode === 9 || e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40) return;
      switch (true) {
        case ($(e.target).data("date") === "year") :

          this.valDate.nowEl = $(e.target);
          this.valDate.nowElMaxLength = +this.valDate.nowEl.data("maxlength");
          this.valDate.nowElVal = this.valDate.nowEl.val().length > this.valDate.nowElMaxLength ? this.valDate.nowEl.val().replace(/[0-9]$/, '') : this.valDate.nowEl.val();
          this.valDate.nowEl.val(this.valDate.nowElVal);
          this.valDate.nowElValStr = this.valDate.nowElVal.split("");
          this.valDate.dateWrap = this.valDate.nowEl.parents("[data-validator-date='true']");
          this.valDate.dateMonth = this.valDate.dateWrap.find("[data-date='month']");
          this.valDate.dateDate = this.valDate.dateWrap.find("[data-date='date']");
          this.valDate.dateMonthVal = this.valDate.dateMonth.val().length < +this.valDate.dateMonth.data("maxlength") ? false : (12 >= +this.valDate.dateMonth.val() && +this.valDate.dateMonth.val() >= 1) ? true : false;
          this.valDate.dateDateVal = this.valDate.dateDate.val().length < +this.valDate.dateDate.data("maxlength") ? false : this.valDate.dateDate.val().length === +this.valDate.dateDate.data("maxlength") ? true : false;

          if (this.valDate.nowElValStr.length < this.valDate.nowElMaxLength) {
            this.valDate.nowEl.css("outline", "3px solid #f00")
            this.valDate.dateYearVal = false;
          } else {
            if (this.valDate.nowElValStr.length === this.valDate.nowElMaxLength) {
              if (new Date().getFullYear() >= +this.valDate.nowElVal && +this.valDate.nowElVal >= 1900) {
                this.valDate.nowEl.css("outline", "");
                this.valDate.dateYearVal = true;
                this.valDate.dateMonth.trigger("focus");
                if (this.valDate.dateYearVal && this.valDate.dateMonthVal && this.valDate.dateDateVal) {
                  var endDate = new Date(+this.valDate.nowElVal, +this.valDate.dateMonth.val(),0).getDate();
                  if (endDate >= +this.valDate.dateDate.val() && +this.valDate.dateDate.val() >= 1) {
                    this.valDate.dateDate.css("outline", "");
                  } else {
                    this.valDate.dateDate.css("outline", "3px solid #f00");
                  }
                }
              } else {
                this.valDate.nowEl.css("outline", "3px solid #f00")
                this.valDate.dateYearVal = false;
              }
            }
          }
          break
        case ($(e.target).data("date") === "month") :

          this.valDate.nowEl = $(e.target);
          this.valDate.nowElMaxLength = +this.valDate.nowEl.data("maxlength");
          this.valDate.nowElVal = this.valDate.nowEl.val().length > this.valDate.nowElMaxLength ? this.valDate.nowEl.val().replace(/[0-9]$/, '') : this.valDate.nowEl.val();
          this.valDate.nowEl.val(this.valDate.nowElVal);
          this.valDate.nowElValStr = this.valDate.nowElVal.split("");
          this.valDate.dateWrap = this.valDate.nowEl.parents("[data-validator-date='true']");
          this.valDate.dateYear = this.valDate.dateWrap.find("[data-date='year']");
          this.valDate.dateDate = this.valDate.dateWrap.find("[data-date='date']");
          this.valDate.dateYearVal = this.valDate.dateYear.val().length < +this.valDate.dateYear.data("maxlength") ? false : (new Date().getFullYear() >= +this.valDate.dateYear.val() && +this.valDate.dateYear.val() >= 1900) ? true : false;
          this.valDate.dateDateVal = this.valDate.dateDate.val().length < +this.valDate.dateDate.data("maxlength") ? false : this.valDate.dateDate.val().length === +this.valDate.dateDate.data("maxlength") ? true : false;

          if (this.valDate.nowElValStr.length < this.valDate.nowElMaxLength) {
            this.valDate.nowEl.css("outline", "3px solid #f00");
            this.dateMonthVal = false;
          } else {
            if (this.valDate.nowElValStr.length === this.valDate.nowElMaxLength) {
              if (12 >= +this.valDate.nowElVal && +this.valDate.nowElVal >= 1) {
                this.valDate.nowEl.css("outline", "");
                this.valDate.dateMonthVal = true;
                this.valDate.dateDate.trigger("focus");
                if (this.valDate.dateYearVal && this.valDate.dateMonthVal && this.valDate.dateDateVal) {
                  var endDate = new Date(this.valDate.dateYear.val(), this.valDate.nowElVal,0).getDate();
                  if (endDate >= +this.valDate.dateDate.val() && +this.valDate.dateDate.val() >= 1) {
                    this.valDate.dateDate.css("outline", "");
                  } else {
                    this.valDate.dateDate.css("outline", "3px solid #f00")
                  }
                }
              } else {
                this.valDate.nowEl.css("outline", "3px solid #f00")
                this.valDate.dateMonthVal = false;
              }
            }
          }
          break
        case ($(e.target).data("date") === "date") :

          this.valDate.nowEl = $(e.target);
          this.valDate.nowElMaxLength = +this.valDate.nowEl.data("maxlength");
          this.valDate.nowElVal = this.valDate.nowEl.val().length > this.valDate.nowElMaxLength ? this.valDate.nowEl.val().replace(/[0-9]$/, '') : this.valDate.nowEl.val();
          this.valDate.nowEl.val(this.valDate.nowElVal);
          this.valDate.nowElValStr = this.valDate.nowElVal.split("");
          this.valDate.dateWrap = this.valDate.nowEl.parents("[data-validator-date='true']");
          this.valDate.dateYear = this.valDate.dateWrap.find("[data-date='year']");
          this.valDate.dateMonth = this.valDate.dateWrap.find("[data-date='month']");
          this.valDate.dateYearVal = this.valDate.dateYear.val().length < +this.valDate.dateYear.data("maxlength") ? false : (new Date().getFullYear() >= +this.valDate.dateYear.val() && +this.valDate.dateYear.val() >= 1900) ? true : false;
          this.valDate.dateMonthVal = this.valDate.dateMonth.val().length < +this.valDate.dateMonth.data("maxlength") ? false : (12 >= +this.valDate.dateMonth.val() && +this.valDate.dateMonth.val() >= 1) ? true : false;

          if (this.valDate.dateYearVal && this.valDate.dateMonthVal) {
            if (this.valDate.nowElValStr.length < this.valDate.nowElMaxLength) {
              this.valDate.nowEl.css("outline", "3px solid #f00");
              this.valDate.dateDateVal = false;
            } else {
              if (this.valDate.nowElValStr.length === this.valDate.nowElMaxLength) {
                this.valDate.dateDateVal = true;
                var endDate = new Date(this.valDate.dateYear.val(), this.valDate.dateMonth.val(),0).getDate();
                if (endDate >= +this.valDate.nowElVal && +this.valDate.nowElVal >= 1) {
                  this.valDate.nowEl.css("outline", "");
                } else {
                  this.valDate.nowEl.css("outline", "3px solid #f00");
                }
              }
            }
          }
          break
        default :
          break
      }
    },
    validatorPhoneNum: function (e) {
      if (!$(e.currentTarget).data("validatorPhone")) return;
      var phone = $(e.currentTarget);
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
