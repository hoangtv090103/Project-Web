const express = require("express")
const app = express()

const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));
app.listen(
    3000,
    function () {
        console.log("Server dang chay o port 3000");
    }
)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/index.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/about.html'));

})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/contact.html'));
})

app.get('/post', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/post.html'));
})
    

app.get('*', (req, res) => {
    res.send("Khong tim thay trang");
})