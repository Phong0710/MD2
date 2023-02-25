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
// sum.split("")
var stack = new Stack();
for (var i = 0; i < 6; i++) {
    stack.push(i);
}
console.log(stack);
var stack1 = [];
for (var i = stack.size(); i < 0; i--) {
    stack1.push(stack.pop());
}
console.log(stack);
