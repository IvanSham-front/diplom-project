const elemsForModalCloseArr = [overlayEl, btnCloseEl];
const elemsForModalOpenArr =  [btnOpenModalEl, btnOpenModalFooterEl, btnOrderProjectEl];

let activeElement;

for (let i = 0; i < elemsForModalOpenArr.length; i++) {
    elemsForModalOpenArr[i].addEventListener('click', function(e){
        e.preventDefault();
        modalWindowEl.classList.add('modal-block_open-js');
        overlayEl.classList.add('overlay_open-js');
        setTimeout(()=> btnCloseEl.focus(), 100);
        activeElement = this;
        document.body.style.overflowY = 'hidden';
        document.body.parentNode.style.overflowY = 'hidden';
    })
}

for (let i = 0; i < elemsForModalCloseArr.length; i++) {
    elemsForModalCloseArr[i].addEventListener('click', function(e){
        e.preventDefault();
        modalWindowEl.classList.remove('modal-block_open-js');
        overlayEl.classList.remove('overlay_open-js');
        formEl.reset();
        activeElement.focus();
        document.body.style.overflowY = '';
        document.body.parentNode.style.overflowY = '';
    })
}

document.addEventListener('keydown', function(e){
    if (e.keyCode === 27) {
        modalWindowEl.classList.remove('modal-block_open-js');
        overlayEl.classList.remove('overlay_open-js');
        formEl.reset();
        if (navEl.classList.contains('nav_open-js')) {
            btnMenuEl.focus();
        } else {
            if (activeElement) {
                activeElement.focus();
            }
        };
        navEl.classList.remove('nav_open-js');
        navMenuEl.classList.remove('nav__menu_open-js');
        document.body.style.overflowY = '';
        document.body.parentNode.style.overflowY = '';
    }
}); 

$(function($){
    const numberEl = $('#number-js');
    numberEl.mask('+9(999)999-99-99');
});
