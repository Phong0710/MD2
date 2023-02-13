export class Book {
     title: string;
     author: string;
     alreadyRead: boolean;

    constructor(title: string, author: string, alreadyRead: boolean) {
        this.title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }
    showBook(a:Book){
        if(a.alreadyRead===true){
            console.log(`Đã đọc ${a.title}`)
        } else {
            console.log(`Chưa đọc ${a.title}`)
        }

     }

}
