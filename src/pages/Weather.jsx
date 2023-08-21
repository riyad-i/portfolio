const key = import.meta.env.VITE_WEATHER_STACK_KEY
import { useEffect, useState } from "react"


export default function Weather(){

    const [weather , setWeather] = useState({})

    //https://api.openweathermap.org/data/3.0/onecall?lat=${40}&lon=${74}&appid=${key}


    const conversion = (celsius) => {
        return (celsius * 9/5) + 32
    }

    const getWeather= async() =>{
        const res = await fetch(`http://api.weatherstack.com/current?access_key=${key}&query=New%20York`)
        const data = await res.json()
        console.log(data);
        setWeather(data)
    }

    useEffect(()=> {getWeather()},[])

    return (
        <>
        <h1>Weather App</h1>
        {weather.current ? <h3> Currently {weather.current.weather_descriptions[0]} and {conversion(weather.current.temperature)} Degrees Fahrenheit in New York</h3> : <h3>Loading Weather</h3>}

        
        <br/>
        {weather.current ? <img src={weather.current.weather_icons[0]}/>: null }
        </>
    )

}