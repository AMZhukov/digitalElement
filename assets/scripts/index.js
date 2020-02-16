import '@styles/normalize.css';
import '@styles/app.scss';
import '@styles/header.scss';
import '@styles/hero.scss';
import '@styles/illustration.scss';
import '@styles/layout.css';
import '@styles/card-offers.scss';
import '@styles/our-clients.scss';
import '@styles/footer.scss';
import '@styles/contact-us.scss';
import '@styles/contact-details.scss';
import '@styles/maps.scss';
import '@styles/form.scss';
import '@styles/popup-menu.scss';
import '@styles/button-close.scss';
import '@styles/modal-window.scss';


import sendForm from './modules/sendForm';
import Validator from './modules/validator';
import modalWindows from './modules/modalWindows';
import animate from './modules/animatePeople';



if (document.querySelector('.modal-window')) {
    sendForm('form', '.modal-window', 'modal-window_display');
}

else if (document.querySelector('form')) {
    sendForm('form', '.modal-window');
}

if (document.querySelector('#form')) {
    const validator1 = new Validator({
        selector: '#form',
        pattern: {},
        method: {
            // 'phone': [
            //     ['notEmpty'],
            //     ['pattern', 'phone']
            // ],
            'email': [
                ['notEmpty'],
                ['pattern', 'email']
            ],
            'name': [
                ['notEmpty'],
                ['pattern', 'nameAndText']
            ],
            'text': [
                ['notEmpty'],
                ['pattern', 'nameAndTextAndDigits']
            ],
        }
    });
    validator1.init();
}
if (document.querySelector('.header__button-menu')) {
    modalWindows('.header__button-menu', '.popup-menu', '.popup-menu__close-menu-btn', '.popup-menu', 'popup-menu_active-menu');
}
if (document.querySelector('.footer__callback-link')) {
    modalWindows('.footer__callback-link', '.modal-window', '.modal-window__close-menu-btn', '.modal-window__form-wrapper', 'modal-window_display');
}
if (document.querySelector('.popup-thanks')) {
    modalWindows(null, '.popup-thanks', '.popup-menu__close-menu-btn', '.popup-thanks', 'popup-menu_active-menu');
}

if (document.querySelector('.illustration')) {
    animate('.illustration__man', 'animate');
    animate('.illustration__platform', 'animate');
    animate('.illustration__woman', 'animate');
    animate('.illustration__smart-home-house', 'animate');
}
