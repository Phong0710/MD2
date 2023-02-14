enum Role {
    admin = 1,
    user = 2
}

class User {
    protected _name: string;
    protected _email: string;
    public _role: Role;

    constructor(name: string, email: string, role: Role) {
        this._name = name;
        this._email = email;
        this._role = role;
    }
    getInfo(a:User){
        console.log(a)
    }
    isAdmin(){
        if(this._role===1){
            console.log("Admin")
        } else if (this._role===2){
            console.log("Người bình thường")
        } else {
            console.log("Error Role")
        }
    }

    setName(value: string):void {
        this._name = value;
    }

    setEmail(value: string):void {
        this._email = value;
    }

    setRole(value: Role):void {
        this._role = value;
    }
}
let person = new User("Phong","qqq@gmail.com",1)

person.isAdmin()