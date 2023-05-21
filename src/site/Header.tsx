import React from 'react';


type HeaderType={
    titleForHeader:string
}
export const Header = (props:HeaderType) => {
    return (
        <>
            <div>{props.titleForHeader}</div>
        </>
    );
};

