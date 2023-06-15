import React, {useState} from 'react';
import {FilterType, MoneyType} from "../App";


type FilterComponentType = {
    currentMoney: Array<MoneyType>
    foo:(nameButton: FilterType)=>void
}

const Filter = (props:FilterComponentType) => {



return (

    <>
        <ul >
            {props.currentMoney.map((objFromMoneyArr, index: number) => {
                        return (
                            <li key={index}>
                                <span>{objFromMoneyArr.banknots}</span>
                                <span>{objFromMoneyArr.value}</span>
                                <span>{objFromMoneyArr.number}</span>
                            </li>
                        )
                    }
                )
            }

        </ul>

        <div style={{marginLeft: '35px'}}>
            <button onClick={() => props.foo('all')}>all</button>
            <button onClick={() => props.foo('ruble')}>ruble</button>
            <button onClick={() => props.foo('dollar')}>dollar</button>
        </div>
    </>


);
}
;

export default Filter;