(function () {
    var header = (document.querySelector('.header'));
    var menu = document.querySelector('.header__menu');
    var btnMenu = document.querySelector('.header__btn');
    var controllsSlider = (document.querySelectorAll('.multiplay__button'));
    var sliderItems = (document.querySelectorAll('.multiplay__item'));
    /* ------------------------------------------------ */
    /* ----------------- Scroll header ---------------- */
    /* ------------------------------------------------ */
    function handleScrollHeader() {
        var scrollY = window.scrollY;
        scrollY >= 100 ? header === null || header === void 0 ? void 0 : header.classList.add('filter') : header === null || header === void 0 ? void 0 : header.classList.remove('filter');
    }
    window.addEventListener('scroll', handleScrollHeader);
    /* ------------------------------------------------ */
    /* ------------------- Menu movil ----------------- */
    /* ------------------------------------------------ */
    btnMenu.addEventListener('click', function () { return menu === null || menu === void 0 ? void 0 : menu.classList.toggle('active'); });
    /* ------------------------------------------------ */
    /* -------------------- Slider -------------------- */
    /* ------------------------------------------------ */
    var contador = 0;
    function conditional() {
        sliderItems.forEach(function (item, i) {
            item.style.transform = "translateX(-".concat(contador, "00%)");
            item.classList.remove('visibility');
        });
        sliderItems[contador].classList.add('visibility');
        contador >= sliderItems.length - 1 ? controllsSlider[1].classList.add('ocultar') : controllsSlider[1].classList.remove('ocultar');
        contador <= 0 ? controllsSlider[0].classList.add('ocultar') : controllsSlider[0].classList.remove('ocultar');
    }
    conditional();
    var handleControllsSlider = {
        next: function () {
            contador++;
            conditional();
        },
        prev: function () {
            contador--;
            conditional();
        }
    };
    controllsSlider[0].addEventListener('click', handleControllsSlider.prev);
    controllsSlider[1].addEventListener('click', handleControllsSlider.next);
})();
