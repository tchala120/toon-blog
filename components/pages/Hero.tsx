import React from 'react'
import Template from './Template'

export default function Hero(): JSX.Element {
  return (
    <div className="hero">
      <Template
        title={<span>Hi! I&apos;m Toon</span>}
        content="My portfolio is a representation of all that I have done in my free
        time. My career goal is to become a website developer as my passion lies
        in coding."
        icon={<span className="waving-animate">👋 </span>}
      />
    </div>
  )
}
