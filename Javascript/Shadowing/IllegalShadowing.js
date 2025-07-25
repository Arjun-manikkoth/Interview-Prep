function test() {
    let a = 10;

    //var a = 10;
    console.log("consoling a inside function test", a);
    if (true) {
        let a = 20;
        console.log("consoling a inside function insideTest", a);
    }
}
test();

//illegal shadowing happens when a variable with declared with let and then with var..not in vice versa
