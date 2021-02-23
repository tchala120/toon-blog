import React, { ReactNode } from 'react'
import Header from '@/components/header/Header'
import Menu from '@/components/menu/Menu'
import Footer from '@/components/footer/Footer'

interface PageLayoutProp {
  children: ReactNode
  isHaveMenu?: boolean
  isHaveFooter?: boolean
  isFullHeight?: boolean
}

export default function PageLayout({
  children,
  isHaveMenu = true,
  isHaveFooter = true,
  isFullHeight = true,
}: PageLayoutProp): JSX.Element {
  return (
    <div className={`flex flex-col ${isFullHeight ? `min-h-screen` : ``}`}>
      <Header title="Blog | Panupong Tipjoi" description="This page is show all blogs." />
      <div className={`flex flex-col ${isFullHeight ? `flex-1` : ``}`}>
        {isHaveMenu && <Menu />}
        <main className="container">{children}</main>
      </div>
      {isHaveFooter && (
        <div className="border-t-2 p-4">
          <Footer />
        </div>
      )}
    </div>
  )
}
