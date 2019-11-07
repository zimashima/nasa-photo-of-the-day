import React, {useState} from "react";
import DropdownDate from "./DropdownDate";
import {dates} from "../../data"

function Dropdown(props) {
    const [dateValue] = useState(dates)
    
    return (
         
        
        dateValue.map((d, index) => (
            <DropdownDate key={index} thedate={d} setTheDate={props.setTheDate} />
        ))
        
        
    )
};

export default Dropdown;