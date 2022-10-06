const express = require ('express');

const app = express();


app.use(express.json())


const port = 4000;


let course = (
    {
        name: "Artificial Intelligence",
        description: "Learn AI",
        price: 35000
    },
    {
        name: "Computer Fundamentals",
        description: "Learn Computers",
        price: "25000"
    },
    {
        name: "System Integration Architecture",
        description: "Learn SIA",
        price: "28000"
    }

);

let users = [
    {
        username: "marybell knight",
        password: "merrmerrybell"
    },
    {
        username: "janedoPriest",
        password: "jobPruest101"
    },
    {
        username: "kimTofu",
        password: "dubutofu"
    }
];


    app.get('/', (req, res) => {
        res.send("Hello from our first ExpressJS route!");
    })
    
    app.post('/', (req, res) => {
        res.send("Hello from our first ExpressJS Method Route.")
    })
    // used the listen() method of express to assign a port to our server and send a message
    app.listen(port, () => console.log(`Express API running at port 4000`));