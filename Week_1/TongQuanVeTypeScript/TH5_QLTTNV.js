var GT;
(function (GT) {
    GT[GT["NAM"] = 0] = "NAM";
    GT[GT["NU"] = 1] = "NU";
    GT[GT["OTHER"] = 2] = "OTHER";
})(GT || (GT = {}));
var Person = /** @class */ (function () {
    function Person(ten, gt, ngaysinh, email, sdt) {
        this.ten = ten;
        this.gt = gt;
        this.ngaysinh = ngaysinh;
        this.email = email;
        if (sdt !== undefined) {
            this.sdt = sdt;
        }
    }
    Person.prototype.hienthi = function (person) {
        console.log(person);
    };
    return Person;
}());
var arr = [];
arr.push(new Person("Phong", GT.NAM, "1-1-2001", "qqq@gmail.com"));
arr.push(new Person("P", GT.NU, "1-1-2002", "WWW@gmail.com"));
arr.push(new Person("QQ", GT.OTHER, "1-1-2011", "qW@gmail.com", 145834699));
arr.forEach(function (item) {
    item.hienthi(item);
});
