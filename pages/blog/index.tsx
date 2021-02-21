/* eslint-disable no-console */
import { GetStaticPathsResult } from 'next'
import Link from 'next/link'
import dayjs from 'dayjs'
import PageLayout from '@/layouts/page-layout'
import { getAllBlogs } from '@/libs/blog'
import { BlogInfo } from '@/libs/blog'

interface BlogProp {
  blogs: BlogInfo[]
}

const BlogIndex = ({ blogs }: BlogProp): JSX.Element => {
  return (
    <PageLayout>
      {blogs.map(({ snippet, timestamp, title }: BlogInfo) => (
        <Link href="/blog/mdx-ftw" key={timestamp}>
          <div className="blog-card">
            <h1 className="text-gray-500 text-xs leading-normal mb-2">
              {title}
            </h1>
            <p className="font-bold text-base">{snippet}</p>
            <div className="flex flex-row  items-center text-gray-400 pt-2">
              <small>{dayjs(timestamp).format('DD-MM-YYYY - HH:mm')}</small>
              <small className="mx-2">-</small>
              <small className="flex items-center">
                5 mins read. <span className="text-xl">☕</span>
              </small>
            </div>
          </div>
        </Link>
      ))}
    </PageLayout>
  )
}

export default BlogIndex

export const getStaticProps = (): any => {
  const blogs: BlogInfo[] = getAllBlogs()

  return {
    props: { blogs },
  }
}

export function getStaticPaths(): GetStaticPathsResult {
  const blogs: BlogInfo[] = getAllBlogs()

  return {
    paths: blogs.map((blog) => {
      return {
        params: {
          slug: blog.title,
        },
      }
    }),
    fallback: 'blocking',
  }
}
