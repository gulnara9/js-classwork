let URL1 = "https://northwind.vercel.app/api/orders";
let cards = document.querySelector("#cards");
function drawCard() {
  fetch(URL1)
    .then((response) => response.json())
    .then((data) =>
      data.forEach((element) => {
        const div = document.createElement("div");
        div.classList.add("card", "col-5", "d-flex", "justify-content-between");
        div.innerHTML = `
              <div>
                <p>${element.customerId}</p>
                <p>${element.shipAddress.country}</p>
              </div>
              <div class="buttons">
                <i class="fa-sharp fa-solid fa-pen" style="color: #1f5127"></i
                ><i class="fa-solid fa-trash-can" style="color: #711313"></i>
            </div>`;
        cards.append(div);
      })
    )
}


drawCard();
