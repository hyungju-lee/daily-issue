var offsetFunc = function (value, index) {
    var scrollY = value.layerWrap
        .find('[data-offset="' + index + '"]')
        .position().top;
    value.layerWrap.find(".common-layer__content").scrollTop(scrollY);
};
var onLayerOpen = function (e) {
    e.preventDefault();
    var _this = this;
    if (e.type === "click" || e.type === "clickCustom") {
        this.opts.openerTarget = $(e.currentTarget);
    }
    if (e.type === "click") {
        if (this.opts.openerTarget.hasClass(this.opts.openerAsyncClass)) return;
    }
    this.layerViewType = "open";
    win.HYFRESH[pluginOpenProps].push({
        POPUPWRAP: this.layerWrap,
    });
    this.bindCloseEvents(true);

    var indexOffset;
    if ($(e.currentTarget).data("offset") !== undefined) {
        indexOffset = $(e.currentTarget).data("offset");
    }
    switch (true) {
        case this.opts.effect === "default":
            this.outCallback("layerOpenBefore");
            if (!this.opts.customToggle) {
                this.layerWrap.css({
                    opacity: 0,
                    display: "block",
                });
                this.layerScrollInit();
                this.layerWrap.css("opacity", "");
                this.openAfterBugFunc();
            }
            break;
        case this.opts.effect === "fade":
            this.outCallback("layerOpenBefore");
            this.focusOutObj.show();
            this.layerWrap.css({
                display: "block",
                opacity: 0,
            });
            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    _this.layerWrap.css({
                        opacity: 1,
                        transition: "opacity 0.3s",
                    });
                    if (indexOffset !== undefined) {
                        HYFRESH[pluginName].prototype.offsetFunc(_this, indexOffset);
                    }
                });
            });
            this.layerWrap.on("transitionend", function () {
                _this.layerWrap.off("transitionend");
                _this.layerWrap.css({
                    transition: "",
                });
            });
            break;
        case this.opts.effect === "slide":
            this.layerWrap.show();
            this.layerObj.css({
                display: "block",
                opacity: 0,
            });
            var slideData = this.opts.slide,
                cssD = slideData.cssD,
                offset = parseFloat(this.layerObj.css("margin-" + cssD)),
                moveData = { opacity: 1 };
            if (cssD === "left") {
                var initPos =
                    slideData.direction === "rightToLeft"
                        ? offset + slideData.range
                        : offset - slideData.range;
                this.layerObj.css({
                    "margin-left": initPos,
                });
                moveData["margin-" + cssD] = offset;
            } else if (cssD === "top") {
                var initPos2 =
                    slideData.direction === "topToBottom"
                        ? offset - slideData.range
                        : offset + slideData.range;
                this.layerObj.css({
                    "margin-top": initPos2,
                });
                moveData["margin-" + cssD] = offset;
            }
            this.dimmedObj.fadeIn(
                this.opts.dimmedDuration,
                $.proxy(function () {
                    this.outCallback("layerOpenBefore");
                    this.focusOutObj.show();
                    this.layerObj.animate(moveData, {
                        duration: this.opts.duration,
                        easing: this.opts.easing,
                        step: function (now, tween) {
                            _this.outCallback("layerMove", now, tween);
                        },
                        complete: $.proxy(this.openAfterBugFunc, this),
                    });
                }, this)
            );
            break;
        case this.opts.effect === "flip":
            var moveDistance =
                this.opts.flip.rotateEnd - this.opts.flip.rotateStart,
                moveOneStep =
                    (moveDistance / this.opts.duration) * (1000 / this.opts.fps),
                currentStep = 0;
            this.opts.flip.moveData = {
                startDistance: this.opts.flip.rotateStart,
                endDistance: this.opts.flip.rotateEnd,
                moveDistance: moveDistance,
                moveOneStep: moveOneStep,
                currentStep: currentStep,
            };
            this.layerWrap.show();
            this.dimmedObj.fadeIn(
                this.opts.dimmedDuration,
                $.proxy(function () {
                    this.outCallback("layerOpenBefore");
                    this.focusOutObj.show();
                    this.layerObj.show();
                    this.initStep(this.opts.flip.moveData);
                    this.flipFunc();
                }, this)
            );
            break;
        case this.opts.effect === "layerSlide":
            this.layerWrap.show();
            this.layerObj.css({
                display: "block",
                transform: "translate3d(0, 100%, 0)",
            });
            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    _this.layerObj.css({
                        transform: "translate3d(0, 0, 0)",
                        transition: "transform 0.3s",
                    });
                });
            });
            this.layerObj.on("transitionend", function () {
                _this.layerObj.off("transitionend");
                _this.layerObj.css({
                    transform: "",
                    transition: "",
                });
            });
            break;
        default:
            break;
    }
    this.ariaAccessbility(true, this.layerWrap);
    $("body").addClass("scroll-lock");
}