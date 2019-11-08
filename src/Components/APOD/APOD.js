import React from "react";
import styled from 'styled-components';


const MainDiv = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: flow;
`
const PicDiv = styled.div`
`
const TextDiv = styled.div`
    width: 40%;
    background-color: black;
`

const Picture = styled.img`
    width: 100%;
`

const SubTopic = styled.h3`
    padding: 10px 0 10px 30px; ;
    color: white;
`
const TheText = styled.p`
    padding: 0 40px 0 40px;
    color: #708090;
`
const PicTitle = styled.h2`
    font-size: 60px;
    text-align: center;
    color: lightgrey;
`

function APOD(props) {
    return (
        <MainDiv>
            <PicDiv><Picture alt="NASA" src={props.url} /></PicDiv>
            <TextDiv>
                <PicTitle>{props.title}</PicTitle>
            <div >
                <SubTopic>Date</SubTopic>
                <TheText>{props.date}</TheText>   
            </div>
            <div>
                <SubTopic>Description</SubTopic>
                <TheText>{props.explanation}</TheText>   
            </div>
            </TextDiv>
        </MainDiv>
    )

}

export default APOD;