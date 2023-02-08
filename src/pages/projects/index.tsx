import { PageTitle } from "@/components/PageTitle";
import { GlobalContext } from "@/contexts/Contexts";
import { useContext } from "react";

import { BiSearchAlt } from "react-icons/bi";


import { projectsList } from "@/services/content";
import Head from "next/head";

const projPageTitle = {
    ptBR: {
        title: "Projetos",
        subtitle: "Bem vindo ao meu repositório!",
    },
    en: {
        title: "Projects",
        subtitle: "Welcome to my repository!",
    },
}

export default function Projects() {
    const {language, setIsModalOpen, setModalContent} = useContext(GlobalContext);

    let pageTitle = language === "ptBR" ? projPageTitle.ptBR : projPageTitle.en;

    function onProjectClick(proj: any) {
        setModalContent(proj);
        setIsModalOpen(true);
      }

    return (
        <>
            <Head>
                <title>{`${pageTitle.title} | Guilherme Cheng`}</title>
            </Head>

            <PageTitle 
                title={pageTitle.title}
                subtitle={pageTitle.subtitle}
            />

            <ul className="flex flex-col tablet:grid mt-6 laptop:mt-8 tablet:grid-cols-3 gap-4 pb-6">
                { projectsList.map((project, i) => {
                return (
                    <li key={i} onClick={ () => onProjectClick(project) } className="relative flex flex-col w-full rounded-lg overflow-hidden dark:border-2 dark:border-zinc-500 hover:border-2 hover:border-amber-400 hover:dark:border-amber-400 hover:cursor-pointer group">
                    {/* <Link href={project.link} target="_blank"> */}
                        <img src={project.image} alt={project.imgAlt} className='w-full bg-center bg-no-repeat' />
                        <div className="absolute bottom-0 w-full h-full flex items-center justify-center bg-zinc-700 opacity-0 laptop:opacity-0 laptop:group-hover:opacity-80 transition ease-in-out duration-300 z-20 cursor-pointer">
                        {/* <p className="p-2 text-zinc-100">{project.title}</p> */}
                        { language === "ptBR" ? <p className="p-2 text-zinc-100">Saiba mais</p> : <p className="p-2 text-zinc-100">See more</p> }
                        <BiSearchAlt size={40} className="text-zinc-100" />
                        </div>
                    {/* </Link> */}
                    </li>
                )
                }) }
            </ul>
        </>
    )
}