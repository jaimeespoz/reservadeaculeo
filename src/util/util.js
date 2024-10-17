'use strict';

/**
 * Attaches an event listener  to a collection of DOM elements
 * @param {Array<HTMLElement>} $elements An array of DOM elements to attach the event listener to
 * @param {string} eventType The type of event to listen for (eg 'click','mouseover')
 * @param {Function} callback The function to be executed when de event occurs
 */

const addEventOnElement = function ($element, eventType, callback) {
    $element.addEventListener(eventType, callback);
};

/**
 * Attaches an event listener  to a collection of DOM elements
 * @param {Array<HTMLElement>} $elements An array of DOM elements to attach the event listener to
 * @param {string} eventType The type of event to listen for (eg 'click','mouseover')
 * @param {Function} callback The function to be executed when de event occurs
 */

const addEventOnElements = function ($elements, eventType, callback) {
    $elements.forEach(($element) =>
        $element.addEventListener(eventType, callback)
    );
};

export { addEventOnElement, addEventOnElements };
