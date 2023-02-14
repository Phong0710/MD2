import {Product} from "./TH3_QLSP";

export class ProductManager {
    private products:any[] = [];

    constructor() {
    }

    get getAll() {
        return this.products;
    }

    set add(product:Product) {
        this.products.push(product);
    }

}