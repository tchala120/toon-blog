/* eslint-disable no-console */
import { join } from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export interface BlogInfo {
  title: string
  timestamp: string
  snippet: string
  content: string
  slug: string
}

const blogPath = join(process.cwd(), 'pages/blog')

export const getAllBlogs = (): BlogInfo[] => {
  const mdxFiles = fs.readdirSync(blogPath).filter((f) => f.endsWith('mdx'))

  const blogs = mdxFiles
    .map((slug) => getBlogBySlug(slug))
    .sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1))

  return blogs
}

export function getBlogBySlug(slug: string): BlogInfo {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(blogPath, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: BlogInfo = {
    slug: realSlug,
    content,
    title: data.title,
    timestamp: data.timestamp,
    snippet: data.snippet,
  }

  return items
}
