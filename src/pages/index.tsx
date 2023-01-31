import { GlobalContext } from "@/contexts/Contexts";
import Head from "next/head";

import { useContext } from "react";
import { BiRightArrow } from "react-icons/bi";

import { homeContent, projectsList } from "@/services/content";
import Link from "next/link";

export default function Home() {
  const { language } = useContext(GlobalContext);

  let pageContent = language === "ptBR" ? homeContent.ptBR : homeContent.en;

  return (
    <>
      <Head>
        <title>Guilherme Cheng | Home</title>
      </Head>

      <div className="text-zinc-500 dark:text-white w-full flex flex-col laptop:h-screen">
        <div className="w-full">
          <h1 className="text-zinc-800 dark:text-amber-400 text-2xl laptop:text-4xl">
            <span className="text-4xl laptop:text-6xl font-semibold">{pageContent.title}</span>
          </h1>

          <h3 className="text-lg laptop:text-xl pl-1 mb-1 laptop:mb-2">{pageContent.subtitle}</h3>
        </div>

        <section>
          <h2 className="mt-6 text-zinc-500 dark:text-zinc-200 text-lg font-semibold laptop:text-xl">{pageContent.pageEntrance}</h2>
          <div className="mt-2 text-sm text-zinc-500 dark:text-zinc-200 laptop:text-base">
            { pageContent.description.map((parag, i) => <p key={i}>{ parag }</p>)  }
          </div>
        </section>
          
        <section >
          <h1 className="text-xl laptop:text-2xl mt-8 text-zinc-600 dark:text-amber-400 flex items-center"> 
            <BiRightArrow size={20} className="mr-4" />
            {pageContent.aboutme.title}
          </h1>
          <div className="mt-4 text-sm text-zinc-500 dark:text-zinc-200 laptop:text-base">
            { pageContent.aboutme.content.map((paragraph, i) => {
              return (
                <p key={i} className="mt-4">{paragraph}</p>
              )
            }) }
          </div>
        </section>

        <section className="w-full h-32 mt-12 text-zinc-500 dark:text-zinc-200">
          <h1 className="text-xl laptop:text-2xl mb-6 text-zinc-600 dark:text-amber-400 flex items-center">
            <BiRightArrow size={20} className="mr-4" /> 
            Projetos
           </h1>
          <ul className="flex flex-col tablet:grid mt-6 tablet:grid-cols-3 gap-4">
            { projectsList.map((project, i) => {
              return (
                <li key={i} className="relative flex flex-col w-full max-h-60 rounded-md overflow-hidden hover:border-2 hover:border-amber-400 hover:cursor-pointer group">
                  <Link href={project.link} target="_blank">
                    <img src={project.image} alt={project.imgAlt} className='w-full bg-center bg-no-repeat' />
                    <div className="absolute bottom-0 w-full h-[20%] bg-zinc-700 opacity-70 laptop:opacity-0 laptop:group-hover:opacity-70 transition ease-in-out duration-300 z-20">
                      <p className="p-2 text-zinc-100">{project.title}</p>
                    </div>
                  </Link>
                </li>
              )
            }) }
          </ul>
        <div className="h-10"></div>
        </section>
      </div>
    </>
  )
}
