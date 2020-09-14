var eventBtn = Array.prototype.slice.call(document.querySelectorAll('.event .btn'));

for (var i=0; i<eventBtn.length; i++) {
    if (eventBtn[i].classList.contains('is_disabled')) {
        eventBtn[i].classList.remove('is_disabled');
    } else {
        eventBtn[i].classList.add('is_disabled');
    }
}