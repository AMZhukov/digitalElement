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


sendForm('form');
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
                ['pattern', 'nameAndText']
            ],
        }
    });
    validator1.init();
}

modalWindows('.header__button-menu', '.popup-menu', '.popup-menu__close-menu-btn', '.popup-menu');

modalWindows('.footer__callback-link', '.callback-form', '.callback-form__close-menu-btn', '.footer__callback-form');


if (document.querySelector('.illustration')) {
    animate('.illustration__man', 'animate');
    animate('.illustration__platform', 'animate');
    animate('.illustration__woman', 'animate');
    animate('.illustration__smart-home-house', 'animate');
}
