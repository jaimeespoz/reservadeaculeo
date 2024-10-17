'use strict';

import '/src/styles/main.css';
import '/src/views/home.css';

// import foto_01 from '/src/assets/images/foto-01.jpg';
// import foto_02 from '/src/assets/images/foto-02.jpg';
// import foto_03 from '/src/assets/images/foto-03.jpg';
// import foto_04 from '/src/assets/images/foto-04.jpg';
import foto_05 from '/src/assets/images/foto-05.jpg';
import foto_06 from '/src/assets/images/foto-06.jpg';
import copihues from '/src/assets/images/copihues.jpg';
import valdivia from '/src/assets/images/Semana-de-la-Chilenidad-2019.jpg';

console.log('Home');

import { navbar } from '/src/shared/navbar/navbar';
import { footer } from '/src/shared/footer/footer';

const /* {HTMLElement} */ container = document.createElement('div');
container.innerHTML = `
    <div class="contenedor">
        <div class="contenido">
            <div class="wrapper">
                <div class="layer">
                    <div class="border titulares">
                        <div class="tit-ppal">
                            <p class="tit-ppal-titulo">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <p class="tit-ppal-detalle">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque totam sunt ad et optio,
                                cupiditate unde, incidunt debitis voluptates maxime dolorum velit numquam illo similique
                                obcaecati fugit vel accusantium fugiat.
                            </p>
                            <article class="card">
                                <img class="tit-ppal-imagen" alt="" src="${valdivia}" />
                                <div class="card__modal">
                                    <p>
                                        Rio Calle-calle - Ciudad de Valdivia - Region De los Rios -
                                        Chile
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <!--  -->
                <div class="border layer-dos">
                    <div class="col-dos">
                        <div class="col-dos-imagen">
                            <article class="card">
                                <img class="col-dos-imagen" alt="" src="${foto_05}" />
                                <div class="card__modal">
                                    <p>
                                        Rio Calle-calle - Ciudad de Valdivia - Region De los Rios -
                                        Chile
                                    </p>
                                </div>
                            </article>
                        </div>
                        <p class="col-dos-detalle">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, a neque, excepturi
                            inventore cumque blanditiis repellat voluptatem consectetur necessitatibus suscipit
                            numquam
                            veniam provident ex vitae amet? Perferendis, praesentium? Veritatis, ratione.
                        </p>
                    </div>
                    <div class="col-dos">
                        <div class="col-dos-imagen">
                            <article class="card">
                                <img class="col-dos-imagen" alt="" src="${foto_06}" />
                                <div class="card__modal">
                                    <p>
                                        Rio Calle-calle - Ciudad de Valdivia - Region De los Rios -
                                        Chile
                                    </p>
                                </div>
                            </article>
                        </div>
                        <p class="col-dos-detalle">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, a neque, excepturi
                            inventore cumque blanditiis repellat voluptatem consectetur necessitatibus suscipit
                            numquam
                            veniam provident ex vitae amet? Perferendis, praesentium? Veritatis, ratione.
                        </p>
                    </div>

                </div>
                <!--  -->
                <div class="border layer-dos">
                    <div class="col-dos">
                        <div class="col-dos-imagen">
                            <article class="card">
                                <img class="col-dos-imagen" alt="" src="${valdivia}" />
                                <div class="card__modal">
                                    <p>
                                        Rio Calle-calle - Ciudad de Valdivia - Region De los Rios -
                                        Chile
                                    </p>
                                </div>
                            </article>
                        </div>
                        <p class="col-dos-detalle">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, a neque, excepturi
                            inventore cumque blanditiis repellat voluptatem consectetur necessitatibus suscipit
                            numquam
                            veniam provident ex vitae amet? Perferendis, praesentium? Veritatis, ratione.
                        </p>
                    </div>
                    <div class="col-dos">
                        <div class="col-dos-imagen">
                            <article class="card">
                                <img class="col-dos-imagen" alt="" src="${copihues}" />
                                <div class="card__modal">
                                    <p>
                                        Rio Calle-calle - Ciudad de Valdivia - Region De los Rios -
                                        Chile
                                    </p>
                                </div>
                            </article>
                        </div>
                        <p class="col-dos-detalle">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, a neque, excepturi
                            inventore cumque blanditiis repellat voluptatem consectetur necessitatibus suscipit
                            numquam
                            veniam provident ex vitae amet? Perferendis, praesentium? Veritatis, ratione.
                        </p>
                    </div>

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

// const home = container;

const boton = document.createElement('button');
boton.innerText = 'volver';
boton.className = 'btn btn-primary btn-sm';
document.getElementById('main').appendChild(boton);

boton.addEventListener('click', () => {
    // console.log('aca el boton');
    window.location = '/';
});
