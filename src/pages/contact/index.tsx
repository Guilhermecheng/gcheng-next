import Head from "next/head";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contato | Guilherme Cheng</title>
            </Head>
            
            <div className="text-zinc-400 dark:text-zinc-200 w-full flex flex-col pt-4 laptop:pt-12 laptop:h-screen laptop:px-12">
                <h1 className="font-semibold text-zinc-800 dark:text-white text-2xl laptop:text-4xl">Contact me</h1>

                <p>Or just look... ¯\_(ツ)_/¯ </p>
            </div>
        </>
    )
}