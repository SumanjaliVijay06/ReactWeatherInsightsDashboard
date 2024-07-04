import { useEffect, useState } from 'react'
import sunIcon from './Images/Icons/sunny_weather.png'
import cloudIcon from './Images/Icons/cloudy_weather_icon.png'
import fogIcon from './Images/Icons/foggy_weather.png'
import rainIcon from './Images/Icons/rainy_weather.png'
import snowIcon from './Images/Icons/snow_weather_icon.png'
import stormIcon from './Images/Icons/storm_weather.png'
import windIcon from './Images/Icons/wind_icon.png'
import '../index.css';

export const ForecastCard = ({weather}) => {

    const [icon, setIcon] = useState(sunIcon)

  
    const iconString = weather.current?.condition?.text?? ""

    useEffect(() => {
        if (iconString) {
          setIcon(getWeatherIcon(iconString));
        }
      }, [iconString]);

    const getWeatherIcon = (conditionText) => {
        if (conditionText.toLowerCase().includes('cloud') || conditionText.toLowerCase().includes('partly cloud')) {
          return cloudIcon;
        } else if (conditionText.toLowerCase().includes('rain') || conditionText.toLowerCase().includes('light rain') || conditionText.toLowerCase().includes('showers')) {
          return rainIcon;
        } else if (conditionText.toLowerCase().includes('clear')) {
          return sunIcon;
        } else if (conditionText.toLowerCase().includes('thunder') || conditionText.toLowerCase().includes('storm')) {
          return stormIcon;
        } else if (conditionText.toLowerCase().includes('wind')) {
          return windIcon;
        } else if (conditionText.toLowerCase().includes('fog') || conditionText.toLowerCase().includes('mist')) {
          return fogIcon;
        } else if (conditionText.toLowerCase().includes('snow')) {
          return snowIcon;
        } else {
          return sunIcon; 
        }
      };
    
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
      const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        });
      };

return (
    <div className='forecast-container'>
        <h3 className='forecast-heading'>Forecast</h3>
        <div className='forecast-card'>
          {weather.forecast.forecastday.slice(0, 6).map(day => (
            <div key={day.date} className='forecast-item'>
              <p>{daysOfWeek[new Date(day.date).getDay()]}</p>
              <p>{formatDate(new Date(day.date))}</p>
              <img src={getWeatherIcon(day.day.condition.text)} alt='weather-icon' className='forecast-icon'/>
              <p>{day.day.avgtemp_c}°C</p>
              <p>{day.day.condition.text}</p>
            </div>
          ))}
        </div>
      </div>

        )
}
  
  
export default ForecastCard