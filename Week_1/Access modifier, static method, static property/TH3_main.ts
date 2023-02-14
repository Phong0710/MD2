import {Product} from "./TH3_QLSP";
import {ProductManager} from "./TH3_ProductManager";

let laptop = new Product("Laptop", 20000);
let iphone = new Product("Iphone", 10000);

let productManager = new ProductManager();
productManager.add = laptop;
productManager.add = iphone;

console.log(productManager.getAll);