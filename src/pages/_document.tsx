import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Press+Start+2P&display=swap" rel="stylesheet"/>
        <link rel="shortcut icon" href="/logo-dark.ico" />
      </Head>
      <body className='bg-white dark:bg-zinc-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
