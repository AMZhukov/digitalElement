const sendForm = (id) => {

    const errorMessage = 'Something went wrong...',
        loadMessage = 'Loading...',
        successMessage = 'Thank! We will contact you shortly';
    const form = document.querySelector(id);

    const statusMessage = document.createElement('div');

    //if (id === '#form1') statusMessage.style.cssText = 'font-size: 2rem; color: white;';
    statusMessage.style.cssText = 'font-size: 2rem; color: blue;';


    if (form) {
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
                    form.querySelector('button').textContent = successMessage;
                    form.reset();
                })
                .catch(error => {
                    form.querySelector('button').textContent = errorMessage;
                    console.error(error);
                })
                .finally(() => {
                    if (id == '#form' || id == '#form2') {
                        let clear = form.querySelectorAll('p');
                        for (let i = 0; i < clear.length; i++) {
                            clear[i].style.display = 'none';
                        }
                        let clear1 = form.querySelector('button');
                        clear1.style.display = 'none';
                    } else {
                        document.getElementById('thanks').style.display = 'block';
                    }
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
