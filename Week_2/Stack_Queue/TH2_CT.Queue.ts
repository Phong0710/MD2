class Queue<T>{
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
let queue = new Queue();
queue.enqueue(1)
queue.enqueue(1)
queue.enqueue(1)
queue.enqueue(1)
console.log(queue.size())
queue.dequeue()
console.log(queue.size())