let arr = [1, 2];
let [elem, elem1] = arr;

console.log(elem);
console.log(elem1);

function getKey() {
    return ["secret key", "192.168.29.100"]
};

let [key, addr] = getKey();

let coords = [
    [1, 2, 3],
    [1, 3, 4],
    [3, 15, 53]
];

for (let [x, , y] of coords) {
    console.log(x, '-', y);
}

// 1 - 3
// 1 - 4
// 3 - 53


let test = { title: 'test', description: 'test2' };

for (let [key, value] of Object.entries(test)) {
    console.log(key, "-", value);
}

// title - test
// description - test2

let [name1, name2, ...data] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(data);

let [namee1, namee2="Caesar"] = ["Julius"]
console.log(namee1, namee2);

let {var2:v, var1:v2} = {var1:1, var2:2}
console.log(v, v2);