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

// sum.split("")
let stack =new Stack()
for (let i = 0; i < 6; i++) {
    stack.push(i)
}
console.log(stack)
for (let i = 6; i < 0; i--) {
     stack.push(stack.pop())
    console.log(stack)
}
console.log(stack)
