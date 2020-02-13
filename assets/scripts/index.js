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

import sendForm from './modules/sendForm';
import Validator from './modules/validator'

sendForm('form');

const validator1 = new Validator ({
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
