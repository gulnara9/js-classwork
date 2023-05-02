let addBtn = document.querySelector("#add-btn");
let deleteBtn = document.querySelector("#delete-btn");
let emptyBtn = document.querySelector("#empty-btn");



addBtn.addEventListener("click", function () {
  localStorage.setItem("firstName", "Gulnara");
  localStorage.setItem("lastName", "Garibova");
  localStorage.setItem("age", "20");
  //1.1
  console.log(localStorage.length);
  //2, 3
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      console.log( `${key}`);

      console.log( `${value}`);
    }
});
//4
console.log("first key:", localStorage.key(1));
//4.1

let arr1 = [];
for (let i = 0; i < localStorage.length; i++) {
     const key = localStorage.key(i);
     const value = localStorage.getItem(key);
  arr1.push(localStorage.getItem(key));
}
console.log("arr1:", arr1);
//5.1
let arr = [];
for (let i = 0; i < localStorage.length; i++) {
  arr.push(localStorage.key(i));
}
console.log("arr:", arr);

///////////////////6
deleteBtn.addEventListener('click',function(){
 localStorage.removeItem("firstName");
})
emptyBtn.addEventListener('click',function(){
 localStorage.clear();
})
