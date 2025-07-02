const array = [1, 2, 3, 4, 5];

//* To create an array
//* array literals []
const arr1 = [];

//* Array constructor

const arr2 = new Array(1, 2, 3, 4, 5); //single argument creates an array of length given as numeric
// console.log(arr2);

//---------------------------------------------------------------------------------------------------------

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
const newConcat = array1.concat(array2);
// console.log(newConcat);
//concatenation generates a new array doesnot modify the old array

//-------------------------------------------------------------------------------------------------------

//to spread an array

const spreadArr = [...array1];
// console.log(spreadArr);

//---------------------------------------------------------------------------------------------------------

//convert to an array

const obj = { name: "arjun", age: "23" };
const fromArr = Array.from(obj);
// console.log(fromArr);

//this function expects iterable object (normal js objects are not iterable)

//array.flat() to unpack nested arrays

const strArr = ["arjun", "aswin", "aditya", "ali", "aslam", "ameera"];
// console.log(strArr.toString()); //comma seperated string of string array
// console.log(strArr.join("")); //string array to string

// const resul = strArr.slice(1, 3); //start , stop
// console.log(resul);

strArr.splice(1, 2, "hitesh", "akhilesh");
// console.log(strArr);

//to reverse an array
// strArr.reverse();
// console.log(strArr);

const smArr = [1, 2, 3, 4, 5];

const res = smArr.some((each) => {
    return each > 2;
});

const resu = smArr.every((each) => {
    return each > 3;
});

const inc = smArr.includes(5);

// console.log(res);
// console.log(inc);
// console.log(resu);
