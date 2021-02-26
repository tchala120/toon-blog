import Router from 'next/router'
import React from 'react'
import Button from '../ui/Button'
import Template from './Template'

export default function About(): JSX.Element {
  const goToReadme = () => {
    Router.replace('https://github.com/tchala120/tchala120')
  }
  return (
    <div className="other">
      <Template
        title={
          <span>
            About <span className="font-extrabold text-black">Toon</span>
          </span>
        }
        content="My name is Panupong Tipjoi. I am currently pursuing my Bachelor of
        Computer Science at KMITL in Thailand. Passionate Frontend Developer &amp;
        Website Designer."
        icon={<span>👦🏻 </span>}
      />
      <Button
        bg="bg-yellow-400"
        hoverBg="bg-yellow-300"
        text="text-black"
        hoverText="text-gray-500"
        onClick={goToReadme}
        title="README"
        icon="📖"
      />
    </div>
  )
}
