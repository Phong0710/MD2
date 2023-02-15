import {Employee} from "./BT2_QLNS";

class EmployeeManager{

    static arr:Employee[]=[];
    constructor() {
    }
    showEmployee(){
       EmployeeManager.arr.forEach((item)=>{
           console.log(item.Ten )
       })
    }
    static add(a:Employee){
        this.arr.push(a)
    }
    static findAll(){
        return this.arr;
    }
    static findFullName(ten:string):number{
        let index = -1;
        for (let i = 0; i < this.arr.length; i++) {
            if(this.arr[i].Ten==ten) {
                return i;
            }
        }
        return index;
    }
    static delete (ten:string):void{
        let index = this.findFullName(ten)
        if(index !==-1){
            this.arr.splice(index,1)
        }
    }
    static update(ten:string,empployNew:Employee):void{
        let index=this.findFullName(ten);
        if(index !==-1){
            this.arr[index]=empployNew;
        }
    }
}
let arr1 = new Employee('le','phong','07/10','HN','nha bao');
EmployeeManager.add(arr1)
console.log(EmployeeManager.findAll())