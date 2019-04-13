import React, { Component } from 'react';
import Weather from './components/Weather';
import Title from './components/Title';
import Form from './components/Form';
import Forecast from './components/Forecast';
import Picture from './components/Picture';
import './App.css';
// import { CSSTransition } from "react-transition-group";
// import { TransitionGroup } from "react-transition-group";

const API_KEY = "6b40929ddf93880ffa2f9baa1685666c";
const screenWidth = window.innerWidth;

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    weatherCode: undefined,
    description: undefined,
    weatherIcon: undefined,
    index: undefined,
    error: undefined,
    dayTwo: [{
      date: "",
      description: "",
      temp: ""
    }],
    dayThree: [{
      date: "",
      description: "",
      temp: ""
    }],
    dayFour: [{
      date: "",
      description: "",
      temp: ""
    }],
    dayFive: [{
      date: "",
      description: "",
      temp: ""
    }],
    daySix: [{
      date: "",
      description: "",
      temp: ""
    }]
  }

  getDays = () => {
    const now = new Date();
    const date = (now.getMonth() + 1) + "-" + now.getDate() + "-" + now.getFullYear();
    return date;
  };

  getCurrTime = () => {
    const now = new Date();
    let hours = Number(now.getHours());
    let minutes = Number(now.getMinutes());
    let day = "";
    if (hours >= 13){
      day = "PM";
      hours -= 12;
    } else {
      day = "AM";
    }
    return `${hours}:${minutes} ${day}`;
  }

  getWeather = async (event) => {
    event.preventDefault();
    const cityZip = (event.target.elements.cityZip.value);
    const cityName = (event.target.elements.cityName.value).split(' ').join('+');
    const country = event.target.elements.country.value;
    const api_callZip = await fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?zip=${cityZip},${country}&APPID=${API_KEY}&units=imperial`);
    const dataZip = await api_callZip.json();
    const api_callName = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${cityName},${country}&APPID=${API_KEY}&units=imperial`);
    const dataName = await api_callName.json();

    let data = "";
    if (cityZip) {
      data = dataZip
    } else {
      data = dataName
    }
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      weatherCode: data.weather[0].icon,
      description: data.weather[0].description,
      weatherIcon: data.weather[0].icon,
      index: data.id,
      error: "",
    })
    
    const api_callForecast = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},${this.state.country}&cnt=60&APPID=${API_KEY}&units=imperial`);
    const dataForecast = await api_callForecast.json();

    this.setState({
      dayTwo: [{
        date: dataForecast.list[2].dt_txt.slice(0, 10),
        description: dataForecast.list[2].weather[0].description,
        temp: dataForecast.list[2].main.temp,
        icon: dataForecast.list[2].weather[0].icon
      }],
      dayThree: [{
        date: dataForecast.list[10].dt_txt.slice(0, 10),
        description: dataForecast.list[10].weather[0].description,
        temp: dataForecast.list[10].main.temp,
        icon: dataForecast.list[10].weather[0].icon
      }],
      dayFour: [{
        date: dataForecast.list[18].dt_txt.slice(0, 10),
        description: dataForecast.list[18].weather[0].description,
        temp: dataForecast.list[18].main.temp,
        icon: dataForecast.list[18].weather[0].icon
      }],
      dayFive: [{
        date: dataForecast.list[26].dt_txt.slice(0, 10),
        description: dataForecast.list[26].weather[0].description,
        temp: dataForecast.list[26].main.temp,
        icon: dataForecast.list[26].weather[0].icon
      }],
      daySix: [{
        date: dataForecast.list[34].dt_txt.slice(0, 10),
        description: dataForecast.list[34].weather[0].description,
        temp: dataForecast.list[34].main.temp,
        icon: dataForecast.list[34].weather[0].icon
      }]
    })
  };
  
  render() {

    let forecastSection = {
      top: "inherits"
    }
    if (screenWidth <= 600 && this.state.index){
      forecastSection ={
        display: "block",
      }
    }

    let timeBarPos = {
      paddingTop: "70px",
      transition: "0.3s"
    }
    if (this.state.index) {
      timeBarPos = {
        paddingTop: "0px",
        transition: "0.3s"
      }
    }
    return (
      <div className="App">
        <div className="container" >
          <div className="formSection">
              <Form getWeather={this.getWeather}/>
          </div>
          <div className="centerSection">
            <div className="leftSection">
              <Picture 
              temperature={this.state.temperature}
              weatherCode={this.state.weatherCode}/>
            </div>
            <div className="rightSection">
              <div className="timeBar" style={timeBarPos}>
                <p className="local">Your local time</p>
                <p className="currentTime">{this.getCurrTime()}</p>
                <p className="currentDate">{this.getDays()}</p>
              </div>
              <div className="weatherInfo">
                <Title 
                city={this.state.city}
                country={this.state.country}/>
                <Weather 
                temperature={this.state.temperature}
                description={this.state.description}
                humidity={this.state.humidity}
                error={this.state.error}/>
              </div>
            </div>
          </div>
          <div className="forecastSection" style={forecastSection}>
            <Forecast 
            index={this.state.index} 
            dayTwo={this.state.dayTwo} 
            dayThree={this.state.dayThree}
            dayFour={this.state.dayFour}
            dayFive={this.state.dayFive}
            daySix={this.state.daySix} />
          </div>
        </div> 
      </div>
    );
  }
}


export default App;



