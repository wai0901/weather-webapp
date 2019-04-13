import React from 'react';


const Title = (props) => {
    let infoChange = {
        opacity: "0",
        transition: "0.2s"
        
    }
    if (props.city) {
       infoChange = {
           transitionDelay: "0.2s",
           opacity: "1",
           transition: "0.2s",
           transform: "scale(0.9)"
       } 
    }
    return ( 
        <div style={infoChange}>
            <p><span>{props.city},</span> <span>{props.country}</span></p>
        </div>
    );
}
 
export default Title;