'use strict';

const handlerTarget = (element) => {
    element.classList.toggle('popup-menu_active-menu');
};

const modalWindows = (buttonStart, elem, buttonClose, windowClass, hideStartButton) => {
    const element = document.querySelector(elem);
    document.addEventListener('click', (event) => {
        let target = event.target;
        if (element == null) return false;
        if (target.closest(buttonStart)) {
            handlerTarget(element);
            if (hideStartButton) {
                const hideStartButtonClick = document.querySelector(hideStartButton);
                hideStartButtonClick.style = 'display: none';
            }
        } else if (target.closest(buttonClose) ) {
            handlerTarget(element);
        } else if (!target.closest(windowClass) && (element.classList.contains('popup-menu_active-menu'))) { // выключение меню при нажатии на фон
            element.classList.remove('popup-menu_active-menu');
        }
    });

};

export default modalWindows;
