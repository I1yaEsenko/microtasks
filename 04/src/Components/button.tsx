import React from 'react';

type ButtonPropsType = {
    name:string
    callback:()=>void;
}

export const Button = (props:ButtonPropsType) => {

    const onClickHeandler = () => {
        props.callback()
    }

    return (
        <div>
            <button onClick={onClickHeandler}>{props.name}</button>
        </div>
    );
};

