'use strict';
import './styles.css';
import 'material-symbols';

import logo from '/src/assets/images/Logo.png';
import enconstruccion from '/src/assets/images/enconstruccion.png';

const /** {HTMLElement} */ $overlay = document.createElement('div');
$overlay.classList.add('overlay', 'modal-overlay');

const NoteModal = function (
    title = 'Untitle',
    text = 'Add your note...',
    time = ''
) {
    // const /** {HTMLElement} */ $body = document.body;
    // $body.innerHTML = '';

    const /** {HTMLElement} */ $modal = document.createElement('div');
    $modal.classList.add('modal');

    $modal.innerHTML = `
        <div class="contenedor">
            <div class="contenido">
                <button
                    class="icon-btn large"
                    aria-label="Close modal"
                    data-close-btn
                >
                    <span class="material-symbols-rounded" aria-hidden="true"
                        >close</span
                    >
                    <div class="state-layer"></div>
                </button>
                <div>
                    <img src="${enconstruccion}" alt="En Construccion" />
                    <button type="button" class="fab" data-inicio-btn>
                        <span
                            class="material-symbols-outlined"
                            aria-hidden="true"
                            >close</span
                        >
                        <span class="text text-label-large">Cerrar</span>
                        <div class="state-layer"></div>
                    </button>
                </div>
            </div>
        </div>
    `;

    /**
     * Opens the note modal by appending it to the document body and setting focus
     * on the title field
     */
    const open = function () {
        document.body.appendChild($modal);
        document.body.appendChild($overlay);
    };

    /**
     * Closes the note modal by removing it from the document body
     */

    const close = function () {
        document.body.removeChild($modal);
        document.body.removeChild($overlay);
        // $titleField.focus();
    };

    // attach click event to closeBtn, when click call the close modal function
    const /** {HTMLElement} */ $closeBtn =
            $modal.querySelector('[data-close-btn]');
    $closeBtn.addEventListener('click', close);

    return { open, close };
};

export { NoteModal };
