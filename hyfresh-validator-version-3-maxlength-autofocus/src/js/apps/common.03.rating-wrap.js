(function (win, $, doc) {
    'use strict';
    win.HYFRESH = win.HYFRESH || {};

    var UTIL = win.HYFRESH.common.util,
        pluginName = 'ratingWrap';

    win.HYFRESH[pluginName] = function (container, args) {
        var defParams = {
            ratingWrap : '.js-rating-wrap',
            rating : '.js-rating',
            score: '.js-score',
            subValue: '.js-sub-value',
            btnPlus: '.js-rating-btn-plus',
            btnMinus: '.js-rating-btn-minus',
            dataScore: 'data-score',
            valueText: ['별로예요','그저그래요','괜찮아요!','좋아요!','최고예요!'],
            initIndex: 0,
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
            this.ratingWrap = $(this.opts.ratingWrap);
            this.rating = this.ratingWrap.find(this.opts.rating);
            this.score = this.ratingWrap.find(this.opts.score);
            this.subValue = this.ratingWrap.find(this.opts.subValue);
            this.btnCommon = this.ratingWrap.find('.rating-wrap__btn');
            this.btnPlus = this.ratingWrap.find(this.opts.btnPlus);
            this.btnMinus = this.ratingWrap.find(this.opts.btnMinus);
        },
        initLayout : function () {
            this.rating.css({'width': '100%'})
            this.rating.attr(this.opts.dataScore, '5');
            this.score.text('5');
            this.subValue.text(this.opts.valueText[4]);
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
            this.btnMinus.on('click', $.proxy(this.onClickMinusFunc, this));
            this.btnPlus.on('click', $.proxy(this.onClickPlusFunc, this));
        },
        onClickMinusFunc : function (e) {
            e.preventDefault();
            var currentRating = this.rating.attr(this.opts.dataScore),
                trans = Number(currentRating);
            switch (trans) {
                case 5:
                    this.rating.css({'width': '91.3%'});
                    this.rating.attr(this.opts.dataScore, 4.5);
                    this.score.text('4.5');
                    this.subValue.text(this.opts.valueText[4]);
                    break;
                case 4.5:
                    this.rating.css({'width': '80%'});
                    this.rating.attr(this.opts.dataScore, 4);
                    this.score.text('4');
                    this.subValue.text(this.opts.valueText[3]);
                    break;
                case 4:
                    this.rating.css({'width': '70.77%'});
                    this.rating.attr(this.opts.dataScore, 3.5);
                    this.score.text('3.5');
                    this.subValue.text(this.opts.valueText[3]);
                    break;
                case 3.5:
                    this.rating.css({'width': '60%'});
                    this.rating.attr(this.opts.dataScore, 3);
                    this.score.text('3');
                    this.subValue.text(this.opts.valueText[2]);
                    break;
                case 3:
                    this.rating.css({'width': '50.26%'});
                    this.rating.attr(this.opts.dataScore, 2.5);
                    this.score.text('2.5');
                    this.subValue.text(this.opts.valueText[2]);
                    break;
                case 2.5:
                    this.rating.css({'width': '40%'});
                    this.rating.attr(this.opts.dataScore, 2);
                    this.score.text('2');
                    this.subValue.text(this.opts.valueText[1]);
                    break;
                case 2:
                    this.rating.css({'width': '29.8%'});
                    this.rating.attr(this.opts.dataScore, 1.5);
                    this.score.text('1.5');
                    this.subValue.text(this.opts.valueText[1]);
                    break;
                case 1.5:
                    this.rating.css({'width': '20%'});
                    this.rating.attr(this.opts.dataScore, 1);
                    this.score.text('1');
                    this.subValue.text(this.opts.valueText[0]);
                    break;
                case 1:
                    this.rating.css({'width': '9.235%'});
                    this.rating.attr(this.opts.dataScore, 0.5);
                    this.score.text('0.5');
                    this.subValue.text(this.opts.valueText[0]);
                    break;
                default:
                    break;
            }
            return false;
        },
        onClickPlusFunc : function (e) {
            e.preventDefault();
            var currentRating = this.rating.attr(this.opts.dataScore),
                trans = Number(currentRating);
            switch (trans) {
                case 4.5:
                    this.rating.css({'width': '100%'});
                    this.rating.attr(this.opts.dataScore, 5);
                    this.score.text('5');
                    this.subValue.text(this.opts.valueText[4]);
                    break;
                case 4:
                    this.rating.css({'width': '91.3%'});
                    this.rating.attr(this.opts.dataScore, 4.5);
                    this.score.text('4.5');
                    this.subValue.text(this.opts.valueText[4]);
                    break;
                case 3.5:
                    this.rating.css({'width': '80%'});
                    this.rating.attr(this.opts.dataScore, 4);
                    this.score.text('4');
                    this.subValue.text(this.opts.valueText[3]);
                    break;
                case 3:
                    this.rating.css({'width': '70.77%'});
                    this.rating.attr(this.opts.dataScore, 3.5);
                    this.score.text('3.5');
                    this.subValue.text(this.opts.valueText[3]);
                    break;
                case 2.5:
                    this.rating.css({'width': '60%'});
                    this.rating.attr(this.opts.dataScore, 3);
                    this.score.text('3');
                    this.subValue.text(this.opts.valueText[2]);
                    break;
                case 2:
                    this.rating.css({'width': '50.26%'});
                    this.rating.attr(this.opts.dataScore, 2.5);
                    this.score.text('2.5');
                    this.subValue.text(this.opts.valueText[2]);
                    break;
                case 1.5:
                    this.rating.css({'width': '40%'});
                    this.rating.attr(this.opts.dataScore, 2);
                    this.score.text('2');
                    this.subValue.text(this.opts.valueText[1]);
                    break;
                case 1:
                    this.rating.css({'width': '29.8%'});
                    this.rating.attr(this.opts.dataScore, 1.5);
                    this.score.text('1.5');
                    this.subValue.text(this.opts.valueText[1]);
                    break;
                case 0.5:
                    this.rating.css({'width': '20%'});
                    this.rating.attr(this.opts.dataScore, 1);
                    this.score.text('1');
                    this.subValue.text(this.opts.valueText[0]);
                    break;
                default:
                    break;
            }
            return false;
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
        $('.js-rating-wrap').ratingWrap();
    });
})(window, window.jQuery, window.document);
