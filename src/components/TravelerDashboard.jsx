import {useEffect, useState} from 'react'
import sunIcon from './Images/Icons/sunny_weather.png'
import cloudIcon from './Images/Icons/cloudy_weather_icon.png'
import fogIcon from './Images/Icons/foggy_weather.png'
import rainIcon from './Images/Icons/rainy_weather.png'
import snowIcon from './Images/Icons/snow_weather_icon.png'
import stormIcon from './Images/Icons/storm_weather.png'
import windIcon from './Images/Icons/wind_icon.png'
import '../index.css';



const fetchPackagingSuggestion = (weatherCondition) => {
    
    if(weatherCondition.toLowerCase().includes('rain') || weatherCondition.toLowerCase().includes('light rain') || weatherCondition.toLowerCase().includes('showers') || weatherCondition.toLowerCase().includes('cloud') || weatherCondition.toLowerCase().includes("partly cloud") || weatherCondition.toLowerCase().includes('thunder') || weatherCondition.toLowerCase().includes('storm')) {
          return "Don't forget to pack Raincoat and Umbrella!";
        }
    else if(weatherCondition.toLowerCase().includes('sun') || weatherCondition.toLowerCase().includes('clear')) {        return "Pack Sunglasses, Sunscreen, and light Clothing";
      }
    else if(weatherCondition.toLowerCase().includes('wind')) {
        return "Pack Windbreaker and Scarf";
      }
    else if(weatherCondition.toLowerCase().includes('snow') || weatherCondition.toLowerCase().includes('fog') || weatherCondition.toLowerCase().includes('mist')) {
        return "Pack Warm Cloths, Gloves and Boots";
        }
}
export const TravelerDashboard = ({weather, fetchWeatherData}) => {
    const [destination, SetDestination] = useState('');
    const [packingSuggestions, setPackingSuggestions] = useState("");


    const getWeatherIconForCondition = (condition) => {

        const iconString = condition?.toLowerCase() || '';
        if(iconString.toLowerCase().includes('cloud') || iconString.toLowerCase().includes("partly cloud")) {
          return cloudIcon
        }
        else if(iconString.toLowerCase().includes('rain') || iconString.toLowerCase().includes('light rain') || iconString.toLowerCase().includes('showers')) {
          return rainIcon
      }
      else if(iconString.toLowerCase().includes('clear') || iconString.toLowerCase().includes('sunny')) {
        return sunIcon
      }
      else if(iconString.toLowerCase().includes('thunder') || iconString.toLowerCase().includes('storm')) {
        return stormIcon
      }
      else if(iconString.toLowerCase().includes('wind')) {
        return windIcon
      }
      else if(iconString.toLowerCase().includes('fog') || iconString.toLowerCase().includes('mist')) {
        return fogIcon
      }
      else if(iconString.toLowerCase().includes('snow') ) {
        return snowIcon
        }
      }
    

    useEffect(() => {
        if(weather && weather.current && weather.current.condition) {
            const suggestions = fetchPackagingSuggestion(weather.current.condition.text)
            setPackingSuggestions(suggestions)
        }
    }, [weather])


    const handleDestination = (newDestination) => {
        SetDestination(newDestination)
        fetchWeatherData(newDestination)
    }
  return (
    <div className='weather-details'>
        <h1 className='user-preference-heading'>Traveler's Dashboard</h1>
        <div className='destination-input'>
            <input 
                type='text'
                value={destination}
                placeholder='Enter Destination'
                onChange = {(e) => handleDestination(e.target.value)}
            />
        </div>
        {weather? (
            <div>
                <h2 className='destination'>
                    Current Weather in {weather.location.name}
                </h2>
                <div className='weather-icon-container'>
            <img
              src={getWeatherIconForCondition(weather.current.condition.text)}
              alt='weather icon'
              className='weather-icon'
            />
            <p className='temperature'>{weather.current.temp_c}&deg;C</p>
          </div>

                <div className='wind-humidity'>
            <p className='wind-speed'>Wind Speed <p className='span-wind'>{weather.current.wind_kph} km/h</p></p>
            <p className='humidity'>Humidity <p className='span-humidity'>{weather.current.humidity} gm/m&#179;</p></p>
            
            </div>
          <div className='wind-humidity'>
          <p className='wind-speed'>UV <p className='span-wind'>{weather.current.uv} </p></p>
          <p className='humidity'>Pressure <p className='span-humidity'>{weather.current.pressure_mb}</p></p>
          </div>
            </div>
        ) : (
            <p>Loading weather data...</p>
            )}

            {packingSuggestions && (
                <div className='packing-suggestions'>
                    <h2 className='suggestions-heading'>Packing Suggestions</h2>
                    <p className='packing-advise'>{packingSuggestions}</p>
                </div>
            )}
    </div>
  )
}

export default TravelerDashboard