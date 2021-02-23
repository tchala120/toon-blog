import React from 'react'
import { BlogInfo } from '@/libs/blog'

export default function BlogFooter({ author }: BlogInfo): JSX.Element {
  return (
    <div className="py-10 border-t-2 border-gray-500 text-right">
      <p className="text-sm text-gray-400">เขียนโดย</p>
      <h1 className="text-xl font-bold">{author.name}</h1>
      <p className="text-sm text-gray-400">Intern Full Stack Developer at Krungsri Consumer</p>
    </div>
  )
}
