import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'

import 'tailwindcss/tailwind.css'
import 'styles/style.scss'

const components = {
  pre: (props: any) => <div {...props} />,
  code: (props: any) => (
    <div className="code-block">
      <pre {...props} />
    </div>
  ),
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp
