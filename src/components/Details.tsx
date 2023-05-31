"use client"
import Image from "next/image"
import ICHumidity from "@/assets/drop.png"
import ICWinds from "@/assets/wind.png"
import ICClouds from "@/assets/clouds.png"

export default function Details({ data }) {
  return (
    <div className="foot grid grid-cols-3 p-5 justify-items-center border border-none m-5 rounded-lg shadow-purple-500 shadow-lg">
      <div className="text-center">
        <p className=" flex items-center gap-2">
          <Image src={ICHumidity} alt="Humidity" className="text-white" width={25} />
          <p>Humidity</p>
        </p>
        <p className="text-4xl">0</p>
      </div>
      <div className="text-center">
        <p className=" flex items-center gap-2">
          <Image src={ICWinds} alt="Winds" className="text-white" width={25} />
          <p>Winds</p>
        </p>
        <p className="text-4xl">0</p>
      </div>
      <div className="text-center">
        <p className=" flex items-center gap-2">
          <Image src={ICClouds} alt="Clouds" className="text-white" width={25} />
          <p>Clouds</p>
        </p>
        <p className="text-4xl">0</p>
      </div>
    </div>
  )
}
