"use client"
import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"

interface WeatherData {
  name: string
  weather: {
    main: string
    description: string
  }[]
  main: {
    temp: number
    feels_like: number
    humidity: number
  }
  wind: {
    speed: number
  }
  clouds: {
    all: number
  }
  dt: number
}

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [city, setCity] = useState("subang")
  const [isLoading, setIsLoading] = useState(true)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a39269277452be55934cf7adc44c6985`

  const timestampToDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000)
    return date.toLocaleString("en-GB")
  }

  const fetchData = () => {
    setIsLoading(true)
    axios
      .get(url)
      .then((res) => {
        setWeatherData(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
    setCity("")
  }, [])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  }

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      fetchData()
      setCity("")
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            <input
              placeholder="Enter the city"
              value={city}
              onChange={(e) => handleChange(e)}
              onKeyPress={handleKeyPress}
            />
          </div>
          {weatherData && (
            <>
              <div>
                <h1>{weatherData.name}</h1>
                <p>{weatherData.main.temp}°C</p>
                <p>
                  {weatherData.weather[0].main} ({weatherData.weather[0].description})
                </p>
              </div>
              <div>
                <div>
                  <p>Feels Like</p>
                  <p>{weatherData.main.feels_like}°C</p>
                </div>
                <div>
                  <p>Humidity</p>
                  <p>{weatherData.main.humidity}%</p>
                </div>
                <div>
                  <p>Winds</p>
                  <p>{weatherData.wind.speed} m/s</p>
                </div>
                <div>
                  <p>Clouds</p>
                  <p>{weatherData.clouds.all}%</p>
                </div>
              </div>
              <div>
                <p>Last update: {timestampToDate(weatherData.dt)}</p>
              </div>
            </>
          )}
        </>
      )}
    </main>
  )
}
