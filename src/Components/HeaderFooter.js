import React from "react";
import styled from "styled-components"

const BigHeader = styled.header`
    padding: 30px;
    text-align: center;
    background-color: #323232;
    height: 150px;
`

const H1White = styled.h1`
    font-size: 3rem;
    color: #e5e5e5;
`


export const Header = () => {
    return (
        <BigHeader>
            <H1White>NASA Photo of the day</H1White>
        </BigHeader>
    )
}

const DaFooter = styled.footer`
    padding-top: 15px;
    text-align: center;
    background-color: #708090;
`

export const Footer = () => {
    return (
        <DaFooter>
            <p>Disclaimer: These photos are pulled from NASA's API.</p>
        </DaFooter>
    )
}