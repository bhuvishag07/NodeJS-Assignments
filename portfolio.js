// Assignment 5: Personal Portfolio Server

const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>My Portfolio</title>
            </head>
            <body>

                <h1>Welcome to My Portfolio</h1>

                <p>
                    Hi, I am Bhuvisha Gohil, a B.Tech Computer Science
                    and Engineering student.
                </p>

                <a href="/">Home</a> |
                <a href="/about">About Me</a> |
                <a href="/skills">Skills</a> |
                <a href="/projects">Projects</a> |
                <a href="/contact">Contact</a>

            </body>
            </html>
        `);

        res.end();

    } else if (req.url === "/about") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>About Me</title>
            </head>
            <body>

                <h1>About Me</h1>

                <p>
                    I am Bhuvisha Gohil, a B.Tech Computer Science
                    and Engineering student at ITM Skills University,
                    School of Future Tech, Kharghar.
                </p>

                <p>CGPA: 8.8</p>
                <p>Expected Graduation: 2029</p>

                <p>
                    My interests include Artificial Intelligence,
                    Data Science, Cybersecurity, and Software Development.
                </p>

                <a href="/">Home</a> |
                <a href="/about">About Me</a> |
                <a href="/skills">Skills</a> |
                <a href="/projects">Projects</a> |
                <a href="/contact">Contact</a>

            </body>
            </html>
        `);

        res.end();

    } else if (req.url === "/skills") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Skills</title>
            </head>
            <body>

                <h1>Skills</h1>

                <h2>Languages</h2>
                <p>C++, HTML, CSS, JavaScript, Python</p>

                <h2>Frameworks & Technology</h2>
                <p>React JS, Bootstrap</p>

                <h2>Tools</h2>
                <p>Jupyter Notebook, GitHub, Visual Studio Code</p>

                <h2>Soft Skills</h2>
                <p>
                    Problem Solving, Time Management,
                    Adaptability, Communication
                </p>

                <a href="/">Home</a> |
                <a href="/about">About Me</a> |
                <a href="/skills">Skills</a> |
                <a href="/projects">Projects</a> |
                <a href="/contact">Contact</a>

            </body>
            </html>
        `);

        res.end();

    } else if (req.url === "/projects") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Projects</title>
            </head>
            <body>

                <h1>Projects</h1>

                <h2>FAQify</h2>
                <p>
                    Modern React FAQ accordion interface.
                </p>

                <h2>Car Parking Management</h2>
                <p>
                    Parking slot allocation system using C++.
                </p>

                <h2>Tic Tac Toe</h2>
                <p>
                    Interactive browser game.
                </p>

                <h2>Whack a Mole</h2>
                <p>
                    Interactive browser-based game project.
                </p>

                <a href="/">Home</a> |
                <a href="/about">About Me</a> |
                <a href="/skills">Skills</a> |
                <a href="/projects">Projects</a> |
                <a href="/contact">Contact</a>

            </body>
            </html>
        `);

        res.end();

    } else if (req.url === "/contact") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Contact</title>
            </head>
            <body>

                <h1>Contact Details</h1>

                <p>Email: Available on my portfolio</p>
                <p>GitHub: Available on my portfolio</p>
                <p>LinkedIn: Available on my portfolio</p>

                <a href="/">Home</a> |
                <a href="/about">About Me</a> |
                <a href="/skills">Skills</a> |
                <a href="/projects">Projects</a> |
                <a href="/contact">Contact</a>

            </body>
            </html>
        `);

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