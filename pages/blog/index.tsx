import Link from 'next/link'
import dayjs from 'dayjs'
import readingTime from 'reading-time'
import PageLayout from '@/layouts/page-layout'
import { getAllBlogs } from '@/libs/blog'
import { BlogInfo } from '@/libs/blog'

interface BlogProp {
  blogs: BlogInfo[]
}

const BlogIndex = ({ blogs }: BlogProp): JSX.Element => {
  return (
    <PageLayout>
      {blogs.map(({ snippet, timestamp, title, content }: BlogInfo) => (
        <Link href="/blog/mdx-ftw" key={timestamp}>
          <div className="blog-card">
            <h1 className="text-gray-500 text-xs leading-normal mb-2">
              {title}
            </h1>
            <p className="font-bold text-base">{snippet}</p>
            <div className="flex flex-row  items-center text-gray-400 pt-2">
              <small>{dayjs(timestamp).format('MMM YY - HH:mm')}</small>
              <small className="mx-2">-</small>
              <small className="flex items-center">
                {readingTime(content).text}.
                <span className="ml-2 text-xl">☕</span>
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
