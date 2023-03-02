class Queue <T>{
    contaner:T[]=[];

    constructor() {
    }
    enqueue(data:T):void{
        this.contaner.push(data)
    }
    dequeue():T|undefined{
        return this.contaner.shift()
    }
    size():number{
        return this.contaner.length
    }

}
class KhamBenh<T> extends Queue<T>{
    private _name : string;
    private _code :number;

    constructor(name: string, code: number) {
        super();
        this._name = name;
        this._code = code;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get code(): number {
        return this._code;
    }

    set code(value: number) {
        this._code = value;
    }

}
let khambenh = new Queue()
let khambenh1 = new KhamBenh("Smith",5)
khambenh.enqueue(khambenh1)
let khambenh2 =  new KhamBenh("Jones",4)
khambenh.enqueue(khambenh2)
let khambenh3 = new KhamBenh("Fehrenbach",6)
khambenh.enqueue(khambenh3)
let khambenh4 =  new KhamBenh("Brown",1)
khambenh.enqueue(khambenh4)
let khambenh5 = new KhamBenh("Ingram",1)
khambenh.enqueue(khambenh5)
console.log(khambenh)



