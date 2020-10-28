(function () {
    $(".speaker").on("click", function () {
        var layerPopup = $(this).parents(".speech_list").find(".layer_wrap");
        layerPopup.css("display", "block");
        layerPopup.find(".inner_area").css({
            "transform": "translate3d(100%,0,0)",
            "opacity": 0,
        })
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                layerPopup.find(".inner_area").css({
                    "transition": "all 0.3s",
                    "transform": "translate3d(0,0,0)",
                    "opacity": 1,
                })
            })
        })
    })

    $(".layer_wrap .close_btn, .dimmed").on("click", function () {
        var layerWrap = $(this).parents(".layer_wrap");
        var layerArea = layerWrap.find(".inner_area")
        requestAnimationFrame(function () {
            layerArea.css({
                "transform": "translate3d(100%,0,0)",
                "opacity": 0,
            })
        })
        layerArea.on("transitionend", function () {
            $(this).off("transitionend")
            $(this).css({
                "transition": "",
            })
            layerWrap.css({
                "display": "none"
            })
            // no-scroll 클래스 제거 위치
        })
    })
})()