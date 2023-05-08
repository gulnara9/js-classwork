async function getData() {
  const response = await fetch("https://northwind.vercel.app/api/categories");
  const data = await response.json();
  console.log(data);
}
getData();

let getAllUsers = async () => {
  try {
    let response = await axios("https://northwind.vercel.app/api/categories");
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
//delete
let deleteBYId = async (id) => {
  try {
    await axios.delete(`https://northwind.vercel.app/api/categories/${id}`);
  } catch (error) {
    console.log(error);
  }
};
deleteBYId(8);
//instance
const instance = axios.create({
  baseURL: "https://northwind.vercel.app/",
  timeout:350,
  headers:{"Content-Type": "apploication/json"}
});
async function getAllUsers(){
    try {
        let response=await instance.get('users');
    console.log(response.data);
    } catch (error) {
    console.log(error);
        





    ]]






























    
    }
}