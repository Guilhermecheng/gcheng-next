import Head from "next/head";
import { useContext } from "react";

import { GlobalContext } from "@/contexts/Contexts";
import { projectsList } from "@/data/projects";

import { PageTitle } from "@/components/PageTitle";
import { ProjectThumb } from "@/components/ProjectThumb";


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
    const {language, setIsModalOpen, setModalContent, isModalOpen } = useContext(GlobalContext);

    let pageTitle = language === "ptBR" ? projPageTitle.ptBR : projPageTitle.en;

    function onProjectClick(proj: any) {
        setModalContent(proj);
        setIsModalOpen(true);
      }

    return (
        <div className={`${isModalOpen && "h-full overflow-y-hidden"}`}>
            <Head>
                <title>{`${pageTitle.title} | Guilherme Cheng`}</title>
            </Head>

            <PageTitle 
                title={pageTitle.title}
                subtitle={pageTitle.subtitle}
            />

            <ul className="grid grid-cols-2 mt-6 laptop:mt-8 tablet:grid-cols-3 gap-4 pb-12 laptop:pb-6">
                { projectsList.map((project, i) => {
                return (
                    <ProjectThumb 
                        key={i}
                        project={project}
                        onClickFunction={onProjectClick}
                        language={language}
                    />
                )
                }) }
            </ul>
        </div>
    )
}