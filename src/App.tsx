import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Body} from "./site/Body";
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";
import {CarsComponent} from "./Components/CarsComponent";

function App() {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]


    return (
        <div className="App">
            <Header titleForHeader={"Title for header"}/>
            <Body titleForBody={'Title for body'}/>
            <Footer titleForFooter={'Title for footer'}/>
            <CarsComponent cars={topCars}/>
        </div>
    );
}

export default App;
