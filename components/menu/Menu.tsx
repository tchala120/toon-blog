import React from 'react'

export default function Menu(): JSX.Element {
  return (
    <div className="container py-8 flex flex-row justify-between items-center">
      <h1 className="font-sans font-bold text-base sm:text-base">
        Panupong Tipjoi
      </h1>
      <a
        href="https://github.com/tchala120"
        className="font-sans text-black text-base sm:text-base underline"
      >
        Contact me
      </a>
    </div>
  )
}
