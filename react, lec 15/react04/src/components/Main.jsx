import React from 'react';
import Card from './Card';
const Main = (props) => {
    console.log(props);
    let naam=props.fname;
    let array=props.array;
    console.log(array);
    return(
        <>
        <h1> This is main Component</h1>
        <p>{naam}</p>
        <h1>{props.fage}</h1>
        <Card />
        <h2> array data: </h2>
        <ul>
            {array && array.map((item,idx) => (
                <li key={idx}>{item}</li>
            ))}
        </ul>
        </>

    )
}
export default Main;
