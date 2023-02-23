class Stack<T>{
    container:T[]=[];
    constructor() {
    }
    push(data:T):void{
        this.container.push(data)
    }
    pop():T|undefined {
        return  this.container.pop()
    }
    size():number{
        return this.container.length;
    }
}

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
let sum = "abccba"
// sum.split("")
let stack =new Stack()
let queue = new Queue()
for (let i = 0; i < sum.length; i++) {
    stack.push(sum[i])
    queue.enqueue(sum[i])
}
// console.log(stack)
// console.log(queue)
while (stack.pop()===queue.dequeue() && stack.size() > 0) {
}
if (stack.size() === 0) {
    console.log("YES")
} else {
    console.log("NO")
}

