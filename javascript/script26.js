(function () {
    $(".box_wrap a").on("click", function () {
        $(".layer_wrap").css("display", "block");
        $(".layer_wrap .inner_area").css({
            "transform": "translate3d(100%,0,0)",
            "opacity": 0,
        })
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                $(".layer_wrap .inner_area").css({
                    "transition": "all 0.3s",
                    "transform": "translate3d(0,0,0)",
                    "opacity": 1,
                })
            })
        })
    })

    $(".layer_wrap .close_btn, .dimmed").on("click", function () {
        requestAnimationFrame(function () {
            $(".layer_wrap .inner_area").css({
                "transform": "translate3d(100%,0,0)",
                "opacity": 0,
            })
        })
        $(".layer_wrap .inner_area").on("transitionend", function () {
            $(this).off("transitionend")
            $(this).css({
                "transition": "",
            })
            $(".layer_wrap").css({
                "display": "none"
            })
            // no-scroll 클래스 제거 위치
        })
    })
})()