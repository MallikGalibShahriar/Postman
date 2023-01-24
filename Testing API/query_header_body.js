const express = require('express');
app = express();

//Body Parser is now built in into Express
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

//POST API with URL Query
app.post('/query', (req, res) => {

    const fruitName = req.query.fruitName;
    const id = req.query.id;

    res.send(`fruitName is ${fruitName}  and id is  ${id}`);
});

//POST API with URL Header
app.post('/header', (req, res) => {

    const playerName = req.header('playerName');
    const country = req.header('country');

    res.send(`playerName is ${playerName}  and country is  ${country}`);
});


//POST API with URL JSON Body
app.post('/body', (req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.username);

    res.send('Hello User! Login Successfull');

});

//Port
app.listen(3000, () => {
    console.log('Server is running at port 3000');
})