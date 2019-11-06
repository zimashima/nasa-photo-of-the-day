import React, {useState, useEffect} from "react";
import APOD from "./APOD";
import {apodapi} from "../data"

// import axios from "axios";

function APODCreate(){
    const [pic, setPic] = useState(apodapi)
    const [date, setDate] = useState("2019-11-06")

    //successful retrieve, but comment it out for security purposes
    // useEffect(()=>{
    //     axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    //     .then(response => {
    //         console.log(response.data)
    //         setPic(response.data)
    //     })
        
    //     .catch (error => {
    //         console.log("GET!", error)
    //     })
    // }, [date])

    return (
        <div>
            <APOD date={pic.date} url={pic.url} explanation={pic.explanation}/>
        </div>
    )
}

export default APODCreate;