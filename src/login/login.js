import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/styles/main.css';
import './login.css';

import Valdivia from '/src/assets/images/Valdivia.jpg';

import { navbar } from '../shared/navbar/navbar';
import { footer } from '../shared/footer/footer';

const /* {HTMLElement} */ container = document.createElement('div');
container.innerHTML = `
        <div class="contenedor">
            <div class="contenido">
                <div class="wrapper">
                    <div class="panel">
                        <div class="border">
                        <form>
                            <div class="row mb-4 gap-1">
                                <div class="form-group-sm">
                                    <label
                                        for="usuario"
                                        class="form-label text-body-medium"
                                        >Usuario</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control text-body-medium"
                                        id="usuario"
                                        placeholder="Ingrese su correo electronico"
                                    />
                                </div>
                                <div class="col-md-4">
                                    <label
                                        for="password"
                                        class="form-label text-body-medium"
                                        >Clave de Acceso</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control text-body-medium"
                                        id="password"
                                        placeholder="Ingrese su clave"
                                    />
                                </div>
                            </div>

                            <div class="row mb-4">
                                <div class="col-12">
                                    <button
                                        type="submit"
                                        class="btn btn-sm btn-primary"
                                    >
                                        Aceptar
                                    </button>
                                </div>
                            </div>
                        </form>
                        </div>
                        </div>
                    <div class="panel">
                        <article class="card">
                        <img class="tit-ppal-imagen" alt="" src="${Valdivia}" />
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
        </div>
`;
document.getElementById('navbar').appendChild(navbar);
document.getElementById('main').appendChild(container);
document.getElementById('footer').appendChild(footer);
