/* eslint-disable no-console */
import { ReactNode } from 'react'
import { NextSeo } from 'next-seo'

import cn from 'classnames'

import style from './mdx.module.scss'
import Menu from '@/components/menu/Menu'
import Footer from '@/components/footer/Footer'

type FrontMatter = {
  title: string
  snippet: string
}

export interface Children {
  frontMatter: FrontMatter
  children: ReactNode
}

const Layout = ({ frontMatter, children }: Children): JSX.Element => (
  <div className="flex flex-col min-h-screen">
    <div className="flex flex-col flex-1 pb-8">
      <NextSeo
        title={`${frontMatter.title} | Panupong Tipjoi`}
        description={frontMatter.snippet}
      />
      <Menu />
      <div className={cn(style.container, 'container')}>
        <h1>{frontMatter.title}</h1>
        <p>{frontMatter.snippet}</p>
        <section>{children}</section>
      </div>
    </div>
    <div className="border-t-2 p-4">
      <Footer />
    </div>
  </div>
)

export default Layout
