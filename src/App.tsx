import React from 'react';
import { io } from 'socket.io-client';
import './App.css';
import Jeu from './components/Jeu/Jeu'

const socket = io('http://localhost:4000');

socket.emit('play')
socket.on('reverseplay', () => {
  console.log('reverseplay')
})

function App() {
  return (
    <div className="App">
      <Jeu />
    </div>
  );
}

export default App;
