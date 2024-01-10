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

interface skillProps {
    id: string;
    skillName: string;
    skillSlugId: string;
    skillImage: {
        url: string;
    };
}[];

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
            <div className="text-base laptop:text-lg w-full flex flex-col laptop:h-screen">
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