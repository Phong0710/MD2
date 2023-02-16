interface Edible{
    howtoEat():string;
}
abstract class Animal{
    abstract makeSound():string;
}
class Chicken extends Animal implements Edible{
    howtoEat(): string {
        return "Could be fried";
    }
    makeSound(): string {
        return "Chicken: Cluck-cluck!";
    }

}
class Tiger extends Animal{
    makeSound(): string {
        return "Tiger: ror";
    }
}
let animal = []
animal[0]=new Tiger();
animal[1]=new Chicken();
animal.forEach((item)=>{
    console.log(item.makeSound())
    if(item instanceof Chicken){
        console.log(item.howtoEat())
    }
})



