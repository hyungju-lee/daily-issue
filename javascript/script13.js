// <div class="common-layer__content" style="position: relative">

(function (win, $, doc) {
    'use strict';
    win.HYFRESH = win.HYFRESH || {};

    var UTIL = win.HYFRESH.common.util,
        pluginOpenProps = 'comLayerPopupOpenProps',
        pluginName = 'comLayerPopup';

    win.HYFRESH[pluginOpenProps] = [];

    win.HYFRESH[pluginName] = function (container, args) {
        if (!(this instanceof win.HYFRESH[pluginName])) {
            return new win.HYFRESH[pluginName](container, args);
        }
        var defParams = {
            effect : 'fade',
            layerWrapElements : container,
            layerElements : '.common-layer__inner',
            layerContentElements : '.common-layer__content',
            layerFixedElements : '.common-layer__fixed-wrap',
            layerFixedTopElements : '.common-layer__header',
            openerElements : '.layer-popup-opener',
            openerAsyncClass : 'is-async',
            closerElements : '.common-layer__btn-close',
            dimmedElements : '.common-layer__dimmed',
            focusOutObj : {
                CLASS : 'hive-layer-focusout',
                CSS : {
                    'overflow' : 'hidden',
                    'position' : 'absolute',
                    'left' : 0,
                    'top' : 0,
                    'z-index' : -1,
                    'width' : 1,
                    'height' : 1,
                    'font-size' : '1px',
                    'line-height' : 0,
                    'outline' : 'none'
                }
            },
            customEvent : '.' + pluginName + (new Date()).getTime(),
            openerTarget : null,
            useOutside : false,
            useEscape : true,
            useCloseFocus : false,
            bgOpacity : .3,
            bgColor : '#000',
            slide : {
                range : 200,
                direction : 'rightToLeft' // Could be 'rightToLeft', 'leftToRight', 'topToBottom', 'bottomToTop'
            },
            flip : {
                CLASS : 'hive-layer-flip',
                direction : 'horizontal', // Could be 'horizontal', 'vertical'
                rotateStart : 90,
                rotateEnd : 0
            },
            scrollActiveClass : 'is-scroll-active',
            customToggle : false,
            dimmedDuration : 250,
            fps : 120,
            easing : 'swing',
            duration : 250,
            layerMove : null,
            layerOpenBefore : null,
            layerOpenAfter : null,
            layerCloseBefore : null,
            layerCloseAfter : null,
            resizeStart : null
        };
        if (!(this.layerWrap = defParams.layerWrapElements).length) return;
        this.opts = UTIL.def(defParams, this.layerWrap.data('hivelayer-opts') || args || {});
        this.init();
    };
    win.HYFRESH[pluginName].prototype = {
        init : function () {
            this.initOpts();
            this.setElements();
            this.initLayout();
            this.bindEvents(true);
        },
        initOpts : function () {
            this.layerWrapInstance = '#' + this.layerWrap.attr('id');
            if (!this.opts.isSupportTransition && this.opts.effect === 'flip') {
                this.opts.effect = 'default';
            }
        },
        setElements : function () {
            this.dimmedObj = this.layerWrap.find(this.opts.dimmedElements);
            this.layerObj = this.layerWrap.find(this.opts.layerElements);
            this.layerObjWrap = this.layerObj.parent();
            this.layerContentElements = this.layerWrap.find(this.opts.layerContentElements);
            this.layerFixedElements = this.layerWrap.find(this.opts.layerFixedElements);
            this.layerFixedTopElements = this.layerWrap.find(this.opts.layerFixedTopElements);
            this.closerObj = this.layerWrap.find(this.opts.closerElements);
        },
        initLayout : function () {
            var focusOutClass = this.opts.focusOutObj.CLASS,
                focusOutElements = '<span class="' + focusOutClass + '" tabindex="0">""</span>';
            if (!this.layerObj.prev().hasClass(focusOutClass)) {
                this.layerObj.before(focusOutElements);
            }
            if (!this.layerObj.next().hasClass(focusOutClass)) {
                this.layerObj.after(focusOutElements);
            }
            this.prevFocusOutObj = this.layerObj.prev();
            this.nextFocusOutObj = this.layerObj.next();
            this.focusOutObj = this.layerObj.prev().add(this.layerObj.next());
            this.layerObj.attr({
                'tabIndex' : -1,
                'role' : 'dialog'
            });
            this.layerObj.css({
                'outline' : 'none'
            });
            this.focusOutObj.css(this.opts.focusOutObj.CSS);
            // this.dimmedObj.css({
            //     background : this.opts.bgColor,
            //     opacity : this.opts.bgOpacity
            // });
            if (this.opts.effect === 'slide') {
                var sDirection = this.opts.slide.direction;
                if (sDirection === 'rightToLeft' || sDirection === 'leftToRight') {
                    this.opts.slide.cssD = 'left';
                } else if (sDirection === 'topToBottom' || sDirection === 'bottomToTop') {
                    this.opts.slide.cssD = 'top';
                }
                this.dimmedObj.hide();
                this.focusOutObj.hide();
                this.layerObj.hide();
            } else if (this.opts.effect === 'flip') {
                var fDirection = this.opts.flip.direction;
                if (fDirection !== 'vertical') {
                    this.opts.flip.cssD = 'rotateY';
                } else {
                    this.opts.flip.cssD = 'rotateX';
                }
                this.dimmedObj.hide();
                this.focusOutObj.hide();
                this.layerObj.hide();
                this.layerWrap.addClass(this.opts.flip.CLASS);
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
        bindEvents : function (type) {
            if (type) {
                $(doc).on(this.changeEvents('click clickCustom'), this.opts.openerElements + '[data-layer-target="' + this.layerWrapInstance + '"]', $.proxy(this.onLayerOpen, this));
                this.layerWrap.on(this.changeEvents('openLayer'), $.proxy(this.onLayerOpen, this));
                this.prevFocusOutObj.on(this.changeEvents('focusin'), $.proxy(this.onPrevOut, this));
                this.nextFocusOutObj.on(this.changeEvents('focusin'), $.proxy(this.onNextOut, this));
                this.closerObj.on(this.changeEvents('keydown click clickCustom'), $.proxy(this.onLayerClose, this));
                this.layerWrap.on(this.changeEvents('layerSetOptions'), $.proxy(this.setOptions, this));
                if (this.opts.useEscape) {
                    this.layerObj.on(this.changeEvents('keydown'), $.proxy(this.onEscapeClose, this));
                }
            } else {
                $(doc).off(this.changeEvents('click clickCustom'));
                this.layerWrap.off(this.changeEvents('openLayer'));
                this.prevFocusOutObj.off(this.changeEvents('focusin'));
                this.nextFocusOutObj.off(this.changeEvents('focusin'));
                this.closerObj.off(this.changeEvents('keydown click clickCustom'));
                this.layerWrap.off(this.changeEvents('layerSetOptions'));
                if (this.opts.useEscape) {
                    this.layerObj.off(this.changeEvents('keydown'));
                }
            }
        },
        bindOutsideEvents : function (type) {
            if (!this.opts.useOutside) return;
            if (type) {
                this.layerObj.on('clickoutside touchendoutside', $.proxy(this.onLayerOutsideFunc, this));
            } else {
                this.layerObj.off('clickoutside touchendoutside');
            }
        },
        bindCloseEvents : function (type) {
            if (type) {
                this.layerWrap.on(this.changeEvents('closeLayer'), $.proxy(this.closeLayer, this));
            } else {
                this.layerWrap.off(this.changeEvents('closeLayer'));
            }
        },
        setOptions : function (e, data) {
            UTIL.def(this.opts, data || {});
            if (data.customToggle) {
                this.opts.effect = 'default';
            }
        },
        layerScrollInit : function () {
            if (this.layerWrap.hasClass(this.opts.scrollActiveClass)) {
                this.setLayout();
                this.scrollBindEvents(true);
            }
        },
        scrollBindEvents : function (type) {
            if (type) {
                $(win).on(this.changeEvents('resize orientationchange'), $.proxy(this.resizeFunc, this));
            } else {
                $(win).off(this.changeEvents('resize orientationchange'));
            }
        },
        resizeFunc : function () {
            this.winWidth = UTIL.winSize().w;
            if (this.opts.resizeStart == null) {
                this.opts.resizeStart = this.winWidth;
                this.resizeAnimateFunc();
            }
            win.clearTimeout(this.resizeEndTime);
            this.resizeEndTime = win.setTimeout($.proxy(this.resizeEndFunc, this), 150);
        },
        resizeEndFunc : function () {
            this.opts.resizeStart = null;
            this.setLayout();
            UTIL.cancelAFrame.call(win, this.resizeRequestFrame);
        },
        resizeAnimateFunc : function () {
            // this.setLayout();
            this.resizeRequestFrame = UTIL.requestAFrame.call(win, $.proxy(this.resizeAnimateFunc, this));
        },
        setLayout : function () {
            var layerObjWrap = this.layerObjWrap,
                layerObjWrapPadding = parseFloat(layerObjWrap.css('padding-top')) + parseFloat(layerObjWrap.css('padding-bottom')),
                layerObjWrapHeight = (layerObjWrap.length) ? layerObjWrap.outerHeight() - layerObjWrapPadding : 0,
                layerFixedElements = this.layerFixedElements,
                layerFixedTopElements = this.layerFixedTopElements,
                height = layerObjWrapHeight - layerFixedElements.outerHeight() - layerFixedTopElements.outerHeight();
            this.layerContentElements.css('max-height', height);
        },
        offsetFunc : function (value, index) {
            var scrollY = value.layerWrap.find("[data-offset=\""+index+"\"]").position().top;
            value.layerWrap.find('.common-layer__content').scrollTop(scrollY)
        },
        onLayerOpen : function (e) {
            e.preventDefault();
            var _this = this;
            if (e.type === 'click' || e.type === 'clickCustom') {
                this.opts.openerTarget = $(e.currentTarget);
            }
            if (e.type === 'click') {
                if (this.opts.openerTarget.hasClass(this.opts.openerAsyncClass)) return;
            }
            this.layerViewType = 'open';
            win.HYFRESH[pluginOpenProps].push({
                'POPUPWRAP' : this.layerWrap
            });
            this.bindCloseEvents(true);

            var indexOffset;
            console.log($(e.currentTarget).data("offset"))
            if ($(e.currentTarget).data("offset") !== undefined) {
                indexOffset = $(e.currentTarget).data("offset");
            }

            switch (true) {
                case (this.opts.effect === 'default') :
                    this.outCallback('layerOpenBefore');
                    if (!this.opts.customToggle) {
                        this.layerWrap.css({
                            'opacity': 0,
                            'display': 'block'
                        });
                        this.layerScrollInit();
                        this.layerWrap.css('opacity', '');
                        this.openAfterBugFunc();
                    }
                    break;
                case (this.opts.effect === 'fade') :
                    this.outCallback('layerOpenBefore');
                    this.focusOutObj.show();
                    this.layerWrap.css({
                        'display': 'block',
                        'opacity': 0,
                    })
                    requestAnimationFrame(function () {
                        requestAnimationFrame(function () {
                            _this.layerWrap.css({
                                'opacity': 1,
                                'transition': 'opacity 0.3s'
                            })
                        })
                    })
                    this.layerWrap.on('transitionend', function () {
                        _this.layerWrap.off('transitionend');
                        _this.layerWrap.css({
                            'transition': ''
                        })
                    })
                    if (indexOffset !== undefined) {
                        this.layerWrap.on('transitionstart', function () {
                            _this.layerWrap.off('transitionstart');
                            HYFRESH[pluginName].prototype.offsetFunc(_this, indexOffset)
                        })
                    }
                    break;
                case (this.opts.effect === 'slide') :
                    this.layerWrap.show();
                    this.layerObj.css({
                        'display': 'block',
                        'opacity': 0
                    });
                    var slideData = this.opts.slide,
                        cssD = slideData.cssD,
                        offset = parseFloat(this.layerObj.css('margin-' + cssD)),
                        moveData = {'opacity': 1};
                    if (cssD === 'left') {
                        var initPos = (slideData.direction === 'rightToLeft') ? offset + slideData.range : offset - slideData.range;
                        this.layerObj.css({
                            'margin-left': initPos
                        });
                        moveData['margin-' + cssD] = offset;
                    } else if (cssD === 'top') {
                        var initPos = (slideData.direction === 'topToBottom') ? offset - slideData.range : offset + slideData.range;
                        this.layerObj.css({
                            'margin-top': initPos
                        });
                        moveData['margin-' + cssD] = offset;
                    }
                    this.dimmedObj.fadeIn(this.opts.dimmedDuration, $.proxy(function () {
                        this.outCallback('layerOpenBefore');
                        this.focusOutObj.show();
                        this.layerObj.animate(moveData, {
                            duration: this.opts.duration,
                            easing: this.opts.easing,
                            step: function (now, tween) {
                                _this.outCallback('layerMove', now, tween);
                            },
                            complete: $.proxy(this.openAfterBugFunc, this)
                        });
                    }, this));
                    break;
                case (this.opts.effect === 'flip') :
                    var moveDistance = this.opts.flip.rotateEnd - this.opts.flip.rotateStart,
                        moveOneStep = moveDistance / this.opts.duration * (1000 / this.opts.fps),
                        currentStep = 0;
                    this.opts.flip.moveData = {
                        startDistance : this.opts.flip.rotateStart,
                        endDistance : this.opts.flip.rotateEnd,
                        moveDistance : moveDistance,
                        moveOneStep : moveOneStep,
                        currentStep : currentStep
                    };
                    this.layerWrap.show();
                    this.dimmedObj.fadeIn(this.opts.dimmedDuration, $.proxy(function () {
                        this.outCallback('layerOpenBefore');
                        this.focusOutObj.show();
                        this.layerObj.show();
                        this.initStep(this.opts.flip.moveData);
                        this.flipFunc();
                    }, this));
                    break;
                case (this.opts.effect === 'layerSlide') :
                    this.layerWrap.show();
                    this.layerObj.css({
                        'display' : 'block',
                        'transform': 'translate3d(0, 100%, 0)',
                    });
                    requestAnimationFrame(function () {
                        requestAnimationFrame(function () {
                            _this.layerObj.css({
                                'transform': 'translate3d(0, 0, 0)',
                                'transition': 'transform 0.3s'
                            })
                        })
                    })
                    this.layerObj.on('transitionend', function () {
                        _this.layerObj.off('transitionend');
                        _this.layerObj.css({
                            'transform': '',
                            'transition': ''
                        })
                    })
                    break;
                default :
                    break;
            }
            this.ariaAccessbility(true, this.layerWrap);
            $('body').addClass('scroll-lock');
        },
        initStep : function (data) {
            this.opts.stepTimeOld = new Date();
            this.direction = data.startDistance > data.moveDistance ? 'toNext' : 'toPrev';
            this.condition = this.direction === 'toNext' ? data.currentStep > data.moveDistance : data.currentStep < data.moveDistance;
        },
        moveStep : function (data) {
            this.opts.stepTimeNew = new Date();
            this.opts.remaining = Math.max(0, (this.opts.stepTimeOld - this.opts.stepTimeNew) + this.opts.duration);
            var temp = this.opts.remaining / this.opts.duration || 0,
                percent = 1 - temp,
                eased = $.easing[this.opts.easing](percent, this.opts.duration * percent, 0, 1, this.opts.duration);
            data.currentStep = (data.endDistance - data.startDistance) * eased;
        },
        flipFunc : function () {
            var data = this.opts.flip.moveData;
            this.moveStep(data);
            if (this.condition) {
                win.clearTimeout(this.stepTimeout);
                this.stepTimeout = win.setTimeout($.proxy(function () {
                    this.flipFunc();
                }, this), 1000 / this.opts.fps);
                this.condition = this.direction === 'toNext' ? data.currentStep > data.moveDistance : data.currentStep < data.moveDistance;
                this.outCallback('layerMove', data.currentStep, data);
            } else {
                this.opts.remaining = this.opts.duration;
                if (this.layerViewType === 'close' || !this.layerViewType) {
                    this.closeAfterBugFunc();
                    this.dimmedObj.fadeOut(this.opts.dimmedDuration, $.proxy(function () {
                        this.layerWrap.hide();
                        this.focusOutObj.hide();
                        this.layerObj.hide();
                    }, this));
                } else {
                    this.openAfterBugFunc();
                }
            }
            var movePosition = data.startDistance + data.currentStep;
            this.layerObj.css({
                'transform' : this.opts.flip.cssD + '(' + movePosition + 'deg)'
            });
        },
        onLayerOpenAfter : function () {
            this.layerObj.focus();
            win.setTimeout($.proxy(function () {
                this.layerObj.removeAttr('role');
            }, this), 30);
            this.bindOutsideEvents(true);
            this.outCallback('layerOpenAfter');
        },
        openAfterBugFunc : function () {
            win.clearTimeout(this.openAfterTimeout);
            this.openAfterTimeout = win.setTimeout($.proxy(this.onLayerOpenAfter, this), 30);
        },
        onLayerClose : function (e) {
            var _target = $(e.currentTarget);
            if (e.type === 'keydown') {
                var keyCode = e.which || e.keyCode;
                if (keyCode === 13) {
                    e.stopPropagation();
                    this.opts.useCloseFocus = true;
                }
            } else if (e.type === 'click' || e.type === 'clickCustom') {
                e.preventDefault();
                if (e.type === 'click') {
                    if (_target.hasClass(this.opts.openerAsyncClass)) return;
                }
                this.layerWrap.trigger(this.changeEvents('closeLayer'));
            }
            $('body').removeClass('scroll-lock');
        },
        closeLayer : function () {
            this.layerViewType = 'close';
            this.outCallback('layerCloseBefore');
            this.popupOpenPropsControl();
            if (!win.HYFRESH[pluginOpenProps].length) {
            }
            this.ariaAccessbility(false, this.layerWrap);
            win.clearTimeout(this.closeBeforeTimeout);
            this.closeBeforeTimeout = win.setTimeout($.proxy(this.closeBeforeBugFunc, this), 30);
            this.bindOutsideEvents(false);
            this.scrollBindEvents(false);
        },
        onEscapeClose : function (e) {
            var keyCode = e.which || e.keyCode;
            if (keyCode !== 27) return;
            this.opts.useCloseFocus = true;
            this.layerWrap.trigger(this.changeEvents('closeLayer'));
        },
        onPrevOut : function () {
            this.layerWrap.find('a, button, input, select').filter(':visible').not(':disabled').last().focus();
        },
        onNextOut : function () {
            this.layerObj.focus();
        },
        onLayerOutsideFunc : function () {
            this.layerWrap.trigger(this.changeEvents('closeLayer'));
        },
        closeBeforeBugFunc : function () {
            var _this = this;
            if (this.opts.effect === 'default') {
                if (!this.opts.customToggle) {
                    this.layerWrap.stop(true, true).hide();
                }
                this.closeAfterBugFunc();
            } else if (this.opts.effect === 'fade') {
                this.layerWrap.stop(true, true).fadeOut({
                    duration : this.opts.duration,
                    easing : this.opts.easing,
                    step : function (now, tween) {
                        _this.outCallback('layerMove', now, tween);
                    },
                    complete : $.proxy(this.closeAfterBugFunc, this)
                });
            } else if (this.opts.effect === 'slide') {
                var slideData = this.opts.slide,
                    cssD = slideData.cssD,
                    offset = parseFloat(this.layerObj.css('margin-' + cssD)),
                    moveData = {'opacity' : 0};
                if (cssD === 'left') {
                    var movePos = (slideData.direction === 'rightToLeft') ? offset - slideData.range : offset + slideData.range;
                    moveData['margin-' + cssD] = movePos;
                } else if (cssD === 'top') {
                    var movePos = (slideData.direction === 'topToBottom') ? offset + slideData.range : offset - slideData.range;
                    moveData['margin-' + cssD] = movePos;
                }
                this.layerObj.animate(moveData, {
                    duration : this.opts.duration,
                    easing : this.opts.easing,
                    step : function (now, tween) {
                        _this.outCallback('layerMove', now, tween);
                    },
                    complete : $.proxy(function () {
                        this.closeAfterBugFunc();
                        this.dimmedObj.fadeOut(this.opts.dimmedDuration, $.proxy(function () {
                            this.layerWrap.hide();
                            this.focusOutObj.hide();
                            this.layerObj.hide().css('margin', '');
                        }, this));
                    }, this)
                });
            } else if (this.opts.effect === 'flip') {
                var moveDistance = -(this.opts.flip.rotateStart) - this.opts.flip.rotateEnd,
                    moveOneStep = moveDistance / this.opts.duration * (1000 / this.opts.fps),
                    currentStep = 0;
                this.opts.flip.moveData = {
                    startDistance : this.opts.flip.rotateEnd,
                    endDistance : -(this.opts.flip.rotateStart),
                    moveDistance : moveDistance,
                    moveOneStep : moveOneStep,
                    currentStep : currentStep
                };
                this.initStep(this.opts.flip.moveData);
                this.flipFunc();
            }
        },
        closeAfterBugFunc : function () {
            win.clearTimeout(this.closeAfterTimeout);
            this.closeAfterTimeout = win.setTimeout($.proxy(this.onLayerCloseAfter, this), 30);
        },
        popupOpenPropsControl : function () {
            var pluginOpenPropDatas = win.HYFRESH[pluginOpenProps];
            for (var openPropsMin = 0, openPropsMax = pluginOpenPropDatas.length; openPropsMin < openPropsMax; openPropsMin++) {
                var pluginOpenPropData = pluginOpenPropDatas[openPropsMin],
                    pluginPopupWrap = pluginOpenPropData['POPUPWRAP'][0];
                if (pluginPopupWrap === this.layerWrap[0]) {
                    pluginOpenPropDatas[openPropsMin] = null;
                }
            }
            for (var delPropsMin = 0, delPropsMax = pluginOpenPropDatas.length; delPropsMin < delPropsMax; delPropsMax--) {
                var pluginDelPropData = pluginOpenPropDatas[delPropsMax - 1];
                if (pluginDelPropData === null) {
                    pluginOpenPropDatas.splice(delPropsMax - 1, 1);
                }
            }
        },
        onLayerCloseAfter : function () {
            if (this.opts.openerTarget !== null) {
                if (UTIL.isDevice) {
                    this.opts.useCloseFocus = true;
                }
                if (this.opts.useCloseFocus) {
                    this.opts.openerTarget.focus();
                }
                this.opts.openerTarget = null;
            }
            this.opts.useCloseFocus = false;
            win.setTimeout($.proxy(function () {
                this.layerObj.attr('role', 'dialog');
            }, this), 30);
            this.bindCloseEvents(false);
            this.outCallback('layerCloseAfter');
        },
        ariaAccessbility : function (type, layerTarget) {
            var layerWrap = layerTarget,
                layerParents = layerWrap.parents(),
                pluginOpenPropDatas = win.HYFRESH[pluginOpenProps];
            if (type) {
                layerWrap.removeAttr('aria-hidden').siblings().attr('aria-hidden', 'true');
                for (var i = 0, max = layerParents.length; i < max; i++) {
                    var _target = layerParents.eq(i);
                    _target.siblings().attr('aria-hidden', 'true');
                }
            } else {
                layerWrap.siblings().removeAttr('aria-hidden');
                for (var i = 0, max = layerParents.length; i < max; i++) {
                    var _target = layerParents.eq(i);
                    _target.siblings().removeAttr('aria-hidden');
                }
                if (pluginOpenPropDatas.length) {
                    var pluginPopupWrap = pluginOpenPropDatas[pluginOpenPropDatas.length - 1]['POPUPWRAP'];
                    this.ariaAccessbility(true, pluginPopupWrap);
                }
            }
        },
        outCallback : function (ing) {
            var callbackObj = this.opts[ing];
            if (ing === 'layerMove') {
                this.layerWrap.trigger(ing, arguments[1], arguments[2], this);
            } else {
                this.layerWrap.trigger(ing, this);
            }
            if (callbackObj == null) return;
            if (ing === 'layerMove') {
                callbackObj(arguments[1], arguments[2], this);
            } else {
                callbackObj(this);
            }
        },
        destroy : function () {
            this.bindEvents(false);
            this.bindOutsideEvents(false);
            this.bindCloseEvents(false);
        }
    };
    $(function() {
        var cmSLayer = $('.common-layer');
        for (var i = 0, max = cmSLayer.length; i < max; i++) {
            (function (index) {
                var _this = cmSLayer.eq(i),
                    _effect = cmSLayer.eq(i).data('effect') || 'fade'; // Could be 'default', 'fade', 'slide', 'flip', 'layerSlide'
                new win.HYFRESH[pluginName](_this, {
                    effect: _effect,
                });
            })(i);
        }
    });
})(window, window.jQuery, window.document);
