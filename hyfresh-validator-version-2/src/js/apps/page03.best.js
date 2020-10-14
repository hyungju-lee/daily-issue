(function (win, $) {
   'use strict';
    win.HYFRESH.common = win.HYFRESH.common || {};

    var UTIL = win.HYFRESH.common.util;
    win.HYFRESH.best = (function(container){
        var defParams = {
            obj                     : container,
            selectClass: 'is-selected',
            activeClass: 'is-active',
            swiperOpts : {
                slidesPerView: 'auto',
                spaceBetween : 4,
                loop         : false,
                observer      : true,
                observeParents: true,
            },
        };
        return {
            init: function() {
                this.setElement();
                this.bindEvents();
                this.buildSwiper();
            },
            setElement : function() {
                this.obj                      = $(defParams.obj);
                this.gnb = this.obj.find('.gnb');
                this.products = this.obj.find('.products');
                this.bestCategoryTab = this.obj.find('.tab-category__area');
                this.bestTabSub = this.bestCategoryTab.find('.tab-sub');
                this.bestProducts = this.obj.find('.best__products');
                this.tabCategoryList = this.obj.find('.tab-category__list');
                this.tabCategoryItem = this.tabCategoryList.find('.tab-category__item');
                this.tabCategoryTab = this.tabCategoryList.find('.tab-category__link');
                this.tabSubList = this.obj.find('.tab-sub__list');
                this.tabSubItem = this.tabSubList.find('.tab-sub__item');
                this.tabSubTab = this.tabSubList.find('.tab-sub__link');
            },
            bindEvents: function() {
                $(win).on('load scroll', $.proxy(this.scrollEvent, this));
                this.tabCategoryTab.on('click', $.proxy(this.categoryTabFunc, this));
                this.tabSubTab.on('click', $.proxy(this.subTabFunc, this));
            },
            buildSwiper : function() {
                defParams.swiperObj = new Swiper(this.bestTabSub, defParams.swiperOpts);
            },
            scrollEvent : function() {
                var currentScroll = $(win).scrollTop(),
                    tabHeight = this.bestCategoryTab.outerHeight(),
                    gnbHeight = this.gnb.outerHeight();
                if(currentScroll >= this.products.offset().top - gnbHeight) {
                    this.bestCategoryTab.css({
                        position: 'fixed',
                        top:  42 + 'px'
                    })
                    this.bestProducts.css({
                        'padding-top': tabHeight + 'px'
                    })
                } else {
                    this.bestCategoryTab.removeAttr('style');
                    this.bestProducts.removeAttr('style');
                }
            },
            categoryTabFunc : function(e) {
                var target       = $(e.currentTarget),
                    targetParent = target.parent(),
                    targetParentIndex = targetParent.index();
                this.tabCategoryItem.removeClass(defParams.selectClass).eq(targetParentIndex).addClass(defParams.selectClass);
                this.tabCategoryItem.eq(targetParentIndex).find(this.tabSubItem).removeClass(defParams.activeClass).eq(0).addClass(defParams.activeClass);
                e.preventDefault();
            },
            subTabFunc : function(e) {
                var target       = $(e.currentTarget),
                    targetParent = target.parent();
                this.tabSubItem.removeClass(defParams.activeClass);
                targetParent.addClass(defParams.activeClass)
                e.preventDefault();
            }
        }
    })('.wrap-best')

    $(function () {
        if ($('.wrap-best').length) {
            HYFRESH.best.init();
        }
    });
})(window, window.jQuery);