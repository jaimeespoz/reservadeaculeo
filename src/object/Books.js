'use strinc';

function Books(_id, title, author, isbn) {
    Object.defineProperty(this, '_id', {
        get: function () {
            return _id;
        },
        set: function (value) {
            _id = value;
        },
        enumerable: true,
        configurable: true,
    });
    Object.defineProperty(this, 'title', {
        get: function () {
            return title;
        },
        set: function (value) {
            title = value;
        },
        enumerable: true,
        configurable: true,
    });
    Object.defineProperty(this, 'author', {
        get: function () {
            return author;
        },
        set: function (value) {
            author = value;
        },
        enumerable: true,
        configurable: true,
    });
    Object.defineProperty(this, 'isbn', {
        get: function () {
            return isbn;
        },
        set: function (value) {
            isbn = value;
        },
        enumerable: true,
        configurable: true,
    });
}

Books.prototype = {
    constructor: Books,

    sayHi: function () {
        return 'Hi';
    },

    sayName: function () {
        console.log(this.title);
    },

    toString: function () {
        return '[Person ' + this.title + ']';
    },
};

export default Books;
