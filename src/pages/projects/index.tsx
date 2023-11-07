import Head from "next/head";
import { useContext } from "react";

import client from "@/services/apolloClient";


import { GlobalContext } from "@/contexts/Contexts";
import { projectsList } from "@/data/projects";

import { PageTitle } from "@/components/PageTitle";
import { ProjectProps, Thumb } from "@/components/Thumb";
import { Modal } from "@/components/Modal";

import * as Dialog from '@radix-ui/react-dialog'
import { GET_ALL_PROJECTS } from "@/queries/getAllProjects";

interface ProjectsProps {
    data: {
        portifolioProjects: {
            id: string; 
            linkToPage: string; 
            linkToRepository: string; 
            projectBrief: string; 
            projectBriefPortuguese: string; 
            projectDescription: string; 
            projectDescriptionPortuguese: string; 
            projectName: string; 
            skillsUsed: string[];
            projectThumb: {
                url: string;
            }
        }[];
    }
}

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

export default function Projects(props: ProjectsProps) {
    const {language, setModalContent } = useContext(GlobalContext);

    console.log(props)

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

export async function getStaticProps({ params }: any) {
    try {
        const { data } = await client.query({ query: GET_ALL_PROJECTS });
        console.log(data)

        return {
            props: {
                data
            }
        }
    } catch (err) {
        console.log(err)

        return {
            props: null,
        }
    }
}