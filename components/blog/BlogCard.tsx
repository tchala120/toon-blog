/* eslint-disable no-console */
import Router from 'next/router'
import { BlogInfo } from '@/libs/blog'
import React from 'react'
import readingTime from 'reading-time'
import { formatDate, limitTextAndEllipse } from 'utils/formatter'

export default function BlogCard({ title, excerpt, timestamp, slug, content }: BlogInfo): JSX.Element {
  const goToBlogDetail = () => {
    Router.push(`blog/${slug}`)
  }
  return (
    <div className="blog-card" onClick={() => goToBlogDetail()}>
      <h1 className="text-gray-500 text-xs leading-normal mb-2">{title}</h1>
      <p className="font-bold text-base">{limitTextAndEllipse(excerpt, 70)}</p>
      <div className="flex flex-row  items-center text-gray-400 pt-2">
        <small>{formatDate(timestamp, 'DD MMM YY')}</small>
        <small className="mx-2">-</small>
        <small className="flex items-center">
          {readingTime(content).text}.<span className="ml-2 text-xl">☕</span>
        </small>
      </div>
    </div>
  )
}
