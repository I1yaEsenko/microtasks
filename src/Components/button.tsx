import React from 'react';

type ButtonType = {
    name:string
    callback:()=>void;
}

const Button = (props:ButtonType) => {

    const onClickHeandler = () => {
        props.callback()
    }

    return (
        <div>
            <button onClick={onClickHeandler}>{props.name}</button>
        </div>
    );
};

export default Button;