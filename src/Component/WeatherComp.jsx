import { useEffect, useState } from "react";
import Styles from "../styles/weather.module.css";

function WeatherComp() {
    const [CityName, setCityName] = useState("");
    const [WeatherData, setWeatherData] = useState("");

    async function getWeatherData() {

        const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY)     
   // let API_KEY = `7d643132e074d99e0c83bcdfd24b30ad`


    
        let respones = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${API_KEY}`);
        let result = await respones.json();
        if (result.cod !== "400") {
            setWeatherData(result)
        }
        console.log(result);
    };
    function ConvertToCelsius(temp) {
        let newTemp = temp - 273.15;
        return Math.floor(newTemp);
    }

    function lengthConverter(valNum) {
        let value = valNum * 0.0003048;
        return value.toFixed(2);
      }
       useEffect(()=>{getWeatherData();},[CityName])
    return <div className={Styles.weather_card}>



        {/* <input type="text" placeholder="Enter Your City" value={CityName} onChange={(e) => setCityName(e.target.value)} />
        {WeatherData && (
            <div>
                <h3>CityName: {WeatherData?.name}</h3>
                <h3>Country: {WeatherData?.sys?.country}</h3>
                <h3>Temperature:{ConvertToCelsius(WeatherData?.main?.temp)}°C</h3>
                <h3>Weather: {WeatherData.weather && WeatherData?.weather[0]?.description}</h3>
                {WeatherData.weather &&
                (<img className="weatherimg" alt="image1" src={ `${WeatherData?.weather[0].icon}.svg`} />)}
            </div>)} */}

        <input type="text" placeholder="Enter Your City Name" value={CityName} onChange={(e) => setCityName(e.target.value)} className={Styles.input_felid} />

        {WeatherData && (
            <div>
                <div className={Styles.weather_update}>
                    <div>
                        <h2>{WeatherData?.name}</h2>
                    <p className={Styles.status}>{WeatherData.weather && WeatherData?.weather[0]?.description}</p>
                    {WeatherData.weather &&
                    (<img className={Styles.weather_icons} alt="image1" src={ `${WeatherData?.weather[0].icon}.svg`} />)} 

                    </div>
                    <h2 className={Styles.temp}>{ConvertToCelsius(WeatherData?.main?.temp)}°</h2>
                </div>
                <div className={Styles.weather_details}>
                    <div className={Styles.weather_01}>
                        <p>HUMIDITY</p>
                        <h3>{WeatherData?.main?.humidity}%</h3>
                    </div>
                    <div className={Styles.weather_01}>
                        <p>WIDE</p>
                        <h3>{WeatherData?.wind?.speed}km/h</h3>
                    </div>
                    <div className={Styles.weather_01}>
                        <p>VISIBILITY</p>
                        <h3>{lengthConverter(WeatherData?.visibility)}km</h3>
                    </div>
                    <div className={Styles.weather_01}>
                        <p>Country</p>
                        <h3>{WeatherData.sys?.country}</h3>
                    </div>

<div className={Styles.Thank}>   <h5>🌹 Thankyou for visit my site🌹</h5>
                    <h5>❤️ Have a Nice day❤️</h5>    </div>
                    
                </div>


            </div>
        )}

    </div>

}

export default WeatherComp;