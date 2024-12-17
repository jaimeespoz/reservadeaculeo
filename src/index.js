'use strict';

import 'styles.css';

import { homeModal } from './shared/home/home';
import { footerModal } from './shared/footer/footer';
import { navbarModal } from './shared/navbar/navbar';
import { misionModal } from './mision/mision';

import '/src/util/theme.js';

const body = document.body;
body.innerHTML = '';

const /** {Object} */ $navbarmodal = navbarModal();
$navbarmodal.open();

const /** {Object} */ $misionmodal = misionModal();
$misionmodal.open();

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
