/* eslint-disable no-console */
import PageLayout from '@/layouts/page-layout'
import { BlogInfo, getAllBlogs } from '@/libs/blog'
import type { GetStaticPropsResult } from 'next'
import Link from 'next/link'
import { formatDate } from 'utils/formatter'
import readingTime from 'reading-time'

interface BlogListProp {
  blogs: BlogInfo[]
}

const BlogIndex = ({ blogs }: BlogListProp): JSX.Element => {
  console.log('Blog list', blogs)
  return (
    <PageLayout isFullHeight isHaveFooter isHaveMenu>
      {blogs.map(({ excerpt, timestamp, title, content, slug }: BlogInfo) => (
        <Link href={`/blog/${slug}`} key={timestamp}>
          <div className="blog-card">
            <h1 className="text-gray-500 text-xs leading-normal mb-2">{title}</h1>
            <p className="font-bold text-base">{excerpt}</p>
            <div className="flex flex-row  items-center text-gray-400 pt-2">
              <small>{formatDate(timestamp)}</small>
              <small className="mx-2">-</small>
              <small className="flex items-center">
                {readingTime(content).text}.<span className="ml-2 text-xl">☕</span>
              </small>
            </div>
          </div>
        </Link>
      ))}
    </PageLayout>
  )
}

export default BlogIndex

export async function getStaticProps(): Promise<GetStaticPropsResult<any>> {
  const blogs = getAllBlogs()

  return {
    props: {
      blogs,
    },
  }
}
