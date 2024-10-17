import '/src/styles/main.css';
import './footer.css';

import logo from '/src/assets/images/Logo.png';

const /* {HTMLElement} */ container = document.createElement('div');
container.innerHTML = `
<div class="footer">   
    <div class="container2">
        <div class="content">
            <div class="layout">
                <div class="panel_logo">
                    <a href="/">
                        <img src="${logo}" class="img" alt="" />
                    </a>
                    <div class="resena">
                        <p class="resena-titulo">Junta de Vecinos</p>
                        <p class="resena-titulo">Reserva de Aculeo</p>
                        <p class="resena-otros">Constitucion: Octubre-2024</p>
                        <p class="resena-subtitulo">Comuna de Paine</p>
                        <p class="resena-subtitulo">Region Metropolitana</p>
                    </div>
                </div>
                <div class="panel_info">
                    <span class="panel_info_titulo">Contacto<span>
                    <span class="panel_info_subtitulo">Direccion:</span>
                    <span class="panel_info_texto">Parcela xx</span>
                    <span class="panel_info_texto">Condominio Parque Cantillana</span>
                    <span class="panel_info_texto">(ex Alto Laguna)</span>
                    <span class="panel_info_texto">Ruta G-546 - Klm. 19,5</span>
                    <span class="panel_info_texto">Comuna de Paine</span>
                    <span class="panel_info_subtitulo">Email:<span>
                    <span class="panel_info_texto">contacto@reservadeaculeo.cl</span>
                    <span class="panel_info_subtitulo">Telefono:<span>
                    <span class="panel_info_texto">+56 9 1234 1234</span>
                </div>
                <div class="panel_info">
                    <span class="panel_info_titulo">Incorporacion<span>
                    <ul>
                        <li>
                            <a href="/enconstruccion.html"><span>Proxima Reunion</span></a>
                            <a href="/enconstruccion.html"><span>Tema x Tema x Tema x</span></a>
                            <a href="/enconstruccion.html"><span>Tema y Tema y Tema y</span></a>
                            <a href="/enconstruccion.html"><span>Tema z Tema z Tema z</span></a>
                        </li>
                    </ul>
                </div>
                <div class="panel_info">
                    <span class="panel_info_titulo">Nuestra Comunidad<span>
                    <ul>
                        <li>
                            <a href="/enconstruccion.html"><span>Actividades</span></a>
                            <a href="/enconstruccion.html"><span>Tema x Tema x Tema x</span></a>
                            <a href="/enconstruccion.html"><span>Tema y Tema y Tema y</span></a>
                            <a href="/enconstruccion.html"><span>Tema z Tema z Tema z</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
`;

const footer = container;

export { footer };
