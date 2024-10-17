import '/src/styles/main.css';
import './navbar.css';

import logo from '/src/assets/images/Logo.png';

const /* {HTMLElement} */ container = document.createElement('div');
container.innerHTML = `
    <header class="header">
        <div class="logo">
            <img src="${logo}" alt=Reserva de Aculeo">
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
`;

const navbar = container;

export { navbar };
