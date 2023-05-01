// don't use array methods (except: pop(), push(), shift(), unshift()), use function expression(arrow function) and parameter.
const arr = ['6', 8, NaN, '0', 5, 4, 'true', false, 7, 'a', undefined, 8, true]


//1.Show only falsy values in 'arr'
// console.log(falsyValue(arr)); //[NaN, false, undefined]
function findFalseItems(array){
    let newArray=[]
    for (let i = 0; i < array.length; i++) {
       if(!array[i]){
         newArray.push(array[i])
       }
    }return newArray
}
console.log('find false items:',findFalseItems(arr));
// 2.Show only string values
// console.log(stringValues(arr)); //['6', '0', 'true', 'a']
function findStringItems(array){
    const newArr=[]
    for(let i=0;i<array.length;i++){
        if(typeof array[i]==='string')  {
           newArr.push( array[i]) 
        }
        
    }
    return newArr
}
console.log('find String Items:',findStringItems(arr));


// 3.Slice array from index 3 to 7(includes both indexs) 
// console.log(sliceArr(arr));   //['0', 5, 4, 'true', false]

function sliceArr(array,start,end){
 var result=[]
 for (let i = start; i < end; i++) {
    result.push(array[i])
    
 }
 return result
}
console.log('slice:',sliceArr(arr,3,8))

// 4.Sum only number values
// console.log(sumArr(arr)); //32  
function sumArr(array){
 let sum=0

    for(let i=0;i<array.length;i++){
        if(typeof array[i]==='number' && !isNaN(array[i])){
            sum+=array[i]
        }
        
    }   
    return sum
}
console.log('sum:',sumArr(arr));


//5.Find last 8's index in 'arr'
// console.log(findLastIndex(arr)); //11
function findLastIndex(array){
    // return  array.lastIndexOf(8)
    let element
    for(let i=array.length-1;i>=0;i--){
        if(array[i]===8){
            return element= i
        }
    }
    return -1
}
console.log('find last index:',findLastIndex(arr));
// 6.Reverse 'arr'
// console.log(reverseArr(arr));  //[undefined, true, 8, undefined, 'a', 7, false, 'true', 4, 5, '0', NaN, 8, '6']
function reverseArr(array) {
  let newArr1=[]
  for(i=array.length-1;i>=0;i--){
    newArr1.push(array[i])
  }
    return newArr1
}
console.log('reverse:',reverseArr(arr));

// 7. Sort 'arrNum' ascending
// const arrNum = [8, 3, 22, 1, 12, 11, 9, 0, 10, 14, 41, 55, 51]
// console.log(sortArr(arrNum));  //[0, 1, 3, 8, 9, 10, 11, 12, 14, 22, 41, 51, 55]

// 8. Sort 'arrLetters' ascending
// const arrLetters = ['g', 'd', 'a', 'c', 'j', 'b', 'e']
// console.log(sortLetters(arrLetters));  //['a', 'b', 'c', 'd', 'e', 'g', 'j']

// 9.Flat 'arr9'
const arr9 = [[1, 2], [3, 4, 5], [6, 7, 8, 9]]
function flatArr(array){
    let newArr=[]
    for(let i=0;i<array.length;i++){
        for(let a=0;a<array[i].length;a++){
            newArr.push(array[i][a])
        }
    }
    return newArr
}
console.log('flat',flatArr(arr9));


