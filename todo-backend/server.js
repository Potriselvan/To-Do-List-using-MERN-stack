//Express
const express = require('express');

//create an instance of express
const app = express();

//Sample in-memory storage for todo items
let todos = [];

//Create a new todo item
app.poast('/todos', (req, res) => {
    const {title, description} = req.body;
    const newTodo = {
        id: todos.length + 1,
        title,
        description
    };
    todos.push(newTodo);
    console.log(todos);
    res.status(201).json(newTodo);
})

//Start the server
const port = 3000;
app.listen(port, () => {
    console.log("Server is listening to port"+port)
})
