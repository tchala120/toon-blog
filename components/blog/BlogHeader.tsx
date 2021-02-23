import { BlogInfo } from '@/libs/blog'
import Link from 'next/link'
import React from 'react'
import { formatDate } from 'utils/formatter'

export default function BlogHeader({ title, excerpt, coverImage, timestamp, author }: BlogInfo): JSX.Element {
  return (
    <div>
      <div className="container py-10">
        <h1 className="font-bold text-3xl mb-4">{title}</h1>
        <div className="flex items-center">
          <p className="text-sm text-gray-400">{formatDate(timestamp)}</p>
          <div className="flex items-center">
            <div className="author-image-block">
              <img src={author.picture} alt={author.name} />
            </div>
            <Link href={author.link}>
              <p className="ml-4 no-underline cursor-pointer">{author.name}</p>
            </Link>
          </div>
        </div>
      </div>
      <img src={coverImage} alt={excerpt} />
    </div>
  )
}
