let boxes = document.querySelector(".boxes");
let search = document.querySelector(".search");
let sort=document.querySelector(".sort")
const BASE_URL = "http://localhost:8080/news";
axios.get(`${BASE_URL}`).then((response)=>{mydata=response.data;
getNews(mydata)})
  
function getNews(arr) {boxes.innerHTML = "";
    arr.forEach((el) => {
      
      boxes.innerHTML += `
    <div class="card" style="width: 18rem">
      <img class="card-img-top" src="${el.image}" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">${el.title}</h5>
        <p class="card-text">
          ${el.desc}
        </p>
         <p class="price p-2">${el.price}</p>
         <button id="id${el.id}" onclick=deleteNews("${el.id}",this) class="btn btn-danger deleteBtn">Delete</button>
        
      </div>
    </div>
  `;
    });
  }

function deleteNews(id, btn) {
  fetch(`http://localhost:8080/news/${id}`, {
    method: "DELETE",
  });
}

search.addEventListener("input", function (e) {
  fetch("http://localhost:8080/news")
    .then((res) => res.json())
    .then((data) => {
      let filteredNews = data.filter((item) =>
        item.title
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      );

      getNews(filteredNews);
    });
});


// axios(BASE_URL).then(res=>{
//   let sortData=res.data.sort((a,b)=>b.price-a.price)
//   getNews(sortData)
// })
let ascendingOrder = true;

sort.addEventListener("click", function () {
  axios(BASE_URL).then((res) => {
    let sortData = res.data.sort((a, b) => {
      if (ascendingOrder) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    ascendingOrder = !ascendingOrder;
    getNews(sortData);
  });
});
