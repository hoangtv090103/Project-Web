const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public'))); // Khai bao thu muc muon cong khai la thu muc nao

app.listen(
    3000,
    function () {
        console.log("Server dang chay o port 3000");
    }
)

app.get('/', (req, res) => {
    console.log("hello");
    res.send("Xin Chao");
})

app.get('/about', (req, res) => {
    console.log(__dirname);
    // Biến global
    // __dirname: Biến lưu trữ đường dẫn đến file đang chạy
    console.log(path.join(__dirname, 'about.html'));
    res.sendFile(path.join(__dirname, 'about.html'));
    // path.join() ket hop duong dan den thu muc chua file index.js va duong dan den file about.html
})

app.get('/contact', (req, res) => {
    res.send("Lien lac voi chung toi");
})

app.get('*', (req, res) => {
    res.send("Khong tim thay trang");
})