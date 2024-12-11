'use strict';
import './login.css';
import 'material-symbols';

import logo from '/src/assets/images/Logo.png';

import { enConstruccionModal } from '../enconstruccion';

const /** {HTMLElement} */ $overlay = document.createElement('div');
$overlay.classList.add('overlay', 'modal-overlay');

const loginModal = function () {
    const /** {HTMLElement} */ $modal = document.createElement('div');
    $modal.classList.add('modal');

    $modal.innerHTML = `
        <div class="wrapper-login">
            <button
                class="icon-btn large"
                aria-label="Close modal"
                data-modal-close-btn
            >
                <span class="material-symbols-rounded" aria-hidden="true"
                    >close</span
                >
                <div class="state-layer"></div>
            </button>
            <div class="layer-login">
                <div>
                    <a href="/">
                        <img src="${logo}" class="logo-chico" alt="" />
                    </a>
                </div>
                <div>
                    <span class="text-title-medium">Junta de Vecinos</span>
                    <span class="text-title-medium">Reserva de Aculeo</span>
                </div>
            </div>
            <div class="wrapper-login">
                <div>
                    <span class="text-title-large text-bold"
                        >Iniciar Sesion</span
                    >
                </div>
                <div>
                    <label for="email" class="text-title-very-small"
                        >Nombre de Usuario / Direccion de Correo</label
                    >
                    <input
                        id="email"
                        type="text"
                        placeholder="ingrese Correo"
                        value=""
                        class="text-title-medium form-control"
                        data-note-field
                    />
                </div>

                <div>
                    <button type="button" class="fab" data-continuar-btn>
                        <span class="text text-label-large">Continuar</span>
                        <div class="state-layer"></div>
                    </button>
                </div>

                <div>
                    <hr class="solid">
                </div>

                <div>
                    <button type="button" data-forget-btn>
                        <span class="text-label-small"
                            >¿ Olvido su nombre de usuario ?</span
                        >
                        <div class="state-layer"></div>
                    </button>
                </div>
                <div>
                    <button type="button" data-registrarse-btn>
                        <span class="text-label-small"
                            >Crear una cuenta de Usuario</span
                        >
                        <div class="state-layer"></div>
                    </button>
                </div>

                <div>
                    <hr class="solid">
                </div>

                <div class="layer-terminos">
                    <button type="button" data-terminos-btn>
                        <span class="text-label-small">Terminos de Uso</span>
                        <div class="state-layer"></div>
                    </button>

                    <button type="button" data-seguridad-btn>
                        <span class="text-label-small">Seguridad</span>
                        <div class="state-layer"></div>
                    </button>
                </div>
            </div>
        </div>
    `;

    const open = function () {
        document.body.appendChild($modal);
        document.body.appendChild($overlay);
    };

    const close = function () {
        document.body.removeChild($modal);
        document.body.removeChild($overlay);
    };

    const /** {HTMLElement} */ $modalCloseBtn = $modal.querySelector(
            '[data-modal-close-btn]'
        );
    const /** {HTMLElement} */ $continuarBtn = $modal.querySelector(
            '[data-continuar-btn]'
        );
    const /** {HTMLElement} */ $forgetBtn =
            $modal.querySelector('[data-forget-btn]');
    const /** {HTMLElement} */ $registrarseBtn = $modal.querySelector(
            '[data-registrarse-btn]'
        );
    const /** {HTMLElement} */ $terminosBtn = $modal.querySelector(
            '[data-terminos-btn]'
        );
    const /** {HTMLElement} */ $seguridadBtn = $modal.querySelector(
            '[data-seguridad-btn]'
        );

    $modalCloseBtn.addEventListener('click', close);

    $continuarBtn.addEventListener('click', function () {
        const /** {Object} */ modal = enConstruccionModal();
        modal.open();
    });
    $forgetBtn.addEventListener('click', function () {
        const /** {Object} */ modal = enConstruccionModal();
        modal.open();
    });
    $registrarseBtn.addEventListener('click', function () {
        const /** {Object} */ modal = enConstruccionModal();
        modal.open();
    });
    $terminosBtn.addEventListener('click', function () {
        const /** {Object} */ modal = enConstruccionModal();
        modal.open();
    });
    $seguridadBtn.addEventListener('click', function () {
        const /** {Object} */ modal = enConstruccionModal();
        modal.open();
    });

    return { open, close };
};

export { loginModal };
