import React from 'react'

const WeatherConditionsInfo = ({weather, userPreference}) => {
  
  const getActivitySuggestions = () => {
    const currentCondition = weather.current.condition.text.toLowerCase();

    if(userPreference.activity === 'outdoor' && !currentCondition.includes('rain')) {
        return "It's a great day for outdoor activities"
    }
    else if (userPreference.activity === 'indoor') {
        return "Perfect weather for indoor activities"
    }
    else {
       return "Stay safe and check weather updates regularly"
    }
  }
   
    return (
    <div className='weather-insights'>
        <h1 className='insights-heading'> Personalized Insights </h1>
        <p className='content'> {getActivitySuggestions()} </p>
    </div>
  )
}

export default WeatherConditionsInfo
