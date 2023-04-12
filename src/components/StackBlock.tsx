import { motion } from "framer-motion";

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
        <div className="">
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center justify-center bg-zinc-200 dark:bg-zinc-600 py-2 px-4 h-16 rounded-md text-zinc-600 dark:text-white overflow-hidden"
            >
                <img src={technologyUsed.image} alt={technologyUsed.name} className="w-[24px] h-[24px] tablet:w-[30px] tablet:h-[30px]" />
            </motion.div>
        </div>
    )
}