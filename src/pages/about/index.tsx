import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <title>About | Guilherme Cheng</title>
            </Head>
            <div className="text-zinc-400 dark:text-zinc-200 w-full flex flex-col pt-4 laptop:pt-12 laptop:h-screen laptop:px-12">
                <h1 className="font-semibold text-zinc-800 dark:text-white text-2xl laptop:text-4xl">Guilherme Cheng</h1>

                <p>Yeah, this is my resumé =)</p>

                <div>
                    <p>Hey! I'm Guilherme!</p>
                    <p>I'm a web developer, </p>
                </div>

                <div id="about-content">

                </div>
            </div>
        </>
    )
}