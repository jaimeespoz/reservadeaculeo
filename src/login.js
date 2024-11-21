'use strict';
import '/src/styles.css';
// import '../../src/login/login.css';

import Valdivia from '/src/assets/images/Valdivia.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { navbar } from './navbar';
import { footer } from './footer';

const /* {HTMLElement} */ container = document.createElement('div');
container.innerHTML = `
        <div class="contenedor">
            <div class="contenido">
            <div class="frame-login">
                <div class="wrapper-login">
                    <div class="layer-login">
                        <div class="border formulario-login">
                        <form>
                            <div class="my-3">
                                <label for="formGroupExampleInput" class="text-label-large text-start">Example label</label>
                                <input type="text" class="text-body-large" id="formGroupExampleInput" placeholder="Example input placeholder">
                            </div>
                            <div class="my-3">
                                <label for="formGroupExampleInput2" class="text-label-large text-start">Another label</label>
                                <input type="text" class="text-body-large" id="formGroupExampleInput2" placeholder="Another input placeholder">
                            </div>                          
                            <div class="my-3">
                                    <button
                                        type="submit"
                                        class="btn btn-lg btn-primary"
                                    >
                                        Aceptar
                                    </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="layer-login">
                    <article class="cardo">
                        <img class="img-login" alt="" src="${Valdivia}" />
                        <div class="card__modal">
                            <p> Rio Calle-calle - Ciudad de Valdivia - Region De los Rios -
                                Chile
                            </p>
                        </div>
                    </article>                            
                </div>
            </div>
        </div>
    </div>
    </div>
`;
document.getElementById('navbar').appendChild(navbar);
document.getElementById('main').appendChild(container);
document.getElementById('footer').appendChild(footer);
