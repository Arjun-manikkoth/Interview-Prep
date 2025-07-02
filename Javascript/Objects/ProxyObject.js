const target = {
    name: "arjun",
    age: 34,
};

//creating a proxy object

const handler = {
    get(target, prop) {
        console.log(`Getting property ${prop}`);
        return target[prop];
    },
    set(target, prop, value) {
        console.log(`Setting property and its value ${prop} ${value}`);
        target[prop] = value;
    },
};
const proxy = new Proxy(target, handler);
console.log(proxy.name); // Output: Getting property name, Ali
proxy.name = "ali";
