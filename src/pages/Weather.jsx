const key = import.meta.env.VITE_WEATHER_KEY

export default function Weather(){





    console.log(key)

    const getWeather= async() =>{
        const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${40.71}&lon=${74}&appid=${key}`)
        const data = await res.json()
        console.log(data)
    }

    getWeather()

    return (
        <>
        <h1>Weather App</h1>
        
        </>
    )

}