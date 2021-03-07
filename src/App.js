import React from "react";
import "./App.css";
import Footer from "./Footer";


export default function App() {
  return (
    <div>
    <div className="container"></div>
      <form id="search-form">
        <input type="text" placeholder="City Search" id="search"/>
        <input type="Submit" id="submit-form" value="Search"/>
        <button type="button" id="current-location"> Current Location </button>
        <img src = "https://openweathermap.org/img/wn/10d@2x.png"
                alt="icon">
                </img>
  <h1>
  <div className="row"></div>
  <div id="date" className="col-4"></div>
  <div className="col-4"></div>
  <div>Wind: <span id="wind"></span>km/h</div>
  <div className="row"></div>
  <div className="col-4"></div>
  <p className="currently">
  <div className="row"></div>
  <div className="col-sm" id="c-f"></div>
  <span className="temperature" id="temperature"></span>
  <span className="units">
    <a href="/" id = "celsius-link" className="active"> °C </a> | <a href="/" id = "fahrenheit-link">°F </a></span> 
  <div className="col-sm" id="conditions"></div>
  <div className="col-sm"></div>
  <div>Humidity: <span id="humidity"></span>%</div><br />
  </p>
  <div className="row weather-forecast" id="forecast"></div>
<div className="row row-cols-1 row-cols-md-5"></div>  
  </h1> 
<Footer />

</form>
  </div>         
    
  );
}
