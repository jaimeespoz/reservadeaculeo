'use strict';
import '../../styles/styles.css';
import '../navbar/navbar.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import '@fortawesome/fontawesome-free/js/all.js';

import logo from '/src/assets/images/Logo.png';

const /* {HTMLElement} */ container = document.createElement('div');
container.innerHTML = `
    <div class="contenedor">
        <div class="contenido">
            <div class="header">
                <div class="logo">
                    <a href="/index.html"><img src="${logo}" alt=Reserva de Aculeo></a>
                </div>
                <div class="bars">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                <nav class="nav-bar">
                    <ul>
                        <li><span><a href='/'><i class="fa-solid fa-house fa-lg"></i>&nbsp; Inicio</a></span></li>
                        <li><span><a href='/quienes_somos.html'><i class="fa-solid fa-users fa-lg"></i>&nbsp; Quienes
                                    Somos</a></span></li>
                        <li><span><a href="/login.html"><i class="fa-solid fa-arrow-right-to-bracket fa-lg"></i>&nbsp;
                                    Login</a></span>
                        </li>
                        <li><span><a href="/contacto.html"><i class="fa-regular fa-envelope fa-lg"></i>&nbsp;
                                    Contacto</a></span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    `;

const navbar = container;

export { navbar };
