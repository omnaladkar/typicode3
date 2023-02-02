import React, { useState,useEffect } from 'react';
import "./App.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from "axios";
import UserList from './containers/User'
import User from './containers/UserDetails'
function App() {

  const [users, setUsers] = useState(null);


  const rootURL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios(
        rootURL,
      );
 
      setUsers(result.data);
    };
 
    fetchUsers();
  }, []);
  if (!users) return null

  return (
    <Router>
      <div className="container">
    <div className="main-body">
      <Route exact path="/">
      <UserList users={users} />
      </Route>
      <Route path="/users/:id" >
      <User users={users}/>
      </Route>
      </div>
      </div>
    </Router>

  
  );
}

export default App;
