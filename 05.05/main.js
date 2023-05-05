// function getdata() {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }

// getdata();
// function getComplete() {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((data) => {
//       let updated = data.filter((item) => item.completed);
//       console.log(updated);
//     });
// }
// getComplete();
// function getId() {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((data) => {
//       let newUpData = data.filter((item) => item.userId == 2);
//       console.log(newUpData);
//     });
// }
// getId();

// function getTrue() {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then((data) => {
//       let newUpData = data.filter((item) => !item.completed);
//       console.log(newUpData);
//     });
// }
// getTrue();

/////////////////////////////

// import { api } from "./api.js";

let URL = "https://northwind.vercel.app/api/suppliers";

let tbody = document.querySelector("tbody");
function dataTable() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) =>
      data.forEach((element) => {
        const tr = document.createElement("tr");
        tr.innerHTML += `
    <td>${element.id}</td>
    <td>${element.companyName}</td>
    <td>${element.address?.city}</td>
    <td>${element.address?.country}</td>
    <td>${element.address?.phone}</td>
    <td><button id='delete onclick=deleteEl(${element.id}'>Delete</button></td>
    `;
        tbody.append(tr);
      })
    );
}
dataTable();
function deleteEl(Elid) {
//   console.log(id);
 fetch(`${URL}/${Elid}`,{
    method:'DELETE'
 });
dataTable()
}
let allDelete=document.querySelectorAll('#delete')

