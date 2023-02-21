class Documents {
    private _id: number;
    private _nxbTen: string;
    private _soBPH: number;

    constructor(id: number, nxbTen: string, soBPH: number) {
        this._id = id;
        this._nxbTen = nxbTen;
        this._soBPH = soBPH;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nxbTen(): string {
        return this._nxbTen;
    }

    set nxbTen(value: string) {
        this._nxbTen = value;
    }

    get soBPH(): number {
        return this._soBPH;
    }

    set soBPH(value: number) {
        this._soBPH = value;
    }
}

class Book extends Documents {
    private _tgTen: string;
    private _soTrang: number;

    constructor(id: number, nxbTen: string, soBPH: number, tgTen: string, soTrang: number) {
        super(id, nxbTen, soBPH);
        this._tgTen = tgTen;
        this._soTrang = soTrang;
    }

    get tgTen(): string {
        return this._tgTen;
    }

    set tgTen(value: string) {
        this._tgTen = value;
    }

    get soTrang(): number {
        return this._soTrang;
    }

    set soTrang(value: number) {
        this._soTrang = value;
    }
}

class Magazine extends Documents {
    private _phienBan: number;
    private _thangPH: number;

    constructor(id: number, nxbTen: string, soBPH: number, phienBan: number, thangPH: number) {
        super(id, nxbTen, soBPH);
        this._phienBan = phienBan;
        this._thangPH = thangPH;
    }

    get phienBan(): number {
        return this._phienBan;
    }

    set phienBan(value: number) {
        this._phienBan = value;
    }

    get thangPH(): number {
        return this._thangPH;
    }

    set thangPH(value: number) {
        this._thangPH = value;
    }
}

class Newspaper extends Documents {
    private _ngayPH: number

    constructor(id: number, nxbTen: string, soBPH: number, ngayPH: number) {
        super(id, nxbTen, soBPH);
        this._ngayPH = ngayPH;
    }

    get ngayPH(): number {
        return this._ngayPH;
    }

    set ngayPH(value: number) {
        this._ngayPH = value;
    }
}

interface IManager<T> {
    add(t: T): void;

    removeById(id: number): void;

    show(): T[];

    findById(id: number): void;
}

class ManagerDocuments implements IManager<Documents> {
    documentAll: Documents[] = [];
    books: Documents[] = []
    magazine: Documents[] = []
    newspaper: Documents[] = []
    count: number = 1;

    constructor() {
    }

    add(t: Documents): void {
        this.documentAll.push(t)
    }

    addBook(t: Documents): void {
        this.books.push(t)
    }

    addMagazine(t: Documents): void {
        this.magazine.push(t)
    }

    addNewspaper(t: Documents): void {
        this.newspaper.push(t)
    }

    getID(): number {
        return this.count++;
    }

    findById(id: number): any {
        return this.documentAll.findIndex(function (item) {
            return item.id == id;
        })
    }

    findByIdBook(id: number): any {
        return this.books.findIndex(function (item) {
            return item.id == id;
        })
    }

    findByIdMagazine(id: number): any {
        return this.magazine.findIndex(function (item) {
            return item.id == id;
        })
    }

    findByIdNewspaper(id: number): any {
        return this.newspaper.findIndex(function (item) {
            return item.id == id;
        })
    }

    removeById(id: number): void{
        let index = this.findById(id);
         this.documentAll.splice(index,1)
    }

    showBook(): Documents[] {
        return this.books;
    }

    showMagazine(): Documents[] {
        return this.magazine;
    }

    showNewspaper(): Documents[] {
        return this.newspaper;
    }

    show(): Documents[] {
        return this.documentAll;
    }


}

let input = require('readline-sync');
let managerDocument = new ManagerDocuments();

function showMenu() {
    let choice = -1
    do {
        console.log(
            `
        ---- Main Menu ----
        1.Thêm mới tài liệu
        2.Hiển thị tài liệu
        3.Tìm theo id
        4.Xóa theo id
        0.Thoát
        `
        )
        choice = +input.question('Enter Choice : ')
        switch (choice) {
            case 1:
                addDocument()
                break
            case 2:
                showDocument()
                break;
            case 3:
                findByid()
                break;
            case 4:
                removeById()
                break;

        }
    }
    while (choice !== 0);
}

function addDocument() {
    let choice = -1
    do {
        console.log(
            `
        ---- Main Menu ----
        1.Thêm mới Sách
        2.Thêm mới tạp chí
        3.Thêm mới báo
        0.Thoát
        `
        )
        choice = +input.question('Enter Choice : ')
        switch (choice) {
            case 1:
                addBook()
                break
            case 2:
                addMagazine()
                break;
            case 3:
                addNewspaper()
                break;

        }
    }
    while (choice !== 0);
}

function addBook() {
    console.log('-----Menu thêm mới ------')
    let id = managerDocument.getID();
    let nxbTen = input.question('Enter nxbTen');
    let soNPH = +input.question('Enter soNPH: ')
    let tgTen = input.question('Enter tgTen: ')
    let soTrang = +input.question('Enter soTrang : ');
    let books: Book = new Book(id, nxbTen, soNPH, tgTen, soTrang);
    managerDocument.addBook(books);
    managerDocument.add(books);
    console.log('Thêm thành công !');
}

function addMagazine() {
    console.log('-----Menu thêm mới ------')
    let id = managerDocument.getID();
    let nxbTen = input.question('Enter nxbTen');
    let soNPH = +input.question('Enter soNPH: ')
    let phienBan = +input.question('Enter phienBan: ')
    let thangPH = +input.question('Enter thangPH : ');
    let manazines: Magazine = new Magazine(id, nxbTen, soNPH, phienBan, thangPH);
    managerDocument.addMagazine(manazines);
    managerDocument.add(manazines);
    console.log('Thêm thành công !');
}

function addNewspaper() {
    console.log('-----Menu thêm mới ------')
    let id = managerDocument.getID();
    let nxbTen = input.question('Enter nxbTen');
    let soNPH = +input.question('Enter soNPH: ')
    let ngayPH = input.question('Enter ngayPH: ')
    let newspapers: Newspaper = new Newspaper(id, nxbTen, soNPH, ngayPH);
    managerDocument.addNewspaper(newspapers);
    managerDocument.add(newspapers);
    console.log('Thêm thành công !');
}

function showDocument() {
    let choice = -1
    do {
        console.log(
            `
        ---- Main Menu ----
        1.Xem danh sách Sách
        2.Xem danh sách Tạp chí
        3.Xem danh sách Báo
        4.Xem danh sách tổng
        0.Thoát
        `
        )
        choice = +input.question('Enter Choice : ')
        switch (choice) {
            case 1:
                showBook()
                break
            case 2:
                showMagazine()
                break;
            case 3:
                showNewspaper()
                break;
            case 4:
                showAll()
                break;
        }
    }
    while (choice !== 0);
}

function showBook() {
    console.table(managerDocument.showBook())
}

function showMagazine() {
    console.table(managerDocument.showMagazine())
}

function showNewspaper() {
    console.table(managerDocument.showNewspaper())
}

function showAll() {
    console.table(managerDocument.show())
}

function findByid() {
    let choice = -1
    do {
        console.log(
            `
        ---- Main Menu ----
        1.Tìm trong danh sách Sách
        2.Tìm trong danh sách Tạp chí
        3.Tìm trong danh sách Báo
        4.Tìm toàn danh sách 
        0.Thoát
        `
        )
        choice = +input.question('Enter Choice : ')
        switch (choice) {
            case 1:
                findByIdBook()
                break
            case 2:
                findByIdMagazine()
                break;
            case 3:
                findByIdNewspaper()
                break;
            case 4:
                findById()
                break;
        }
    }
    while (choice !== 0);
}

function findByIdBook() {
    console.log(`Nhập id bạn muốn tìm :`);
    let id = input.question(`Enter ID :`);
    let index = managerDocument.findByIdBook(id);
    console.log('index = ', index)
    console.table(managerDocument.books[index])
}

function findByIdMagazine() {
    console.log(`Nhập id bạn muốn tìm :`);
    let id = input.question(`Enter ID :`);
    let index = managerDocument.findByIdMagazine(id);
    console.log('index = ', index)
    console.table(managerDocument.magazine[index])
}

function findByIdNewspaper() {
    console.log(`Nhập id bạn muốn tìm :`);
    let id = input.question(`Enter ID :`);
    let index = managerDocument.findByIdNewspaper(id);
    console.log('index = ', index)
    console.table(managerDocument.newspaper[index])
}
function findById(){
    console.log(`Nhập id bạn muốn tìm :`);
    let id = input.question(`Enter ID :`);
    let index = managerDocument.findById(id);
    console.log('index = ', index)
    console.table(managerDocument.documentAll[index])
}

function removeById() {
    console.log(`Nhập id bạn muốn xóa :`);
    let id = input.question(`Enter ID :`);
     managerDocument.removeById(id);
    console.table(managerDocument.show())
}

showMenu()