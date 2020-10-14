(function (win, $) {
   'use strict';
    win.HYFRESH.common = win.HYFRESH.common || {};

    var UTIL = win.HYFRESH.common.util;
    win.HYFRESH.main = (function(container){
        var defParams = {
            obj             : container,
            expandClass     : 'is-expanded',
            hideClass       : 'is-hide',
            expandToggleText: ['자세히 보기', '상세내용 닫기'],

            mainBannerSwiper    : '.main-banner-slide',
            mainBannerSwiperOpts: {
                slidePerView        : 1,
                loop                : true,
                pagination          : '.swiper-pagination',
                paginationClickable : true,
                lazyLoading         : true,
                onPaginationRendered: function(swiperClass, paginationEl) {
                    var bullet = $(paginationEl).find('.swiper-pagination-bullet');
                    for (var i=0; i<bullet.length; i++) {
                        bullet[i].innerText = 'slide' + (i + 1);
                    }
                }
            },
            mainMdPickSwiper    : '.main-md-pick-slide',
            mainMdPickSwiperOpts: {
                slidesPerView       : 'auto',
                spaceBetween        : 9,
                pagination          : '.swiper-pagination',
                paginationClickable : true,
                lazyLoading         : true,
                onPaginationRendered: function(swiperClass, paginationEl) {
                    var bullet = $(paginationEl).find('.swiper-pagination-bullet');
                    for (var i=0; i<bullet.length; i++) {
                        bullet[i].innerText = 'slide' + (i + 1);
                    }
                }
            },
            currentIndex             : 0,
            mainBestCategorySwiper   : '.main-best-category-slide',
            mainBestCategorySlideItem: '.main-best-category-slide .swiper-slide',
            mainBestCategoryEl       : null,
            tabClick                 : function (e) {
              defParams.mainBestCategoryEl = e.target;
              while (!$(defParams.mainBestCategoryEl).hasClass('swiper-slide')) {
                defParams.mainBestCategoryEl = defParams.mainBestCategoryEl.parentNode;
                if (defParams.mainBestCategoryEl === "BODY") {
                  defParams.mainBestCategoryEl = null;
                  return
                }
              }
            },
            activeSlide: function(key) {
              if (key) {
                $(defParams.mainBestCategorySwiper).find('.swiper-slide[data-index=\''+defParams.currentIndex+'\']').addClass('swiper-slide-active');
              } else {
                $(defParams.mainBestCategorySwiper).find('.swiper-slide[data-index=\''+defParams.currentIndex+'\']').removeClass('swiper-slide-active');
              }
            },
            mainBestCategorySwiperOpts: {
                slidesPerView   : 'auto',
                spaceBetween    : 26,
                freeMode        : true,
                slidePrevClass  : 'swiper-meanlease-prev',
                slideNextClass  : 'swiper-meanlease-next',
                slideActiveClass: 'swiper-meanlease-active',
                lazyLoading     : true,
                onInit          : function () {
                    for (var i = 0; i < $(defParams.mainBestCategorySlideItem).length; i++) {
                        $(defParams.mainBestCategorySlideItem)[i].setAttribute('data-index', i);
                        if (i === 0) {
                            $(defParams.mainBestCategorySlideItem)[i].classList.add('swiper-slide-active');
                        }
                    }
                },
                onClick: function (swiper, event) {
                    defParams.tabClick(event);
                    defParams.activeSlide(false);
                    defParams.currentIndex = defParams.mainBestCategoryEl.getAttribute('data-index');
                    defParams.activeSlide(true);
                    defParams.mainBestSwiperObj.slideTo(defParams.currentIndex*2);
                },
                onTap: function (swiper, event) {
                    defParams.tabClick(event);
                    defParams.activeSlide(false);
                    defParams.currentIndex = defParams.mainBestCategoryEl.getAttribute('data-index');
                    defParams.activeSlide(true);
                    defParams.mainBestSwiperObj.slideTo(defParams.currentIndex*2);
                },
            },
            mainBestSwiper    : '.main-best-slide',
            mainBestSlide     : '.main-best-slide .swiper-slide',
            mainBestSwiperOpts: {
                slidesPerView      : 1,
                spaceBetween       : 30,
                pagination         : '.swiper-pagination',
                paginationClickable: true,
                lazyLoading        : true,
                onInit             : function () {
                    for (var i=0; i<$(defParams.mainBestSlide).length; i++) {
                        $(defParams.mainBestSlide)[i].setAttribute('data-index', Math.floor(i/2)) ;
                    }
                },
                onTransitionStart: function () {
                    defParams.activeSlide(false);
                    defParams.currentIndex = document.querySelector('.main-best-slide .swiper-slide-active').getAttribute('data-index');
                    defParams.activeSlide(true);
                },
                onPaginationRendered: function (swiperClass, paginationEl) {
                    var bullet = $(paginationEl).find('.swiper-pagination-bullet');
                    for (var i=0; i<bullet.length; i++) {
                        bullet[i].innerText = 'slide' + (i + 1);
                    }
                }
            },
            mainLiveSwiper    : '.main-live-slide',
            mainLiveSwiperOpts: {
                slidePerView        : 1,
                loop                : true,
                autoHeight          : true,
                pagination          : '.main-section--live .swiper-pagination',
                paginationClickable : true,
                lazyLoading         : true,
                onPaginationRendered: function(swiperClass, paginationEl) {
                    var bullet = $(paginationEl).find('.swiper-pagination-bullet');
                    for (var i=0; i<bullet.length; i++) {
                        bullet[i].innerText = 'slide' + (i + 1);
                    }
                }
            },
            mainSpecialPriceSwiper    : '.main-special-price-slide',
            mainSpecialPriceSwiperOpts: {
                slidesPerView       : 'auto',
                nextButton          : '.swiper-button-next',
                prevButton          : '.swiper-button-prev',
                pagination          : '.swiper-pagination',
                paginationClickable : true,
                lazyLoading         : true,
                onPaginationRendered: function(swiperClass, paginationEl) {
                    var bullet = $(paginationEl).find('.swiper-pagination-bullet');
                    for (var i=0; i<bullet.length; i++) {
                        bullet[i].innerText = 'slide' + (i + 1);
                    }
                }
            },
            mainCertificateSwiper    : '.main-certificate-slide',
            mainCertificateSwiperOpts: {
                slidesPerView: 'auto',
            },
            mainReviewSwiper    : '.main-review-slide',
            mainReviewSwiperOpts: {
                spaceBetween        : 9,
                pagination          : '.swiper-pagination',
                paginationClickable : true,
                lazyLoading         : true,
                onPaginationRendered: function(swiperClass, paginationEl) {
                    var bullet = $(paginationEl).find('.swiper-pagination-bullet');
                    for (var i=0; i<bullet.length; i++) {
                        bullet[i].innerText = 'slide' + (i + 1);
                    }
                }
            },
            mainReviewAutoSwiper    : '.main-review-auto-slide',
            mainReviewAutoSwiperOpts: {
                direction   : 'vertical',
                autoplay    : 2500,
                speed       : 1000,
                loop        : true,
                onlyExternal: true,
                noSwiping   : true
            },
        };
        return {
            init: function() {
                this.setElement();
                this.bindEvents();
                this.buildSwiper();
            },
            setElement : function() {
                this.obj                    = $(defParams.obj);
                this.mainBannerSwiper       = this.obj.find(defParams.mainBannerSwiper);
                this.mainMdPickSwiper       = this.obj.find(defParams.mainMdPickSwiper);
                this.mainSpecialPriceSwiper = this.obj.find(defParams.mainSpecialPriceSwiper);
                this.mainBestSwiper         = this.obj.find(defParams.mainBestSwiper);
                this.mainBestCategorySwiper = this.obj.find(defParams.mainBestCategorySwiper);
                this.mainLiveSwiper         = this.obj.find(defParams.mainLiveSwiper);
                this.mainCertificateSwiper  = this.obj.find(defParams.mainCertificateSwiper);
                this.mainReviewSwiper       = this.obj.find(defParams.mainReviewSwiper);
                this.mainReviewAutoSwiper   = this.obj.find(defParams.mainReviewAutoSwiper);

                this.mainCertificateInner         = this.obj.find('.main-certificate__inner');
                this.mainCertificateDetail         = this.obj.find('.main-certificate-detail');
                this.btnToggleMainCertificate     = $('.main-certificate__btn');
                this.btnToggleMainCertificateText = this.btnToggleMainCertificate.find('.main-certificate__text-toggle');

                this.btnLayerMainFeedVideo = $('.main-feed-detail__btn-video');
                this.videoLayerMainFeed    = $('.main-feed-detail__box-media video');
                this.btnMainFeedLayerOpen  = $('.main-feed__btn');
                this.btnMainFeedLayerClose = $('.main-feed-layer .common-layer__box-btn-close');
                this.targetLazyLoadImage   = $('.js-image-lazy');
            },
            bindEvents: function() {
                this.btnToggleMainCertificate.on('click', $.proxy(this.toggleMainCertificate, this));
                this.btnLayerMainFeedVideo.on('click', $.proxy(this.playLayerMainFeedVideo, this));
                this.videoLayerMainFeed.on('click', $.proxy(this.pauseLayerMainFeedVideo, this));
                this.btnMainFeedLayerOpen.on('click', $.proxy(this.initMainFeedVideo, this));
                this.btnMainFeedLayerClose.on('click', $.proxy(this.closeInitMainFeedVideo, this));
                $(win).on('load', $.proxy(this.lazyLoadFunc, this));
                $(document).on('click', '.main-certificate__btn', $.proxy(this.checkMainCertificate, this));
            },
            buildSwiper : function() {
                defParams.mainBannerSwiperObj       = new Swiper(this.mainBannerSwiper, defParams.mainBannerSwiperOpts);
                defParams.mainMdPickSwiperObj       = new Swiper(this.mainMdPickSwiper, defParams.mainMdPickSwiperOpts);
                defParams.mainSpecialPriceSwiperObj = new Swiper(this.mainSpecialPriceSwiper, defParams.mainSpecialPriceSwiperOpts);
                defParams.mainBestSwiperObj         = new Swiper(this.mainBestSwiper, defParams.mainBestSwiperOpts);
                defParams.mainBestCategorySwiperObj = new Swiper(this.mainBestCategorySwiper, defParams.mainBestCategorySwiperOpts);
                defParams.mainLiveSwiperObj         = new Swiper(this.mainLiveSwiper, defParams.mainLiveSwiperOpts);
                defParams.mainCertificateSwiperObj  = new Swiper(this.mainCertificateSwiper, defParams.mainCertificateSwiperOpts);
                defParams.mainReviewSwiperObj       = new Swiper(this.mainReviewSwiper, defParams.mainReviewSwiperOpts);
                defParams.mainReviewAutoSwiperObj   = new Swiper(this.mainReviewAutoSwiper, defParams.mainReviewAutoSwiperOpts);
            },
            checkMainCertificate : function() {
                if(this.mainCertificateInner.hasClass(defParams.expandClass)) {
                    this.hideMainCertificate();
                } else {
                    this.showMainCertificate();
                }
            },
            showMainCertificate : function() {
                this.mainCertificateInner.addClass(defParams.expandClass);
                this.mainCertificateDetail.show();
                this.btnToggleMainCertificate.blur();
            },
            hideMainCertificate : function() {
                this.mainCertificateInner.removeClass(defParams.expandClass);
                this.btnToggleMainCertificate.focus();
                this.mainCertificateDetail.hide();
            },
            playLayerMainFeedVideo : function(e) {
                var target       = $(e.currentTarget),
                    targetParent = target.parent('.main-feed-detail__box-media'),
                    targetVideo  = targetParent.find('video');
                if(targetVideo[0].play() !== 0) {
                    targetVideo[0].play();
                    target.addClass(defParams.hideClass);
                }
            },
            pauseLayerMainFeedVideo : function(e) {
                var target             = $(e.currentTarget),
                    targetParent       = target.parent('.main-feed-detail__box-media'),
                    targetBtnPlayVideo = targetParent.find('.main-feed-detail__btn-video');
                if(target[0].pause() !== 0) {
                    target[0].pause();
                    targetBtnPlayVideo.removeClass(defParams.hideClass);
                }
            },
            initMainFeedVideo : function() {
                this.btnLayerMainFeedVideo.removeClass(defParams.hideClass);
            },
            closeInitMainFeedVideo : function(e) {
                var target       = $(e.currentTarget),
                    targetParent = target.parents('.main-feed-layer'),
                    targetVideo  = targetParent.find('video');
                if(targetVideo.length) {
                    targetVideo[0].pause();
                    targetVideo[0].currentTime = 0;
                    this.btnLayerMainFeedVideo.removeClass(defParams.hideClass);
                }
            },
            lazyLoadFunc : function() {
                this.targetLazyLoadImage.Lazy({
                    effect    : "fadeIn",
                    effectTime: 300,
                    threshold : 0
                });
            }
        }
    })('.wrap-main')

    $(function () {
        if ($('.wrap-main').length) {
            HYFRESH.main.init();
        }
    });
})(window, window.jQuery);