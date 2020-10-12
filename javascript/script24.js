switch (true) {
    case (this.opts.effect === 'default') :
        if (!this.opts.customToggle) {
            this.layerWrap.css({
                'display': 'block'
            });
            this.layerScrollInit();
            this.openAfterBugFunc();
        }
        break;
    case (this.opts.effect === 'fade') :
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
                if (indexOffset !== undefined) {
                    HYFRESH[pluginName].prototype.offsetFunc(_this, indexOffset)
                }
            })
        })
        this.layerWrap.on('transitionend', function () {
            _this.layerWrap.off('transitionend');
            _this.layerWrap.css({
                'transition': ''
            })
        })
        break;
    case (this.opts.effect === 'slide-btt' || this.opts.effect === 'slide-ttb'
        || this.opts.effect === 'slide-rtl' || this.opts.effect === 'slide-ltr') :
        var effectArr = this.opts.effect.split('-');
        this.layerWrap.css('display', 'block');
        this.dimmedObj.css({
            'opacity': 0,
        })
        this.layerObj.css({
            'display' : 'block',
            'transform':
                effectArr[1] === 'btt' ? 'translate3d(0, 100%, 0)' :
                    effectArr[1] === 'ttb' ? 'translate3d(0, -100%, 0)' :
                        effectArr[1] === 'rtl' ? 'translate3d(100%, 0, 0)' :
                            'translate3d(-100%, 0, 0)',
            'opacity': 0,
        });
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                _this.dimmedObj.css({
                    'opacity': 1,
                    'transition': 'all 0.25s'
                })
                _this.layerObj.css({
                    'opacity': 1,
                    'transform': 'translate3d(0, 0, 0)',
                    'transition': 'all 0.25s'
                })
            })
        })
        this.layerObj.on('transitionend', function () {
            _this.layerObj.off('transitionend');
            _this.layerObj.css({
                'transform': '',
                'transition': ''
            })
            _this.dimmedObj.css({
                'opacity': '',
                'transition': ''
            })
        })
        break;
    default :
        break;
}