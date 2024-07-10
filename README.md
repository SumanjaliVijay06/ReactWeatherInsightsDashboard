
# React Weather Dashboard Documentation

A web application to display the current weather and forecast for various cities around the world. This project uses the OpenWeatherMap API to fetch weather data and is built with React.

## Table of Contents

  1. Introduction
  2. User Groups
    - Event Planners
    - Farmers
    - Travelers
  3. Components
    - UserPreference Component
    - WeatherDataInfo Component
    - WeatherCondition Component
    - WeatherDashboard Component
    - FarmerDashboard Component
    - TravelerDashboard Component
    - EventPlannerDashboard Component
  4. Conclusion
  5. Reference

## Introduction
This document provides an overview of the Weather Dashboard application.

## User Groups

### Event Planners 
Event planners require accurate weather forecasts to plan their events.

### Farmers
Farmers need detailed weather data for their agricultural activities and advices for crop, soil and pesticides.

### Travelers 
Travelers look for weather forecasts to plan their destination place, trips and advices for what they need to carry.

## Components

### UserPreference Component
The UserPreference component allows users to customize their weather dashboard experience. Users can set preferences such as their default city, temperature units (Celsius or Fahrenheit), and other display options.

### WeatherDataInfo Component
The WeatherDataInfo component is responsible for displaying detailed weather information for a given city. This includes data such as temperature, humidity, wind speed, and other relevant weather metrics.

### WeatherCondition Component
The WeatherCondition Component is responsible for displaying the current weather condition for a given city.

### WeatherDashboard Component
The WeatherDashboard component is the main component that integrates the UserPreference, WeatherCondition, and WeatherDataInfo components to provide a comprehensive weather dashboard. It allows users to set their preferences, view the current weather condition, and get detailed weather information for their selected city.

### FarmerDashboard Component
The FarmerDashboard component is designed to provide farmers with essential weather information that can help them make informed decisions about their agricultural activities. This component integrates multiple sub-components to display current weather conditions, detailed weather data, and user preferences for weather information and advices.

### TravelerDashboard Component
The TravelerDashboard component is designed to provide travelers with essential weather information that can help them plan their trips. This component integrates multiple sub-components to display current weather conditions, detailed weather data, and user preferences for weather information and advices.

### EventPlannerDashboard Component
The EventPlannerDashboard component is designed to provide event planners with essential weather information that can help them plan outdoor events. This component integrates multiple sub-components to display current weather conditions, detailed weather data, and user preferences for weather information.


## Features

- Search for weather information by city name.
- Display current weather conditions including Temperature, Humidity, Wind speed, UV, Pressure and more.
- Show 3-days weather forecast.
- Tailor dashboard for different user groups: event planners, farmers, and travelers. And advices to them.
- User preferences like outdoor and indoor.

## Demo
checkout out the live demo of the project: [React Weather Dashboard](https://sumanjalivijay06.github.io/ReactWeatherInsightsDashboard/)

## API Reference

### API's Used
   [Open Weather API's](https://openweathermap.org/)

   [https://openweathermap.org/api/hourly-forecast](https://openweathermap.org/api/hourly-forecast)


### API's Info 
METHOD: GET

URL:
 https://pro.openweathermap.org/data/2.5/forecast/hourly?&appid={API_Key}&q=${City_Name}&days=Days

## Installation

### Dependencies
npm install

### Running the Application
npm start

### Building for Production
npm run build

### Deploying to GitHub Pages

#### 1. Update the "homepage" field package.json with the URL of your GitHub Pages site.
"homepage": "https://sumanjalivijay06.github.io/ReactWeatherInsightsDashboard/"

#### 2. Deploy the application:
npm run deploy

### Prerequisites

- Node.js and npm installed on your machine

### Libraries used
- axios
- react-scripts

## Technologies
  - React
  - JavaScript
  - HTML5
  - CSS3
  - Bootstrap

## Conclusion
The Weather Dashboard application is a comprehensive tool for accessing and displaying weather information in an intuitive and user-friendly interface. With components tailored for various user needs whether for travelers, event planners, farmers, or general users. The application leverages the power of the OpenWeatherMap API to deliver accurate and timely weather data.

## Reference

 - [Open Weather API](https://openweathermap.org/) for providing the weather API
 - [Create React App](https://create-react-app.dev) for the boilerplate code

### Clone the Repository

```bash
git clone https://github.com/SumanjaliVijay06/ReactWeatherInsightsDashboard

cd weather-app

