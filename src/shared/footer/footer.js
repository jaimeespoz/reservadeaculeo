'use strict';
import '../../styles/styles.css';
import '../../../src/shared/footer/footer.css';

import logo from '/src/assets/images/Logo.png';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

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
                        <span class="text-title-large">Junta de Vecinos</span>
                        <span class="text-title-large">Reserva de Aculeo</span>
                        <span class="text-body-small">Const.: Octubre-2024</span>
                        <span class="text-body-small">Comuna de Paine</span>
                        <span class="text-body-small">Region Metropolitana</span>
                    </div>
                </div>
                <div class="layer-footer">
                    <div class="col-footer">
                        <span class="text-title-large">Contacto<span>
                                <span class="text-body-large mt-2">Direccion:</span>
                                <span class="text-body-small">Parcela xx</span>
                                <span class="text-body-small">Condominio Parque Cantillana</span>
                                <span class="text-body-small">(ex Alto Laguna)</span>
                                <span class="text-body-small">Ruta G-546 - Klm. 19,5</span>
                                <span class="text-body-small">Comuna de Paine</span>
                                <span class="text-body-large mt-2">Email:<span>
                                        <span class="text-body-small">contacto@reservadeaculeo.cl</span>
                                        <span class="text-body-large mt-2">Telefono:<span>
                                                <span class="text-body-small">+56 9 1234 1234</span>
                    </div>
                    <div class="col-footer">
                        <span class="text-title-large">Incorporacion<span>
                                <ul>
                                    <li>
                                        <a href="/enconstruccion.html"><span class="text-body-small">Proxima
                                                Reunion</span></a>
                                        <a href="/enconstruccion.html"><span class="text-body-small">Tema x Tema x
                                                Tema
                                                x</span></a>
                                        <a href="/enconstruccion.html"><span class="text-body-small">Tema y Tema y
                                                Tema
                                                y</span></a>
                                        <a href="/enconstruccion.html"><span class="text-body-small">Tema z Tema z
                                                Tema
                                                z</span></a>
                                    </li>
                                </ul>
                    </div>
                    <div class="col-footer">
                        <span class="text-title-large">Nuestra Comunidad<span>
                                <ul>
                                    <li>
                                        <a href="/enconstruccion.html"><span
                                                class="text-body-small">Actividades</span></a>
                                        <a href="/enconstruccion.html"><span class="text-body-small">Tema x Tema x
                                                Tema
                                                x</span></a>
                                        <a href="/enconstruccion.html"><span class="text-body-small">Tema y Tema y
                                                Tema
                                                y</span></a>
                                        <a href="/enconstruccion.html"><span class="text-body-small">Tema z Tema z
                                                Tema
                                                z</span></a>
                                    </li>
                                </ul>
                    </div>
                    <div class="col-footer">
                        <span class="text-title-large">Otra Info<span>
                                <ul>
                                    <li>
                                        <a href="/enconstruccion.html"><span class="text-body-medium">Proxima
                                                Reunion.</span></a>
                                        <a href="/enconstruccion.html"><span class="text-body-small">Tema x Tema x
                                                Tema
                                                x</span></a>
                                        <a href="/enconstruccion.html"><span class="text-body-small">Tema y Tema y
                                                Tema
                                                y</span></a>
                                        <a href="/enconstruccion.html"><span class="text-body-small">Tema z Tema z
                                                Tema
                                                z</span></a>
                                    </li>
                                </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
`;

const footer = container;

export { footer };
