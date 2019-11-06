import React from "react";

function APOD(props) {
    return (
        <div className="apod-card">
            <h1>NASA Astronomy Picter of the Day</h1>
            <h2>Date: {props.date}</h2>
            <img alt="NASA" src={props.url} />
            <p>Description: {props.explanation}</p>
        </div>
    )

}

export default APOD;