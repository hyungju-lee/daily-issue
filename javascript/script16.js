function toggleRollingReview() {
    var productDetail = HYFRESH.productDetail;
    $('.rolling-review').toggle();
    if ($('.rolling-review').css('display') === 'block') {
        productDetail.swiperObjs.productReviewAutoSwiperObj
            = new Swiper(productDetail.productReviewAutoSwiper, productDetail.swiperOpts.productReviewAutoSwiperOpts);
    } else {
        productDetail.swiperObjs.productReviewAutoSwiperObj.destroy();
    }
}