import React from 'react';
import clearSky from "../img/clearSky.jpg";
import sunny from "../img/sunny.jpg";
import cloudy from "../img/cloudy.jpg";
import dark from "../img/dark.jpg"
import lightRain from "../img/lightRain.jpg";
import raining from "../img/raining.jpg";
import thunder from "../img/thunder.jpg";
import snow from "../img/snow.jpg";
import foggy from "../img/foggy.jpg";

const Picture = (props)=> {
    
    const images = [
        {id: "01d",
        url: clearSky},
        {id: "02d",
        url: sunny},
        {id: "03d",
        url: cloudy},
        {id: "04d",
        url: dark},
        {id: "09d",
        url: lightRain},
        {id: "10d",
        url: raining},
        {id: "11d",
        url: thunder},
        {id: "13d",
        url: snow},
        {id: "50d",
        url: foggy}
    ]

    let weaImage = clearSky;
    images.filter((image) => {
        if (image.id === props.weatherCode){
            weaImage = image.url;
        }
        return image;
    });

    let infoChange = {
        opacity: "0",
        transition: "0.2s"
    }

    let imgStyle = {
        transition: "0.2s"
    }
        
    if (props.temperature) {
       infoChange = {
           opacity: "1",
           transition: "0.2s",
           transform: "scale(0.9)"
       } 
       imgStyle = {
        transition: "0.2s",
        transform: "scale(1.1)"
       }
    }
    return (
        <div>
            <div className="tempLeft" style={infoChange}>
               <p><span>Now</span><br />{props.temperature}°F</p>
            </div>
            <div className="imgStyle" style={imgStyle}>
                <img className="image" alt="weatherImage" src={weaImage}></img>
            </div>
        </div>
    )
}

export default Picture;