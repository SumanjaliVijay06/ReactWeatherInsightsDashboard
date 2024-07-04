import {useEffect, useState} from 'react';
import WeatherDataInfo from './WeatherDataInfo';
import UserPreference from './UserPreference';
import WeatherConditionsInfo from './WeatherConditionsInfo';
import BackgroundThemes  from './BackgroundThemes';
import ForecastCard from './ForecastCard';
import Axios from 'axios';
import TravelerDashboard from './TravelerDashboard';
import FarmerDashboard from './FarmerDashboard';
import EventPlannerDashboard  from './EventPlannerDashboard';



const WeatherDashboard = () => {
  const [weather, setWeather] = useState('')
  const [location, setLocation] = useState('Hyderabad')
  const [userPreference, setUserPreference] = useState({activity: 'outdoor'})
  const [userGroup, setUserGroup] = useState('traveler')
  
  const fetchWeatherData = async(location) => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=026bf6d8fb2e4f6c8cc215251242106&q=${location}&days=6`
    try {
      const response = await Axios.get(url)
      console.log(response.data)
      setWeather(response.data);
      
  
    }
    catch(error){
      console.error('Error fetching weather data:', error)
    }

  }

  useEffect(() => {
    fetchWeatherData(location);
  }, [location]);



  const handleLocationChange = (newLocation) => {
    setLocation(newLocation)
  }

  const handlePreferenceChange = (newPreference) => {
    setUserPreference(newPreference)
  }

  const handleUserGroupChange = (newUserGroup) => {
    setUserGroup(newUserGroup)
  }

  
  return (
    <div className='weather-dashboard'>
      <h1 className='app-heading'>Weather Dashboard </h1>
      <UserPreference 
      onLocationChange={handleLocationChange} 
      onPreferenceChange={handlePreferenceChange}
      onUserGroupChange={handleUserGroupChange}
      />
      <>
      {location && weather? (
       <div>
       <BackgroundThemes weather={weather}/>
       <div className='data-container'>
       <WeatherDataInfo weather={weather} location={location}/>
       </div>
       
       <ForecastCard weather={weather}/>
       
       <div>
       
      
      <WeatherConditionsInfo weather={weather} userPreference={userPreference}/>
      
       {userGroup === 'traveler' && <TravelerDashboard weather={weather} fetchWeatherData={fetchWeatherData}/>}
       {userGroup === 'farmer' && <FarmerDashboard weather={weather} fetchWeatherData={fetchWeatherData}/>}
       {userGroup === 'event-planner' && <EventPlannerDashboard weather={weather} fetchWeatherData={fetchWeatherData}/>}
    
       </div>
       
       
        </div>
      ) : (
        <p className='loading'> Loading... </p>
      )
    
      }
      
      </>
    </div>
  )
}

export default WeatherDashboard



