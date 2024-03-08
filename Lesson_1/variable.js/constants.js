const member = ["Hoang", "Tran"];
const member2 = ["Thu", "Pham"];

const all = [...member, ...member2]

console.log(...member) // not ["Hoang", "Tran"]

// Shallow copy
const member3 = [...member];
const member4 = member2;

member4.push(4);

console.log(member4)
console.log(member2)