const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];

const combinedNumbers = [...numbers, ...moreNumbers];

console.log(combinedNumbers);


const clb = {
    name: "NITC",
    age: 3,
    ban: ["Học thuật", "Sự kiện", "Đối ngoại", "Truyền thông"]
}

const cloneClb = clb;
cloneClb.name = "CLB CNTT DHKTQD"

console.log(clb)

const mangA = [1, 2, 3]
const mangB = mangA;

mangB.push(4)

console.log("Mang A: ", mangA);
console.log("Mang B: ",mangB);