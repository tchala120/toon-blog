/* eslint-disable no-console */
import PageLayout from '@/layouts/page-layout'
import { BlogInfo, getAllBlogs } from '@/libs/blog'
import type { GetStaticPropsResult } from 'next'
import Link from 'next/link'
import BlogCard from '@/components/blog/BlogCard'

interface BlogListProp {
  blogs: BlogInfo[]
}

const BlogIndex = ({ blogs }: BlogListProp): JSX.Element => {
  return (
    <PageLayout isFullHeight isHaveFooter isHaveMenu className="blog-layout">
      {blogs.map(({ slug, ...blog }: BlogInfo) => (
        <Link href={`/blog/${slug}`} key={blog.timestamp}>
          <BlogCard {...blog} />
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
