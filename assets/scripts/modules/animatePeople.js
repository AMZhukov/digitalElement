'use strict';

const animate = (selector, animateClass) => {
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector(selector).classList.add(animateClass);
    });
};

export default animate;



