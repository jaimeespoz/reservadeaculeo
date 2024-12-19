'use strict';

// import '../globalstyles.css';
import './mision.css';

// import { enConstruccionModal } from '../shared/enconstruccion';

// const misionModal = function () {
const /* {HTMLElement} */ misionModal = document.createElement('div');
misionModal.classList.add('wrapper-mision');
misionModal.innerHTML = `
    <div class="frame-mision">

        <div class="slide-mision">

            <div class="item-mision img01">
                <div class="content-mision">
                    <div class="name-mision">Nuestra Mision</div>
                    <div class="des-mision">Dentro de un marco de respetuo mutuo, desarrollar nuestra Comunidad</div>
                    <div class="des-mision">Mision dos</div>
                    <div class="des-mision">Mision tres</div>
                    <button class="button-mision" data-ver-01>Ver Mas</button>
                </div>
            </div>
            <div class="item-mision img02">
                <div class="content-mision">
                    <div class="name-mision">Proyectos</div>
                    <div class="des-mision">Mejorar Controles de Acceso</div>
                    <div class="des-mision">Proyecto 3</div>
                    <div class="des-mision">Proyecto 3</div>
                    <button class="button-mision" data-ver-02>Ver Mas</button>
                </div>
            </div>
            <div class="item-mision img03">
                <div class="content-mision">
                    <div class="name-mision">Actividades</div>
                    <div class="des-mision">Celebracion de Fin de Año</div>
                    <div class="des-mision">Convivencia Comunitaria</div>
                    <div class="des-mision">Mejoramiento Areas Verdes</div>
                    <button class="button-mision" data-ver-03>Ver Mas</button>
                </div>
            </div>
            <div class="item-mision img04">
                <div class="content-mision">
                    <div class="name-mision">Incorporate</div>
                    <div class="des-mision">No tiene ningun costo, ni ahora ni siempre</div>
                    <div class="des-mision">Escucharemos tus inquietudes</div>
                    <div class="des-mision">Participa activamente en nuestra Comunidad</div>
                    <button class="button-mision" data-ver-04>Ver Mas</button>
                </div>
            </div>
            <div class="item-mision img05">
                <div class="content-mision">
                    <div class="name-mision">Proximas Reuniones</div>
                    <div class="des-mision">Reunion Informativa dd / mmm / aaaa hh:mm</div>
                    <div class="des-mision">Eleccion de Temas Prioritarios de la Comunidad</div>
                    <button class="button-mision" data-ver-05>Ver Mas</button>
                </div>
            </div>
            <div class="item-mision img06">
                <div class="content-mision">
                    <div class="name-mision">Registrate con nosotros</div>
                    <div class="des-mision">Enterate de las ultimas novedades</div>
                    <div class="des-mision">Publica tus emprendimientos</div>
                    <div class="des-mision">Participa en Nuestra Comunidad Market</div>
                    <button class="button-mision" data-ver-06>Ver Mas</button>
                </div>
            </div>

        </div>

        <div class="btns">
            <div class="btn prev"></div>
            <div class="btn next"></div>
        </div>
    </div>
`;

// const open = function () {
//     document.body.appendChild($modal);
// };
// let next = $modal.querySelector('.next');
// let prev = $modal.querySelector('.prev');

// next.addEventListener('click', function () {
//     let items = $modal.querySelectorAll('.item-mision');
//     document.querySelector('.slide-mision').appendChild(items[0]);
// });

// prev.addEventListener('click', function () {
//     let items = $modal.querySelectorAll('.item-mision');
//     document
//         .querySelector('.slide-mision')
//         .prepend(items[items.length - 1]); // here the length of items = 6
// });

// const /** {<HTMLElement} */ $mision01Btn =
//         $modal.querySelector('[data-ver-01]');

// const /** {<HTMLElement} */ $mision02Btn =
//         $modal.querySelector('[data-ver-02]');

// const /** {<HTMLElement} */ $mision03Btn =
//         $modal.querySelector('[data-ver-03]');

// const /** {<HTMLElement} */ $mision04Btn =
//         $modal.querySelector('[data-ver-04]');

// const /** {<HTMLElement} */ $mision05Btn =
//         $modal.querySelector('[data-ver-05]');

// const /** {<HTMLElement} */ $mision06Btn =
//         $modal.querySelector('[data-ver-06]');

// $mision01Btn.addEventListener('click', function () {
//     const /** {Object} */ $modal = enConstruccionModal();
//     $modal.open();
// });

// $mision02Btn.addEventListener('click', function () {
//     const /** {Object} */ $modal = enConstruccionModal();
//     $modal.open();
// });

// $mision03Btn.addEventListener('click', function () {
//     const /** {Object} */ $modal = enConstruccionModal();
//     $modal.open();
// });

// $mision04Btn.addEventListener('click', function () {
//     const /** {Object} */ $modal = enConstruccionModal();
//     $modal.open();
// });

// $mision05Btn.addEventListener('click', function () {
//     const /** {Object} */ $modal = enConstruccionModal();
//     $modal.open();
// });

// $mision06Btn.addEventListener('click', function () {
//     const /** {Object} */ $modal = enConstruccionModal();
//     $modal.open();
// });

// return { open };
// };

export { misionModal };
