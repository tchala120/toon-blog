import React from 'react'
import Link from 'next/link'

export enum Status {
  ONLINE = 'ONLINE',
  OFFINE = 'OFFINE',
  NOT_FINISH = 'NOT_FINISH',
}

interface ListProp {
  id: number
  img: string
  name: string
  status: Status
  url: string
}

export default function List({
  img,
  name,
  status,
  url,
}: ListProp): JSX.Element {
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
            Still in Development
          </div>
        )
      case Status.ONLINE:
        return (
          <div className="bg-gray-300 rounded-full px-4 py-2 my-4 text-gray-700 font-bold text-xs text-center">
            Still in Development
          </div>
        )
    }
  }

  return (
    <Link href={url}>
      <div className="bg-gray-100 shadow-2xl transform scale-100 hover:scale-105 p-8 rounded-xl flex flex-col justify-center items-center cursor-pointer transition-all duration-300">
        <img src={img} alt={name} className="w-4/6" />
        <h1 className="font-extrabold text-xl text-yellow-400 text-center">
          {name}
        </h1>
        {renderStatusTag(status)}
      </div>
    </Link>
  )
}
