import Head from "next/head";
import { useContext, useState } from "react";

import client from "@/services/apolloClient";

import { GlobalContext } from "@/contexts/Contexts";
import { aboutPageContent } from "@/data/about";
import { PageTitle } from "@/components/PageTitle";
import { SectionTitle } from "@/components/SectionTitle";
import ScaleUp from "@/components/ScaleUp";
import { ExperienceTabs } from "@/components/ExperienceTabs";

import { RiArrowDownSLine } from "react-icons/ri";
import { GET_ALL_SKILLS } from "@/queries/getAllSkills";

export default function AboutPage(props: any) {
    console.log(props)
    const { language } = useContext(GlobalContext);
    const [isHabilitiesOpen, setIsHabilitiesOpen] = useState(false);
    let pageContent = language === "ptBR" ? aboutPageContent.ptBR : aboutPageContent.en;

    function toggleHabilities() {
        setIsHabilitiesOpen(!isHabilitiesOpen);
    }

    return (
        <>
            <Head>
                <title>{ language === "ptBR" ? "Sobre": "About" } | Guilherme Cheng</title>
            </Head>
            <div className=" text-base laptop:text-lg w-full flex flex-col laptop:h-screen">
                <PageTitle 
                    title={pageContent.title}
                    subtitle={pageContent.subtitle}
                />

                <section id="about-content" className=" text-zinc-500 dark:text-zinc-200 text-sm laptop:text-base">
                    <SectionTitle title={pageContent.about.title} />
                    
                    <div className="mt-4">
                        {pageContent.about.text.map((paragraph, i) => {
                            return (
                                <p key={i} className="mb-4 last:mb-0">{paragraph}</p>
                            )
                        })}
                    </div>
                </section>

                <section className="flex flex-col">
                    <SectionTitle title={ language === "ptBR" ? aboutPageContent.habilities.titlePTBR : aboutPageContent.habilities.titleEN }  />
                    
                    {/* <div className={`flex flex-wrap items-center justify-center laptop:grid laptop:grid-cols-3 p-4 gap-y-8 mt-6 tracking-wide transition-all ease-in-out overflow-hidden ${isHabilitiesOpen ? "h-full" : "h-24"}`}> */}
                    <div className={`flex flex-wrap items-center justify-center p-4 gap-y-6 mt-6 tracking-wide transition-all ease-in-out overflow-hidden ${isHabilitiesOpen ? "h-full" : "h-24"}`}>
                    {aboutPageContent.habilities.list.map((item, i) => {
                        return (
                            <ScaleUp key={i}>
                                <img src={item.image} alt={item.name} width={36} height={36} />
                                <p key={i} className={`hidden ${isHabilitiesOpen && "laptop:block "} text-base`}>{item.name}</p>
                            </ScaleUp>
                        )
                    })}

                    </div>
                    <span onClick={toggleHabilities} className="mt-4 w-full laptop:text-end cursor-pointer hover:underline hover:underline-offset-1 text-zinc-600 dark:text-zinc-100 ">
                        <span className="flex gap-x-2 justify-center laptop:justify-end items-center">
                            { language === "ptBR" ? "Mostrar todas": "Show all" }
                            <RiArrowDownSLine size={24} className={`transition-all ease-in-out ${isHabilitiesOpen && "rotate-180"}`} />
                        </span>
                    </span>
                </section>

                <section className="text-zinc-500 dark:text-zinc-100">
                    <SectionTitle title={pageContent.experience.title} />
                    <ul className="mt-4">
                        
                        { pageContent.experience.expHistory.map((exp, i) => {
                            return (
                                <li key={i} className="mb-8 border-l-2 border-amber-400 px-8 relative">
                                    <div className="flex flex-col tablet:flex-row tablet:gap-x-4">
                                        <h1 className="text-xl laptop:text-2xl font-semibold italic">{exp.title}</h1>
                                        <span className="text-sm laptop:text-md font-semibold text-zinc-400 mt-0 tablet:mt-2">{exp.company}</span>
                                    </div>
                                    { language === "ptBR" ? (
                                        <p className="text-sm text-zinc-400 ">de {exp.timeFrom} até {exp.timeTo}</p>
                                    ) : (
                                        <p className="text-sm text-zinc-400 ">from {exp.timeFrom} to {exp.timeTo}</p>
                                    ) }
                                    <ul className="mt-2 pl-2">
                                        { exp.tasks.map( (item, i) =>  <li key={i} className="text-sm laptop:text-base mb-2 last:mb-0 list-disc">{item}</li>  ) }
                                    </ul>
                                </li>
                            )
                        }) }
                        
                    </ul>
                </section>

                <ExperienceTabs experience={pageContent.experience} />
            </div>
        </>
    )
}

export async function getStaticProps({ params }: any) {
    try {
        const { data } = await client.query({ query: GET_ALL_SKILLS });
        console.log(data)

        return {
            props: {
                skillItems: data.skillItems
            }
        }
    } catch (err) {
        console.log(err)

        return {
            props: null,
        }
    }
}