export class Book {
    private title: string;
    private author: string;
    private alreadyRead: boolean;

    constructor(title: string, author: string, alreadyRead: boolean) {
        this.title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }
    showBook(a:Book){
        console.log(a)
    }
}
