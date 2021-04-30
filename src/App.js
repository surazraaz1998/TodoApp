import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';
import Footer from './Footer';
function App() {
  const [todos, settodos] = useState([]);
  const [input, setinput] = useState('');
  //when the app loads, we need the todos to be listened and fetch from the database
  useEffect(() => {
    //this code works when the app.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()));
      settodos(snapshot.docs.map(doc=>doc.data().todo))
    })
     
  }, []);

  const addtodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setinput('');
  }
  return (
    <div className="App">
      <h1> ✔Hello world! 😎✔</h1> 
      <form>
        <FormControl>
          <InputLabel> ✔ Write a Todo</InputLabel>
          <Input value={input} onChange={event=>setinput(event.target.value)}/>
        </FormControl>
        <Button disable={!input} type='submit' onClick={addtodo} variant='contained' color='primary'>Add Todo</Button>
      </form>
      
      <ul>
        {todos.map(todo => (<Todo text={todo}/>))}
      </ul>
      <Footer/>
    </div>
  );
}

export default App;
