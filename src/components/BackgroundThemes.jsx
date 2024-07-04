import React, {useEffect, useState} from 'react'
import ClearWeather from './Images/BackgroundImages/Clear.jpg'
import SunnyWeather from './Images/BackgroundImages/Sunny.jpg'
import SnowWeather from './Images/BackgroundImages/snow_jpg.jpg'
import RainyWeather from './Images/BackgroundImages/Rainy.jpg'
import FoggyWeather from './Images/BackgroundImages/Fog_jpg.jpg'
import StormWeather from './Images/BackgroundImages/storm_weather_jpg.jpg'
import CloudyWeather from './Images/BackgroundImages/cloudy_weather_jpg.jpg'



export const BackgroundThemes = ({weather}) => {
    const [image, setImage] = useState(ClearWeather)

    
    useEffect(() => {

        const imageString = weather.current?.condition?.text || ""
        
        if(imageString) {
            if(imageString.toLowerCase().includes("clear")) {
                setImage(ClearWeather)
            }
            else if(imageString.toLowerCase().includes("cloud") || imageString.toLowerCase().includes("cloud") ) {
                setImage(CloudyWeather)
            }
            else if(imageString.toLowerCase().includes("snow")) {
                setImage(SnowWeather)
            }
            else if(imageString.toLowerCase().includes("rain") || imageString.toLowerCase().includes('shower') || imageString.toLowerCase().includes('light rain')) {
                setImage(RainyWeather)
            }
            else if(imageString.toLowerCase().includes("fog") || imageString.toLowerCase().includes('mist')) {
                setImage(FoggyWeather)
            }
            else if(imageString.toLowerCase().includes("storm") || (imageString.toLowerCase().includes('thunder'))) {
                setImage(StormWeather)
            }
            else if(imageString.toLowerCase().includes("sunny")) {
                setImage(SunnyWeather)
            }
        }
    }, [weather])

  return (
    <div>
        <img src={image} alt='weather-image' className='weather-image'/>
    </div>
  )
}

export default BackgroundThemes
