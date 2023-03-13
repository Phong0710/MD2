import {MyLove} from "../class/MyLove";

export class MyLoveManager {
    myLove: Array<MyLove> = []
    countMyLove: number = 1;

    constructor() {
    }
    getIdMyLove():number{
        return this.countMyLove++;
    }

    showMyLove():Array<MyLove> {
    return this.myLove
    }

    findNameMyLove(name:string):void {
    let arrMyLove:MyLove[]= this.myLove;
    let result: MyLove[]=arrMyLove.filter(element =>element.nameMyLove.includes(name));
    if(result.length===0){
        return console.log(`Error - No data matching !`)
    }else {
       console.table(result)
    }
    }

    addMyLove(t: MyLove):void {
        this.myLove.push(t)
    }

    editNameMyLove(name:string,id:number) {
        let index = this.findById(id);
        this.myLove[index].nameMyLove=name
    }
    findById(id:number):number{
        let i =-1;
        this.myLove.findIndex((value, index) => {
            if(value.id===id){
                i =index
            }
        })
        return i;
    }

    removeMyLove(id:number):void {
        let index = this.findById(id);
        console.log(index);
        if(index!==-1){
            this.myLove.splice(index,1)
            console.log(`-----You have successfully Deleted !!!!!-----`)
        }else {
            console.log(`Error no lover to delete !`)
        }

    }
}