class CT {
    private title: string;
    private servings: number;
    private ingredients: Array<string>;


    constructor(title: string, servings: number, ingredients: Array<string>) {
        this.title = title;
        this.servings = servings;
        this.ingredients = ingredients;
    }
}
let Ct1 = new CT( 'Sườn xào chua ngọt',2, ['400 g sườn thăn', '4 tbsp nước mắm', '5 tsp đường', '5 tsp nước cốt chanh', '1/3 bát nước sôi', 'Hành khô, tỏi, ớt, hành lá', '2 quả cà chua', 'Hành tây (ớt chuông)'])
console.log(Ct1)














