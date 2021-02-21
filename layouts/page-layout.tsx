import Footer from '@/components/footer/Footer'
import Menu from '@/components/menu/Menu'
import { NextSeo } from 'next-seo'
import React, { ReactNode } from 'react'

interface Children {
  children: ReactNode
  isHaveMenu?: boolean
  isHaveFooter?: boolean
}

export default function PageLayout({
  children,
  isHaveMenu = true,
  isHaveFooter = true,
}: Children): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen">
      <NextSeo
        title="Blog | Panupong Tipjoi"
        description="This page is show all blogs."
      />
      <div className="flex flex-col flex-1">
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