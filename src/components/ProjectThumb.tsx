import { BiSearchAlt } from "react-icons/bi";

interface ProjectProps {
    title: string;
    description: string[];
    descriptionEN: string[];
    image: string;
    imgAlt: string;
    screen:string;
    screenAlt: string;
    link: string;
    githubLink?: string;
}

interface ProjectThumbProps {
    key: number;
    project: ProjectProps;
    onClickFunction: (proj: ProjectProps) => void;
    language: string;
}

export function ProjectThumb({ key, onClickFunction, project, language }: ProjectThumbProps) {
    return (
        <li key={key} onClick={ () => onClickFunction(project) } className="relative flex flex-col w-full rounded-lg overflow-hidden dark:border-2 dark:border-zinc-500 hover:border-2 hover:border-amber-400 hover:dark:border-amber-400 hover:cursor-pointer group">

            <img src={project.image} alt={project.imgAlt} className='w-full bg-center bg-no-repeat' />
            <div className="absolute bottom-0 w-full h-full flex items-center justify-center bg-zinc-700 opacity-0 laptop:opacity-0 laptop:group-hover:opacity-80 transition ease-in-out duration-300 z-20 cursor-pointer">
                { language === "ptBR" ? <p className="p-2 text-zinc-100">Saiba mais</p> : <p className="p-2 text-zinc-100">See more</p> }
                <BiSearchAlt size={40} className="text-zinc-100" />
            </div>
        
        </li>
    )
}