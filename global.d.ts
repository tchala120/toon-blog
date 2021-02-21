declare module '*.jpg' {
  const value: any
  export = value
}

declare module '*.mdx' {
  import { ReactNode } from 'react'

  export const frontMatter: {
    title: string
    snippet: string
    timestamp: number
    __resourcePath: string
    // type additional properties according to
    // the front-matter you define
  }

  const component: ReactNode
  export default ReactNode
}
