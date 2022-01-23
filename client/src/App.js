import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
         const fetchUsers = async () => {
             const result = await axios.get('http://localhost:5000/api/users').data
             setUsers(result)
             console.log(result)
         }
         fetchUsers().then()
    }, [])
    return (
    <div className="App">
        {users.map(user => <h3>{user}</h3>
        )}
        {/*<input*/}
        {/*    type='text'*/}
        {/*    value={''}*/}
        {/*    onChange={event => setValue(event.target.value)}*/}
        {/*/>*/}
        {/*<input*/}
        {/*    type='text'*/}
        {/*    value={''}*/}
        {/*    onChange={event => setValue(event.target.value)}*/}
        {/*/>*/}
      {/*<button onClick={allUsers}>GetAll</button>*/}
      {/*<button onClick={deleteUser}>Delete</button>*/}
      {/*<button onClick={addUser}>Add</button>*/}
    </div>
  );
}

export default App;
