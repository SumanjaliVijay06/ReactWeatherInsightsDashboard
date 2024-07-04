import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

import sunIcon from './Images/Icons/sunny_weather.png'
import cloudIcon from './Images/Icons/cloudy_weather_icon.png'
import fogIcon from './Images/Icons/foggy_weather.png'
import rainIcon from './Images/Icons/rainy_weather.png'
import snowIcon from './Images/Icons/snow_weather_icon.png'
import stormIcon from './Images/Icons/storm_weather.png'
import windIcon from './Images/Icons/wind_icon.png'
import '../index.css';


const getEventPlanCalenderAPI = () => {
  return [
    {id:1, title:"Birthday Party", date:"2024-07-10"},
    {id:2, title:"Reception Party", date:"2024-07-11"},
    {id:3, title:"Marraige", date:"2024-07-12"},
    {id:4, title:"Conference", date:"2024-07-13"},
    {id:5, title:"House Warming", date:"2024-07-14"},
    ]
}

const fetchEventSuggestions = (weatherCondition) => {
  if (
    weatherCondition.toLowerCase().includes('rain') ||
    weatherCondition.toLowerCase().includes('showers') ||
    weatherCondition.toLowerCase().includes('thunder') ||
    weatherCondition.toLowerCase().includes('storm')
  ) {
    return 'Consider an indoor venue or provide shelter options for guests.';
  } else if (weatherCondition.toLowerCase().includes('sun') || weatherCondition.toLowerCase().includes('clear')) {
    return 'Great weather for an outdoor event. Make sure to provide shade and hydration.';
  } else if (weatherCondition.toLowerCase().includes('wind')) {
    return 'Windy conditions expected. Secure decorations and consider windbreaks.';
  } else if (weatherCondition.toLowerCase().includes('snow') || weatherCondition.toLowerCase().includes('fog') || weatherCondition.toLowerCase().includes('mist')) {
    return 'Plan for cold weather. Ensure guests are aware to dress warmly.';
  }
};

export const EventPlannerDashboard = ({weather, fetchWeatherData}) => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [eventSuggestions, setEventSuggestions] = useState('');
  const [location, setLocation] = useState('')

useEffect(() => {
  const events = getEventPlanCalenderAPI()
  setEvents(events)
}, [])  

useEffect(() => {
  if (weather && weather.current && weather.current.condition) {
    const suggestions = fetchEventSuggestions(weather.current.condition.text);
    setEventSuggestions(suggestions);
  }
}, [weather]);

const handleDate = (date) => {
  setSelectedDate(date);
}

const handleLocationChange = (newLocation) => {
  setLocation(newLocation);
  fetchWeatherData(newLocation);
};


const getWeatherForDate = (date) => {
  if (!weather || !weather.forecast || !weather.forecast.forecastday) {
    return null;
  }
  const formattedDate = date.toISOString().split("T")[0];
  return weather.forecast.forecastday.find(day => day.date === formattedDate)
}


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
  return null; 
}

  return (
    <div className='weather-details'>
    <h1 className='user-preference-heading'>Event Planner</h1>
    <div className="location-date-input">
        <input
          type="text"
          value={location}
          placeholder="Enter Location"
          onChange={(e) => handleLocationChange(e.target.value)}
        />
      <DatePicker
        selected = {selectedDate}
        onChange = {(date) => handleDate(date)}
        dateFormat = 'dd-mm-yyyy'
        placeholderText = 'Select a Date'
      />
    </div>
    {selectedDate && 
      <div className='forecast-container'>
        <h3> Weather for {selectedDate.toDateString()}</h3>
        {weather && getWeatherForDate(selectedDate)? (
          <div>
            <img
              src={getWeatherIconForCondition(getWeatherForDate(selectedDate)?.day?.condition?.text)}
              alt='weather-icon'
              className='weather-icon'
             />
             <p>{getWeatherForDate(selectedDate).day.avgtemp_c}&deg;C</p>
             <p>{getWeatherForDate(selectedDate).day.condition.text}</p>
             {eventSuggestions && (
                <div className="event-suggestions">
                  <h2>Event Suggestions</h2>
                  <p className='suggestions'>{eventSuggestions}</p>
                </div>
              )}
          </div>
        ) : (
          <p> No Weather Data is Available for this Date </p>
        )}
      </div>
    }
    <div className='event-summary'>
      <h2>Upcoming Events</h2>
        <ul className="forecast-container">
          {events.map(event => (
            <li className='events' key = {event.id}>
              <strong>{event.title}</strong> on {new Date(event.date).toDateString()}
              {weather && getWeatherForDate(new Date(event.date))? (
                <div>
                <img
              src={getWeatherIconForCondition(getWeatherForDate(new Date(event.date))?.day?.condition?.text)}
              alt='weather-icon'
              className='weather-icon'
             />
             <p>{getWeatherForDate(new Date(event.date)).day.avgtemp_c}&deg;C</p>
             <p>{getWeatherForDate(new Date(event.date)).day.condition.text}</p>
                </div>
              ) : (
                <p>No Weather Data Available</p>
              )}
            </li>
          ))}
        </ul>

    </div>
    </div>
  )
}

export default EventPlannerDashboard