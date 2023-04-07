//kvadratlar
for (let i=0; i<=10; i++){
    
    console.log(`${i}x${i}=${i*i} `)
}
//kublar
for (let i=0; i<=10; i++){
    
    console.log(`${i}x${i}x${i}= ${i**3}`)
}
  

//ad alt-alta yazilir
let myName="gulnara"
for(let i=0 ;i<=myName.length; i++){
    console.log(myName[i])
}
//odd, even
for(let i=0; i<9;i++){
    if(i%2==1){
        continue;
    }
    else{
        console.log(i)
    }
   
}
//odd, even
for(let i=0;i<8;i++ )
{
    if(i%2==1){
        console.log(i,"odd")
    }
    else{
        console.log(i,"even") 
    }

}