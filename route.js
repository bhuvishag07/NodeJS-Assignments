// Assignment 4: Route Handling Server

const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.write("Welcome to Home Page");
        res.end();

    } else if (req.url === "/about") {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.write("About Us");
        res.end();

    } else if (req.url === "/contact") {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.write("Contact Information");
        res.end();

    } else if (req.url === "/services") {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.write("Our Services");
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