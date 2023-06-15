import React, {useState} from 'react';
import './App.css';
import {Body} from "./site/Body";
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";
import {CarsComponent} from "./Components/CarsComponent";
import Button from "./Components/button";
import FilterComponent from "./Components/filterComponent";

export type MoneyType = {
    banknots: string
    value: number
    number: string
}
export type FilterType = 'all' | 'dollar' | 'ruble'


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


    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)

    }

    const onClickHandlerZero = () => {
        setA(0)
    }

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])


    const [filter, setFilter] = useState<FilterType>('all')

    let currentMoney = money

    if (filter === 'ruble') {
        currentMoney = currentMoney.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
    }

    if (filter === 'dollar') {
        currentMoney = currentMoney.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }


    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
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

            <h1>{a}</h1>
            <button onClick={onClickHandler}>+</button>
            <button onClick={onClickHandlerZero}>0</button>

            -----------------------------------------------
            <FilterComponent currentMoney={currentMoney} foo={onClickFilterHandler}/>


        </div>
    )
        ;
}


/*
В коде в разных местах допущена одна и та же ошибка.
Какое слово должно быть написано вместо ошибочного?
*/
export default App;
