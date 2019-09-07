import React from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      </header>
      <div className="content">
        <Counter />
        </div> 
      < div className="content"> 
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
