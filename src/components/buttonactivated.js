import React from 'react';
import "./buttonactivated.css";
import { Link } from 'react-router-dom';

const ButtonActivated = (props) => {
    return(
    <>
    <Link to='/user'>
        <button className="button-activated button-text">
            {props.status}
        </button>
    </Link>
    </>
    )
}
export default ButtonActivated;