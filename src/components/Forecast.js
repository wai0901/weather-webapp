import React from 'react';


const Forecast = (props) => {
    let forecastGroup = {
        top: "-90px",
        transition: "0.3s"
    }
    
    let three = {backgroundColor: "#63cdda"}
    let five = {backgroundColor: "#63cdda"}

    if (props.index) {
        three = {backgroundColor: "#34b3c4"}
        five = {backgroundColor: "#34b3c4"}
        forecastGroup = {
            top: "0px",
            transition: "0.3s"
        }
    }
    return (
        <div style={forecastGroup}>
            <ul className="day dayTwo">
                {props.index && <img src={`http://openweathermap.org/img/w/${props.dayTwo[0].icon}.png`} alt="icon"></img>}
                {props.index && <li className="dayItem"><span>{(props.dayTwo[0].temp)}</span></li>}
                {props.index && <li className="dayItem">{props.dayTwo[0].description}</li>}
                {props.index && <li className="dayItem forecastDay">{props.dayTwo[0].date}</li>}
            </ul>
            <ul className="day dayThree" style={three}>
                {props.index && <img src={`http://openweathermap.org/img/w/${props.dayThree[0].icon}.png`} alt="icon"></img>} 
                {props.index && <li className="dayItem"><span>{(props.dayThree[0].temp)}</span></li>}
                {props.index && <li className="dayItem">{props.dayThree[0].description}</li>}
                {props.index && <li className="dayItem forecastDay">{props.dayThree[0].date}</li>}
            </ul>
            <ul className="day dayFour">
            {props.index && <img src={`http://openweathermap.org/img/w/${props.dayFour[0].icon}.png`} alt="icon"></img>}
                {props.index && <li className="dayItem"><span>{(props.dayFour[0].temp)}</span></li>}
                {props.index && <li className="dayItem">{props.dayFour[0].description}</li>}
                {props.index && <li className="dayItem forecastDay">{props.dayFour[0].date}</li>}
            </ul>
            <ul className="day dayFive" style={five}>
            {props.index && <img src={`http://openweathermap.org/img/w/${props.dayFive[0].icon}.png`} alt="icon"></img>}
                {props.index && <li className="dayItem"><span>{(props.dayFive[0].temp)}</span></li>}
                {props.index && <li className="dayItem">{props.dayFive[0].description}</li>}
                {props.index && <li className="dayItem forecastDay">{props.dayFive[0].date}</li>}
            </ul>
            <ul className="day daySix">
                {props.index && <img src={`http://openweathermap.org/img/w/${props.daySix[0].icon}.png`} alt="icon"></img>}
                {props.index && <li className="dayItem"><span>{(props.daySix[0].temp)}</span></li>}
                {props.index && <li className="dayItem">{props.daySix[0].description}</li>}
                {props.index && <li className="dayItem forecastDay">{props.daySix[0].date}</li>}
            </ul>
        </div>
    )
};

export default Forecast

