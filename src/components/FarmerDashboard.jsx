import {useEffect, useState}from 'react'
import sunIcon from './Images/Icons/sunny_weather.png'
import cloudIcon from './Images/Icons/cloudy_weather_icon.png'
import fogIcon from './Images/Icons/foggy_weather.png'
import rainIcon from './Images/Icons/rainy_weather.png'
import snowIcon from './Images/Icons/snow_weather_icon.png'
import stormIcon from './Images/Icons/storm_weather.png'
import windIcon from './Images/Icons/wind_icon.png'
import '../index.css';


export const FarmerDashboard = ({weather, fetchWeatherData}) => {
  const [advice, setCropAdvice] = useState([]);
  const [soil, setSoilAdvice] = useState([]);
  const [pest, setPestAdvice] = useState([]);
  const [location, setLocation] = useState('');


  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    fetchWeatherData(newLocation);
  };

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


  let cropAdvice = [];
  const renderCropAdvice = () => {
    if(!weather) {
      <p>loading...</p>
    }

    const {current} = weather;

    if(current.temp_c < 10) {
      cropAdvice.push("Consider planting cold-tolerant crops like Spinach, Kale, Carrot, Cabbage, Broccoli, Peas or winter Wheat.")
    }
    else if(current.temp_c > 30) {
      cropAdvice.push("Plant heat-tolerant crops such as Tomatoes, Peppers, Cucumber, Melons, Mint, Lemons or Okra.")
    }
    else if(current.temp_c >= 20 || current.temp_c <= 30) {
      cropAdvice.push("Ideal weather for a wide range of crops. Check soil moisture regularly.")
    }
    return cropAdvice

  }


  let soilAdvice = [];
  const renderSoilAdvice = () => {
    if(!weather) {
      <p>loading...</p>
    }

    const {current} = weather;

    if(current.precip_mm > 10) {
      soilAdvice.push("Rainfall expected. Adjust irrigation to avoid waterlogging.")
    }
    else {
      soilAdvice.push("Dry conditions. Ensure adequate irrigation for crop growth")
    }
    return soilAdvice;
  }


  let pestAdvice = [];
  const renderPestAdvice = () => {
    if(!weather) {
      <p>loading...</p>
    }

    const {current} = weather;

    if(current.humidity > 80) {
      pestAdvice.push("High humidity can promote fungal diseases. Apply fungicide preventively.")
    }
    else {
      pestAdvice.push('Optimal humidity conditions for crop growth.');
    }
  
    return pestAdvice;
  }

  useEffect(() => {
    const cropAdviceInfo = renderCropAdvice();
    const soilAdviceInfo = renderSoilAdvice();
    const pestAdviceInfo = renderPestAdvice();
    setCropAdvice(cropAdviceInfo);
    setSoilAdvice(soilAdviceInfo);
    setPestAdvice(pestAdviceInfo);
  }, [weather]);

  return (
    <div className='weather-details'>
    <h1 className='user-preference-heading'>Farmer Dashboard</h1> 
    <div className='destination'>
        <input
          type="text"
          value={location}
          placeholder="Enter Location"
          onChange={(e) => handleLocationChange(e.target.value)}
        />
      <h2 className='current-weather'> Current Weather in {weather.location.name}</h2>
      {weather && (
        <div>
          <div className='weather-icon-container'>
            <img
              src={getWeatherIconForCondition(weather.current.condition.text)}
              alt='weather icon'
              className='weather-icon'
            />
            <p className='temperature'>{weather.current.temp_c}&deg;C</p>
          </div>
          <div>
            <p className='condition'>{weather.current.condition.text}</p>
            <div className='wind-humidity'>
            <p className='wind-speed'>Wind Speed <p className='span-wind'>{weather.current.wind_kph} km/h</p></p>
            <p className='humidity'>Humidity <p className='span-humidity'>{weather.current.humidity} gm/m&#179;</p></p>
            
            </div>
          <div className='wind-humidity'>
          <p className='wind-speed'>UV <p className='span-wind'>{weather.current.uv} </p></p>
          <p className='humidity'>Pressure <p className='span-humidity'>{weather.current.pressure_mb}</p></p>
          <p className='wind-speed'>Precipitation <p className='span-wind'>{weather.current.precip_mm} mm</p></p>
          </div>
          <div className='crop-advice-container'>
          <h2 className='advice'>Advice</h2>
          <h4 className='crop'>Crop Advice:</h4>
          <div className='advice'>
                  {advice.map((cropAdvice, index) => (
                    <p key={index}>{cropAdvice}</p>
                  ))}
                </div>
          <h4 className='crop'>Soil Advice:</h4>
          <div className='advice'>
            {soil.map((soilAdvice, index) => (
              <p key={index}>{soilAdvice}</p>
            ))}
          </div>
            <h4 className='crop'>Pest Advice:</h4>
            <div className='advice'>
                  {pest.map((pestAdvice, index) => (
                    <p key={index}>{pestAdvice}</p>
                  ))}
                </div>
          </div>
            
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default FarmerDashboard