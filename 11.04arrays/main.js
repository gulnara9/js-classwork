//array
//1
const numbers=[0,1,2,3,4,5,6,7,8,9,10]
console.log(numbers)
//2
const newArray=[7,true,"G"]
console.log(newArray)
//3
const num=[0,1,2,3,4,5]
const num1=num
console.log(num1)
//4
const newNumArr=[0,1,2,3,4,5,6,7]
newNumArr.push(8,9)
console.log(newNumArr)
//5
const emptyArr=[]
emptyArr.push(5,6,7)
emptyArr.shift(0)
console.log(emptyArr)
//6
const myInfo=[{myname:"gulnara"},{surname:"qaribova"},{age:20}, "Agdash"]
myInfo[3]="quba"
console.log("quba",myInfo)
//7
const array1 = [1,2,3,4,5];

for (const element of array1) {
  console.log(element);
}


//objects
//8
const obj={id:1, firstname: "gulnara", lastName:"qaribova", location:"Agdash"}
console.log(obj)
//9
const obj2=obj
console.log(obj2)
//10
obj.id=2
console.log(obj)
//11

for (const property in obj) {
  console.log(`${property}: ${obj[property]}`);
}
console.log("for in", obj)

//12
for (let property in obj) {
    console.log(`${property}: ${obj[property]}`);
  }
  console.log("let", obj)

//13
delete obj.location
console.log(obj)
//14
const newObj=Object.assign(obj)
console.log("newobj",newObj)


