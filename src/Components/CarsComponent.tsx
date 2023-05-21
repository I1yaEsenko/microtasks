import React from 'react';

type CarsType = {
    cars: Array<TopCarsType>
}

type TopCarsType = {
    manufacturer: string
    model: string
}
export const CarsComponent = (props: CarsType) => {
        return (
            <div>
                {props.cars.map((valueTopCars, index) => {
                    return (
                        <table key={index + 1}>
                            <tr>
                                <th>Manufacture: {valueTopCars.manufacturer}</th>
                            </tr>
                            <tr>
                                <td>Model : {valueTopCars.model}</td>
                            </tr>
                        </table>
                    )
                })}
            </div>
        )

    }
;

