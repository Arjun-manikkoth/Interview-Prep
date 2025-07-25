const arr = [
    { id: "asasd", name: "Adsds", job: "painter" },
    { id: "sdsfsd", name: "Bdsds", job: "gynecologist" },
    { id: "sscsdc", name: "Cdsds", job: "paleontology" },
    { id: "rrvrva", name: "Ddsds", job: "dasdasd" },
    { id: "mnuytv", name: "Edsds", job: "dasdasd" },
    { id: "qwdcsdc", name: "Fdsds", job: "dasdasd" },
    { id: "plmumer", name: "Gdsds", job: "dasdasd" },
];

//Convert an array of objects into a hashmap where key is a unique property value
// in that object and value is the object itself

function ObjectCreate(arr) {
    let resObj = {};

    arr.forEach((obj) => {
        resObj[obj["id"]] = obj;
    });

    return resObj;
}
console.log(ObjectCreate(arr));
