"use client"
import Image from "next/image"
import React from "react"
import ICTemp from "@/assets/temperature.png"

export default function City({ data }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>{data.name}</p>
      <div className="flex py-3 flex-row">
        <Image src={ICTemp} width={50} alt="Temp" />
        <p className="text-5xl">32°C</p>
      </div>
      <p>Mostly Clouds</p>
      <div className="flex">
        <p>↓31 | ↑33</p>
      </div>
    </div>
  )
}
