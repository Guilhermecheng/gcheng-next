import { Layout } from '@/components/Layout'
import { Contexts } from '@/contexts/Contexts';
import '@/styles/index.css'
import { setDarkMode } from '@/utils/darkMode';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  setDarkMode();
   
  return (
    <>
      <Contexts>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Contexts>
    </>
  )
}
