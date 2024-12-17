'use strict';

import '/src/styles.css';
import './mision.css';

import { footerModal } from '../shared/footer/footer';
import { navbarModal } from '../shared/navbar/navbar';

const misionModal = function () {
    const /* {HTMLElement} */ $modal = document.createElement('div');
    $modal.innerHTML = `
    <div class="frame-mision">

        <div class="slide">

            <div class="item" style="background-image: url('/src/assets/images/Erik-Cubillos-01.jpg');">
                <div class="content">
                    <div class="name">Nuestra Mision</div>
                    <div class="des">Dentro de un marco de respetuo mutuo, desarrollar nuestra Comunidad</div>
                    <div class="des">Mision 2</div>
                    <div class="des">Mision 3</div>
                    <button class="button-mision" data-ver-mas>Ver Mas</button>
                </div>
            </div>
            <div class="item" style="background-image: url('/src/assets/images/Erik-Cubillos-02.jpg');">
                <div class="content">
                    <div class="name">Proyectos</div>
                    <div class="des">Mejorar Controles de Acceso</div>
                    <div class="des">Proyecto 3</div>
                    <div class="des">Proyecto 3</div>
                    <button class="button-mision" data-ver-mas>Ver Mas</button>
                </div>
            </div>
            <div class="item" style="background-image: url('/src/assets/images/Gladys-01.jpg');">
                <div class="content">
                    <div class="name">Actividades</div>
                    <div class="des">Celebracion de Fin de Año</div>
                    <div class="des">Convivencia Comunitaria</div>
                    <div class="des">Mejoramiento Areas Verdes</div>
                    <button class="button-mision" data-ver-mas>Ver Mas</button>
                </div>
            </div>
            <div class="item" style="background-image: url('/src/assets/images/Juan-Angel-01.jpg');">
                <div class="content">
                    <div class="name">Incorporate</div>
                    <div class="des">No tiene ningun costo, ni ahora ni siempre</div>
                    <div class="des">Escucharemos tus inquietudes</div>
                    <div class="des">Participa activamente en nuestra Comunidad</div>
                    <button class="button-mision" data-ver-mas>Ver Mas</button>
                </div>
            </div>
            <div class="item" style="background-image: url('/src/assets/images/Juan-Angel-02.jpg');">
                <div class="content">
                    <div class="name">Proximas Reuniones</div>
                    <div class="des">Reunion Informativa dd / mmm / aaaa hh:mm</div>
                    <div class="des">Eleccion de Temas Prioritarios de la Comunidad</div>
                    <button class="button-mision" data-ver-mas>Ver Mas</button>
                </div>
            </div>
            <div class="item" style="background-image: url('/src/assets/images/Lucia-08.jpg');">
                <div class="content">
                    <div class="name">Registrate con nosotros</div>
                    <div class="des">Enterate de las ultimas novedades</div>
                    <div class="des">Publica tus emprendimientos</div>
                    <div class="des">Participa en Nuestra Comunidad Market</div>
                    <button class="button-mision" data-ver-mas>Ver Mas</button>
                </div>
            </div>

        </div>

        <div class="btns">
            <div class="btn prev"></div>
            <div class="btn next"></div>
        </div>
    </div>
`;

    const open = function () {
        const /** {Object} */ $navbarmodal = navbarModal();
        $navbarmodal.open();

        document.body.appendChild($modal);

        const /** {Object} */ $footermodal = footerModal();
        $footermodal.open();
    };

    return { open };
};

export { misionModal };
