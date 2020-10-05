function toggleRollingReview() {
    var productDetail = HYFRESH.productDetail;
    $('.rolling-review').toggle();
    if ($('.rolling-review').css('display') === 'block') {
        productDetail.swiperObjs.productReviewAutoSwiperObj
            = new Swiper(productDetail.productReviewAutoSwiper, productDetail.swiperOpts.productReviewAutoSwiperOpts);
        var rectInfo = document.querySelector('.rolling-review').getBoundingClientRect();
        scrollTo(0, rectInfo.top + pageYOffset - (innerHeight - rectInfo.height) / 2);
    } else {
        productDetail.swiperObjs.productReviewAutoSwiperObj.destroy();
        var overviewRect = document.querySelector('.product-overview').getBoundingClientRect();
        scrollTo(0, overviewRect.bottom + pageYOffset - innerHeight / 2);
    }
}