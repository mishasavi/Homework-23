class Paper {
    constructor(id, title, pages, date) {
        this._id = id;
        this._title = title;
        this._pages = pages;
        this._date = new Date (date);
        //this._date = date;
        this.age = function() {
            const ageDiffMs = new Date() - this._date;
            const ageDate = new Date(ageDiffMs);
            return ageDate.getUTCFullYear() - 1970;
        };

    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get pages() {
        return this._pages;
    }

    set pages(value) {
        this._pages = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        let parsedDate = new Date(value);
        if (isNaN(parsedDate.getTime())) {
            alert ('The date you entered is invalid');
        } else {this._date = value;}

    }


}

class Book extends Paper {
    constructor(id, title, pages, date, author) {
        super(id, title, pages, date);
        this._author = author;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }


}

class Magazine extends Paper {
    constructor(id, title, pages, date, frequency) {
        super(id, title, pages, date);
        this._frequency = frequency;
    }

    get frequency() {
        return this._frequency;
    }

    set frequency(value) {
        this._frequency = value;
    }
}

class Library {
    constructor() {
        this._content = [];
    }
    get content() {
        return [...this._content];
    }

    addContent (item) {
        const index = this._content.findIndex (e => e.id === item.id);
        if (index < 0) {
            this._content.push (item);
        } else {alert ('This id number is already used!')}
        return index<0;
    }

    removeContent (id) {
        const index = this._content.findIndex (e => e.id === id);
        if (index >= 0) {
            this._content.splice(index,1);
        }
        return index >= 0;
    }
}
