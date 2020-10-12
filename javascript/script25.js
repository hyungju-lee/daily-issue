switch (true) {
    case (this.opts.effect === 'default') :
        if (!this.opts.customToggle) {
            this.layerWrap.css({
                'display': 'none'
            });
        }
        this.closeAfterBugFunc();
        break
    case (this.opts.effect === 'fade') :
        this.layerWrap.css({
            'opacity': 0,
            'transition': 'opacity 0.3s'
        })
        this.layerWrap.on('transitionend', function () {
            _this.layerWrap.off('transitionend');
            _this.layerWrap.css({
                'transition': '',
                'opacity': '',
                'display': 'none',
            })
            _this.focusOutObj.hide();
        })
        break;
    case (this.opts.effect === 'slide-btt' || this.opts.effect === 'slide-ttb'
        || this.opts.effect === 'slide-rtl' || this.opts.effect === 'slide-ltr') :
        var effectArr = this.opts.effect.split('-');
        this.layerWrap.css({
            'opacity': 0,
            'transition': 'all 0.25s'
        })
        this.layerObj.css({
            'transform':
                effectArr[1] === 'btt' ? 'translate3d(0, 100%, 0)' :
                    effectArr[1] === 'ttb' ? 'translate3d(0, -100%, 0)' :
                        effectArr[1] === 'rtl' ? 'translate3d(100%, 0, 0)' :
                            'translate3d(-100%, 0, 0)',
            'transition': 'all 0.25s'
        })
        this.layerObj.on('transitionend', function () {
            _this.layerObj.off('transitionend');
            _this.layerObj.css({
                'transform': '',
                'transition': ''
            })
            _this.layerWrap.css({
                'opacity': '',
                'transition': '',
                'display': 'none'
            })
        })
        break;
    default :
        break;
}