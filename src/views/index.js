'use strict';
// import '../styles/styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// import foto_01 from '/src/assets/images/foto-01.jpg';
// import foto_02 from '/src/assets/images/foto-02.jpg';
// import foto_03 from '/src/assets/images/foto-03.jpg';
// import foto_04 from '/src/assets/images/foto-04.jpg';
import foto_05 from '/src/assets/images/foto-05.jpg';
import foto_06 from '/src/assets/images/foto-06.jpg';
import copihues from '/src/assets/images/copihues.jpg';
import valdivia from '/src/assets/images/Semana-de-la-Chilenidad-2019.jpg';

// console.log('Home');

import { navbar } from '/src/shared/navbar/navbar';
import { footer } from '/src/shared/footer/footer';
import { home } from '/src/shared/home/home';

const /* {HTMLElement} */ container = document.createElement('div');
container.innerHTML = `
`;

document.getElementById('navbar').appendChild(navbar);
document.getElementById('main').appendChild(home);
document.getElementById('footer').appendChild(footer);

const bars = document.querySelector('.bars');
bars.addEventListener('click', () => {
    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
});

function add(a, b) {
    return a + b;
}

export { add };
