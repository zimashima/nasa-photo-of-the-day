import React, {useState, useEffect} from "react";
import APOD from "./APOD";
import Dropdown from "../Dropdown/Dropdown"
import {apodapi} from "../../data"

import styled from 'styled-components'

import axios from "axios";

const GiantDiv = styled.div`
    background-color: black;
    margin: 0 autp;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

function APODCreate(){
    const [pic, setPic] = useState(apodapi)
    const [datdate, setDate] = useState("2019-11-06")


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

        <GiantDiv>
            <select onChange={(e)=> setDate(e.target.value)} value={datdate}> 
                <Dropdown setTheDate={setDate}/>
            </select>
            <APOD title={pic.title} date={pic.date} url={pic.url} explanation={pic.explanation}/>
        </GiantDiv>

    )
}

export default APODCreate;