'use strict';
import '../../globalstyles.css';
import './contacto.css';
import 'material-symbols';

import logo from '/src/assets/images/Logo.png';

import { enConstruccionModal } from '../enconstruccion';

const /** {HTMLElement} */ $overlay = document.createElement('div');
$overlay.classList.add('overlay', 'modal-overlay');

/**
 * Creates and manage a modal for adding or editing notes. The
 * modal allows users to input a note's title and text,
 * and provides functionality to submit and save the note
 *
 * @param {string} [title='Untitled'] - The default title for the note
 * @param {string} [text='Add your note'] - the default text for the note
 * @param {string} [time=''] - the time associated with the note.
 * @returns {object} - An object containing functions to open the modal,
 *  close the modal, and handle note submissions
 */
const contactoModal = function () {
    const /** {HTMLElement} */ $modal = document.createElement('div');
    $modal.classList.add('modal');

    $modal.innerHTML = `
        <div class="wrapper-contacto">
            <div>
                <button
                    class="icon-btn large"
                    aria-label="Close modal"
                    data-modal-close-btn
                >
                    <span class="material-symbols-rounded" aria-hidden="true"
                        >close</span
                    >
                    <div class="state-layer"></div>
                </button>
                <div class="layer-contacto">
                    <div>
                        <a href="/">
                            <img src="${logo}" class="logo-chico" alt="" />
                        </a>
                    </div>
                    <div>
                        <span class="text-title-medium">Junta de Vecinos</span>
                        <span class="text-title-medium">Reserva de Aculeo</span>
                    </div>
                </div>
                <div class="wrapper-contacto">
                    <div>
                        <span class="text-title-large text-bold"
                            >Contactenos</span
                        >
                    </div>

                    <div>
                        <hr class="solid" />
                    </div>
                </div>
            </div>
                <div>
                    <div>
                        <label for="email" class="text-title-very-small"
                            >Direccion de Correo</label
                        >
                        <input
                            id="email"
                            type="text"
                            placeholder="ingrese Correo"
                            value=""
                            class="text-title-medium form-control"
                            data-note-field
                        />
                    </div>
                    <div class="mt-4">
                        <label for="asunto" class="text-title-very-small"
                            >Asunto</label
                        >
                        <input
                            id="asunto"
                            type="text"
                            placeholder="ingrese un Asunto"
                            value=""
                            class="text-title-medium form-control"
                            data-note-field
                        />
                    </div>
                    <div class="mt-4">
                        <label for="mensaje" class="text-title-very-small"
                            >Texto del Mensaje</label
                        >
                        <textarea
                            id="mensaje"
                            placeholder="Ingrese un texto..."
                            class="modal-text text-body-large custom-scrollbar"
                        >
Ingrese un texto</textarea
                        >
                    </div>
                </div>

                <div>
                    <div>
                        <button type="button" class="fab" data-enviar-btn>
                            <span class="text text-label-large">Enviar</span>
                            <div class="state-layer"></div>
                        </button>
                    </div>

                    <div class="layer-terminos">
                        <button type="button" data-terminos-btn>
                            <span class="text-label-small"
                                >Terminos de Uso</span
                            >
                            <div class="state-layer"></div>
                        </button>

                        <button type="button" data-seguridad-btn>
                            <span class="text-label-small">Seguridad</span>
                            <div class="state-layer"></div>
                        </button>
                    </div>
                </div>
            </div>
    `;
    const open = function () {
        document.body.appendChild($modal);
        document.body.appendChild($overlay);
        // $titleField.focus();
    };

    const close = function () {
        document.body.removeChild($modal);
        document.body.removeChild($overlay);
        // $titleField.focus();
    };

    const /** {HTMLElement} */ $modalCloseBtn = $modal.querySelector(
            '[data-modal-close-btn]'
        );
    const /** {HTMLElement} */ $enviarBtn =
            $modal.querySelector('[data-enviar-btn]');

    /**
     * Handles the submission of a note within the model
     *
     * @param {Function} callback   -   the callback function to execute with the submitted note data
     */
    const onSubmit = function (callback) {
        $submitBtn.addEventListener('click', function () {
            const /** {Object} */ noteData = {
                    title: $titleField.value,
                    text: $textField.value,
                };
            callback(noteData);
        });
    };
    $modalCloseBtn.addEventListener('click', close);

    $enviarBtn.addEventListener('click', function () {
        const /** {Object} */ modal = enConstruccionModal();
        modal.open();
    });

    return { open, close, onSubmit };
};

export { contactoModal };
