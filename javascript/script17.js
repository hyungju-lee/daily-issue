var onClickFunc = function (e) {
    e.preventDefault();
    var target                = $(e.currentTarget),
        targetParent          = $(e.delegateTarget),
        // IE 호환성을 위해 top 사용
        // css가 바뀌기 전에 현재 요소의 위치정보 저장
        clientTop             = e.currentTarget.getBoundingClientRect().top;
    
    this.opts.activeIndex = targetParent.index();
    if (this.oldIndex === this.opts.activeIndex) {
        targetParent.toggleClass(this.opts.expandClass);
        if(UTIL.isSupportTransform) {
            targetParent.find(this.opts.listContents).stop().slideToggle();
        } else {
            targetParent.find(this.opts.listContents).stop().toggle();
        }
        targetParent.hasClass(this.opts.expandClass) ? target.attr(this.opts.ariaExpanded, true): target.attr(this.opts.ariaExpanded, false);
    } else {
        this.viewExpandFunc();
    }
    this.oldIndex = this.opts.activeIndex;
    
    // 위치가 바뀐 후의 위치정보와 아까 위에서 위치가 바뀌기 전의 위치정보를 가지고 클릭한 그 위치에 스크롤탑이 그대로 위치한것처럼 보이게 하기
    scrollTo(0, e.currentTarget.getBoundingClientRect().top + pageYOffset - clientTop);
}

