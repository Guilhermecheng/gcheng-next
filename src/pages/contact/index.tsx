import { PageTitle } from "@/components/PageTitle";
import Head from "next/head";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contato | Guilherme Cheng</title>
            </Head>
            
            <div className="text-zinc-400 dark:text-zinc-300 w-full flex flex-col pt-4 laptop:pt-12 laptop:h-screen">
                <PageTitle 
                    title={`Contact me`}
                    subtitle={`Let's have a coffee!  ☕️ `}
                />

                <div id="about-content" className="mt-6 laptop:mt-8 text-zinc-500 dark:text-zinc-300">
                    Text
                </div>

            </div>
        </>
    )
}