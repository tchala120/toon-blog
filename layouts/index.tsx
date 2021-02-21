/* eslint-disable no-console */
import { ReactNode } from 'react'
import { NextSeo } from 'next-seo'
import Router from 'next/router'

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

const Layout = ({ frontMatter, children }: Children): JSX.Element => {
  const onBackToPreviousPage = () => {
    Router.back()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-1 pb-8">
        <NextSeo
          title={`${frontMatter.title} | Panupong Tipjoi`}
          description={frontMatter.snippet}
        />
        <Menu />
        <h1
          onClick={() => onBackToPreviousPage()}
          className="container font-semibold mb-4 underline cursor-pointer"
        >
          &#8592; Back
        </h1>
        <div className={cn(style.container, 'container')}>
          <h1 className="font-bold text-sm my-8">{frontMatter.title}</h1>
          <p className="text-lg my-8">{frontMatter.snippet}</p>
          <section className="py-4 border-t-2 border-gray-300">
            {children}
          </section>
        </div>
      </div>
      <div className="border-t-2 p-4">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
