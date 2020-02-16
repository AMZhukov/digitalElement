'use strict';

const handlerTarget = (element, classView) => {
    if (element.classList.contains(classView)) {
        return (element.classList.remove(classView));
    } else {
        return (element.classList.add(classView));
    }
};

const modalWindows = (buttonStart, elem, buttonClose, windowClass, classView, hideStartButton) => {
    const element = document.querySelector(elem);
    document.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest(buttonStart)) {
            handlerTarget(element, classView);
            if (hideStartButton) {
                const hideStartButtonClick = document.querySelector(hideStartButton);
                hideStartButtonClick.style = 'display: none';
            }
        } else if (target.closest(buttonClose) && element.classList.contains(classView)) {
            handlerTarget(element, classView);
            //} else if (target.tagName === 'A' && target.closest('.active-menu')) {
            //     handlerMenu(); //menu.style.display = 'none';
        } else if (!target.closest(windowClass) && element && element.classList.contains(classView)) { // выключение меню при нажатии на фон
            handlerTarget(element, classView);
        }
    });
};

// let opacity1 = () => {
//     let i = 0;
//     let timeout;
//     popup.style.opacity = `${i}`;
//     i += 0.1;
//     if (i < 1) {
//         timeout = setTimeout(opacity1, 30)
//     } else {
//         clearTimeout(timeout);
//         i = 0;
//     }
// };

export default modalWindows;
