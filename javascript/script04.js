if (document.querySelector('.login img').getAttribute('src') === 'img/btn_login.png') {
    document.querySelector('.login img').setAttribute('src', 'img/btn_logout.png');
    document.querySelector('.login img').setAttribute('width', '59');
    document.querySelector('.login img').setAttribute('height', '18');
} else {
    document.querySelector('.login img').setAttribute('src', 'img/btn_login.png');
    document.querySelector('.login img').setAttribute('width', '48');
    document.querySelector('.login img').setAttribute('height', '18');
}