let username=document.querySelector('#username')
let email=document.querySelector('#username')
let checkbox=document.querySelector('#checkbox')
let password=document.querySelector('#password')
let submit=document.querySelector('.btn')
let form=document.querySelector('form')

//

submit.addEventListener('click',function(event){
    if(!checkbox.checked ||!username.value && !email.value){
        event.preventDefault()
        alert('check the checkbox or input the username/email')
    }

const userName=form.elements['username'].value
const emaill=form.elements['email'].value
const passwordd=form.elements['password'].value

localStorage.setItem('username', userName)
localStorage.setItem('email',emaill)
localStorage.setItem('password',passwordd)
let arr=[]
arr.push(localStorage.key(i))
})





