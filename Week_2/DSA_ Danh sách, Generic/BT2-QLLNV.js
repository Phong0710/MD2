var Salary = /** @class */ (function () {
    function Salary(month, money) {
        this.next = null;
        this._month = month;
        this._money = money;
    }
    Object.defineProperty(Salary.prototype, "month", {
        get: function () {
            return this._month;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Salary.prototype, "money", {
        get: function () {
            return this._money;
        },
        enumerable: false,
        configurable: true
    });
    return Salary;
}());
var LinkerList = /** @class */ (function () {
    function LinkerList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkerList.prototype.add = function (month, money) {
        var node = new Salary(month, money);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    LinkerList.prototype.show = function () {
        var arr = [];
        var currenNode = this.head;
        while (currenNode !== null) {
            arr.push(new Salary(currenNode.month, currenNode.money));
            currenNode = currenNode.next;
        }
        return arr;
    };
    LinkerList.prototype.showHighestSalaryMonth = function () {
        var arr = [];
        var currenNode = this.head;
        while (currenNode !== null) {
            if (currenNode.money >= this.head.next.money) {
                arr.push(new Salary(currenNode.month, currenNode.money));
            }
            currenNode = currenNode.next;
        }
        return arr;
    };
    LinkerList.prototype.sumMoney = function () {
        //  let arr:Salary[]=[]
        var currenNode = this.head;
        var sum = 0;
        while (currenNode !== null) {
            sum += currenNode.money;
            currenNode = currenNode.next;
        }
        return sum;
    };
    return LinkerList;
}());
var p1 = new LinkerList();
p1.add("thang 1 ", 100);
p1.add("thang 2 ", 200);
p1.add("thang 3 ", 300);
p1.add("thang 4 ", 200);
console.table(p1.show());
console.table(p1.sumMoney());
console.log(p1.showHighestSalaryMonth());
