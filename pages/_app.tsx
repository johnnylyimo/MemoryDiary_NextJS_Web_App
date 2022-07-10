import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout meta={{
      title:'Home | MemoryDiary',
      description:"MemoryDiary's home page"
      }}>
      <Component {...pageProps} /> 
    </Layout>
  )
  // return <Component {...pageProps} />
}

export default MyApp
