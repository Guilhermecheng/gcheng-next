import { motion } from "framer-motion";
import * as Tooltip from '@radix-ui/react-tooltip';

export interface TechProps {
    name: string;
    image?: string;
}

interface StackProps extends TechProps {
    id: string;
}

interface StackBlockProps {
    stack: string;
}

type Dict = { 
    [key: string]: TechProps;
}

const completeStack: Dict = {
    react: {
        name: "ReactJS",
        image: "/react.svg",
    },
    next: {
        name: "NextJS",
        image: "/next-js.svg",
    },
    tailwind: {
        name: "TailwindCSS",
        image: "/tailwindcss.svg",
    },
    typescript: {
        name: "Typescript",
        image: "/typescript.svg",
    },
    graphql: {
        name: "GraphQL",
        image: "/graphql.svg",
    },
    node: {
        name: "NodeJS",
        image: "/nodejs.svg",
    },
    firebase: {
        name: "Firebase",
        image: "/firebase.svg",
    },
    python: {
        name: "Python",
        image: "/python.svg",
    },
    javascript: {
        name: "Javascript",
        image: "/javascript.svg",
    },
    html: {
        name: "HTML 5",
        image: "/html.svg",
    },
    css: {
        name: "CSS",
        image: "/css.svg",
    },
    styled_components: {
        name: "Styled Components",
        image: "/styled-components.svg",
    },
    astro: {
        name: "Astro",
        image: "/astro.svg"
    }
}

const completeStackList: StackProps[] = [
    {
        id: "react",
        name: "ReactJS",
        image: "/react.svg",
    },
    {
        id: "next",
        name: "NextJS",
        image: "/next-js.svg",
    },
    {
        id: "tailwind",
        name: "TailwindCSS",
        image: "/tailwindcss.svg",
    },
    {
        id: "typescript",
        name: "Typescript",
        image: "/typescript.svg",
    },
    {
        id: "graphql",
        name: "GraphQL",
        image: "/graphql.svg",
    },
    {
        id: "node",
        name: "NodeJS",
        image: "/nodejs.svg",
    },
    {
        id: "firebase",
        name: "Firebase",
        image: "/firebase.svg",
    },
    {
        id: "python",
        name: "Python",
        image: "/python.svg",
    },
    {
        id: "javascript",
        name: "Javascript",
        image: "/javascript.svg",
    },
    {
        id: "html",
        name: "HTML 5",
        image: "/html.svg",
    },
    {
        id: "css",
        name: "CSS",
        image: "/css.svg",
    }
]

export function StackBlock({stack}: StackBlockProps) {
    let technologyUsed = completeStack[stack];
    console.log(technologyUsed)

    return (
        <Tooltip.Provider>
            <Tooltip.Root delayDuration={250}>
                <Tooltip.Trigger asChild>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="flex items-center justify-center bg-zinc-400 dark:bg-zinc-500 p-2 h-10 rounded-md text-zinc-600 dark:text-white overflow-hidden"
                    >
                        <img src={technologyUsed.image} alt={technologyUsed.name} className="w-[24px] h-[24px] " />
                    </motion.div>
                </Tooltip.Trigger>

                <Tooltip.Portal>
                    <Tooltip.Content className="bg-zinc-600 px-2 py-2 rounded-md text-zinc-100 text-sm border-none">
                        {technologyUsed.name}
                        <Tooltip.Arrow fill="rgb(82 82 91)" />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    )
}