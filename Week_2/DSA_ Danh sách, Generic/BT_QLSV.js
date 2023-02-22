var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var StudentInfo = /** @class */ (function () {
    function StudentInfo(fullName, score) {
        this._fullName = fullName;
        this._score = score;
    }
    StudentInfo.prototype.getInfo = function () {
        console.log("T\u00EAn h\u1ECDc sinh l\u00E0 : ".concat(this._fullName, " c\u00F3 \u0111i\u1EC3m l\u00E0 : ").concat(this._score));
    };
    Object.defineProperty(StudentInfo.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StudentInfo.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: false,
        configurable: true
    });
    return StudentInfo;
}());
var NODE = /** @class */ (function (_super) {
    __extends(NODE, _super);
    function NODE(fullName, score) {
        var _this = _super.call(this, fullName, score) || this;
        _this.next = null;
        return _this;
    }
    return NODE;
}(StudentInfo));
var LinkerList = /** @class */ (function () {
    function LinkerList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkerList.prototype.findByName = function (fullName) {
    };
    LinkerList.prototype.listStudentMaxScore = function (score) {
    };
    LinkerList.prototype.showStudentInfos = function () {
        var arr = [];
        var currenNode = this.head;
        while (currenNode !== null) {
            arr.push(new StudentInfo(currenNode.fullName, currenNode.score));
            currenNode = currenNode.next;
        }
        return arr;
    };
    LinkerList.prototype.totalStudentsFail = function (score) {
    };
    LinkerList.prototype.insertFist = function (fullName, score) {
        var node = new NODE(fullName, score);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    LinkerList.prototype.insertLast = function (fullName, score) {
        if (!this.head) {
            this.insertFist(fullName, score);
        }
        else {
            var node = new NODE(fullName, score);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    return LinkerList;
}());
var node1 = new LinkerList();
node1.insertFist("nam", 9);
node1.insertFist("nu", 8);
node1.insertFist("nammmm", 6);
node1.insertLast("phong", 7);
console.table(node1.showStudentInfos());
