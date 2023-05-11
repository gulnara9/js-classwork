let id=new URLSearchParams(window.location.search).get('id')
let blogTitle = document.querySelector("#blog-title");
// let body=document.querySelector("body")
let blogBody = document.querySelector("#blog-body");
fetch(`https://northwind.vercel.app/api/categories/${id}`).then((res)=>res.json()).then((data)=>{
    blogTitle.innerHTML=data.name;
    blogBody.innerHTML=data.description
})