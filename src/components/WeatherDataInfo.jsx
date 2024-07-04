import React, { useEffect, useState } from 'react'
import useDate from './DateTimeComponent'
import sunIcon from './Images/Icons/sunny_weather.png'
import cloudIcon from './Images/Icons/cloudy_weather_icon.png'
import fogIcon from './Images/Icons/foggy_weather.png'
import rainIcon from './Images/Icons/rainy_weather.png'
import snowIcon from './Images/Icons/snow_weather_icon.png'
import stormIcon from './Images/Icons/storm_weather.png'
import windIcon from './Images/Icons/wind_icon.png'
import '../index.css';

const WeatherDataInfo = ({weather}) => {

  const [icon, setIcon] = useState(sunIcon)
  const {time} = useDate({ timeZone: weather.location.tz_id });

  const iconString = weather.current?.condition?.text?? ""
  useEffect(() => {
    if(iconString) {
      if(iconString.toLowerCase().includes('cloud') || iconString.toLowerCase().includes("partly cloud")) {
        setIcon(cloudIcon)
      }
      else if(iconString.toLowerCase().includes('rain') || iconString.toLowerCase().includes('light rain') || iconString.toLowerCase().includes('showers')) {
        setIcon(rainIcon)
    }
    else if(iconString.toLowerCase().includes('clear')) {
      setIcon(sunIcon)
    }
    else if(iconString.toLowerCase().includes('thunder') || iconString.toLowerCase().includes('storm')) {
      setIcon(stormIcon)
    }
    else if(iconString.toLowerCase().includes('wind')) {
      setIcon(windIcon)
    }
    else if(iconString.toLowerCase().includes('fog') || iconString.toLowerCase().includes('mist')) {
      setIcon(fogIcon)
    }
    else if(iconString.toLowerCase().includes('snow') ) {
      setIcon(snowIcon)
      }
    }
  }, [iconString])

      return (
      <>
        <div className='weather-details'>
         <div className='weather-info'>
         <h2 className='location'>{weather.location.name}</h2>
         </div>
          <div className='weather-icon-container'>
            <img src={icon} alt="weather_icon" className='weather-icon' />
            <p className='temperature'>{weather.current.temp_c}&deg;C</p>
          </div>
          <div className='date-time'>
          <p className='date'>{new Date().toDateString()}</p>
          <p className='time'>{time}</p>
          </div>
          <div>
            <p className='condition'>{iconString}</p>
          </div>
          <hr/>
          <div className='wind-humidity'>
            <p className='wind-speed'>Wind Speed <p className='span-wind'>{weather.current.wind_kph} km/h</p></p>
            <p className='humidity'>Humidity <p className='span-humidity'>{weather.current.humidity} gm/m&#179;</p></p>
            
            </div>
          <div className='wind-humidity'>
          <p className='wind-speed'>UV <p className='span-wind'>{weather.current.uv} </p></p>
          <p className='humidity'>Pressure <p className='span-humidity'>{weather.current.pressure_mb}</p></p>
          </div>
            
          
            </div>
          </>
      )
    }
      
export default WeatherDataInfo

