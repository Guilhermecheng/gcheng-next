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
        <section className="text-zinc-500 dark:text-zinc-100">
            <SectionTitle title={experience.title} />

            <Tabs.Root className="mt-4" defaultValue={experience.expHistory[0].title}>
                <Tabs.List>
                    { experience.expHistory.map((exp, i) => {
                        return (
                            <Tabs.Trigger key={i} value={exp.title}>
                                <h1 className="text-xl laptop:text-2xl font-semibold italic">{exp.title}</h1>
                            </Tabs.Trigger>
                        )
                    })}
                </Tabs.List>


                { experience.expHistory.map((exp, i) => {
                    return (
                        <Tabs.Content key={i} value={exp.title} className="mb-8 border-l-2 border-amber-400 px-8 relative">
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

            </Tabs.Root>

        </section>
    )
}