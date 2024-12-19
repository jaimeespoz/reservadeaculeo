'use strict';

// import '../../globalstyles.css';
import './newsfmt02.css';

// import { footerModal } from '../shared/footer/footer';
// import { navbarModal } from '../shared/navbar/navbar';

// const news02Modal = function () {
const /* {HTMLElement} */ news02Modal = document.createElement('div');
news02Modal.innerHTML = `
    <div class="contenedor">
        <div class="contenido">
            <hr class="solid">
            <span class="text-title-large">Actividades</span>
            <div class="layer-news">
                <div class="news">
                    <img alt="" src="/src/assets/images/feed-1.jpg">
                    <span><b>Titulo1</b></span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus cumque quod
                        sunt molestias fugiat quaerat rem similique eligendi non explicabo aliquam itaque
                        deleniti vero, expedita esse molestiae voluptates dolores!</span>
                </div>
                <div class="news">
                    <img alt="" src="/src/assets/images/feed-2.jpg">
                    <span><b>Titulo2</b></span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus cumque quod
                        sunt molestias fugiat quaerat rem similique eligendi non explicabo aliquam itaque
                        deleniti vero, expedita esse molestiae voluptates dolores!</span>
                </div>
                <div class="news">
                    <img alt="" src="/src/assets/images/feed-3.jpg">
                    <span><b>Titulo3</b></span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus cumque quod
                        sunt molestias fugiat quaerat rem similique eligendi non explicabo aliquam itaque
                        deleniti vero, expedita esse molestiae voluptates dolores!</span>
                </div>
                <div class="news">
                    <img alt="" src="/src/assets/images/feed-4.jpg">
                    <span><b>Titulo4</b></span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus cumque quod
                        sunt molestias fugiat quaerat rem similique eligendi non explicabo aliquam itaque
                        deleniti vero, expedita esse molestiae voluptates dolores!</span>
                </div>
            </div>
        </div>
    </div>
`;

export { news02Modal };
