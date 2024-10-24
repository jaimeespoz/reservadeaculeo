'use strict';
import '../styles/styles.css';
import '../../src/quienes_somos/quienes_somos.css';

import colchane from '/src/assets/images/Colchane.jpg';

import { navbar } from '/src/shared/navbar/navbar';
import { footer } from '/src/shared/footer/footer';

const /* {HTMLElement} */ container = document.createElement('div');
container.innerHTML = `
    <div class="contenedor">
        <div class="contenido">
        <div class="frame-quienes">
            <div class="wrapper-quienes">
                <div class="layer-quienes">
                    <article class="cardo">
                        <img alt="" src="${colchane}" />
                        <div class="card__modal">
                            <p>
                                Rio Calle-calle - Ciudad de Valdivia - Region De los Rios -
                                Chile
                            </p>
                        </div>
                    </article>
                </div>
                <div class="layer-quienes">
                    <div>
                        <span class="titulo">Envienos un Mensaje</span>
                    </div>
                    <div class="border">
                        <form>
                            <div class="row">
                                <div class="col-md-12 mb-3">
                                    <label for="nombre" class="form-label">Nombre</label>
                                    <input type="text" class="form-control" id="nombre" placeholder="Ingrese su nombre">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label for="correo" class="form-label">Correo
                                        Electronico</label>
                                    <input type="email" class="form-control" id="correo"
                                        placeholder="Ingrese su correo electronico">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label for="asunto" class="form-label">Asunto del
                                        Mensaje</label>
                                    <input type="text" class="form-control" id="asunto"
                                        placeholder="Ingrese el Asunto del Mensaje">
                                </div>
                                <div class="col-md-12 mb-3">
                                    <label for="mensaje" class="form-label">Texto del
                                        Mensaje</label>
                                    <textarea placeholder="Ingrese un texto..."
                                        class="modal-text custom-scrollbar"></textarea>
                                    <!-- <input type="text" class="form-control text-body-medium" id="mensaje"
                                    placeholder="Ingrese el texto del mensaje"> -->
                                </div>
                                <div class="col-md-12 mb-3">
                                    <button type="submit" class="btn btn-sm btn-primary">Enviar</button>
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

// const body = document.body;

// const boton = document.createElement('button');
// boton.innerText = 'volver';
// boton.className = 'btn btn-primary btn-sm';
// body.appendChild(boton);

// boton.addEventListener('click', () => {
//     console.log('aca el boton');
//     window.location = '/';
// });
