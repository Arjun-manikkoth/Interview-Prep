let obj1 = { name: "arjun", age: 25 };

// console.log(obj1);
//obj1 = null;
//garbage collected

const array = [obj1];
// obj1 = null;
// console.log(array);
//see here it is not garbage collected

let map = new Map();
// map.set(obj1, "...");
// obj1 = null;
// console.log(map);
//see the object key is still stored in map even after the referrences are removed
//this is where weak set comes in to use

let weakMap = new WeakMap();

weakMap.set(obj1, "weakmap");
obj1 = null;
console.log(weakMap);

//obj1 is removed from the memory and the weakmap will be empty

//  If we’re working with an object that “belongs” to another code,
//  maybe even a third-party library, and would like to store some data associated with it,
//  that should only exist while the object is alive – then WeakMap is exactly what’s needed.

//use case
//* caching ()

///weak map and weak set doesnt have size property
