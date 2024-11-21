'use strict';

import logo from '/src/assets/images/Logo.png';

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
const NoteModal = function (
    title = 'Untitle',
    text = 'Add your note...',
    time = ''
) {
    console.log('notemodal');
    const /** {HTMLElement} */ $modal = document.createElement('div');
    // $modal.classList.add('modal');

    $modal.innerHTML = `
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
                    <li>Hola</li>
                        <li>
                            <button type="button" class="fab" data-contacto>
                                <span class="material-symbols-rounded" aria-hidden="true">add</span>
                                <span class="text text-label-large">New Note</span>
                                <div class="state-layer"></div>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
`;

    /**
     * Opens the note modal by appending it to the document body and setting focus
     * on the title field
     */
    const open = function () {
        console.log('open notemodal');
        document.body.appendChild($modal);
        console.log($modal);
        // document.body.appendChild($overlay);
        // $titleField.focus();
    };

    /**
     * Closes the note modal by removing it from the document body
     */

    const close = function () {
        document.body.removeChild($modal);
        // document.body.removeChild($overlay);
        // $titleField.focus();
    };

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

    return { open, close, onSubmit };
};

// const /** {Object} */ modal = NoteModal();
// modal.open();

export { NoteModal };
