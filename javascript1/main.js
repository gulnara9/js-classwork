console.log(4 + 2 + "5" + 2 + "a");
console.log(12 * 8); //1

let x = 10 % 2;
console.log(x); //2

let num1 = 20;
let num2 = 17;
console.log(num1 + num2); //3

let name = "your name";
let bsurname = "your surname";
let year = "your birth of year";
let info = "your name" + "your surname" + "your birth of year";
console.log(info); //4

console.log(17 % 12); //5

let cityName = "Baku";
cityName = "Ganja";
console.log(cityName); //6

let obj = {
  yourName: "gulnara",
  yourSurname: "Qrbva",
  age: "20",
};
let copyObj = { ...obj };
console.log(copyObj);//7


let object={
    cityName:"baku",
    uni:  "gence",


}
let newObj={...object}
console.log(newObj);
