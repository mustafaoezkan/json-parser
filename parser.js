let string = `"name": "Mustafa","surname": "Özkan","age": "22"`;
let string2 = `"object-1": "example-1","object-2": "example-2","object-3": "example-3"`;

test(string);
console.log("-----------------------------------------------------");
test(string2);

function test(s) {
    let obj = {}
    let propsArr = s.split(",");
    propsArr.forEach(s => {
        var [key, value] = s.split(":");
        obj[key] = value;
        console.log(key);
        console.log(obj[key]);
    });
}