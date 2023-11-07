import { GlobalContext } from "@/contexts/Contexts";
import { useContext } from "react";
import { SectionTitle } from "./SectionTitle"

import * as Tabs from '@radix-ui/react-tabs';

interface ExperienceTabsProps {
    experience: {
        title: string;
        text: string;
        expHistory: {
            title: string;
            company: string;
            timeFrom: string;
            timeTo: string;
            tasks: string[];
        }[];
    };
}

export function ExperienceTabs({ experience }: ExperienceTabsProps) {
    const { language } = useContext(GlobalContext);

    return (
        <section className="text-zinc-500 dark:text-zinc-100 mt-4 mb-8">
            <SectionTitle title={experience.title} />

            <Tabs.Root className="mt-4" defaultValue={experience.expHistory[0].title}>
                <div className="w-full flex flex-col laptop:grid laptop:grid-cols-7 laptop:gap-16">
                    <Tabs.List className="flex laptop:flex-col mb-8 laptop:mb-0 laptop:col-span-2">
                        { experience.expHistory.map((exp, i) => {
                            return (
                                <Tabs.Trigger key={i} value={exp.title} className="p-4 rounded-lg laptop:w-full data-[state=active]:bg-zinc-900 flex flex-col items-center justify-center">
                                    <h1 className="text-lg laptop:text-xl font-semibold text-center">{exp.title}</h1>
                                    <span className="text-xs laptop:text-sm text-zinc-300">{exp.timeFrom} - {exp.timeTo}</span>
                                </Tabs.Trigger>
                            )
                        })}
                    </Tabs.List>

                    <div className="laptop:col-span-5 laptop:col-start-3">
                        { experience.expHistory.map((exp, i) => {
                            return (
                                <Tabs.Content key={i} value={exp.title} className="mb-8 border-l-2 border-amber-400 px-8">
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
                                </Tabs.Content>
                            )
                        })}
                    </div>
                </div>
            </Tabs.Root>
        </section>
    )
}