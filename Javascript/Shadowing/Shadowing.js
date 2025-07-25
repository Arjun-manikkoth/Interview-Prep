function test() {
    let a = 10;
    console.log("consoling a inside function test", a);
    if (true) {
        let a = 20;
        console.log("consoling a inside function insideTest", a);
    }
}
test();

//here the a outside is being shadowed by the a inside
//this is called as shadowing
