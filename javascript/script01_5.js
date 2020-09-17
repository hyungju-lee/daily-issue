// <ul class="test">
//     <li><a href="#" class="testCase testCase1">Menu toggle</a></li>
//     <li><a href="#" class="testCase testCase2">Search Bar</a></li>
//     <li><a href="#" class="testCase testCase3">tab menu</a></li>
//     <li><a href="#" class="testCase testCase4">notice</a></li>
//     <li><a href="#" class="testCase testCase5">search rctly</a></li>
//     <li><a href="#" class="testCase testCase6">Add/remove friends</a></li>
//     <li><a href="#" class="testCase testCase7">No result</a></li>
//     <li><a href="#" class="testCase testCase8">Alert - leave</a></li>
//     <li><a href="#" class="testCase testCase9">Alert - notice</a></li>
// </ul>

(function () {
    var el;
    var testLi = Array.prototype.slice.call(document.querySelectorAll('.test li'));
    var searchBarOnOff = {
        searchParent: document.querySelector('.srch__ctrl').parentNode,
        searchBar: document.querySelector('.srch__ctrl'),
        searchBarAfter: document.querySelector('.notice-srch-box'),
    }
    var tabMenu = {
        tabParent: document.querySelector('.tab__lst').parentNode,
        tabList: document.querySelector('.tab__lst'),
        tabListAfter: document.querySelector('.srch'),
    }
    var notice = {
        noticeParent: document.querySelector('.tx-notice').parentNode,
        txNotice: document.querySelector('.tx-notice'),
    }
    var searchRctly = {
        srchRctlyParent: document.querySelector('.srch-rctly').parentNode,
        srchRctly: document.querySelector('.srch-rctly'),
    }
    var notiScrch = {
        notiScrchParent: document.querySelector('.notice-srch-box').parentNode,
        notiScrch: document.querySelector('.notice-srch-box'),
        notiScrchAfter: document.querySelector('.scroll-box')
    }
    var rctlyItem = document.querySelectorAll('.rctly__item');
    var scrollBox = document.querySelector('.scroll-box');
    var resultBox = document.querySelector('.result-box');
    var footerSticky = document.querySelector('.footer-sticky');
    var ly = document.querySelector('.ly');
    var lyNotice = document.querySelector('.ly-notice');

    var isCase = function (e) {
        el = e.target;
        while (!el.classList.contains('testCase')) {
            el = el.parentNode;
            if (el.nodeName === 'BODY') {
                el = null;
                return
            }
        }
    }

    var showAlert = function(type) {
        if(type == 'leave') {
            ly.style.display = 'block';
            lyNotice.style.display = 'none';
        } else {
            lyNotice.style.display = 'block';
            lyNotice.classList.add('is-active');
            lyNotice.addEventListener('animationend', function () {
                lyNotice.classList.remove('is-active');
                lyNotice.style.display = 'none';
            })
            ly.style.display = 'none';
        }
    }

    var eachCase = function () {
        switch (true) {
            case el.classList.contains('testCase1') :
                for (var i=1; i<testLi.length; i++) {
                    testLi[i].classList.toggle('hide');
                }
                break;
            case el.classList.contains('testCase2') :
                if (searchBarOnOff.searchParent.querySelectorAll('.srch__ctrl').length) {
                    searchBarOnOff.searchParent.removeChild(searchBarOnOff.searchBar);
                } else {
                    searchBarOnOff.searchParent.insertBefore(searchBarOnOff.searchBar, searchBarOnOff.searchBarAfter);
                }
                break;
            case el.classList.contains('testCase3') :
                if (tabMenu.tabParent.querySelectorAll('.tab__lst').length) {
                    tabMenu.tabParent.removeChild(tabMenu.tabList);
                } else {
                    tabMenu.tabParent.insertBefore(tabMenu.tabList, tabMenu.tabListAfter);
                }
                break;
            case el.classList.contains('testCase4') :
                if (notice.noticeParent.querySelectorAll('.tx-notice').length) {
                    notice.noticeParent.removeChild(notice.txNotice);
                    if (!document.querySelector('.notice-srch-box').children.length) {
                        notiScrch.notiScrchParent.removeChild(notiScrch.notiScrch);
                    }
                } else {
                    if (!document.querySelectorAll('.notice-srch-box').length) {
                        notiScrch.notiScrchParent.insertBefore(notiScrch.notiScrch, notiScrch.notiScrchAfter);
                    }
                    notice.noticeParent.insertBefore(notice.txNotice, document.querySelector('.srch-rctly'));
                }
                break;
            case el.classList.contains('testCase5') :
                if (searchRctly.srchRctlyParent.querySelectorAll('.srch-rctly').length) {
                    searchRctly.srchRctlyParent.removeChild(searchRctly.srchRctly);
                    if (!document.querySelector('.notice-srch-box').children.length) {
                        notiScrch.notiScrchParent.removeChild(notiScrch.notiScrch);
                    }
                } else {
                    if (!document.querySelectorAll('.notice-srch-box').length) {
                        notiScrch.notiScrchParent.insertBefore(notiScrch.notiScrch, notiScrch.notiScrchAfter);
                    }
                    searchRctly.srchRctlyParent.insertBefore(searchRctly.srchRctly, null);
                }
                break;
            case el.classList.contains('testCase6') :
                rctlyItem[rctlyItem.length-1].classList.toggle('is-visible');
                break;
            case el.classList.contains('testCase7') :
                if (scrollBox.style.display === 'block') {
                    scrollBox.style.display = 'none';
                    footerSticky.style.display = 'none';
                    resultBox.style.display = '';
                } else {
                    scrollBox.style.display = 'block';
                    footerSticky.style.display = 'block';
                    resultBox.style.display = 'none';
                }
                break;
            case el.classList.contains('testCase8') :
                showAlert('leave');
                break;
            case el.classList.contains('testCase9') :
                showAlert('notice');
                break;
            default :
                break;
        }
    }
    document.querySelector('.test').addEventListener('click', function (e) {
        e.preventDefault();
        isCase(e);
        eachCase(e);
    })
})()