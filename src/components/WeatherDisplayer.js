import React, {useEffect, useState} from 'react'
import axios from 'axios'

const WeatherDisplay = ({country}) => {
    const [ weather, setWeather ] = useState('')
    const API_KEY = '0c11849a4f039af26f463fb99071f946'
    const fetchWeather = () => {
        axios
        .get('http://api.weatherstack.com/current', {
            params: {
                access_key: API_KEY,
                query: country.capital
            }
        })
        .then(response => {
            setWeather(response.data.current)
            console.log(response);
        })
    }
    useEffect(fetchWeather, [])

    return (
        <div>
            <h4>Weather in {country.capital}</h4>
            <p>Current temperature is {weather.temperature} degrees Celsius, and current weather is {weather.weather_descriptions}</p>
            <img src={weather.weather_icons} alt='weather icon' width='50px'/>

        </div>

    )
}

export default WeatherDisplay