const sandwich = {
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  toppings: ["lettuce", "tomato", "mustard"],
};

// const bread = sandwich.bread;
// const meat = sandwich.meat;
// const cheese = sandwich.cheese;
// const toppings = sandwich.toppings;
// => Mệt lắm :<

// Destructuring
// const {bread, meat, cheese, toppings} = sandwich;
// console.log(bread, meat, cheese, toppings);

const thanhVien = ["Hoang", "Duc Anh", "The Anh"];

const [ongDauTien, ongThuHai, ongThuBa] = thanhVien;

console.log(ongDauTien, ongThuHai, ongThuBa)