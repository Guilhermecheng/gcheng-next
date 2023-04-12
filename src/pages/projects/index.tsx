import Head from "next/head";
import { useContext } from "react";

import { GlobalContext } from "@/contexts/Contexts";
import { projectsList } from "@/data/projects";

import { PageTitle } from "@/components/PageTitle";
import { ProjectProps, Thumb } from "@/components/Thumb";

import * as Dialog from '@radix-ui/react-dialog'
import { Modal } from "@/components/Modal";

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
    const {language, setModalContent } = useContext(GlobalContext);

    let pageTitle = language === "ptBR" ? projPageTitle.ptBR : projPageTitle.en;

    function onProjectClick(proj: ProjectProps) {
        setModalContent(proj);
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

            <div className="grid grid-cols-2 mt-6 laptop:mt-8 tablet:grid-cols-3 gap-4 pb-12 laptop:pb-6">
                <Dialog.Root>
                    { projectsList.map((project, i) => {
                    return (
                        <Thumb 
                            key={i}
                            project={project}
                            language={language}
                            onClickFunction={onProjectClick}
                        />
                    )
                    }) }
                <Modal />
                </Dialog.Root>
            </div>
        </>
    )
}