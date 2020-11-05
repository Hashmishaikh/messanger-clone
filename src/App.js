import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    //{username:'hashmi', message:'hi'},{username:'qazi', message:'hey'}
  ]);
  const [username, setusername] = useState('');

  useEffect(() => {
    //run when app component or database load
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot =>{
      
      setMessages(snapshot.docs.map(doc => ({id: doc.id , message: doc.data()})))
    })
  }, []);


  useEffect(() => {
    setusername(prompt('Please Enter Your Name'));
  }, [])



  const sendMessage = (event) => {
    ///All the logic to send Message goes here
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }) 
    setInput('');
  }
  return (
    <div className="App">
    <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"/>
      <h1>DungenMaster31</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
     

        <FormControl className="app__formControl">
        <InputLabel>Enter the Message....</InputLabel>

          <Input className="app__input" placeholder="Enter the Message" value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app__iconButton" disabled={!input} variant="contained" type="submit" color="primary" onClick={sendMessage}>
          <SendIcon></SendIcon></IconButton>
        </FormControl>

      </form>
      
      <FlipMove>
      {
        messages.map(({id ,message}) => (
          //<Message username={message.username} text={message.text} />
          <Message key={id} username={username} message={message} />

        ))
      }

      </FlipMove>  
    </div>
  );
}

export default App;
