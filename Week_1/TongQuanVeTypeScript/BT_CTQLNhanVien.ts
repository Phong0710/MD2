enum gender {
    boy = 0,
    girl,
    orther
}

export class Staff {
    private _Name: string;
    private _Gender: gender;
    private _Brithday: string;
    private _Email: string;
    private _SDT ?: number


    constructor(Name: string, Gender: gender, Brithday: string, Email: string, SDT?: number) {
        this._Name = Name;
        this._Gender = Gender;
        this._Brithday = Brithday;
        this._Email = Email;
        if (SDT != undefined) {
            this._SDT = SDT;
        }
    }

    getName(): string {
        return this._Name;
    }

    setName(value: string): void {
        this._Name = value;
    }

    getGender(): gender {
        return this._Gender;
    }

    setGender(value: gender): void {
        this._Gender = value;
    }

    getBrithday(): string {
        return this._Brithday;
    }

    setBrithday(value: string): void {
        this._Brithday = value;
    }

    getEmail(): string {
        return this._Email;
    }

    setEmail(value: string): void {
        this._Email = value;
    }

    showStaff(staff: Staff) {
        console.log(staff);
    }
}