class Salary {
    _month: string;
    _money: number;
    next: Salary | null = null;


    constructor(month: string, money: number) {
        this._month = month;
        this._money = money;
    }

    get month(): string {
        return this._month;
    }

    get money(): number {
        return this._money;
    }
}

interface IManager<T> {
    add(month: string, money: number): void;

    show(): T[];

    sumMoney(money: number): number;

    showHighestSalaryMonth(month: string, money: number): object
}

class LinkerList implements IManager<Salary> {
    head: Salary | null = null;
    tail: Salary | null = null;
    size: number = 0;

    constructor() {
    }

    add(month: string, money: number): void {
        let node = new Salary(month, money)
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node
        }
        this.size++;
    }

    show(): Salary[] {
        let arr: Salary[] = []
        let currenNode = this.head
        while (currenNode !== null) {
            arr.push(new Salary(currenNode.month, currenNode.money))
            currenNode = currenNode.next
        }
        return arr
    }

    showHighestSalaryMonth(): Salary[] {
        let arr: Array<Salary> = [];
        let currenNode = this.head;
        while (currenNode !== null) {
            if (currenNode.money >= this.head.next.money) {
                arr.push(new Salary(currenNode.month, currenNode.money));
            }
            currenNode = currenNode.next;
        }
        return arr;
    }

    sumMoney(): number {
        //  let arr:Salary[]=[]
        let currenNode = this.head
        let sum = 0
        while (currenNode !== null) {

            sum += currenNode.money;
            currenNode = currenNode.next
        }
        return sum

    }
}

let p1 = new LinkerList();
p1.add("thang 1 ", 100)
p1.add("thang 2 ", 200)
p1.add("thang 3 ", 300)
p1.add("thang 4 ", 200)
console.table(p1.show())
console.table(p1.sumMoney())
console.log(p1.showHighestSalaryMonth())


