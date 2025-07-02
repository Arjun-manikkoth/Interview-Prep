// creates a deepcopy by copying all the levels with new referrence

//**json.parse(json.stringify())

const obj1 = { name: "arjun", age: 32 };
const obj2 = JSON.parse(JSON.stringify(obj1));
obj2.name = "aditya";
console.log(obj2);
console.log(obj1);

//** structured clone
const obj3 = structuredClone(obj1);
console.log(obj3);
