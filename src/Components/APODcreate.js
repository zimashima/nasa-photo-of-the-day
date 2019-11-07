import React, {useState, useEffect} from "react";
import APOD from "./APOD";
import Dropdown from "./Dropdown/Dropdown"
import {apodapi} from "../data"

import axios from "axios";

function APODCreate(){
    const [pic, setPic] = useState([])
    const [datdate, setDate] = useState("2019-11-07")

    //successful retrieve, but comment it out for security purposes
    useEffect(()=>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${datdate}`)
        .then(response => {
            console.log(response.data)
            setPic(response.data)
        })
        
        .catch (error => {
            console.log("GET!", error)
        })
    }, [datdate])

    return (

        <div>
            <select onChange={(e)=> setDate(e.target.value)} value={datdate}> 
            <Dropdown setTheDate={setDate}/>
            </select>

            <APOD date={pic.date} url={pic.url} explanation={pic.explanation}/>
        </div>
    )
}

export default APODCreate;