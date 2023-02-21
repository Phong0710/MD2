interface TH1_List<T>{
    add(t:T):void
    get(index:number):T;
    size():number;
    remove():void
}
class AraayList<T> implements TH1_List<T>{
    array:T[]=[]

    add(index: T): void {
         this.array.push(index)
    }

    get(index: number): T {
        return this.array[index];
    }

    remove(): void {
        this.array.pop()
    }

    size(): number {
        return this.array.length;
    }

}
interface Post {
    title :String
}
let array1 = new AraayList<Post>();
array1.add({title:`lập trình JS`})
array1.add({title:`lập trình PHP`})
array1.add({title:`lập trình Java`})
console.log(array1.array)
