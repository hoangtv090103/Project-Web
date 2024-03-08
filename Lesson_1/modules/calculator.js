function mathSum(...numbers) {
  var result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

function mathAbstract(...numbers) {
  var result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result -= numbers[i];
  }
  return result;
}


module.exports = {mathSum, mathAbstract};