// to define an array to have to wrrite in square brakets

let x = [1,"abdul", "razak", "30000"]
// to find the lenght of an array to have to take a new variable and then you have write the array variable name and then .length then print the nwe variable

// the index start with 0 , and if you are wrritting in reverse the index of last element starts with -1  
const xlen= x.length
console.log(xlen);
console.log(x);

// to acces indivituallly you have to use console.log(); in the round brackets write the array variavle name then open square brackets and then write the index of it 
console.log(x[2]);

// array methods - map , filter , reduce , index,push ,poop,shift,unshift,slice , some every. 

// PUSH
// push is used to add an element in the end of an array
//  to push , writte the array name then use .push to push it , write the element in round brackets

x.push("pushing example")
console.log(x);


// to replace an element of an array 
// write the name of the array and then index in square brackets thren write isequal  to symbol then write the value 


// x[0]= "arsalan"
// console.log(x);
// POP

//  pop is used to remove the last element of the array no need to writte anything in the brackets as pop reemove the last element of the array 

x.pop ()
console.log(x);


// SHIFT 
// sift is used to delete the first element of the array 

x.shift()
console.log(x);

// UNSHHIFT 
// unshift is use to add an element in the first of the element 
//  to use unshift wite the array name then .unshift 

x.unshift(1)
console.log(x);


let y = [1,2,3,4,5,6,]
console.log(y);


//  map function irrirates through each and every element , and returns a new array .

// to use map create a new variable then create a CALL BACK FUNCTION 

var exmap = y.map(n=> n*2)
console.log(exmap);
// SLICE 
// slice is used to return a new array from the selected index 
// to use slice we have to crearte a new variable and then use .slice 
// slice take two values that is start index and end index 
var exslice = y.slice(1,4)
console.log(exslice);
var exslice2 = y.slice(5,6)
console.log(exslice2);
var negslice = y.slice(-5,-2)
console.log(negslice);



// SOME AND EVERY 

// some and everry they both takes in a condition and check the condition if its get satisfied then the output will be true .or else flase 
//  in some if even condition get satisfied then true will be return

const someex = y.some(n=> n%2===0)
console.log(someex);


// EVERY  every function is takes a condition , and if all and every element get satisfied then only it return true else it reyurns as false 

const everyex = y.every(n=> n%2===0)
console.log(everyex);
























