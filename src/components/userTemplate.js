import React from 'react';
import "./userTemplate.css";
import ButtonActivated from "./buttonactivated"

const UserTemplate = () => {
    return(
    <>
    <div className= "ped">
      Pedestrian 
    </div>

    <div className="graybox">
    </div>
    <ButtonActivated status='Notify'/>
    </>
    )
}

export default UserTemplate;