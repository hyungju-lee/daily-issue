(function (win, $) {
    'use strict';
    win.HYFRESH.common = win.HYFRESH.common || {};

    var UTIL = win.HYFRESH.common.util;
    win.HYFRESH.review = (function (container){
        var defParams = {
            obj: container,
            speed: 1600,
            fixedClass: 'is-fixed',
            hideClass : 'is-hide'
        }
        return {
            init: function() {
                this.setElements();
                this.bindEvents();
            },
            setElements : function() {
                this.obj = $(defParams.obj);
                this.header = $('.header');
                this.gnb = $('.gnb');
                this.reviewInfoWrap = this.obj.find('.review-info-wrap');
                this.reviewNumber = this.reviewInfoWrap.find('.number');
                this.reviewTab = this.obj.find('.product-review-tab');
            },
            bindEvents : function() {
                $(win).on('load', $.proxy(this.reviewCountFunc, this));
                $(win).on('load scroll', $.proxy(this.scrollFunc, this));
            },
            reviewCountFunc : function() {
                var _this = this,
                    rolling = 9,
                    numberArray = [],
                    targetNumber = this.reviewNumber.text(), // 리뷰 수 가져오기
                    pieceNumber = targetNumber.split(''); //리뷰 수 쪼개기

                this.setInitNumber(targetNumber);
                this.reviewNumber.text("");

                pieceNumber.forEach(function (val, i) {
                    if (val === ",") {
                        var comma = document.createElement("span");
                        comma.className = "comma";
                        comma.innerText = ",";
                        _this.reviewNumber.append(comma);
                    } else {
                        var number = Number(val);
                        var digitBox = document.createElement("span");
                        digitBox.className = "digit-box"
                        var digit = document.createElement("span");
                        digit.className = "digit digit" + i;
                        digitBox.appendChild(digit);
                        for (var j = 0; j <= rolling; j++) {
                            var sum = number + j >= 10 ? String(number + j)[1] : number + j;
                            numberArray[j] = sum;
                        }
                        numberArray.reverse();
                        numberArray.forEach(function (val, i) {
                            var digitNumber = document.createElement("span");
                            digitNumber.innerText = val;
                            digitNumber.className = "dg";
                            digit.appendChild(digitNumber);
                        })
                        _this.reviewNumber.append(digitBox);

                        digit.style.transform = "translate3d(0, 0, 0)";
                        setTimeout(function () {
                            requestAnimationFrame(function () {
                                digit.style.transform = "translate3d(0, -90%, 0)";
                                digit.style.transition = "transform " + (Math.random() * 2 + 2) + "s";
                            })
                        }, 300)
                    }
                })
            },
            setInitNumber : function(_number){
                // this.reviewNumber.data("count", _number);
                this.reviewNumber.attr("data-count", _number);
            },
            // createDigitArray : function(_digitArray,_pieceNumber,_digitCode) {
            //     var numberArray = [],
            //         numberHeight = this.reviewNumber.closest('.count-wrap').outerHeight();
            //     for(var i=0;i<_pieceNumber.length;i++) {
            //         // parseint 문자열을 정수로 변환
            //         if($.inArray(parseInt(_pieceNumber[i], 10), _digitArray) != -1) {
            //             this.reviewNumber.append('<span class="digit-box"><span class="digit digit'+numberArray.length+'">' + _digitCode + '</span></span>');
            //             numberArray[numberArray.length] = parseInt(_pieceNumber[i],10);
            //         } else {
            //             this.reviewNumber.append('<span class="comma">'+_pieceNumber[i]+'</span>');
            //         }
            //     }
            //     for(var i=0; i < numberArray.length; i++) {
            //         this.reviewNumber.find('.digit'+i).animate({bottom: (numberHeight * numberArray[i])}, Math.round(defParams.speed * (1 + (i * 0.3333))));
            //     }
            // },
            scrollFunc : function() {
                var currentScroll  = $(win).scrollTop(),
                    infoWrapHeight = this.reviewInfoWrap.outerHeight(),
                    infoWrapMargin = Number(this.reviewInfoWrap.css('margin-top').replace(/px/g,"")),
                    objMargin      = Number(this.obj.css('padding-top').replace(/px/g,""));
                if(this.header.hasClass(defParams.hideClass)) {
                    var gnbHeight = this.gnb.outerHeight();
                    if(currentScroll >= objMargin - gnbHeight + infoWrapMargin) {
                        this.reviewInfoWrap.addClass(defParams.fixedClass)
                            .css({top:gnbHeight + 'px'});
                        this.reviewTab.css({'margin-top':infoWrapHeight + 'px'})
                        // var gnbHeight = this.gnb.outerHeight();
                        // this.reviewInfoWrap.addClass(defParams.fixedClass)
                        //                    .css({top:gnbHeight + 'px'});
                        // this.obj.css({paddingTop: infoWrapHeight})
                    }
                } else {
                    this.reviewInfoWrap.removeClass(defParams.fixedClass);
                    this.reviewTab.css({'margin-top':''})
                }
            }
        }
    })('.content-review');

    $(function () {
        if ($('.content-review').length) {
            HYFRESH.review.init();
        }
    });
})(window, window.jQuery);
