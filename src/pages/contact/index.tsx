import Head from "next/head";
import Link from "next/link";

import { PageTitle } from "@/components/PageTitle";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiFilePaperFill } from "react-icons/ri";

export default function Contact() {
    const contactMedias = [
        {
            name: "Github",
            link: "https://github.com/Guilhermecheng",
            logo: <FaGithub size={40} />,
        },
        {
            name: "Linkedin",
            link: "https://www.linkedin.com/in/guilherme-cheng/",
            logo: <FaLinkedin size={40} />,
        },
        {
            name: "Instagram",
            link: "https://instagram.com/guilhermecheng/",
            logo: <BsInstagram size={40} />,
        },
        {
            name: "Resumé",
            link: "https://guilhermecheng.notion.site/CV-Guilherme-Ferreira-Cheng-eefed60dfd0941e8899c75d182551acd/",
            logo: <RiFilePaperFill size={40} />,
        },
    ]

    return (
        <>
            <Head>
                <title>Contato | Guilherme Cheng</title>
            </Head>
            
            <div className="text-zinc-400 dark:text-white w-full flex flex-col text-base laptop:text-lg pt-4 laptop:pt-12 laptop:h-screen">
                <PageTitle 
                    title={`Contact me`}
                    subtitle={`Let's have a coffee!  ☕️ `}
                />

                <div id="about-content" className="mt-6 laptop:mt-8 text-zinc-500 dark:text-zinc-200">
                    <h1>If you're interested in getting in touch, here are some ways you can find me:</h1>

                    {/* <div className="pt-10 max-w-[560px] grid grid-cols-2 gap-8"> */}
                    <div className="pt-10 flex flex-wrap items-center gap-4">
                        { contactMedias.map((media) => {
                            return (
                                <div key={media.name} className="flex flex-col items-center justify-center py-4 laptop:py-8 w-36 laptop:w-40 border rounded-md cursor-pointer hover:bg-amber-400 hover:text-zinc-800">
                                    <Link href={media.link} className="flex flex-col items-center gap-y-4" target="_blank">
                                        <span>{ media.logo }</span>
                                        <span>{ media.name }</span>
                                    </Link>
                                </div>
                            )
                        }) }

                    </div>
                </div>

            </div>
        </>
    )
}