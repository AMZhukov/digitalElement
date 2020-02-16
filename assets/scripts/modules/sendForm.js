const sendForm = (id, elem, classView) => {

    const errorMessage = 'Something went wrong...';
    const loadMessage = 'Loading...';
        // const successMessage = 'Thank! We will contact you shortly';
    const form = document.querySelector(id);

    const statusMessage = document.createElement('div');

    statusMessage.style.cssText = 'font-size: 2rem; color: blue;';


    if (form) {
        let initialValueButtonform = form.querySelector('button').textContent;
        form.addEventListener('submit', (event) => {
            if (form.querySelector('.error')) return;
            event.preventDefault();
            form.querySelector('button').textContent = loadMessage;
            const formData = new FormData(form);
            let body = {};

            formData.forEach((val, key) => { // Можно и вот так
                body[key] = val;
            });
            postData(body)
                .then((respronce) => {
                    if (respronce.status !== 200) {
                        throw new Error('status network not 200');
                    }

                    form.querySelector('button').textContent = initialValueButtonform;
                    form.reset();
                    if (classView) document.querySelector(elem).classList.remove(classView);
                    document.querySelector('.popup-thanks').classList.add('popup-menu_active-menu');
                })
                .catch(error => {
                    form.querySelector('button').textContent = errorMessage;
                    console.error(error);
                })
                .finally(() => {

                });
        });
    }
    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };

};
export default sendForm;
