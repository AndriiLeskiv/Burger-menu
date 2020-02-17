function burgerMenu(selector){
    let menu = $(selector);
    let buttom = menu.find('.burger-menu__buttton');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');

    buttom.on('click', (e) =>{
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu())

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');  
        
        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overFlow','hidden');
        }else{
            $('body').css('overFlow','visible');
        }
    }
}

burgerMenu('.burger-menu');