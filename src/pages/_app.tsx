import { Layout } from '@/components/Layout'
import '@/styles/index.css'
import { setDarkMode } from '@/utils/darkMode';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  setDarkMode();
   
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
