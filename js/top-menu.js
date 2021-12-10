const topMenu = () => {
    const menu = document.querySelector('.menu')
    stateScroll = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > stateScroll) {
            menu.classList.add('menu__scrolling');
            stateScroll = window.scrollY;
        } else {
            menu.classList.remove('menu__scrolling');
            stateScroll = window.scrollY;
        }
    })
}

topMenu()