'use strict';

import logo from '/src/assets/images/Logo.png';

// import { NoteModal } from '/src/enconstruccion.js';

const /* {HTMLElement} */ container = document.createElement('div');
container.innerHTML = `
    <div class="contenedor">
        <div class="contenido">
            <div class="frame-footer">
                <div class="wrapper-footer">
                    <div class="layer-footer">
                        <div>
                            <a href="/">
                                <img src="${logo}" class="logo-chico" alt="" />
                            </a>
                        </div>
                        <div>
                            <span class="text-title-large"
                                >Junta de Vecinos</span
                            >
                            <span class="text-title-large"
                                >Reserva de Aculeo</span
                            >
                            <span class="text-body-small"
                                >Const.: Octubre-2024</span
                            >
                            <span class="text-body-small">Comuna de Paine</span>
                            <span class="text-body-small"
                                >Region Metropolitana</span
                            >
                        </div>
                    </div>
                    <div class="layer-footer">
                        <div class="col-footer">
                            <span class="text-title-large">Contacto</span>
                            <span class="text-body-large mt-2">Direccion:</span>
                            <span class="text-body-small">Parcela xx</span>
                            <span class="text-body-small"
                                >Condominio Parque Cantillana</span
                            >
                            <span class="text-body-small"
                                >(ex Alto Laguna)</span
                            >
                            <span class="text-body-small"
                                >Ruta G-546 - Klm. 19,5</span
                            >
                            <span class="text-body-small">Comuna de Paine</span>
                            <span class="text-body-large mt-2">Email:</span>
                            <span class="text-body-small"
                                >contacto@reservadeaculeo.cl</span
                            >
                            <span class="text-body-large mt-2">Telefono:</span>
                            <span class="text-body-small">+56 9 1234 1234</span>
                        </div>
                        <div class="col-footer">
                            <span class="text-title-large">Incorporacion</span>
                            <ul>
                                <li>
                                    <button type="button" class=""
                                        data-opcion-01 >
                                        <span class="text text-label-large"
                                            >Contacto</span
                                        >
                                        <div class="state-layer"></div>
                                    </button>
                                    <li>
                                                                        <button type="button" class=""
                                        data-opcion-02 >
                                        <span class="text text-label-large"
                                            >Contacto</span
                                        >
                                        <div class="state-layer"></div>
                                    </button>

                                    </li>
                                    </li>
                                    <a href="/enconstruccion.html"
                                        ><span class="text-body-small"
                                            >Proxima Reunion</span
                                        ></a
                                    >
                                    <a href="/" data-opcion-02
                                        ><span class="text-body-small"
                                            >Tema x Tema x Tema x</span
                                        ></a
                                    >
                                    <a href="/" data-opcion-03
                                        ><span class="text-body-small"
                                            >Tema y Tema y Tema y</span
                                        ></a
                                    >
                                    <a href="/" data-opcion-04
                                        ><span class="text-body-small"
                                            >Tema z Tema z Tema z</span
                                        ></a
                                    >
                                </li>
                            </ul>
                        </div>
                        <div class="col-footer">
                            <span class="text-title-large"
                                >Nuestra Comunidad</span
                            >
                            <ul>
                                <li>
                                    <a href="/" data-opcion-05
                                        ><span class="text-body-small"
                                            >Actividades</span
                                        ></a
                                    >
                                    <a href="/" data-opcion-06
                                        ><span class="text-body-small"
                                            >Tema x Tema x Tema x</span
                                        ></a
                                    >
                                    <a href="/" data-opcion-07
                                        ><span class="text-body-small"
                                            >Tema y Tema y Tema y</span
                                        ></a
                                    >
                                    <a href="/" data-opcion-08
                                        ><span class="text-body-small"
                                            >Tema z Tema z Tema z</span
                                        ></a
                                    >
                                </li>
                            </ul>
                        </div>
                        <div class="col-footer">
                            <span class="text-title-large">Otra Info</span>
                            <ul>
                                <li>
                                    <a href="/" data-opcion-09
                                        ><span class="text-body-medium"
                                            >Proxima Reunion.</span
                                        ></a
                                    >
                                    <a href="/" data-opcion-10
                                        ><span class="text-body-small"
                                            >Tema x Tema x Tema x</span
                                        ></a
                                    >
                                    <a href="/" data-opcion-11
                                        ><span class="text-body-small"
                                            >Tema y Tema y Tema y</span
                                        ></a
                                    >
                                    <a href="/" data-opcion-12
                                        ><span class="text-body-small"
                                            >Tema z Tema z Tema z</span
                                        ></a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

const /** {HTMLElement} */ $dataopcion01 =
        container.querySelector('[data-opcion-01]');
const /** {HTMLElement} */ $dataopcion02 =
        container.querySelector('[data-opcion-02]');
const /** {HTMLElement} */ $dataopcion03 =
        container.querySelector('[data-opcion-03]');
const /** {HTMLElement} */ $dataopcion04 =
        container.querySelector('[data-opcion-04]');
const /** {HTMLElement} */ $dataopcion05 =
        container.querySelector('[data-opcion-05]');
const /** {HTMLElement} */ $dataopcion06 =
        container.querySelector('[data-opcion-06]');
const /** {HTMLElement} */ $dataopcion07 =
        container.querySelector('[data-opcion-07]');
const /** {HTMLElement} */ $dataopcion08 =
        container.querySelector('[data-opcion-08]');
const /** {HTMLElement} */ $dataopcion09 =
        container.querySelector('[data-opcion-09]');
const /** {HTMLElement} */ $dataopcion10 =
        container.querySelector('[data-opcion-10]');
const /** {HTMLElement} */ $dataopcion11 =
        container.querySelector('[data-opcion-11]');
const /** {HTMLElement} */ $dataopcion12 =
        container.querySelector('[data-opcion-12]');
document.body.appendChild(container);

$dataopcion01.addEventListener('click', function () {
    import('/src/enconstruccion.js').then(({ NoteModal }) => {
        const /** {Object} */ modal = NoteModal();
        modal.open();
    });
});
