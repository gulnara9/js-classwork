const boxes = document.querySelector(".boxes");
let addUser = document.querySelector("#addUser");

let users = JSON.parse(localStorage.getItem("user")) || [];
function createBoxses() {
  users.forEach((a) => {
    const box = document.createElement("div");
    box.innerHTML = `
     <p>User:${a.user}</p>
 <p>Email:${a.email}</p>
`;
    boxes.append(box);
  });
}
createBoxses();

addUser.addEventListener("click", () => {
  window.location = "index.html";
});
