((): void => {
    const header = (document.querySelector<HTMLDivElement>('.header'));

    const controllsSlider = (document.querySelectorAll<HTMLButtonElement>('.multiplay__button'));
    const sliderItems = (document.querySelectorAll<HTMLDivElement>('.multiplay__item'));

    // const characters = (document.querySelectorAll<HTMLDivElement>('.pillar__img'));
    

    /* ------------------------------------------------ */
    /* ----------------- Scroll header ---------------- */
    /* ------------------------------------------------ */
    function handleScrollHeader(): void {
        const { scrollY } = window;
        scrollY >= 400 ? header?.classList.add('filter') : header?.classList.remove('filter');
    }

    window.addEventListener('scroll', handleScrollHeader)



    /* ------------------------------------------------ */
    /* -------------------- Slider -------------------- */
    /* ------------------------------------------------ */
    let contador: number = 0;
    function conditional (): void {
        sliderItems.forEach((item: HTMLDivElement, i: number) => {
            item.style.transform = `translateX(-${contador}00%)`;
            item.classList.remove('visibility');
        })
        sliderItems[contador].classList.add('visibility');
        
        contador >= sliderItems.length - 1 ? controllsSlider[1].classList.add('ocultar') : controllsSlider[1].classList.remove('ocultar');
        contador <= 0 ? controllsSlider[0].classList.add('ocultar') : controllsSlider[0].classList.remove('ocultar');
    }
    conditional();
    const handleControllsSlider = {
        next: (): void => {
            contador++;
            conditional();
        },
        prev: (): void => {
            contador--;
            conditional();
        }
    }
    
    controllsSlider[0].addEventListener('click', handleControllsSlider.prev);
    controllsSlider[1].addEventListener('click', handleControllsSlider.next);




    // /* ------------------------------------------------ */
    // /* ------------------ Characters ------------------ */
    // /* ------------------------------------------------ */

})()
