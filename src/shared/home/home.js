'use strict';

// import '../../globalstyles.css';
import './home.css';

import Valdivia from '/src/assets/images/Valdivia.jpg';
import foto05 from '/src/assets/images/foto-05.jpg';
import foto06 from '/src/assets/images/foto-06.jpg';
import copihues from '/src/assets/images/copihues.jpg';
import chilenidad from '/src/assets/images/Semana-de-la-Chilenidad-2019.jpg';

// const homeModal = function () {
const /* {HTMLElement} */ homeModal = document.createElement('div');
homeModal.innerHTML = `<div class="contenedor">
        <div class="contenido">
                    <hr class="solid">
            <span class="text-title-large">Actividades de la Junta Vecinal</span>
        <div class="frame-home">
            <div class="wrapper-home">
                <div class="border">
                    <p class="text-headline-small pad-titulo">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p class="text-body-medium pad-texto">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque totam sunt ad et optio,
                        cupiditate unde, incidunt debitis voluptates maxime dolorum velit numquam illo similique
                        obcaecati fugit vel accusantium fugiat. </p>
                    <article class="cardo">
                        <img class="img-portada" alt="" src="${Valdivia}" />
                        <div class="card__modal">
                            <p>
                                Rio Calle-calle - Ciudad de Valdivia - Region De los Rios -
                                Chile
                            </p>
                        </div>
                    </article>
                </div>
                <div class="layer-home">
                    <div class="col-home">
                        <div class="border">
                            <article class="cardo">
                                <img class="col-home-imagen" alt="" src="${copihues}" />
                                <div class="card__modal">
                                    <p>
                                        Rio Calle-calle - Ciudad de Valdivia - Region De los Rios -
                                        Chile
                                    </p>
                                </div>
                            </article>
                            <p class="text-muted pad-texto">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, a neque,
                                excepturi
                                inventore cumque blanditiis repellat voluptatem consectetur necessitatibus suscipit
                                numquam
                                veniam provident ex vitae amet? Perferendis, praesentium? Veritatis, ratione.
                            </p>
                        </div>
                    </div>
                    <div class="col-home">
                        <div class="border">
                            <article class="cardo">
                                <img class="col-home-imagen" alt="" src="${chilenidad}" />
                                <div class="card__modal">
                                    <p>
                                        Rio Calle-calle - Ciudad de Valdivia - Region De los Rios -
                                        Chile
                                    </p>
                                </div>
                            </article>
                            <p class="text-muted pad-texto">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, a neque,
                                excepturi
                                inventore cumque blanditiis repellat voluptatem consectetur necessitatibus suscipit
                                numquam
                                veniam provident ex vitae amet? Perferendis, praesentium? Veritatis, ratione.
                            </p>
                        </div>
                    </div>
                    <div class="col-home">
                        <div class="border">
                            <article class="cardo">
                                <img class="col-home-imagen" alt="" src="${foto06}" />
                                <div class="card__modal">
                                    <p>
                                        Rio Calle-calle - Ciudad de Valdivia - Region De los Rios -
                                        Chile
                                    </p>
                                </div>
                            </article>
                            <p class="text-muted pad-texto">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, a neque,
                                excepturi
                                inventore cumque blanditiis repellat voluptatem consectetur necessitatibus suscipit
                                numquam
                                veniam provident ex vitae amet? Perferendis, praesentium? Veritatis, ratione.
                            </p>
                        </div>
                    </div>
                    <div class="col-home">
                        <div class="border">
                            <article class="cardo">
                                <img class="col-home-imagen" alt="" src="${foto05}" />
                                <div class="card__modal">
                                    <p>
                                        Rio Calle-calle - Ciudad de Valdivia - Region De los Rios -
                                        Chile
                                    </p>
                                </div>
                            </article>
                            <p class="text-muted pad-texto">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, a neque,
                                excepturi
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
//     const open = function () {
//         document.body.appendChild($modal);
//     };

//     return { open };
// };

export { homeModal };
