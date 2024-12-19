'use strict';

import './globalstyles.css';
// import './shared/navbar/styles.css';
// import './mision/mision.css';

// import { enConstruccionModal } from './shared/enconstruccion';

import { addEventOnElement, addEventOnElements } from './util/util';
import { homeModal } from './shared/home/home';
import { footerModal } from './shared/footer/footer';
import { navbarModal } from './shared/navbar/navbar';
import { misionModal } from './mision/mision';
import { news01Modal } from './news/newsfmt01/newsfmt01';
import { news02Modal } from './news/newsfmt02/newsfmt02';
import { qsModal } from './quienes_somos/quienes_somos';
import { contactoModal } from './shared/contacto/contacto';
import { loginModal } from './shared/login/login';

import '/src/util/theme.js';

const body = document.body;
body.innerHTML = '';
body.appendChild(navbarModal);
body.appendChild(misionModal);
body.appendChild(homeModal);
body.appendChild(news01Modal);
body.appendChild(news02Modal);
body.appendChild(footerModal);

/** Navbar */

const /** {<HTMLElement} */ $inicioBtn =
        document.querySelector('[data-inicio-btn]');

const /** {<HTMLElement} */ $quienes_somosBtn = document.querySelector(
        '[data-quienes-somos-btn]'
    );
const /** {<HTMLElement} */ $contactoBtn = document.querySelector(
        '[data-contacto-btn]'
    );
const /** {<HTMLElement} */ $loginBtn =
        document.querySelector('[data-login-btn]');
// const /** {<HTMLElement} */ $rrssBtn =
//         document.querySelector('[data-rrss-btn]');
// const /** {<HTMLElement} */ $fotosBtn =
//         document.querySelector('[data-fotos-btn]');

$inicioBtn.addEventListener('click', function () {
    window.location.href = '/';
});

$quienes_somosBtn.addEventListener('click', function () {
    const body = document.body;

    body.innerHTML = '';
    body.appendChild(navbarModal);
    body.appendChild(qsModal);
    body.appendChild(footerModal);
});

$contactoBtn.addEventListener('click', function () {
    const /** {Object} */ $modal = contactoModal();
    $modal.open();
});

$loginBtn.addEventListener('click', function () {
    const /** {Object} */ $modal = loginModal();
    $modal.open();
});

// $rrssBtn.addEventListener('click', function () {
//     const /** {Object} */ $modal = enConstruccionModal();
//     $modal.open();
// });

// $fotosBtn.addEventListener('click', function () {
//     const body = document.body;
//     body.innerHTML = '';

//     const /** {Object} */ $modal = fotosModal();
//     $modal.open();
// });

/** Mision */
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item-mision');
    document.querySelector('.slide-mision').appendChild(items[0]);
});

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item-mision');
    document.querySelector('.slide-mision').prepend(items[items.length - 1]); // here the length of items = 6
});

const /** {<HTMLElement} */ $mision01Btn =
        document.querySelector('[data-ver-01]');

const /** {<HTMLElement} */ $mision02Btn =
        document.querySelector('[data-ver-02]');

const /** {<HTMLElement} */ $mision03Btn =
        document.querySelector('[data-ver-03]');

const /** {<HTMLElement} */ $mision04Btn =
        document.querySelector('[data-ver-04]');

const /** {<HTMLElement} */ $mision05Btn =
        document.querySelector('[data-ver-05]');

const /** {<HTMLElement} */ $mision06Btn =
        document.querySelector('[data-ver-06]');

$mision01Btn.addEventListener('click', function () {
    import('/src/shared/enconstruccion/index.js').then(
        ({ enConstruccionModal }) => {
            const /** {Object} */ modal = enConstruccionModal();
            modal.open();
        }
    );
});

$mision02Btn.addEventListener('click', function () {
    import('/src/shared/enconstruccion/index.js').then(
        ({ enConstruccionModal }) => {
            const /** {Object} */ modal = enConstruccionModal();
            modal.open();
        }
    );
});

$mision03Btn.addEventListener('click', function () {
    import('/src/shared/enconstruccion/index.js').then(
        ({ enConstruccionModal }) => {
            const /** {Object} */ modal = enConstruccionModal();
            modal.open();
        }
    );
});

$mision04Btn.addEventListener('click', function () {
    import('/src/shared/enconstruccion/index.js').then(
        ({ enConstruccionModal }) => {
            const /** {Object} */ modal = enConstruccionModal();
            modal.open();
        }
    );
});

$mision05Btn.addEventListener('click', function () {
    import('/src/shared/enconstruccion/index.js').then(
        ({ enConstruccionModal }) => {
            const /** {Object} */ modal = enConstruccionModal();
            modal.open();
        }
    );
});

$mision06Btn.addEventListener('click', function () {
    // const /** {Object} */ $modal = enConstruccionModal();
    // $modal.open();
    import('/src/shared/enconstruccion/index.js').then(
        ({ enConstruccionModal }) => {
            const /** {Object} */ modal = enConstruccionModal();
            modal.open();
        }
    );
});
/** Home */

/** */
/** Footer */

const /** {Array<HTMLElement>} */ $dataopcion =
        document.querySelectorAll('[data-opcion-xx]');

addEventOnElements($dataopcion, 'click', function () {
    import('/src/shared/enconstruccion/index.js').then(
        ({ enConstruccionModal }) => {
            const /** {Object} */ modal = enConstruccionModal();
            modal.open();
        }
    );
});
