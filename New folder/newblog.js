let cards = document.querySelector(".cards");
let blogTitle = document.querySelector("#blog-title");
let blogBody = document.querySelector("#blog-body");
let form = document.querySelector("form");

// function listCards() {
//   cards.innerHTML = "";
//   fetch("https://northwind.vercel.app/api/suppliers")
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((element) => {
//         console.log(data);
//         cards.innerHTML += `
//             <div class="card" style="margin:20px">
//               <h3 class="blog-name">${blogTitle.value}</h3>
//               <p class="desc"><b>${blogBody.value}</b></p>
//               <p>written by :${option.value}</p>
//               <button type="button" class="delete-btn" onclick=deleteCustomer("${element.id}",this) >Delete</button>
//             </div>`;
//       });
//     });
// }

// listCards();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("das");
  let obj = {
    name: blogTitle.value,
    description: blogBody.value,
    // id:option.value
  };

  fetch("https://northwind.vercel.app/api/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  window.location = "home.html";
});
