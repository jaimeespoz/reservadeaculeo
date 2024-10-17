import './styles/styles.scss';
import { UI } from './ui';
import Books from './object/Books';
import { addEventOnElement } from './util/util';

// const siguiente = document.getElementById('siguiente');
// addEventOnElement(siguiente, 'click', function () {
//     import('/src/dos/index2')
//         .then((res) => {
//             console.log('aca', res);
//         })
//         .catch((error) =>
//             console.log('An error occurred while loading the component', error)
//         );
// });

// const tres = document.getElementById('tres');
// addEventOnElement(tres, 'click', function () {
//     import('/src/tres/index')
//         .then((res) => {
//             console.log('aca tres', res);
//         })
//         .catch((error) =>
//             console.log('An error occurred while loading the component', error)
//         );
// });

// const login = document.getElementById('login');
// addEventOnElement(login, 'click', function () {
//     import('/src/login/index')
//         .then((res) => {
//             console.log('aca tres', res);
//         })
//         .catch((error) =>
//             console.log('An error occurred while loading the component', error)
//         );
// });

// const anterior = document.getElementById('anterior');
// addEventOnElement(anterior, 'click', function () {
//     window.location = '/';
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const ui = new UI();
//     ui.renderBooks();
// });

// document.getElementById('form-book').addEventListener('submit', (e) => {
//     const books = new Books();
//     books.title = document.getElementById('title').value;
//     books.author = document.getElementById('author').value;
//     books.isbn = document.getElementById('isbn').value;

//     const ui = new UI();
//     ui.addNewBook(books);
//     ui.renderMessage('New book added', 'success', 3000);

//     e.preventDefault();
// });

// document.getElementById('books-cards').addEventListener('click', (e) => {
//     if (e.target.classList.contains('delete')) {
//         const ui = new UI();
//         ui.deleteBook(e.target.getAttribute('_id'));
//         ui.renderMessage('Book removed', 'danger', 3000);
//     }
//     e.preventDefault();
// });
