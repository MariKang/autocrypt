import React from 'react';
import "./select.css";
import Type from "./components/type"
import ButtonB from "./components/buttonb"



const Select = () => {
    let title = "Select your\ntype";
    return(
    <>
    <div className= "title">
        {
          title.split('\n').map( line => {
            return (<span>{line}<br/></span>)
          })
        }
    </div>
    <Type></Type>
    <ButtonB/>
    </>
    )
}

export default Select;