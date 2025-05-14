//Express
const express = require('express');
const mongoose = require('mongoose');

//create an instance of express
const app = express();
app.use(express.json())

//Sample in-memory storage for todo items
//let todos = []; no more required as db is used

//connecting mongodb
mongoose.connect('mongodb://localhost:27017/mern-app')
.then(() => {
    console.log('DB Connected!')
})
.catch((err) => {
    console.log(err)
})

//creating schema
const todoSchema = new mongoose.Schema({
    title:String,
    description:String
})

//creating model
const todoModel = mongoose.model('Todo', todoSchema);

//Create a new todo item
app.post('/todos', (req, res) => {
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

//Get all items
app.get('/todos', (req, res) => {
    res.json(todos);
})

//Start the server
const port = 3000;
app.listen(port, () => {
    console.log("Server is listening to port "+port)
})
