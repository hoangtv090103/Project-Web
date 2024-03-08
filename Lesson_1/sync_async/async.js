function fetchData(callback) {
    setTimeout(() => {
        const random = Math.random();
        callback("Lỗi lòi", data);
    }, 2000);
}

async function callTaxi(err, data) {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Data:', data);
    }
}
console.log("Start processing data")
fetchData(processData);
console.log("Finish processing data")

// const sayHello = () => {
//   setTimeout(function () {
//     console.log("Hello 1");
//   }, 0);
//   console.log("Hello 2");
//   console.log("Hello 3");
// };

// sayHello();
