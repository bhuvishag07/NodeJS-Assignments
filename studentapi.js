// Assignment 3: Student JSON API

const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/student") {

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        const student = {
            id: 101,
            name: "John",
            course: "BCA",
            semester: 4,
            city: "Mumbai"
        };

        res.write(JSON.stringify(student));
        res.end();

    } else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.write("404 - Page Not Found");
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});