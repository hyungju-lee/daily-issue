(function (){
    var el;
    var num = Array.prototype.slice.call(document.querySelectorAll('.first .money .num img'));
    var num2 = Array.prototype.slice.call(document.querySelectorAll('.second .money .num img'));
    var gauge = {
        el : Array.prototype.slice.call(document.querySelectorAll('.first .gauge .gauge_img')),
        display : false,
        count : 0,
    };
    var gauge2 = {
        el : Array.prototype.slice.call(document.querySelectorAll('.second .gauge .gauge_img')),
        display : false,
        count : 0,
    };
    var dimmed = document.querySelector('.dimmed');
    var layerPopup = {
        el : Array.prototype.slice.call(document.querySelectorAll('.ly_pop')),
        tablePopup : {
            tableTr : Array.prototype.slice.call(document.querySelectorAll('.ly_pop.tbl tr')),
            tablePagination: Array.prototype.slice.call(document.querySelectorAll('.ly_pop.tbl .pg')),
            tableShow : true,
            tableBtn : Array.prototype.slice.call(document.querySelectorAll('.ly_pop.tbl .btn_arr')),
        },
    };
    var receiveBtn = Array.prototype.slice.call(document.querySelectorAll('.event .btn_receive'));
    var chanceBtn = Array.prototype.slice.call(document.querySelectorAll('.event .btn_chance'));

    var randomMoney = function (arg) {
        for (var i=0; i<arg.length; i++) {
            arg[i].setAttribute('src', 'img/img_font_0' + Math.floor(Math.random()*10) + '.png');
        }
    }
    var gaugeFunc = function (obj) {
        if (!obj.display) {
            for (var i=0; i<obj.el.length; i++) {
                obj.el[i].style.display = 'none';
            }
            obj.display = true;
        } else {
            obj.el[obj.count].style.display = 'block';
            obj.count++;
            if (obj.count > obj.el.length - 1) {
                obj.count = 0;
                obj.display = false;
            }
        }
    }
    var loopFunc = function (target, cls, property1, property2) {
        for (var i=0; i<target.length; i++) {
            if (!target[i].classList.contains(cls)) {
                target[i].style.display = property1;
            } else {
                if (property2) {
                    target[i].style.display = property2;
                }
            }
        }
    }
    var loopLayer = function (index) {
        if (layerPopup.el[index].style.display === 'block') {
            dimmed.style.display = 'none';
            for (var i=0; i<layerPopup.el.length; i++) {
                layerPopup.el[i].style.display = 'none';
            }
        } else {
            dimmed.style.display = 'block';
            for (var i=0; i<layerPopup.el.length; i++) {
                layerPopup.el[i].style.display = 'none';
            }
            layerPopup.el[index].style.display = 'block';
        }
    }
    var isCase = function (e) {
        el = e.target;
        while (!el.classList.contains('case')) {
            el = el.parentNode;
            if (el.nodeName === 'BODY') {
                el = null;
                return
            }
        }
    }
    var eachCase = function () {
        switch (true) {
            case el.classList.contains('case1') :
                scrollTo(0, 0);
                if (document.querySelector('.login img').getAttribute('src') === 'img/btn_login.png') {
                    document.querySelector('.login img').setAttribute('src', 'img/btn_logout.png');
                    document.querySelector('.login img').setAttribute('width', '59');
                    document.querySelector('.login img').setAttribute('height', '18');
                } else {
                    document.querySelector('.login img').setAttribute('src', 'img/btn_login.png');
                    document.querySelector('.login img').setAttribute('width', '48');
                    document.querySelector('.login img').setAttribute('height', '18');
                }
                break;
            case el.classList.contains('case2') :
                scrollTo(0, 300);
                randomMoney(num);
                break;
            case el.classList.contains('case3') :
                scrollTo(0, 300);
                gaugeFunc(gauge);
                break;
            case el.classList.contains('case4') :
                scrollTo(0, 1200);
                randomMoney(num2);
                break;
            case el.classList.contains('case5') :
                scrollTo(0, 1200);
                gaugeFunc(gauge2);
                break;
            case el.classList.contains('case6') :
                scrollTo(0, 900);
                if (receiveBtn[0].classList.contains('is_disabled')) {
                    receiveBtn[0].classList.remove('is_disabled')
                    receiveBtn[0].classList.remove('type2')
                } else {
                    receiveBtn[0].classList.add('is_disabled')
                }
                break;
            case el.classList.contains('case6-1') :
                scrollTo(0, 900);
                if (receiveBtn[0].classList.contains('is_disabled')) {
                    receiveBtn[0].classList.remove('is_disabled')
                    receiveBtn[0].classList.remove('type2')
                } else {
                    receiveBtn[0].classList.add('is_disabled')
                    receiveBtn[0].classList.add('type2')
                }
                break;
            case el.classList.contains('case6-2') :
                scrollTo(0, 900);
                if (chanceBtn[0].classList.contains('is_disabled')) {
                    chanceBtn[0].classList.remove('is_disabled')
                    chanceBtn[0].classList.remove('type2')
                } else {
                    chanceBtn[0].classList.add('is_disabled')
                    chanceBtn[0].classList.add('type2')
                }
                break;
            case el.classList.contains('case6-3') :
                scrollTo(0, 1500);
                if (receiveBtn[1].classList.contains('is_disabled')) {
                    receiveBtn[1].classList.remove('is_disabled')
                    receiveBtn[1].classList.remove('type2')
                } else {
                    receiveBtn[1].classList.add('is_disabled')
                }
                break;
            case el.classList.contains('case6-4') :
                scrollTo(0, 1500);
                if (receiveBtn[1].classList.contains('is_disabled')) {
                    receiveBtn[1].classList.remove('is_disabled')
                    receiveBtn[1].classList.remove('type2')
                } else {
                    receiveBtn[1].classList.add('is_disabled')
                    receiveBtn[1].classList.add('type2')
                }
                break;
            case el.classList.contains('case6-5') :
                scrollTo(0, 1500);
                if (chanceBtn[1].classList.contains('is_disabled')) {
                    chanceBtn[1].classList.remove('is_disabled')
                    chanceBtn[1].classList.remove('type2')
                } else {
                    chanceBtn[1].classList.add('is_disabled')
                    chanceBtn[1].classList.add('type2')
                }
                break;
            case el.classList.contains('case7') :
                loopLayer(0);
                break;
            case el.classList.contains('case8') :
                if (layerPopup.tablePopup.tableShow) {
                    loopFunc(layerPopup.tablePopup.tableTr, 'no_data', 'none', 'table-row');
                    document.querySelector('.ly_pop.tbl thead tr').style.display = 'table-row';
                    loopFunc(layerPopup.tablePopup.tablePagination, 'on', 'none');
                    for (var i=0; i<layerPopup.tablePopup.tableBtn.length; i++) {
                        layerPopup.tablePopup.tableBtn[i].classList.remove('active');
                    }
                    layerPopup.tablePopup.tableShow = false;
                } else {
                    loopFunc(layerPopup.tablePopup.tableTr, 'no_data', 'table-row', 'none');
                    loopFunc(layerPopup.tablePopup.tablePagination, 'on', 'inline-block');
                    for (var i=0; i<layerPopup.tablePopup.tableBtn.length; i++) {
                        layerPopup.tablePopup.tableBtn[i].classList.add('active');
                    }
                    layerPopup.tablePopup.tableShow = true;
                }
                break;
            case el.classList.contains('case9') :
                loopLayer(1);
                break;
            case el.classList.contains('case10') :
                loopLayer(2);
                break;
            case el.classList.contains('case11') :
                loopLayer(3);
                break;
            case el.classList.contains('case12') :
                loopLayer(4);
                break;
            case el.classList.contains('case13') :
                loopLayer(5);
                break;
            case el.classList.contains('case14') :
                loopLayer(6);
                break;
            case el.classList.contains('case15') :
                loopLayer(7);
                break;
            case el.classList.contains('case16') :
                loopLayer(8);
                break;
            case el.classList.contains('case17') :
                loopLayer(9);
                break;

            default :
                break;
        }
    }
    document.querySelector('.caseview').addEventListener('click', function (e) {
        e.preventDefault();
        isCase(e);
        eachCase(e);
    })
    document.querySelector('.dimmed').addEventListener('click', function (e) {
        e.currentTarget.style.display = 'none';
        for (var i=0; i<layerPopup.el.length; i++) {
            layerPopup.el[i].style.display = 'none';
        }
    })
})()