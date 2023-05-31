"use client"
import City from "@/components/City"
import Details from "@/components/Details"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
  const [query, setQuery] = useState("jakarta")
  const [weatherData, setWeatherData] = useState(null)
  const api_key = "a39269277452be55934cf7adc44c6985"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api_key}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        setWeatherData(response.data)
      } catch (error) {
        console.error("Error fetching weather data:", error)
        // handle error condition, e.g. show an error message to the user
      }
    }

    fetchData()
    // console.log(weatherData)
  }, [url])

  // ...

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="container min-h-screen max-w-md flex justify-between flex-col">
        <div className="self-center my-5 ">
          <input
            type="search"
            placeholder="Enter the country name"
            className="border rounded-xl border-slate-400 p-3 bg-transparent w-full"
          />
        </div>
        <City data={weatherData} />
        <Details data={weatherData} />
      </div>
    </main>
  )
}
