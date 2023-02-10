class Staff {
    private _name: string;
    private _email: string;
    private _age: number;


    constructor(name: string, email: string, age: number) {
        this._name = name;
        this._email = email;
        this._age = age;
    }


    getname(): string {
        return this._name;
    }

    setname(value: string): void {
        this._name = value;
    }

    getemail(): string {
        return this._email;
    }

    setemail(value: string): void {
        this._email = value;
    }

    getage(): number {
        return this._age;
    }

    setage(value: number): void {
        this._age = value;
    }
}

let staff = new Staff('Staff 1', 'staff@gmail.com', 20);
// let nameStaff = staff.getname()
console.log(staff.getname());
staff.setname("staff 2")
console.log(staff.getname())