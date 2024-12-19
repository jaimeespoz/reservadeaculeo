'use strict';
// import '../../globalstyles.css';
import './aviso.css';
import 'material-symbols';

import logo from '/src/assets/images/Logo.png';

import reunion from '/src/assets/images/foto-reunion.jpg';

const /** {HTMLElement} */ $overlay = document.createElement('div');
$overlay.classList.add('overlay', 'modal-overlay');

const avisoModal = function () {
    const /** {HTMLElement} */ $modal = document.createElement('div');
    $modal.classList.add('modal');

    $modal.innerHTML = `
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
        <div class="layer-aviso">
                    <div>
                        <a href="/">
                            <img src="${logo}" class="logo-chico" alt="" />
                        </a>
                    </div>
                    <div>
                        <span class="text-title-medium">Unidad Vecinal</span>
                        <span class="text-title-medium">Reserva de Aculeo</span>
                    </div>
                </div>        
            <div>
            <div class="wrapper-aviso">
                    <div>
                        <hr class="solid" />
                    </div>
                    <div>
                        <span class="titulo-aviso"
                            >Proxima Reunion</span
                        >
                    </div>
                    <div>
                        <span class="fecha-aviso"
                            >Domingo, 22 de Diciembre del 2024</span
                        >
                    </div>

                    <div>
                        <hr class="solid" />
                    </div>
                    <div>
                        <hr class="salto" />
                    </div>
                </div>            
            <img class="aviso-img" src="${reunion}" alt="Reunion" />
                    <div>
                        <hr class="salto" />
                    </div>
                    <div>
                        <hr class="solid" />
                    </div>
                    <div>
                    <a class="detalle-aviso" href="/src/assets/Reunion.pdf"
                            >Temario</span
                        >
                        </a>
                    </div>

                    <div>
                        <hr class="solid" />
                    </div>
                    <div>
                        <hr class="salto" />
                    </div>
                    <div>
                        <hr class="salto" />
                    </div>

            <button type="button" class="fab" data-close-btn>
                <span class="material-symbols-outlined" aria-hidden="true"
                    >close</span
                >

                <span class="text text-label-large">Cerrar</span>
                <div class="state-layer"></div>
            </button>
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
    $modalCloseBtn.addEventListener('click', close);
    const /** {HTMLElement} */ $closeBtn =
            $modal.querySelector('[data-close-btn]');
    $closeBtn.addEventListener('click', close);

    return { open, close };
};

export { avisoModal };
