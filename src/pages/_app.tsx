import type { AppProps } from 'next/app'

import { Layout } from '@/components/Layout'
import { Contexts } from '@/contexts/Contexts';
import { setDarkMode } from '@/utils/darkMode';
import '@/styles/index.css'

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
