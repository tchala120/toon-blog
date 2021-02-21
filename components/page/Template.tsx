import React, { ReactNode } from 'react'

interface TemplateProp {
  title: ReactNode
  icon: ReactNode
  content: string
}

export default function Template({
  title,
  icon,
  content,
}: TemplateProp): JSX.Element {
  return (
    <>
      <h1 className="text-yellow-400 font-extrabold text-4xl sm:text-5xl pb-8">
        {icon}
        {title}
      </h1>
      <h1 className="text-center text-sm sm:text-base">{content}</h1>
    </>
  )
}
