import Head from 'next/head'
import React from 'react'

export interface HeaderProps {
  title: string
  description: string
}

export default function Header({ title, description }: HeaderProps): JSX.Element {
  return (
    <Head>
      <title>{title || 'Blog | Panupong Tipjoi'}</title>
      <meta charSet="utf-8" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="follow, index" name="robots" />
      <meta content={description || 'This website is about my personal and blogs.'} name="description" />
      <link href="/assets/toon_icon.png" rel="shortcut icon" />
    </Head>
  )
}
