class Circle {
    private color: string;
    private r: number;

    constructor(color: string, r: number) {
        this.color = color;
        this.r = r;
    }

    showCircle(circle: Circle) {
        console.log(`Hình tròn có màu ${circle.color} và có bán kính ${circle.r}`)
    }
}
let circleList: Circle[] = [];
circleList.push(new Circle("Yellow", 5));
circleList.push(new Circle("Red", 7));
circleList.push(new Circle("Green", 10));
// let qqq = new Circle("Green", 10);
// qqq.showCircle(qqq);
circleList.forEach((item)=>{
  item.showCircle(item)
})

// for (let i = 0; i < circleList.length; i++) {
//     circleList[i].showCircle(circleList[i])
// }