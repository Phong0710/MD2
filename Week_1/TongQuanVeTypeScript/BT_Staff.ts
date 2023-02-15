import {Staff} from "./BT_CTQLNhanVien";

class BT_Staff {
    private Staffs: Staff[] = [];

    constructor() {
    }

    addStaff(staff: Staff): void {
        this.Staffs.push(staff)

    }

    // deleteStaff(index: number): void {
    // let deleteS = this.findStaff(index);
    // if(deleteS != -1){
    //     this.Staffs.splice(deleteS,1)
    // } else {
    //     throw new Error("delet Error")
    // }
    // }

    findStaff(index: number) {
        let i = 0;
        this.Staffs.forEach((Staff, index) => {
            if (Staff === this.Staffs[i]) {
                i = index;
            }
        })
    }
}
let arr = new BT_Staff();
arr.addStaff(new Staff("phong",0,"11-11-2012",'qwe@gmail.com'));
arr.addStaff(new Staff("phong2  ",0,"11-11-2012",'qwe@gmail.com',+8407690719));
arr.addStaff(new Staff("phong",0,"11-11-2012",'qwe@gmail.com',+8407690719))
console.log(arr)