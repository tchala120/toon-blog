import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

interface Url {
  url: string
}

interface Author {
  name: string
  picture: string
  ogImage: Url
  link: string
}

export interface BlogInfo {
  slug?: string
  title?: string
  timestamp?: number
  excerpt?: string
  coverImage?: string
  content?: string
  author?: Author
}

const blogsDirectory = join(process.cwd(), 'contents/blogs')

export function getBlogSlugs(): any {
  return fs.readdirSync(blogsDirectory)
}

export function getBlogBySlug(slug: string): BlogInfo {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(blogsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {
    ...data,
    content,
    slug: realSlug,
  }

  return items
}

export function getAllBlogs(): BlogInfo[] {
  const slugs = getBlogSlugs()
  const blogs = slugs
    .map((slug: string) => getBlogBySlug(slug))
    // sort blogs by date in descending order
    .sort((a: BlogInfo, b: BlogInfo) => (a.timestamp > b.timestamp ? -1 : 1))
  return blogs
}
