class Cylinder {
    private static getPerimater (radius:number):number{
        return 2 * Math.PI * radius;
    }
    private static getBaseArea(radius:number):number{
        return Math.PI * radius * radius;
    }
    public static getVolume(radius: number, height: number): number {
        let baseArea: number = this.getBaseArea(radius)
        let perimeter: number = this.getPerimater(radius)
        let volume: number = perimeter * height + 2 * baseArea;
        return volume;
    }
}
let result = Cylinder.getVolume(5, 10);
console.log(result);