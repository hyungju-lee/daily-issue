var list = Array.prototype.slice.call(document.querySelectorAll('ul'));
for (var i=0; i<list.length; i++) {
    list[i].addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}