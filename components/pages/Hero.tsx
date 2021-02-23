import React from 'react'
import Router from 'next/router'
import Button from '../ui/Button'
import Template from './Template'

export default function Hero(): JSX.Element {
  const goToBlogPage = () => {
    Router.push('/blog')
  }
  return (
    <div className="hero">
      <Template
        title={<span>Hi! I&apos;m Toon</span>}
        content="My portfolio is a representation of all that I have done in my free
        time. My career goal is to become a website developer as my passion lies
        in coding."
        icon={<span className="waving-animate">👋 </span>}
      />
      <Button
        bg="bg-yellow-400"
        hoverBg="bg-yellow-300"
        text="text-black"
        hoverText="text-gray-500"
        onClick={goToBlogPage}
        title="Blog"
        icon="📖"
      />
    </div>
  )
}
