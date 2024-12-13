'use strict';

import { enConstruccionModal } from '../enconstruccion';
import { loginModal } from '../login';
import { qsModal } from '../../quienes_somos/quienes_somos';
import { contactoModal } from '../contacto/contacto';
// import { addEventOnElement, addEventsOnElement } from './util/util';

import logo from '/src/assets/images/Logo.png';

// import '/src/styles.css';
import './styles.css';
import 'material-symbols';

const navbarModal = function () {
    const /* {HTMLElement} */ $modal = document.createElement('div');
    $modal.innerHTML = `
    <div class="contenedor">
        <div class="contenido">
            <div class="header">
                <div class="logo">
                    <a href="/index.html"
                        ><img
                            src="${logo}"
                            alt="Reserva de Aculeo"
                    /></a>
                </div>
                <nav class="nav-bar">
                    <ul>
                        <li>
                            <button type="button" class="fab" data-inicio-btn>
                                <span
                                    class="material-symbols-outlined"
                                    aria-hidden="true"
                                    >home</span
                                >
                                <span class="text text-label-large"
                                    >Inicio</span
                                >
                                <div class="state-layer"></div>
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                class="fab"
                                data-quienes-somos-btn
                            >
                                <span
                                    class="material-symbols-rounded"
                                    aria-hidden="true"
                                    >Group</span
                                >
                                <span class="text text-label-large"
                                    >Quienes Somos</span
                                >
                                <div class="state-layer"></div>
                            </button>
                        </li>
                        <li>
                            <button type="button" class="fab" data-login-btn>
                                <span
                                    class="material-symbols-rounded"
                                    aria-hidden="true"
                                    >login</span
                                >
                                <span class="text text-label-large">Login</span>
                                <div class="state-layer"></div>
                            </button>
                        </li>
                        <li>
                            <button type="button" class="fab" data-contacto-btn>
                                <span
                                    class="material-symbols-rounded"
                                    aria-hidden="true"
                                    >Mail</span
                                >
                                <span class="text text-label-large"
                                    >Contacto</span
                                >
                                <div class="state-layer"></div>
                            </button>
                        </li>
                        <li>
                            <button type="button" class="fab" data-rrss-btn>
                                <span
                                    class="material-symbols-rounded"
                                    aria-hidden="true"
                                    >social_leaderboard</span
                                >
                                <span class="text text-label-large"
                                    >Red Social</span
                                >
                                <div class="state-layer"></div>
                            </button>
                        </li>
                    </ul>
                </nav>
                <button
                    type="button"
                    class="theme-btn icon-btn large"
                    aria-label="Toggle theme"
                    data-tooltip="Toggle theme"
                    data-theme-btn
                >
                    <span class="material-symbols-outlined light-icon" aria-hidden="true">
                        light_mode
                    </span>
                    <span class="material-symbols-outlined dark-icon" aria-hidden="true">
                        dark_mode
                    </span>
                    <div class="state-layer"></div>
                </button>
            </div>
        </div>
    </div>
`;

    const /** {<HTMLElement} */ $inicioBtn =
            $modal.querySelector('[data-inicio-btn]');

    const /** {<HTMLElement} */ $quienes_somosBtn = $modal.querySelector(
            '[data-quienes-somos-btn]'
        );
    const /** {<HTMLElement} */ $contactoBtn = $modal.querySelector(
            '[data-contacto-btn]'
        );
    const /** {<HTMLElement} */ $loginBtn =
            $modal.querySelector('[data-login-btn]');

    $inicioBtn.addEventListener('click', function () {
        window.location.href = '/';
    });

    $quienes_somosBtn.addEventListener('click', function () {
        const body = document.body;
        body.innerHTML = '';

        const /** {Object} */ $modal = qsModal();
        $modal.open();

        // import('/src/quienes_somos/quienes_somos.js').then(() => {});
        // window.location.href = '/quienes_somos';
    });

    $contactoBtn.addEventListener('click', function () {
        const /** {Object} */ $modal = contactoModal();
        $modal.open();
    });

    $loginBtn.addEventListener('click', function () {
        const /** {Object} */ $modal = loginModal();
        $modal.open();
    });

    const open = function () {
        document.body.appendChild($modal);
    };

    return { open };
};

export { navbarModal };
