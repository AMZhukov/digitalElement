//Меню
const toggleMenu = () => {
    const body = document.querySelector('body'),
        menuButton = body.querySelector('.menu-button > img'),
        menu = document.querySelector('.popup-menu');
    //menuItems = menu.querySelectorAll('ul>li');
    const handlerMenu = () => {
        //body.querySelector('menu').classList.toggle('active-menu');
        //menu.classList.toggle('active-menu');
        // console.log(getComputedStyle(menu, null).display === 'none');
        if (getComputedStyle(menu, null).display === 'none'){
            menu.style.display = "flex";
        }
        else menu.style.display = "none";
        /*if(!menu.style.transform || menu.style.transform === `translate(-100%)`) {
            menu.style.transform = `translate(0)`;
        }
        else {
            menu.style.transform = `translate(-100%)`;
        }*/
    };
    //btnMenu.addEventListener('click', handlerMenu);

    //menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

    body.addEventListener('click', (event) => {
        let target = event.target;
        console.log(target);
        //let targetMenu = target.closest('.menu');
        if (target.closest('.menu-button > img')) {
            menu.style.display = "flex";
        } else if (target.closest('.close-menu-btn')) {
            menu.style.display = "none"; //menu.style.display = 'none';
        } else if (target.tagName === 'A' ) {
            menu.style.display = "none"; //menu.style.display = 'none';
        }
    });
};
// toggleMenu();
export default toggleMenu;