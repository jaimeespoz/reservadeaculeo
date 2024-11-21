'use strict';

import logo from '/src/assets/images/Logo.png';

import '/src/styles.css';
import 'material-symbols';

import { NoteModal } from '/src/modal_contacto.js';

const /* {HTMLElement} */ container = document.createElement('div');
container.innerHTML = `
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
                <div class="bars">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
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
        container.querySelector('[data-inicio-btn]');
const /** {<HTMLElement} */ $quienes_somosBtn = container.querySelector(
        '[data-quienes-somos-btn]'
    );
const /** {<HTMLElement} */ $contactoBtn = container.querySelector(
        '[data-contacto-btn]'
    );
const /** {<HTMLElement} */ $loginBtn =
        container.querySelector('[data-login-btn]');

$inicioBtn.addEventListener('click', function () {
    // Create and open a new modal
    const /** {Object} */ modal = NoteModal();
    modal.open();
});
$quienes_somosBtn.addEventListener('click', function () {
    import('/src/enconstruccion.js').then(({ NoteModal }) => {
        const /** {Object} */ modal = NoteModal();
        modal.open();
    });
});
$contactoBtn.addEventListener('click', function () {
    const /** {HTMLElement} */ $body = document.body;
    $body.innerHTML = '';

    const /** {Object} */ modal = NoteModal();
    modal.open();
});
$loginBtn.addEventListener('click', function () {
    import('/src/enconstruccion.js').then(({ NoteModal }) => {
        const /** {Object} */ modal = NoteModal();
        modal.open();
    });
});

document.body.appendChild(container);
