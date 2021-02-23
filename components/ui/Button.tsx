import React from 'react'

interface ButtonProp {
  title: string
  icon?: string
  bg: string
  hoverBg: string
  text?: string
  hoverText?: string
  onClick: () => void
}

export default function Button({ title, icon, bg, hoverBg, text, hoverText, onClick }: ButtonProp): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-8 ${bg} hover:${hoverBg} ${text} hover:${hoverText} outline-none focus:outline-none transition-all duration-300 ease-in-out rounded-xl my-8 font-bold text-xl`}
    >
      {icon && <span className="mr-2">{icon}</span>} {title}
    </button>
  )
}
