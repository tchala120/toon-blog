import React, { ReactNode } from 'react'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Menu from '@/components/menu/Menu'
import { BlogInfo } from '@/libs/blog'

interface BlogLayoutProp extends BlogInfo {
  children: ReactNode
}

export default function BlogLayout({ children, title, excerpt }: BlogLayoutProp): JSX.Element {
  return (
    <div className={`flex flex-col min-h-screen`}>
      <Header title={title} description={excerpt} />
      <div className={`flex flex-col flex-1`}>
        <Menu />
        <main className="container-fluid">{children}</main>
      </div>
      <div className="border-t-2 p-4">
        <Footer />
      </div>
    </div>
  )
}
