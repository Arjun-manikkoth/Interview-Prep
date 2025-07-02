//shallow copy means only the top level properties are copied all other nested level references to the same location

//** spread operator

const obj1 = { name: "arjun", age: 23 };

const obj2 = { ...obj1 };

console.log(obj2);

//-------------------------------------------------------------------------------------------------------

//** object.assign

const obj3 = {};
Object.assign(obj3, obj2);

console.log(obj3);
