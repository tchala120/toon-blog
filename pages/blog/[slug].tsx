/* eslint-disable no-console */
import React from 'react'
import BlogLayout from '@/layouts/blog-layout'
import { BlogInfo, getAllBlogs, getBlogBySlug } from '@/libs/blog'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'
import markdownToHtml from '@/libs/markdownToHtml'
import BlogHeader from '@/components/blog/BlogHeader'
import BlogBody from '@/components/blog/BlogBody'
import BlogFooter from '@/components/blog/BlogFooter'

interface BlogProp {
  blog: BlogInfo
}

export default function Blog({ blog }: BlogProp): JSX.Element {
  const { content, ...data } = blog
  return (
    <BlogLayout title={`${blog.title} | Panupong Tipjoi`} excerpt={blog.excerpt}>
      <BlogHeader {...data} />
      <div className="blog-body-block">
        <div className="container">
          <BlogBody content={content} />
          <BlogFooter author={data.author} />
        </div>
      </div>
    </BlogLayout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params): Promise<GetStaticPropsResult<any>> {
  const blog = getBlogBySlug(params.slug)
  const content = await markdownToHtml(blog.content || '')

  return {
    props: {
      blog: {
        ...blog,
        content,
      },
    },
  }
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const posts = getAllBlogs()

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
