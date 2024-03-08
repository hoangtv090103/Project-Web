const firstName = 'Hoang' // dấu backtick (trên nút tab)
const lastName = 'Tran'
const description = `Dep
zai
khong 
nhieu tien
`

const fullName = `${firstName} ${lastName} ${description}`

console.log(fullName)


const num1 = 100
const num2 = 200

console.log(`${num1} + ${num2} = ${num1 + num2}`);

function myTag (strings, ...values) {
    console.log(strings);
    console.log(values);
    return "Done";
}

const result = myTag`Tổng ${num1} + ${num2} = ${num1 + num2}`
console.log(result)