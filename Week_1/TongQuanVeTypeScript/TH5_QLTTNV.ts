enum GT {
    NAM,
    NU,
    OTHER,
}

class Person {
    private ten: string;
    private gt: GT;
    private ngaysinh: string;
    private email: string;
    private sdt:number;

    constructor(ten: string, gt: GT, ngaysinh: string, email: string, sdt?: number) {
        this.ten = ten;
        this.gt = gt;
        this.ngaysinh = ngaysinh;
        this.email = email;
        if (sdt !== undefined) {
            this.sdt = sdt;
        }

    }
    hienthi(person:Person){
        console.log(person)
    }
}
let arr:Person[]=[];
arr.push(new Person("Phong",GT.NAM,"1-1-2001","qqq@gmail.com"));
arr.push(new Person("P",GT.NU, "1-1-2002","WWW@gmail.com"));
arr.push(new Person("QQ",GT.OTHER, "1-1-2011","qW@gmail.com",+84145834699));
arr.forEach((item)=>{
    item.hienthi(item)
})