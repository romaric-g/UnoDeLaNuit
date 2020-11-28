import React from 'react';
import { io } from 'socket.io-client';
import './App.scss';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import Home from './pages/Home/Home'
import Lobby from './pages/Lobby/Lobby'
import Room from './pages/Room/Room'
import Game from './pages/Game/Game'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

var { ThemeProvider } = require('atomize');
var { StyleReset } = require('atomize');

const socket = io('https://le-uno-de-la-nuit.herokuapp.com');

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const engine = new Styletron();

socket.emit('play')
socket.on('reverseplay', () => {
  console.log('reverseplay')
})

const theme = {
  colors: {
    primary: 'tomato',
    accent: 'yellow',
  },
};

function App() {
  return (
    <Router>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <ThemeProvider theme={theme}>
          <StyleReset />
          <div className="App">
            <nav className="App__NavDev">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Room">Room</Link>
                </li>
                <li>
                  <Link to="/Lobby">Lobby</Link>
                </li>
                <li>
                  <Link to="/Game">Game</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route path="/Room">
              <Room />
            </Route>
            <Route path="/Lobby">
              <Lobby />
            </Route>
            <Route path="/Game">
              <Game />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ThemeProvider>
      </StyletronProvider>
    </Router>
  );
}

export default App;
