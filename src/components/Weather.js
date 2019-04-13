import React from 'react';

const Weather = (props) => {
    let infoChange = {
        opacity: "0",
        transition: "0.2s"
        
    }
    if (props.description) {
       infoChange = {
           transitionDelay: "0.2s",
           opacity: "1",
           transition: "0.2s",
           transform: "scale(0.9)"
       } 
    }
    
    return (
        <div style={infoChange}>
            <p>Condition: <span>{props.description}</span></p>
            <p>Temperature: <span>{props.temperature}</span></p>
            <p>Humidity: <span>{props.humidity}</span></p>
        </div> 
    )
}



 
export default Weather;


