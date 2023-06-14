import React, {useState} from 'react';

type FilterType = 'all' | 'dollar' | 'ruble'

const Filter = () => {

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

    let currentMoney = money;
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

        <>
            <ul>
                {
                    currentMoney.map((objFromMoneyArr, index: number) => {
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

            <div>
                <button onClick={() => onClickFilterHandler('all')}>all</button>
                <button onClick={() => onClickFilterHandler('ruble')}>ruble</button>
                <button onClick={() => onClickFilterHandler('dollar')}>dollar</button>
            </div>
        </>


    );
};

export default Filter;