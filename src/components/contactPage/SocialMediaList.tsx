import Link from "next/link";
import { RiFilePaperFill } from "react-icons/ri"

interface SocialMediaListProps {
    darkModeChecked: boolean;
}

const contactMedias = [
    {
        name: "Github",
        link: "https://github.com/Guilhermecheng",
        // logo: <FaGithub size={40} />,
        logo: <img src="/github.svg" alt="github" width={50} height={50} />,
        logoDark: <img src="/github-white.svg" alt="github" width={50} height={50} />,
    },
    {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/guilherme-cheng/",
        // logo: <FaLinkedin size={40} />,
        logo: <img src="/linkedin.svg" alt="linkedin" width={50} height={50} />,
    },
    // {
    //     name: "Instagram",
    //     link: "https://instagram.com/guilhermecheng/",
    //     // logo: <BsInstagram size={40} />,
    //     logo: <img src="/instagram.svg" alt="instagram" width={50} height={50} />,
    // },
    {
        name: "Resumé",
        // link: "https://guilhermecheng.notion.site/CV-Guilherme-Ferreira-Cheng-eefed60dfd0941e8899c75d182551acd/",
        link: "https://guilhermecheng.notion.site/Resum-Guilherme-Ferreira-Cheng-72ec02b4c8cc4c078af63ced001e8b07",
        logo: <RiFilePaperFill size={50} />,
    },
]

export default function SocialMediaList({ darkModeChecked }: SocialMediaListProps) {
    return (
        <div className="mt-6 laptop:mt-8 flex flex-wrap justify-center laptop:justify-start gap-4">
            { contactMedias.map((media) => {
                return (
                    // <div key={media.name} className="flex flex-col items-center justify-center py-4 laptop:py-8 w-36 laptop:w-40 border rounded-full cursor-pointer hover:bg-amber-400 hover:text-zinc-800">
                    <Link key={media.name} href={media.link} target="_blank" className="flex flex-col py-4 laptop:py-8 w-36 laptop:w-40 rounded-md cursor-pointer bg-zinc-100 dark:bg-zinc-900 tablet:hover:bg-amber-400 tablet:hover:dark:bg-amber-400 tablet:hover:text-zinc-800 focus:outline-none focus:border-2 focus:border-amber-400">
                        <span className="flex flex-col items-center gap-y-4" >
                            { (darkModeChecked && media.logoDark) ? <span>{ media.logoDark }</span> : <span>{ media.logo }</span> }
                            <span>{ media.name }</span>
                        </span>
                    </Link>
                )
            }) }
        </div>
    )
}