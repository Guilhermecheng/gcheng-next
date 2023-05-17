import Link from "next/link";
import { RiFilePaperFill } from "react-icons/ri"

interface SocialMediaListProps {
    darkModeChecked: boolean;
}

// sizes: 50, 36
const contactMedias = [
    {
        name: "Github",
        linkName: "/Guilhermecheng",
        link: "https://github.com/Guilhermecheng",
        // logo: <FaGithub size={40} />,
        logo: <img src="/github.svg" alt="github" width={36} height={36} />,
        logoDark: <img src="/github-white.svg" alt="github" width={36} height={36} />,
    },
    {
        name: "Linkedin",
        linkName: "/guilherme-cheng",
        link: "https://www.linkedin.com/in/guilherme-cheng/",
        // logo: <FaLinkedin size={40} />,
        logo: <img src="/linkedin.svg" alt="linkedin" width={36} height={36} />,
    },
    {
        name: "DEV.to",
        linkName: "/guilhermecheng",
        link: "https://dev.to/guilhermecheng",
        // logo: <BsInstagram size={40} />,
        logo: <img src="/dev-dot.svg" alt="dev dot" width={36} height={36} />,
        logoDark: <img src="/dev-dot-white.svg" alt="github" width={36} height={36} />,
    },
    {
        name: "Resumé",
        linkName: "Resumé",
        link: "https://guilhermecheng.notion.site/Resum-Guilherme-Ferreira-Cheng-72ec02b4c8cc4c078af63ced001e8b07",
        logo: <RiFilePaperFill size={36} />,
    },
]

export default function SocialMediaList({ darkModeChecked }: SocialMediaListProps) {
    return (
        <>
        {/* <div className="mt-6 laptop:mt-8 flex flex-wrap justify-center laptop:justify-start gap-4">
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
        </div> */}

        <div className="mt-6 tablet:grid tablet:grid-cols-2 gap-x-10">
            { contactMedias.map((media) => {
                return (
                    <Link key={media.name} href={media.link} target="_blank">
                        <div className="flex items-center  mb-2 hover:bg-zinc-100 hover:dark:bg-zinc-900 rounded-md cursor-pointer">
                            <span className="p-4 ">
                                { (darkModeChecked && media.logoDark) ? <span>{ media.logoDark }</span> : <span>{ media.logo }</span> }
                            </span>
                            <span className="text-lg font-semibold italic">{ media.linkName }</span>
                        </div>
                    </Link>
                )
            })}

        </div>
        </>
    )
}