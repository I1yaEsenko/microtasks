import React from 'react';
import './App.css';
import {Body} from "./site/Body";
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";
import {CarsComponent} from "./Components/CarsComponent";
import Button from "./Components/button";

function App() {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    const ButtonFoo = (subscriber: string) => {
        console.log(subscriber)
    }

    const ButtonFoo2 = (subscriber: string) => {
        console.log(subscriber)
    }


    return (


        <div className="App">
            <Header titleForHeader={"Title for header"}/>
            <Body titleForBody={'Title for body'}/>
            <Footer titleForFooter={'Title for footer'}/>
            <CarsComponent cars={topCars}/>
            <Button name={"myButton"} callback={() => ButtonFoo("Im Ilya")}/>
            <Button name={"myButton"} callback={() => ButtonFoo2("Im Jeka")}/>
            <Button name={"stupid button"} callback={() => (console.log("Im stupid button"))}/>
        </div>
    )
        ;
}

export default App;
