
type Sex = "Nam" | "Nữ" | "Khác"

class Person {
    private _fullName: string;
    private _age: number;
    private _sex: Sex;
    private _address: string;

    constructor(fullName: string, age: number, sex: Sex, address: string) {
        this._fullName = fullName;
        this._age = age;
        this._sex = sex;
        this._address = address;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get sex(): Sex {
        return this._sex;
    }

    set sex(value: Sex) {
        this._sex = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }
}

class Workers extends Person {
    private _level: number;

    constructor(fullName: string, age: number, sex: Sex, address: string, level: number) {
        super(fullName, age, sex, address);
        this._level = level;
    }

    get level(): number {
        return this._level;
    }

    set level(value: number) {
        this._level = value;
    }
}

class Engineer extends Person {
    private _job: string;

    constructor(fullName: string, age: number, sex: Sex, address: string, job: string) {
        super(fullName, age, sex, address);
        this._job = job;
    }

    get job(): string {
        return this._job;
    }

    set job(value: string) {
        this._job = value;
    }
}

class Staff extends Person {
    private _work: string;

    constructor(fullName: string, age: number, sex: Sex, address: string, work: string) {
        super(fullName, age, sex, address);
        this._work = work;
    }

    get work(): string {
        return this._work;
    }

    set work(value: string) {
        this._work = value;
    }
}

interface IManager<T> {
    add(t: T): void;

    showAll(): T[];

    findByName(fullName: string): boolean;

}

class PersonManager implements IManager<Person> {

    workers: Person[] = [];
    engineer: Person[] = [];
    staff: Person[] = [];
    persons: Person[] = [];
    add(t: Person): void {
        this.workers.push(t)
    }
    addE(t: Person): void {
        this.engineer.push(t)
    }
    addS(t: Person): void {
        this.staff.push(t)
    }
    addP(t: Person): void {
        this.persons.push(t)
    }
    findByName(fullName: string): any {
        let newPerson = this.persons.filter((item) => {
            if (fullName === item.fullName) {
                return true
            }
        })
        console.table(newPerson)
    }

    showWorker(): Person[] {
        return this.workers;
    }
    showEngineer(): Person[] {
        return this.engineer;
    }
    showStaff(): Person[] {
        return this.staff;
    }
    showAll(): Person[] {
       return  this.persons
    }

}

let input = require('readline-sync');
let personManager = new PersonManager();

function showMainMenu() {
    let choice = -1;
    do {
        console.log(
            `
        ---- Main Menu ----
        1.Thêm mới
        2.Hiển thị 
        3.Tìm
        0.Thoát
        `
        )
        choice = +input.question('Enter Choice : ')
        switch (choice) {
            case 1:
                addCB()
                break
            case 2:
                showLish()
                break;
            case 3:
                findName()
                break;
        }
    }
    while (choice !== 0);
}

function addCB() {
    let choice1 = -1;
    do {
        console.log(
            `
        ---- Main Menu ----
        1.Thêm Workers
        2.Thêm Engineer
        3.Thêm Staff
        0.Thoát
        `
        )
        choice1 = +input.question('Enter Choice : ')
        switch (choice1) {
            case 1:
                addWorker()
                break
            case 2:
                addEngineer()
                break
            case 3:
                addStaff()
                break
        }
    }
    while (choice1 !== 0) ;
}

function addWorker() {
    console.log('-----Menu thêm mới ------')
    let fullName = input.question('Enter full name : ');
    let sex = input.question('Enter sex');
    let age = +input.question('Enter age: ')
    let address = input.question('Enter address: ')
    let level = +input.question('Enter level : ');
    let workers: Workers = new Workers(fullName, age, sex, address, level);
    personManager.add(workers);
    personManager.addP(workers);
    console.log('Thêm thành công !');
}

function addEngineer() {
    console.log('-----Menu thêm mới ------')
    let fullName = input.question('Enter full name : ');
    let sex = input.question('Enter sex');
    let age = +input.question('Enter age: ')
    let address = input.question('Enter address: ')
    let job = input.question('Enter job : ');
    let  engineer: Engineer = new Engineer(fullName, age, sex, address, job);
    personManager.addE(engineer);
    personManager.addP(engineer);
    console.log('Thêm thành công !');
}

function addStaff() {
    console.log('-----Menu thêm mới ------')
    let fullName = input.question('Enter full name : ');
    let sex = input.question('Enter sex');
    let age = +input.question('Enter age: ')
    let address = input.question('Enter address: ')
    let work = input.question('Enter work : ');
    let staff: Staff = new Staff(fullName, age, sex, address, work);
    personManager.addS(staff);
    personManager.addP(staff);
    console.log('Thêm thành công !');
}

function showLish() {
    let choice2 = -1;
    do {
        console.log(
            `
        ---- Main Menu ----
        1.Hiển thị Workers
        2.Hiển thị Engineer
        3.Hiển thị Staff
        4.Hiển thị all
        0.Thoát
        `
        )
        choice2 = +input.question('Enter Choice : ')
        switch (choice2) {
            case 1:
                showWorker()
                break
            case 2:
                showEngineer()
                break
            case 3:
                showStaff()
                break
            case 4:
                showAll()
                break
        }
    }
    while (choice2 !== 0) ;

}
function showWorker(){
    console.table(personManager.showWorker())
}
function showEngineer(){
    console.table(personManager.showEngineer())
}
function showStaff(){
    console.table(personManager.showStaff())
}
function showAll(){
    console.log("Worker")
    console.table(personManager.showWorker())
    console.log("Engineer")
    console.table(personManager.showEngineer())
    console.log("Staff")
    console.table(personManager.showStaff())
}

function findName() {
    console.log(`NhapTenCanTim`)
    personManager.findByName(input.question('Enter full name : '))
}

showMainMenu()
