'use strict';
import '../../styles/styles.css';
import '../navbar/navbar.css';

import logo from '/src/assets/images/Logo.png';

const /* {HTMLElement} */ container = document.createElement('div');
container.innerHTML = `
<div class="contenedor">
<div class="contenido">
    <header class="header">
        <div class="logo">
            <a href="/index.html"><img src="${logo}" alt=Reserva de Aculeo"></a>
        </div>
        <nav>
            <ul class="nav-links">
                <li><a href="/index.html">Inicio</a></li>
                <li><a href="/enconstruccion.html">Quienes Somos</a></li>
                <li><a href="/enconstruccion.html">Proyectos</a></li>
                <li><a href="/login.html">Log In</a></li>
            </ul>
        </nav>
        <a href="/contacto.html" class="btn"><button type="button">Contacto</button></a>
    </header>
    </div>
</div>    
`;

const navbar = container;

export { navbar };
