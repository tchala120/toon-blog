import Link from 'next/link'
import React from 'react'

export default function Menu(): JSX.Element {
  return (
    <div className="container py-8 flex flex-row justify-between items-center">
      <Link href="/">
        <h1 className="cursor-pointer font-sans font-bold text-base sm:text-base">Panupong Tipjoi</h1>
      </Link>
      <a href="https://github.com/tchala120" className="font-sans text-black text-base sm:text-base underline">
        Contact me
      </a>
    </div>
  )
}
