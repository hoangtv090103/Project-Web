const http = require('http')

const server = http.createServer((request, response) => {
    console.log("Server started");
    
    if (request.url === '/') {
        response.write("Day la trang chu");
        response.end("Hết trang òi");
    }
    else if (request.url === '/about') {
        response.write("Đây là trang về chúng tôi");
        response.end("Hết trang òi");
    } else {
        response.writeHead(404); // 4XX lỗi máy khách
        response.end("Trang không tìm thấy");
    }
})

server.listen(3000);