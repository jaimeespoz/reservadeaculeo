'use strict';
import '../../src/styles/styles.css';
import '../../src/contacto/contacto.css';

import isladepascua from '/src/assets/images/IsladePascua.jpg';

import { navbar } from '/src/shared/navbar/navbar';
import { footer } from '/src/shared/footer/footer';

const /* {HTMLElement} */ container = document.createElement('div');
container.innerHTML = `
    <div class="contenedor">
        <div class="contenido">
            <div class="frame-contacto">
            <div class="wrapper-contacto">
                <div class="layer-contacto">
                    <article class="cardo">
                        <img class="img-contacto" alt="" src="${isladepascua}" />
                        <div class="card__modal">
                            <p>
                                Rio Calle-calle - Ciudad de Valdivia - Region De los Rios -
                                Chile
                            </p>
                        </div>
                    </article>
                </div>
                <div class="layer-contacto formulario-contacto">
                    <div>
                        <span class="text-headline-small">Envienos un Mensaje</span>
                    </div>
                    <div class="border formulario-contacto">
                        <form>
                            <div class="row">
                                <div class="col-md-12 my-3">
                                    <label for="nombre" class="text-label-large text-start">Nombre Completo</label>
                                    <input type="text" class="text-body-large" id="nombre" placeholder="Ingrese su nombre">
                                </div>
                                <div class="col-md-12 my-3">
                                    <label for="correo" class="text-label-large text-start">Correo
                                        Electronico</label>
                                    <input type="email" class="text-body-large" id="correo"
                                        placeholder="Ingrese su correo electronico">
                                </div>
                                <div class="col-md-12 my-3">
                                    <label for="asunto" class="text-label-large text-start">Asunto del
                                        Mensaje</label>
                                    <input type="text" class="text-body-large" id="asunto"
                                        placeholder="Ingrese el Asunto del Mensaje">
                                </div>
                                <div class="col-md-12 my-3">
                                    <label for="mensaje" class="text-label-large text-start">Texto del
                                        Mensaje</label>
                                    <textarea placeholder="Ingrese un texto..."
                                        class="text-body-large custom-scrollbar"></textarea>
                                    <!-- <input type="text" class="form-control text-body-medium" id="mensaje"
                                    placeholder="Ingrese el texto del mensaje"> -->
                                </div>
                                <div class="col-md-12 my-3">
                                    <button type="submit" class="btn btn-lg btn-primary">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
`;

document.getElementById('navbar').appendChild(navbar);
document.getElementById('main').appendChild(container);
document.getElementById('footer').appendChild(footer);
