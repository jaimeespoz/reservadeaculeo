import { ApiEndPoint } from './constant';
import { helpHttp } from './helpers/helpHttp';
let api = helpHttp();

export const UI = () => {
    const renderBooks = async () => {
        const books = await api.get(`${ApiEndPoint.Books.Register}`);
        const bookCardContainer = document.getElementById('books-cards');
        bookCardContainer.innerHTML = '';
        books.forEach((book) => {
            const div = document.createElement('div');
            div.className = '';
            div.innerHTML = `
        <div class="card m-2">
            <div class="row">
                <div class="col-md-8">
                    <div class="card-block px-2">
                        <H4 class="card-title">${book.title}</H4>
                        <p class="card-text">${book.author}</p >
                        <p class="card-text">${book._id}</p >
                        <a href="#" class="btn btn-danger btn-sm delete" _id="${book._id}">X</a>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                ${book.created_at}
            </div>
        </div>
        `;
            bookCardContainer.appendChild(div);
        });
    };

    const addNewBook = async (book) => {
        await api.post(`${ApiEndPoint.Books.Register}`, book);
        clearBookForm();
        renderBooks();
    };

    function clearBookForm() {
        document.getElementById('form-book').reset();
    }

    async function renderMessage(message, colorMessage, secondsToRemove) {
        const div = document.createElement('div');
        div.className = `alert alert-${colorMessage} message`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.col-md-4');
        const bookForm = document.querySelector('#book-form');

        container.insertBefore(div, bookForm);
        setTimeout(() => {
            document.querySelector('.message').remove();
        }, secondsToRemove);
    }

    async function deleteBook(book) {
        const body = {
            id: book,
        };
        await api.del(`${ApiEndPoint.Books.Register}`, body);
        renderBooks();
    }

    return {
        renderBooks,
        addNewBook,
        clearBookForm,
        renderMessage,
        deleteBook,
    };
};

UI.renderBooks;
