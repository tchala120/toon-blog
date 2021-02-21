import React from 'react'
import Template from './Template'

export default function About(): JSX.Element {
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
    </div>
  )
}
