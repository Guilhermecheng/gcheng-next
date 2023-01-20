import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Guilherme Cheng | Home</title>
      </Head>
      <div className="text-zinc-400 dark:text-white w-full flex flex-col items-center justify-center pt-4 laptop:h-screen">

        <div className="w-full">
          <h3 className="text-lg laptop:text-xl mb-1 laptop:mb-2">Hey, welcome to my page!</h3>
          <h1 className="text-zinc-800 dark:text-amber-400 text-2xl laptop:text-4xl">I'm <span className="text-4xl laptop:text-6xl font-semibold">Guilherme!</span></h1>
        </div>

        <div className="w-full mt-8 text-base text-zinc-500 dark:text-zinc-200 laptop:text-lg">
          <p>Web developer, from Brazil</p>
          <p>I use React, NextJs, Javascript and a lot of effort!</p>
        </div>

        {/* <div className="border border-zinc-800 dark:border-zinc-300 border-opacity-40 border-solid rounded-md w-full h-32 px-4 py-8 mt-12">
          Some other content
        </div> */}
      </div>
    </>
  )
}
