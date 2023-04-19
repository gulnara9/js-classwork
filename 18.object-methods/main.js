// 1.Create a function called 'secretName()' that takes in an array of names and returns the first letter of name.
let names1 = ["Adam", "Sarah", "Malcolm"]; //"ASM"
let names2 = ["Harry", "Newt", "Luna", "Cho"]; //"CHLN"
let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]; //"CJMPRR"

function secretName(array) {
  return array
    .map((name) => name.charAt(0))
    .sort()
    .join("");
}
console.log(secretName(names1));
console.log(secretName(names2));
console.log(secretName(names3));
////////////////////////////////
//2.1.Show users who is studying at 'UNEC' and surname starts 'r'.
const users = [
  { name: "Anar", surname: "Hesenli", age: "22", uni: "ADA", gender: "male" },
  {
    name: "Nezrin",
    surname: "Reshidova",
    age: "23",
    uni: "UNEC",
    gender: "female",
  },
  {
    name: "Hikmet",
    surname: "Hesenova",
    age: "22",
    uni: "UNEC",
    gender: "male",
  },
  { name: "Nicat", surname: "Sadiqov", age: "25", uni: "UNEC", gender: "male" },
  {
    name: "Murad",
    surname: "Salmanli",
    age: "23",
    uni: "ADNSU",
    gender: "male",
  },
  {
    name: "Aynure",
    surname: "Hesenzade",
    age: "23",
    uni: "BMU",
    gender: "female",
  },
];
function findUsers(array) {
  return array.filter(
    (user) => user.uni === "UNEC" && user.surname.toLowerCase().startsWith("r")
  );
}
console.log(findUsers(users));
////////////////////////////////
// 2.2.Show users whose age is eqaul to 22 and name start 'a'.
function findUsers1(array) {
  return array.filter(
    (user) => user.age === "22" && user.name.toLowerCase().startsWith("a")
  );
}
console.log(findUsers1(users));
////////////////////////////////
// 2.3.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').

let newArr1 = [];
function findUsers2(array) {
  return (newArr1 = array.map(
    (user) =>
      user.gender === "male" ? ` MR ${user.name}` : ` MS ${user.name}`,
    0
  ));
}
console.log(findUsers2(users));
////////////////////////////////
//2.4.Sort users by age (ascending).
users.sort((a, b) => a.name.localeCompare(b.name));
console.log(users);
////////////////////////////////
// 3.Shuffle array
const letters = ["a", "b", "c", "d"];
const numbers = [1, 2, 3, 4, 5, 6, 7];
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

console.log("Shuffled letters:", shuffleArray(letters));
console.log("Shuffled numbers:", shuffleArray(numbers));
////////////////////////////////
//4.Divide 2 the price of arr4.
const arr4 = [
  {
    product: "Lenova",
    price: 1900,
  },
  {
    product: "HP",
    price: 1300,
  },
  {
    product: "Acer",
    price: 1600,
  },
];

const dividePrice = (arr) => {
  return arr.map((item) => ({ ...item, price: item.price / 2 }));
};

const updatedArr = dividePrice(arr4);
console.log(updatedArr);
////////////////////////////////
// 5.Create a function called 'reverseNum()' which is to bind number with its reverse.

let num1 = 246; //246642
let num2 = 102; //102201
let num3 = 152; //152251
function reverseNum(num) {
  const reversedNum1 = num.toString().split("").reverse().join("");
  return (result = num.toString() + reversedNum1);
}
console.log(reverseNum(num1));
console.log(reverseNum(num2));
console.log(reverseNum(num3));
