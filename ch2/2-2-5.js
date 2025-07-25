const original = {
    name: 'j797',
    address:  {
        city: "seoul",
        zip: "12345",
    },

}

const shallow = { ...original };
shallow.name = "정주영";

const deep = JSON.parse(JSON.stringify(original));

console.log(original.name);
console.log(shallow.name);
console.log(original.name);

shallow.address.city = "부산";
console.log(original.address.city);
console.log(shallow.address.city);