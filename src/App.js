import React , { useState, useEffect}  from 'react';
import UserTable from './Components/UserTable';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserInputTable from './Components/UserInputTable';
import EditElement from './Components/EditElement';
import './App.css';
import Header from './Components/Header';

function App() {
  const [rows, setRows] = useState([]);


useEffect(() => { fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => setRows(json));},[]);



const addElements = (name , username , email , phone , website) => {
  if(name === '' || username=== '' || email=== '' || phone=== '' || website=== '')
  {
    return(
      alert('all fields are mandatory')
    )
  }
  fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  body: JSON.stringify({
    name,
    username,
    email,
    phone,
    website,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => setRows([...rows , json]));
}

const handleUpdate = (id , name , username , email , phone , website) => {
  if(name === '' || username === '' || email === '' || phone === '' || website === '')
  {
    return(
      alert('all fields are mandatory')
    )
  }
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
  method: 'PUT',
  body: JSON.stringify({
    name,
    username,
    email,
    phone,
    website,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => setRows(rows.map((row) => {
    return row.id === json.id ? {...json} : row ;
  })));
}


const removeItem = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
  method: 'DELETE',
}).then(() =>{ setRows(rows.filter((row) => row.id !== id))});
}
  

  return (
    <div>
      
       <Router>
         <Header />
         <Switch>
           <Route path="/" 
           exact 
           render={(props) => 
           ( <UserTable {...props} 
           rows={rows} removeItem={removeItem} /> )} />
            <Route path="/addelement" 
            render={(props) =>
              (<UserInputTable {...props} addElements={addElements}/>)} />
           <Route 
            path="/editelement/:id" 
            render={(props) =>
              (<EditElement {...props} handleUpdate={handleUpdate} />) } /> 
          </Switch>
        </Router>
    </div>
  );
}

export default App;
