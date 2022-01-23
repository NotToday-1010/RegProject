import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [users, setUsers] = useState([])
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleAgeChange = e => {
        setAge(e.target.value)
    }

    const handleDelete = async (UserId) =>{
        const res = await axios.delete(  `http://localhost:5000/api/users/${UserId}`)
        if (res) {
            const {data} = await axios.get('http://localhost:5000/api/users')
            setUsers(data)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const {data} = await axios.post('http://localhost:5000/api/user/registration', {name, age})
        setUsers([data, ...users])
    }

    useEffect(() => {
        const fetchUsers = async () => {
            const {data} = await axios.get('http://localhost:5000/api/users')
            setUsers(data)
            console.log(users)
            console.log(data)
        }
        fetchUsers().then()
    }, [])
    return (
        <div className="App">
            {users.map(user => <div style={{display:'flex'}}><h3>{user.name}, {user.age}</h3><button onClick={() => {
                handleDelete(user._id)

            }}>Delete</button></div>)}
            <form onSubmit={handleSubmit}>
                <input placeholder='Name:' name='name' onChange={handleNameChange}/>
                <input placeholder='Age:' name='age' onChange={handleAgeChange}/>

                <button type='submit' >Create</button>
            </form>


        </div>
    );
}

export default App;
