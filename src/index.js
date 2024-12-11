'use strict';

import 'styles.css';

import { homeModal } from './shared/home/home';
import { footerModal } from './shared/footer';
import { navbarModal } from './shared/navbar/navbar';

import '/src/util/theme.js';
// import '/src/navbar.js';
// import '/src/home.js';
// import '/src/shared/footer';

const body = document.body;
body.innerHTML = '';

const /** {Object} */ $navbarmodal = navbarModal();
$navbarmodal.open();

const /** {Object} */ $homemodal = homeModal();
$homemodal.open();

const /** {Object} */ $footermodal = footerModal();
$footermodal.open();

// import { navbar } from './navbar';

// document.body.appendChild(navbar);

// const /* {HTMLElement} */ container = document.createElement('div');
// container.innerHTML = navbar;

// const bars = document.querySelector('.bars');
// bars.addEventListener('click', () => {
//     const navBar = document.querySelector('.nav-bar');
//     navBar.classList.toggle('active');
// });

function add(a, b) {
    return a + b;
}

export { add };
