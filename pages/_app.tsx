import type { AppProps } from 'next/app'

import 'tailwindcss/tailwind.css'
import 'styles/style.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
