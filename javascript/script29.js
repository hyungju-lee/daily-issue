(function () {
    var test = document.querySelector(".test");
    var dimmed = document.querySelector(".dimmed");
    var ly_pop_wrap = Array.prototype.slice.call(document.querySelectorAll(".ly_pop_wrap"));
    var target;

    var isTestBtnFunc = function (e) {
        target = e.target;
        while (!target.classList.contains("testBtn")) {
            target = target.parentNode;
            if (target.nodeName === "BODY") {
                target = null;
                return ;
            }
        }
        if (!!target.dataset.layerIndex) {
            eachTestFunc();
        }
    }

    var eachTestFunc = function () {
        var indexNum = +target.dataset.layerIndex;
        var isVisibleDimmed = dimmed.style.display === "none" ? "block" : "none";
        var isVisibleLayer = ly_pop_wrap[indexNum].style.display === "none" ? "block" : "none";
        dimmed.style.display = isVisibleDimmed;
        ly_pop_wrap.forEach(function (val, i) {
            if (indexNum === i) {
                ly_pop_wrap[i].style.display = isVisibleLayer;
            } else {
                ly_pop_wrap[i].style.display = "none";
            }
        })
    }

    test.addEventListener("click", function (e) {
        isTestBtnFunc(e);
    })
})()