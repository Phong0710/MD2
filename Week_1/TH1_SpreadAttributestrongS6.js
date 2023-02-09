// //1
// const cars1 = ["AUDI","BWM","TATA","MES"];
// const cars2 = [...cars1];
// const cars3 = [...cars1,"NISSAN","TOYOTA"];
// console.log(cars1);
// console.log(cars2);
// console.log(cars3);

// //2
// const cars1 = ["AUDI","BWM","TATA","MES"];
// const cars2 = ["NISSAN","TOYOTA"];
// const  cars3 = [...cars1,...cars2]
// console.log(cars3);

//3
// const cars1 = {
//     Brand : "BWM",
//     Color : "RED"
// }
// const cars2 = {...cars1};
// console.log(cars2)

// //4
// const cars1 = {
//     Brand : "BWM",
//     Color : "RED"
// }
// const cars2 = {
//     Brand: "NISSAN",
//     Color: "BLUE",
//     Yeah : 2004
// }
// const cars3 = {...cars1,...cars2}
// console.log(cars3)

// //5
// const car = "AUDI";
// const a = [...car];
// console.log(a)

//6
const number = [3,5,7,8,9];
const [a,b,c,...others] = number;
console.log(a);
console.log(b);
console.log(c);
console.log(others);