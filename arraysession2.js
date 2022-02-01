// slicce function returns a new array from the selected index
// newarr=arr.slice(startindex , endindex)
// we  have to go give the start index value at start index and you have to give last index value at last index the last index 
// last index = all the elements before the last element get printed 
let arr = [1,2,3,4,5,6,]
let newarr = arr.slice(1,4)
console.log(newarr);


// array ndex in opposite direction starts with negative 1 [-4,-3,-2,-1]



// some and every 
// some and every both this check a condition in an aaray that the elements are satisfiying the condiyion or not and they returns the boolean value 


// SOME function takes a condition check all the elements in the array that the elements satisfied the condition or not , if any one of the elements are satisfied then it returns as true , or false .

somearr = arr.some( a => a%2===0)
console.log(somearr);



// EVERY function takes a condition and check with all the elements of the array if any one of the elements are not satisfied then it returns as false, and if all the elements are satisfied then it returns as true 



everyarr = arr.every(a => a%22===0)
console.log(everyarr);



function A (x,y) {
    console.log(x+y);
    
}


A(3,5)

// never create any function with let and var key words only use const




// MAP helps you to manipluate or itterate through each element of the arrray 

//  returns helps you to use all the elements through the array and returns you a single value 

//  filter applies a condition on all the elements amd return you a new array



// FILTER takes a condition and gives you a new array ,


//  EXAMPLE  filter out the salaries which is less then and equal to 4000
 let array = [1000,2000,3000,4000,5000,6000]

let filterarray = array.filter(a => a <=4000)
console.log(filterarray);



//  MAP is used to itterate through all the ekements of the array 

//  QUESTION     double the salaries do all the employs whose salary id moe then or equal 4000


 let maparray = filterarray.map(n=> n*2)
console.log(maparray);

// we can even write map and filter can be used in single line the example of it is below 


 let array1 = [10000,20000,30000,40000,50000,60000]

 let newarray1 = array1.filter(a => a> 20000).map(a => a*2)
console.log(newarray1);


//  reduce takes three values that is "accumulater " , "current value ", "initialvalue "

// where accumulater is a varible  [ suppose sum = 0 ]

//  current value is the the elemnts of array suppose X
//  where initial value is the initial value pf the accumulater 

//  the basic structure of reduce function 

// array.reduce((accumulater , current value )=>sum=sum+x,0)


 let array2= [1,2,3,4,5]
let sum=0

reducearray2=array2.reduce((sum,x)=>sum=sum+x,0)
console.log(reducearray2);



let j = [2,4,6,8]

let red = 1

for (i=0;i<j.length;i++) {
    red = red*j[i]
    
}

console.log(red);


// let yellow = multiplyarr.reduce((mul,x)=>red=x*mul, 1)



let f = [5,6,7,8,9]
let s = 0

for (i=0;i<f.length;i++) {
    s=s+f[i]

}
console.log(s);



















setTimeout(() => {
    
}, timeout);






































































