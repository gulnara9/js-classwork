let allInputs = document.querySelectorAll(".form-control");
let form = document.querySelector("form");
axios(`https://northwind.vercel.app/api/categories/${id}`).then((res) => {
  allInputs[0].value = res.data.name;
  allInputs[1].value = res.data.description;


  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let obj = {
      name: allInputs[0].value,
      description: allInputs[1].value,
    };
    axios.patch(`https://northwind.vercel.app/api/categories/${id}`, obj);

    window.location = "home.html";
  });
});