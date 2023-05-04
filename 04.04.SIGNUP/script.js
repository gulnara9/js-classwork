let form = document.querySelector("form");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let checkbox = document.querySelector("#checkbox");
let submit = document.querySelector(".submit");

submit.disabled = true;
//submit
checkbox.addEventListener("click", function () {
  if (
    checkbox.checked &&
    username.value &&
    email.value &&
    password.value != ""
  ) {
    submit.removeAttribute("disabled");
  } else {
    submit.disabled = true;
  }
});
////////////////////
// let users = JSON.parse(localStorage.getItem("user")) || [];
// function userAdd() {
//   const boxes = document.querySelector(".boxes");

//   users.forEach((user) => {
//     const box = document.createElement("div");
//     box.innerHTML = `
//  <p>User:${user.name}</p>
//  <p>Email:${user.eamil}</p>
// `;
//     boxes.append(box);
//   });
// }

form.addEventListener("submit", function () {
  if (checkbox.checked && username.value && email.value && password.value) {
    let obj = {
      id: Date.now(),
      user: username.value,
      email: email.value,
    };
  }

  users.push(obj);
  localStorage.setItem("user", JSON.stringify(users));
});

// submit.addEventListener('submit', function userAdd(){

// })
