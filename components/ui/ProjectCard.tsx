import React from 'react'
import Link from 'next/link'

export enum Status {
  ONLINE,
  OFFINE,
  NOT_FINISH,
}

interface ListProp {
  id: number
  img: string
  name: string
  description: string
  status: Status
  url: string
}

export default function ProjectCard({ img, name, status, url, description }: ListProp): JSX.Element {
  const renderStatusTag = (status: Status): JSX.Element => {
    switch (status) {
      case Status.NOT_FINISH:
        return (
          <div className="bg-gray-300 rounded-full px-4 py-2 my-4 text-gray-700 font-bold text-xs text-center">
            Still in Development
          </div>
        )
      case Status.OFFINE:
        return (
          <div className="bg-gray-300 rounded-full px-4 py-2 my-4 text-gray-700 font-bold text-xs text-center">
            Office
          </div>
        )
      case Status.ONLINE:
        return (
          <div className="bg-green-600 rounded-full px-4 py-2 my-4 text-white font-bold text-xs text-center">
            Finished
          </div>
        )
    }
  }

  return (
    <Link href={url}>
      <div className="bg-gray-100 shadow-2xl transform scale-100 hover:scale-105 p-8 rounded-xl flex flex-col justify-center items-center cursor-pointer transition-all duration-300">
        <img src={img} alt={name} className="w-auto max-h-36" />
        <div className="mt-4">
          <h1 className="font-extrabold text-xl text-yellow-400 text-center">{name}</h1>
          <small className="text-gray-400 text-xs font-medium">{description}</small>
          {renderStatusTag(status)}
        </div>
      </div>
    </Link>
  )
}
