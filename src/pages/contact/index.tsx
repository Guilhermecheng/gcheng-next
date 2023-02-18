import Head from "next/head";
import { useContext } from "react";

import { GlobalContext } from "@/contexts/Contexts";

import { PageTitle } from "@/components/PageTitle";
import { SectionTitle } from "@/components/SectionTitle";
import Form from "@/components/contactPage//Form";
import SocialMediaList from "@/components/contactPage/SocialMediaList";

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

                <section id="about-content" className="text-zinc-500 dark:text-zinc-100">
                    <SectionTitle title={language === "ptBR" ? `Minhas redes sociais` : `My social network`} />
                    <SocialMediaList darkModeChecked={darkModeChecked} />

                    <SectionTitle title={language === "ptBR" ? `Deixe sua mensagem` : `Leave a message`} />
                    <Form />
                </section>
            </div>
        </>
    )
}