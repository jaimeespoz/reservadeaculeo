'use strict';

import '/src/util/theme.js';
import '/src/navbar.js';
import '/src/home.js';
import '/src/footer.js';

const /* {HTMLElement} */ container = document.createElement('div');
container.innerHTML = `
`;

// const bars = document.querySelector('.bars');
// bars.addEventListener('click', () => {
//     const navBar = document.querySelector('.nav-bar');
//     navBar.classList.toggle('active');
// });

function add(a, b) {
    return a + b;
}

export { add };
