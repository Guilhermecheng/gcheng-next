import { Html, Head, Main, NextScript } from 'next/document'
import { useContext } from "react";
import { GlobalContext } from "@/contexts/Contexts";


export default function Document() {
  const { isModalOpen } = useContext(GlobalContext);

  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Press+Start+2P&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/svg+xml" href="/logo_dark.svg" />
      </Head>
      <body className={`bg-white dark:bg-zinc-800 acrollbar-thin tablet:scrollbar-thumb-zinc-300 tablet:scrollbar-track-white tablet:dark:scrollbar-thumb-zinc-600 tablet:dark:scrollbar-track-zinc-800  ${isModalOpen ? "scrollbar-none overflow-hidden": "tablet:scrollbar-thin"}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
