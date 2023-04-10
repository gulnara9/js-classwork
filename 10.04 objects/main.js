//8
const obj={id:1, firstName:"gulnara", lastName:"qaribova", location:"gdu2"}
console.log(obj)

//9
const obj2=obj
console.log(obj2)

// 10
obj.id=2
console.log(obj)

//11
for (const property in obj) {
  console.log(`${property}: ${obj[property]}`);
}

//12

//13
delete obj.location
console.log(obj)

//14

const newObj=Object.assign(obj)
console.log(newObj)

