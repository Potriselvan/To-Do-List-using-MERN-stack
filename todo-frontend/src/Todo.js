import { useState } from "react"

export default function Todo() {
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState([]);
    const [message, setMessage] = useState("");
    const apiUrl = "http://localhost:3000"

    const handleSubmit = () => {
        //check inputs
        if (title.trim() !== '' && description.trim() !== '') {
            fetch(apiUrl+"/todos", {
                method: "POST",
                headers: {
                    'Content-Type':'applicatoin/json'
                },
                body: JSON.stringify(title, description)
            }).then((res) =>{
                if(res.ok) {
                    //add item to list
                    setTodos([...todos, {title, description}])
                    setMessage("Item added successfully")
                }else {
                    //set error
                    setError("Unable to create Todo item")
                }
            })            
        }
    }

    return <>
        <div className="row p-3 bg-success text-light">
            <h1>To Do Project with MERN stack</h1>
        </div>
        <div className="row">
            <h3>Add Item</h3>
            {message && <p className="text-success">{message}</p>}
            <div className="form-group d-flex gap-2">
                <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" type="text" />
                <input placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description} className="form-control" type="text" />
                <button className="btn btn-dark" onClick={handleSubmit}>Submit</button>
            </div>
            {error && <p className="text-danger">{error}</p>}
        </div>
    </>
}
