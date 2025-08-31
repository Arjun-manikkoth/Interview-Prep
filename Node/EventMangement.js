// event mangement in node js is primarily handled through its built-in events module which provides event emitter class

import EventEmitter from "events";

// creates and instance
const emitter = new EventEmitter();

emitter.on("greet", (name) => {
    console.log("hello", `${name}`);
});

emitter.emit("greet", "Arjun");
