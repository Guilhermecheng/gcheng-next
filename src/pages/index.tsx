import { GlobalContext } from "@/contexts/Contexts";
import Head from "next/head";
import { useContext } from "react";

const homeContent = {
  ptBR: {
    title: "Guilherme Cheng",
    subtitle: "Desenvolvedor front end",
    description: [
      "Bem vindo à minha página!",
      "Sou Desenvolvedor Front end, do Brasil. Atualmente trabalhando por conta própria",
    ],
  },
  en: {
    title: "Guilherme Cheng",
    subtitle: "Front end developer",
    description: [
      "Welcome to my page!",
      "I'm a front end developer from Brazil, working by myself",
    ],
  },
}

export default function Home() {
  const { language } = useContext(GlobalContext);

  let pageContent = language === "ptBR" ? homeContent.ptBR : homeContent.en;

  return (
    <>
      <Head>
        <title>Guilherme Cheng | Home</title>
      </Head>
      <div className="text-zinc-500 dark:text-white w-full flex flex-col items-center justify-center pt-4 laptop:h-screen">

        <div className="w-full">
          <h1 className="text-zinc-800 dark:text-amber-400 text-2xl laptop:text-4xl">
            <span className="text-4xl laptop:text-6xl font-semibold">{pageContent.title}</span>
          </h1>

          <h3 className="text-lg laptop:text-xl pl-1 laptop:pl-2 mb-1 laptop:mb-2">{pageContent.subtitle}</h3>
        </div>

        <div className="w-full mt-8 text-base text-zinc-500 dark:text-zinc-200 laptop:text-lg">
          { pageContent.description.map((parag, i) => <p key={i}>{ parag }</p>)  }
        </div>

        {/* <div className="border border-zinc-800 dark:border-zinc-300 border-opacity-40 border-solid rounded-md w-full h-32 px-4 py-8 mt-12">
          Some other content
        </div> */}
      </div>
    </>
  )
}
