import {TH7_Book} from "./TH7_Book";
export class TH7_BookManager{
    private books : TH7_Book[] =[];


    constructor() {
    }
    add(book:TH7_Book):void{
        this.books.push(book)
    }
    getList(): TH7_Book[]{
        return this.books;
    }
    delete(id:string):void{
        let indexBookDelete = this.findBook(id);
        if(indexBookDelete !=-1){
            this.books.splice(indexBookDelete,1);
        } else {
            throw new Error('delete error')
        }
    }
    update(id:string,name:string){
        let indexBookUpdate = this.findBook(id);
        console.log(indexBookUpdate)
        if(indexBookUpdate != -1){
            this.books[indexBookUpdate].setname(name);
        } else {
            throw new Error('Update Error')
        }
    }
    findBook(id:string){
        let i =-1;
        this.books.forEach((TH7_Book, index)=>{
            if(TH7_Book.getid() === id) {
                i = index;
            }
        })
        return i;
    }
}