import Link from "next/link";
import Head from "next/head";
import { useContext } from "react";

import { BiRightArrowAlt } from "react-icons/bi";

import { homeContent } from "@/data/home";
import { projectsList } from "@/data/projects";
import { GlobalContext } from "@/contexts/Contexts";

import { SectionTitle } from "@/components/SectionTitle";

import * as Dialog from "@radix-ui/react-dialog";
import { ProjectProps, Thumb } from "@/components/Thumb";
import { Modal } from "@/components/Modal";

export default function Home() {
  const { language, setModalContent } = useContext(GlobalContext);

  let pageContent = language === "ptBR" ? homeContent.ptBR : homeContent.en;

  function onProjectClick(proj: ProjectProps) {
    setModalContent(proj);
  }

  return (
    <>
      <Head>
        <title>Home | Guilherme Cheng</title>
      </Head>

      <div className={`text-zinc-500 dark:text-white w-full flex flex-col`}>

        <div id="logo-and-title" className="w-full flex flex-col align-center">
          <div className="flex w-full justify-center laptop:justify-start">
            <img src="/logo_dark.svg" alt="" className="w-16 tablet:w-20 laptop:w-32" />

            <div id="page-title-and-subtitle" className="">
              <h1 className="text-zinc-800 dark:text-amber-400 text-2xl laptop:text-4xl pt-10 laptop:pt-11 pl-1">
                <span className="text-3xl tablet:text-4xl laptop:text-5xl font-semibold flex items-center">{pageContent.title.substring(1, 1000)}</span>
              </h1>
              <h3 className="text-base laptop:text-lg pl-2 pt-2 mb-1 laptop:mb-2">{pageContent.subtitle}</h3>
            </div>
          </div>
        </div>

        <section id="page-intro" className="mt-2 laptop:mt-4">
          <h2 className="mt-6 text-zinc-500 dark:text-zinc-200 text-lg font-semibold laptop:text-xl">{pageContent.pageEntrance}</h2>
          <div className="mt-2 text-sm text-zinc-500 dark:text-zinc-200 laptop:text-base">
            { pageContent.description.map((parag, i) => <p key={i}>{ parag }</p>)  }
          </div>
        </section>
          
        <section id="about-me-section">
          <SectionTitle title={pageContent.aboutme.title} />
          <div className="mt-4 text-sm text-zinc-500 dark:text-zinc-200 laptop:text-base">
            { pageContent.aboutme.content.map((paragraph, i) => {
              return (
                <p key={i} className="mt-4">{paragraph}</p>
              )
            }) }
          </div>
        </section>

        <section id="projects-section" className="w-full h-32 laptop:mt-2 text-zinc-500 dark:text-zinc-200">
          <SectionTitle title={pageContent.projects.title} />

           { language === "ptBR" ? (
            <p className="laptop:hidden">Clique no projeto de interesse para saber mais</p>
           ) : (
            <p className="laptop:hidden">Click on the desired project to see more</p>
           )}

          <div className="grid grid-cols-2 mt-6 tablet:grid-cols-3 gap-4">
            <Dialog.Root>
                { projectsList.slice(0, 3).map((project, i) => {
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

          <div className="min-h-10 mt-6 w-full flex justify-end pb-6 laptop:pb-4">
            <Link href="/projects">
              <span className="rounded-lg cursor-pointer text-zinc-600  dark:text-zinc-100 flex items-center gap-2 hover:underline hover:underline-offset-1">{language === "ptBR" ? "Veja mais" : "See more"} <BiRightArrowAlt size={20} /></span>
            </Link>
          </div>
          <div className="block"></div>
        </section>
      </div>
    </>
  )
}
