$(".case-view__btn").on("click", function () {
    // HYFRESH.productDetail.testerSwiperObj.update();
    HYFRESH.productDetail.testerSwiperObj.destroy();
    HYFRESH.productDetail.testerSwiperObj = new Swiper(
        ".tester-review-slide",
        {
            slidesPerView: "auto",
            spaceBetween: 15,
            pagination: ".swiper-pagination",
            paginationClickable: true,
            observer: true,
            observeParents: true,
            onPaginationRendered: function (swiperClass, paginationEl) {
                var bullet = $(paginationEl).find(".swiper-pagination-bullet");
                for (var i = 0; i < bullet.length; i++) {
                    bullet[i].innerText = "slide" + (i + 1);
                }
            },
        }
    );
});