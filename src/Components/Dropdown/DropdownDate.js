import React, {useState, useEffect} from "react";

function DropdownDate(props){
    
    return (
        <option value={props.thedate}>{props.thedate}</option>
    )
};

export default DropdownDate;