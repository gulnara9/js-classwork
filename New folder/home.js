let cards = document.querySelector(".cards");

function listCards() {
  cards.innerHTML = "";
  fetch("https://northwind.vercel.app/api/categories")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        cards.innerHTML += `
            <div class="card" style="margin:20px">
              <h3 class="blog-name">${element.name}</h3>
              <p class="desc"><b>${element.description.slice(
                0,
                5
              )}... <a href="details.html?id=${
          element.id
        }">read more</a></b></p>
              <p>written by :${element.id}</p>
              <button type="button" class="delete-btn" onclick=deleteCustomer("${
                element.id
              }") id=${element.id} >Delete</button>
              <button type="button" class="edit-btn" onclick=editCustomer("${
                element.id
              }") href="edit.html?id=${element.id}" >Edit</button>
            </div>`;
      });
    });
}

listCards();

function deleteCustomer(id) {
  console.log(id);
  fetch(`https://northwind.vercel.app/api/categories/${id}`, {
    method: "DELETE",
  }).then(() => {
    listCards();
  });
  document.querySelector(`#${id}`).closest("div").remove();
}
