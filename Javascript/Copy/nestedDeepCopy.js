//Implement a deep clone function in JavaScript that creates a copy of a nested object
// or array without any reference to the original.
//we can use either stringify and parse or structuredclone to create deepcopy
const obj = {
    name: "arjun",
    address: {
        area: "kolaserry",
        location: {
            latitude: 54.5,
            longitude: 32.3,
        },
    },
    skils: ["js", "react", { exp: 5 }],
};

function deepClone(obj) {
    if (typeof obj !== "object" || typeof obj === null) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map((each) => deepClone(each));
    }

    const clonedObj = {};

    for (let key in obj) {
        clonedObj[key] = deepClone(obj[key]);
    }
    return clonedObj;
}

const cloned = deepClone(obj);
cloned.address.area = "kannur";
console.log(obj);
