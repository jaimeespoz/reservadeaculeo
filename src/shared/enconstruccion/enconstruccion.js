'use strict';
import '../../styles/styles.css';

import enconstruccion from '/src/assets/images/enconstruccion.png';

import { navbar } from '../navbar/navbar';
import { footer } from '../footer/footer';

const /* {HTMLElement} */ container = document.createElement('div');
container.innerHTML = `
    <div class="contenedor">
        <div class="contenido">
            <img alt="" src="${enconstruccion}" /img>
        </div>
    </div>
`;

// const nv = document.createElement('div');
// nv.innerHTML = container;
// nv.appendChild(navbar);
// body.appendChild(nv);
document.getElementById('navbar').appendChild(navbar);
document.getElementById('main').appendChild(container);
document.getElementById('footer').appendChild(footer);

const body = document.body;
const boton = document.createElement('button');
boton.innerText = 'volver';
boton.className = 'btn btn-primary btn-sm';
body.appendChild(boton);

boton.addEventListener('click', () => {
    console.log('aca el boton');
    window.location = '/';
});
