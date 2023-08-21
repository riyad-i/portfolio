const key = import.meta.env.VITE_WEATHER_STACK_KEY
import { useEffect } from "react"


export default function Weather(){



    //https://api.openweathermap.org/data/3.0/onecall?lat=${40}&lon=${74}&appid=${key}

    console.log(key)

    const getWeather= async() =>{
        const res = await fetch(`http://api.weatherstack.com/current?access_key=${key}&query=New%20York`)
        const data = await res.json()
        console.log(data)
    }

    useEffect(()=> {getWeather()},[])

    return (
        <>
        <h1>Weather App</h1>
        
        </>
    )

}