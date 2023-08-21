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

        <br/>
        <br/>
        <br/>

        { weather.current && weather.current.weather_descriptions[0] == 'Partly cloudy' ? <img src="https://images.unsplash.com/photo-1597621864521-93dfdb10c6b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFydGx5JTIwY2xvdWR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" height={300}/> : null }
        { weather.current && weather.current.weather_descriptions[0] == 'Clear' ? <img src="https://images.unsplash.com/photo-1616249807402-9dae436108cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xlYXIlMjB3ZWF0aGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" height={300}/> : null }
        { weather.current && weather.current.weather_descriptions[0] == 'Sunny' ? <img src="https://images.unsplash.com/photo-1598965914211-6ec6872593a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHN1bnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" height={300}/> : null }
        </>
    )

}