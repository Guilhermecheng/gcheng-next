import { GlobalContext } from "@/contexts/Contexts";
import Head from "next/head";

import { useContext } from "react";
import { BiRightArrowAlt, BiSearchAlt } from "react-icons/bi";

import { homeContent, projectsList } from "@/services/content";
import Link from "next/link";
import { ProjectModal } from "@/components/ProjectModal";

export default function Home() {
  const { language, setIsModalOpen, setModalContent } = useContext(GlobalContext);

  let pageContent = language === "ptBR" ? homeContent.ptBR : homeContent.en;

  function onProjectClick(proj: any) {
    setModalContent(proj);
    setIsModalOpen(true);
  }

  return (
    <>
      <Head>
        <title>Home | Guilherme Cheng</title>
      </Head>

      <div className="text-zinc-500 dark:text-white w-full flex flex-col">

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
          <h1 className="text-xl laptop:text-2xl mt-8 text-zinc-600 dark:text-amber-400 flex items-center uppercase tracking-wider font-semibold"> 
            <span className="font-press-start text-amber-400 dark:text-zinc-100">{pageContent.aboutme.title.charAt(0)}</span>
            {pageContent.aboutme.title.substring(1, 1000)}
          </h1>
          <div className="mt-4 text-sm text-zinc-500 dark:text-zinc-200 laptop:text-base">
            { pageContent.aboutme.content.map((paragraph, i) => {
              return (
                <p key={i} className="mt-4">{paragraph}</p>
              )
            }) }
          </div>
        </section>

        <section id="projects-section" className="w-full h-32 mt-8 text-zinc-500 dark:text-zinc-200">
          <h1 className="text-xl laptop:text-2xl mb-6 text-zinc-600 dark:text-amber-400 flex items-center uppercase tracking-wider font-semibold">
            <span className="font-press-start text-amber-400 dark:text-zinc-100">P</span>
            rojetos
           </h1>
           
           <p className="laptop:hidden">Clique no projeto de interesse para saber mais</p>

          <ul className="flex flex-col tablet:grid mt-6 tablet:grid-cols-3 gap-4">
            { projectsList.map((project, i) => {
              return (
                <li key={i} onClick={ () => onProjectClick(project) } className="relative flex flex-col w-full rounded-lg overflow-hidden dark:border-2 dark:border-zinc-500 hover:border-2 hover:border-amber-400 hover:dark:border-amber-400 hover:cursor-pointer group">
                  {/* <Link href={project.link} target="_blank"> */}
                    <img src={project.image} alt={project.imgAlt} className='w-full bg-center bg-no-repeat' />
                    <div className="absolute bottom-0 w-full h-full flex items-center justify-center bg-zinc-700 opacity-0 laptop:opacity-0 laptop:group-hover:opacity-80 transition ease-in-out duration-300 z-20 cursor-pointer">
                      <p className="p-2 text-zinc-100">{project.title}</p>
                      <BiSearchAlt size={40} className="" />
                    </div>
                  {/* </Link> */}
                </li>
              )
            }) }
          </ul>
          <div className="h-10 mt-6 w-full flex justify-end">
            <span className="rounded-lg cursor-pointer text-zinc-100 flex items-center gap-2 hover:underline hover:underline-offset-1">Veja mais <BiRightArrowAlt size={20} /></span>
          </div>
        </section>
      </div>
    </>
  )
}
