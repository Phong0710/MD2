 export interface Imanager<T>{
    add(t:T):void;
    show():T[];
    edit(name:string, id:number):void
    remove(id:number):void;
    findByNameAndPrintAndReturnNumber(name:string):void
}