 export interface Imanager<T>{
    add(t:T):void;
    show():T[];
    edit(name:string):void
    remove(id:number):void;
    find(name:string):void
}