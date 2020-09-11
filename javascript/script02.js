(function () {
    var scrollFunc = function () {
        var currentScroll = $(win).scrollTop();
        var bottom = document.body.scrollHeight - innerHeight;
        var move = currentScroll - defParams.lastScrollTop;
        if (move < 0) {
            if (currentScroll <= 0) return
            // 실행식
        } else {
            if (move > 0) {
                if (currentScroll >= bottom) return
                // 실행식
            }
        }
        defParams.lastScrollTop = currentScroll;
    }
})()

