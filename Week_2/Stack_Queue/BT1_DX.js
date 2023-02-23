var Stack = /** @class */ (function () {
    function Stack() {
        this.container = [];
    }
    Stack.prototype.push = function (data) {
        this.container.push(data);
    };
    Stack.prototype.pop = function () {
        return this.container.pop();
    };
    Stack.prototype.size = function () {
        return this.container.length;
    };
    return Stack;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.contaner = [];
    }
    Queue.prototype.enqueue = function (data) {
        this.contaner.push(data);
    };
    Queue.prototype.dequeue = function () {
        return this.contaner.shift();
    };
    Queue.prototype.size = function () {
        return this.contaner.length;
    };
    return Queue;
}());
var sum = "abcc1ba";
sum.split("");
var stack = new Stack();
var queue = new Queue();
for (var i = 0; i < sum.length; i++) {
    stack.push(sum[i]);
    queue.enqueue(sum[i]);
}
while (stack.pop() === queue.dequeue() && stack.size() > 0) {
}
if (stack.size() === 0) {
    console.log("YES");
}
else {
    console.log("NO");
}
