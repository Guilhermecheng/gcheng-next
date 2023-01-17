import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Guilherme Cheng | Home</title>
      </Head>
      <div className="text-zinc-400 dark:text-zinc-200 w-full flex flex-col items-center justify-center laptop:h-screen laptop:px-12">

        <div className="w-full">
          <h3 className="text-lg laptop:text-xl">Hey, welcome to my page!</h3>
          <h1 className="text-zinc-900 dark:text-white text-2xl laptop:text-4xl">I'm <span className="text-5xl font-semibold">Guilherme!</span></h1>
        </div>

        <div className="w-full mt-8">
          <p>Web developer, from Brazil</p>
          <p>I use React, NextJs, Javascript and a lot of effort to make you happy!</p>
        </div>
      </div>
    </>
  )
}
