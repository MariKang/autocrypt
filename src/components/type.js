import React, {useState} from 'react';
import "./type.css";
import { IoIosArrowForward } from 'react-icons/io';
import ButtonB from "./buttonb"

{/*class Type extends React.Component {

    constructor(){
        super();

        this.state = {
             ped_clicked: false,
             drive_clicked: false,
             chosen: false
        }
    }

   changePedColor(){
        this.setState({ped_clicked: !this.state.ped_clicked})
        this.setState({chosen: !this.state.chosen})
        this.setState({drive_clicked: false})
        console.log(1)
    }

    render(){
        let btn_class = this.state.clicked ? "box" : "box-clicked";
        return <div className="type">
            <button className="pedestrian-box box" onClick={this.changeColor.bind(this)}>
                Pedestrian
            </button>

            <div className="arrow-1">
                <IoIosArrowForward size="24px"/>
            </div>

            <button className="driver-box box">
                Driver

            </button>
            <div className="arrow-2">
                <IoIosArrowForward size="24px"/>
            </div>
        </div>

    }
    
}*/}


const Type = () => { 

    let [pedClicked, setPedClicked] = useState(false);
    let [driveClicked, changeDriveClick] = useState('box');
    let [activated, changeActivated] = useState('ButtonB')

    function onChangePedClicked(){
        setPedClicked(!pedClicked)
    }
    return(
        <>
    
        <div className="type">
        {pedClicked? 
       (<div>
            <button className={`pedestrian-box ${pedClicked}`} onClick={onChangePedClicked}>
                Pedestrian
            </button>

            <div className="arrow-1">
                <IoIosArrowForward size="24px"/>
            </div>
        </div>):
        (<div>
            <button className="driver-box box" onClick={onChangePedClicked}>
                Driver

            </button>
            <div className="arrow-2">
                <IoIosArrowForward size="24px"/>
            </div>
        </div>)
        }
        
        </div>

    
        </>
    )

    
    
}

export default Type;