import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { PageTitle } from "@/components/PageTitle";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiFilePaperFill } from "react-icons/ri";
import { useContext } from "react";
import { GlobalContext } from "@/contexts/Contexts";
import { SectionTitle } from "@/components/SectionTitle";

const contactMedias = [
    {
        name: "Github",
        link: "https://github.com/Guilhermecheng",
        // logo: <FaGithub size={40} />,
        logo: <img src="/github.svg" alt="github" width={50} height={50} />,
        logoDark: <img src="/github-white.svg" alt="github" width={50} height={50} />,
    },
    {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/guilherme-cheng/",
        // logo: <FaLinkedin size={40} />,
        logo: <img src="/linkedin.svg" alt="linkedin" width={50} height={50} />,
    },
    {
        name: "Instagram",
        link: "https://instagram.com/guilhermecheng/",
        // logo: <BsInstagram size={40} />,
        logo: <img src="/instagram.svg" alt="instagram" width={50} height={50} />,
    },
    {
        name: "Resumé",
        link: "https://guilhermecheng.notion.site/CV-Guilherme-Ferreira-Cheng-eefed60dfd0941e8899c75d182551acd/",
        logo: <RiFilePaperFill size={40} />,
    },
]

const contactPageTitle = {
    ptBR: {
        title: "Contato",
        subtitle: "Entre em contato comigo!",
        // pageEntrance: "OI",
    },
    en: {
        title: "Contact me",
        subtitle: "Let's have a coffee!  ☕️ ",
    //     pageEntrance: "tchau",
    },
}

export default function Contact() {
    const { language, darkModeChecked } = useContext(GlobalContext);

    let pageTitle = language === "ptBR" ? contactPageTitle.ptBR : contactPageTitle.en;

    

    return (
        <>
            <Head>
                <title>{`${pageTitle.title} | Guilherme Cheng`}</title>
            </Head>
            
            <div className="text-zinc-400 dark:text-white w-full flex flex-col text-base laptop:text-lg laptop:h-screen">
                <PageTitle 
                    title={pageTitle.title}
                    subtitle={pageTitle.subtitle}
                />

                <div id="about-content" className="text-zinc-500 dark:text-zinc-100">
                    {/* <h1>If you're interested in getting in touch, here are some ways you can find me:</h1> */}

                    <SectionTitle title={language === "ptBR" ? `Minhas redes sociais` : `My social network`} />
                    {/* <div className="pt-10 max-w-[560px] grid grid-cols-2 gap-8"> */}
                    <div className="mt-6 laptop:mt-8 flex flex-wrap justify-center laptop:justify-start gap-4">
                        { contactMedias.map((media) => {
                            return (
                                // <div key={media.name} className="flex flex-col items-center justify-center py-4 laptop:py-8 w-36 laptop:w-40 border rounded-full cursor-pointer hover:bg-amber-400 hover:text-zinc-800">
                                <div key={media.name} className="flex flex-col py-4 laptop:py-8 w-36 laptop:w-40 rounded-md cursor-pointer bg-zinc-100 dark:bg-zinc-900 hover:bg-amber-400 hover:dark:bg-amber-400 hover:text-zinc-800">
                                    <Link href={media.link} className="flex flex-col items-center gap-y-4" target="_blank">
                                        { (darkModeChecked && media.logoDark) ? <span>{ media.logoDark }</span> : <span>{ media.logo }</span> }
                                        <span>{ media.name }</span>
                                    </Link>
                                </div>
                            )
                        }) }

                    </div>

                    <div>
                        <SectionTitle title={language === "ptBR" ? `Deixe sua mensagem` : `Leave a message`} />
                        <div className="mt-6 laptop:mt-8 block w-full h-80 bg-zinc-300 dark:bg-zinc-600 rounded-md"></div>
                    </div>
                </div>

            </div>
        </>
    )
}