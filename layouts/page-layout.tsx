import Footer from '@/components/footer/Footer'
import Menu from '@/components/menu/Menu'
import React, { ReactNode } from 'react'

interface Children {
  children: ReactNode
}

export default function PageLayout({ children }: Children): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-1 pb-8">
        <Menu />
        <main className="container">{children}</main>
      </div>
      <div className="border-t-2 p-4">
        <Footer />
      </div>
    </div>
  )
}
