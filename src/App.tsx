import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Body} from "./site/Body";
import {Header} from "./site/Header";

function App() {
  return (
    <div className="App">
        <Header titleForHeader={"Title for header"}/>
        <Body titleForBody={'Title for body'}/>
    </div>
  );
}

export default App;
