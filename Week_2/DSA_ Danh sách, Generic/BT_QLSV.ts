class StudentInfo {
    public _fullName: string;
    public _score: number;

    constructor(fullName: string, score: number) {
        this._fullName = fullName;
        this._score = score;
    }

    getInfo(): void {
        console.log(`Tên học sinh là : ${this._fullName} có điểm là : ${this._score}`)
    }

    get fullName(): string {
        return this._fullName;
    }

    get score(): number {
        return this._score;
    }
}

class NODE extends StudentInfo {

    next: NODE | null = null;


    constructor(fullName: string, score: number) {
        super(fullName, score);
    }
}

class LinkerList {
    head: NODE | null = null;
    tail: NODE | null = null;
    size: number;

    constructor() {
        this.size = 0;
    }

    findByName(fullName: string): void {
    }



    listStudentMaxScore(score: number): void {
    }

    showStudentInfos(): StudentInfo[] {
        let arr: Array<StudentInfo> = [];
        let currenNode = this.head;
        while (currenNode !== null) {
            arr.push(new StudentInfo(currenNode.fullName,currenNode.score));
            currenNode = currenNode.next
        }
        return arr;
    }

    totalStudentsFail(score: number): void {
    }

    insertFist(fullName: string, score: number): void {
        let node = new NODE(fullName, score);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++
    }
    insertLast(fullName: string, score: number): void {
        if(!this.head){
            this.insertFist(fullName,score);
        }else {
            let node = new NODE(fullName,score);
            this.tail.next=node;
            this.tail=node;

            this.size++;
        }
    }

}


let node1 = new LinkerList();
node1.insertFist("nam", 9)
node1.insertFist("nu", 8)
node1.insertFist("nammmm", 6)
node1.insertLast("phong",7)
console.table(node1.showStudentInfos())

