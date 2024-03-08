// Import hàm mathSum từ module calculator
const mathSum = require("./calculator");

// Sử dụng hàm mathSum
console.log(mathSum(1, 2, 3, 4)); // 10

// Export một hàm
module.exports = function () {
  /*...*/
};

// Export một đối tượng
module.exports = {
  myFunction: function () {
    /*...*/
  },
  myVariable: "value",
};

// Import một module
const myModule = require('./myModule');










