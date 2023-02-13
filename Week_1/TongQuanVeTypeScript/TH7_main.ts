import {TH7_Book} from "./TH7_Book";
import {TH7_BookManager} from "./TH7_BookManager";
import {Book} from "./TH6_DSD";

let book1 = new TH7_Book('B001','Lập trình Java');
let book2 = new TH7_Book('B002','Lập trình PHP');
let book3 = new TH7_Book('B003','Lập trình TypeScript');

let bookManager = new TH7_BookManager();
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);

bookManager.update('B003', 'lập trình MySQL')

console.log(bookManager.getList())