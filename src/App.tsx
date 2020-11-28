import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { io } from 'socket.io-client';
import './App.css';
import LoginPage from './pages/Login';

const socket = io('http://localhost:4000');

socket.emit('play')
socket.on('reverseplay', () => {
  console.log('reverseplay')
})

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="*"><Redirect to="/login" /></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
