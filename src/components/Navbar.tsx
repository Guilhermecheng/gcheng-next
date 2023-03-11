import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import * as Switch from '@radix-ui/react-switch';

import { gql } from "@apollo/client";

import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FiMoon, FiSun } from "react-icons/fi";

import client from "@/services/apolloClient";
import { GlobalContext } from "@/contexts/Contexts";
import { PageFooter } from "./PageFooter";

interface PageProps {
    id: string;
    href: string;
    textEN: string;
    textPTBR: string;
}

interface PhraseProps {
 author: string;
 phrase: string;
}

export function Navbar() {
    const { language, setLanguage, darkModeChecked, setDarkModeChecked } = useContext(GlobalContext);
    
    const [phrase, setPhrase] = useState<PhraseProps>();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const router = useRouter();
    const currentRoute = router.pathname;

    function getRndInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

    useEffect(() => {
        try {
            client.query({
                query: gql `
                    query GetInspirationalPhrases {
                        inspirationalPhrases {
                            author
                            phrase
                        }
                    }
                `
            }).then((response) => {
                let random = getRndInteger(0, response.data.inspirationalPhrases.length);
                setPhrase(response.data.inspirationalPhrases[random]);
            })
            
        } catch(error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [router.asPath, language, darkModeChecked])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if(document.documentElement.classList.contains("dark")) {
                setDarkModeChecked(true);
            }
        }
    }, [])

    function setDarkModeAtPage(checked: boolean) {
        // const isDarkMode = document.documentElement.classList.contains("dark");
        if(checked) {
            setDarkModeChecked(false);
            document.documentElement.classList.remove("dark");
            localStorage.removeItem('theme')

        } else {
            setDarkModeChecked(true);
            document.documentElement.classList.add("dark");
            localStorage.setItem('theme', "dark");
        }
    }

    const pages = [
        {
            id: "home",
            href: "/",
            textEN: "Home",
            textPTBR: "Home",
        },
        {
            id: "about",
            href: "/about",
            textEN: "About",
            textPTBR: "Sobre",
        },
        // {
        //     id: "skills",
        //     href: "/skills",
        //     textEN: "Skills / Exp",
        //     textPTBR: "Skills",
        // },
        {
            id: "projects",
            href: "/projects",
            textEN: "Projects",
            textPTBR: "Projetos",
        },
        {
            id: "contact",
            href: "/contact",
            textEN: "Contact",
            textPTBR: "Contato",
        },
        // {
        //     id: "blog",
        //     href: "/blog",
        //     textEN: "Blog",
        //     textPTBR: "Blog",
        // },
    ]

    return (
        <>
            <Head>
                <meta name="theme-color" content={darkModeChecked ? "#18181b" : "#e4e4e7"} />
            </Head>

            <div id="mobile-menu" className={`${ isMobileMenuOpen ? "h-[100%]" : "h-0" } absolute z-20 bg-zinc-100 dark:bg-zinc-900 w-screen truncate flex flex-col items-center text-center ease-in-out duration-500`}>
                <div className="block h-40"></div>
                <ul className="mt-50">
                    { pages.map((page: PageProps) => {
                        return (
                            <li key={page.id} className="text-zinc-500 dark:text-zinc-100 text-xl uppercase mb-2">
                                <Link  className={`hover:text-amber-400 ${currentRoute === page.href && "text-amber-400"}`} href={page.href} passHref>
                                    { language === "ptBR" ? page.textPTBR : page.textEN }
                                </Link>
                            </li>
                        )
                    }) }
                </ul>
                <Switch.Root className="SwitchRoot mb-2" id="dark-mode" checked={darkModeChecked} onCheckedChange={ () => setDarkModeAtPage(darkModeChecked) }>
                    <Switch.Thumb className="SwitchThumb flex items-center justify-center">
                        { darkModeChecked ? <FiMoon size={12} className="text-zinc-500" /> : <FiSun size={12} className="text-zinc-500" /> }
                    </Switch.Thumb>
                </Switch.Root>

                <div id="language" className=" text-zinc-500 dark:text-zinc-100">
                    <span>Language: <span>{ language === "ptBR" ? (
                        <span className="cursor-pointer text-zinc-800 dark:text-amber-400 hover:underline hover:underline-offset-1" onClick={() => setLanguage("EN")}>BR</span>
                    ) : (
                        <span className="cursor-pointer text-zinc-800 dark:text-amber-400 hover:underline hover:underline-offset-1" onClick={() => setLanguage("ptBR")}>EN</span>
                    ) }</span></span>
                </div>
            </div>

            <div id="sidebar" className='flex flex-col items-center bg-zinc-200 dark:bg-zinc-900 px-4 justify-center h-64 w-full laptop:fixed laptop:w-[40%] laptop:h-screen'>
                

                <div id="mobile-menu" className="flex absolute right-4 top-4 z-40 laptop:hidden text-zinc-800 dark:text-amber-400">
                    { isMobileMenuOpen ? <IoMdClose size={40} onClick={() => setIsMobileMenuOpen(false)} /> : <HiMenuAlt1 size={40} onClick={() => setIsMobileMenuOpen(true)} /> }
                </div>

                <Link href="/">
                    <div className="flex flex-row items-center justify-center mt-6 laptop:mt-0">
                        <div className='w-32 cursor-pointer'>
                            <img src="https://github.com/Guilhermecheng.png"  alt="Guilherme's GitHub profile picture" className='rounded-full object-center border-4 border-amber-400' />
                        </div>

                        <div className='ml-4'>
                            <h1 className="text-zinc-800 dark:text-zinc-100 text-xl font-bold laptop:text-3xl">Guilherme Cheng</h1>
                            <h3 className="text-zinc-500 dark:text-zinc-300 text-sm laptop:text-lg">front end dev, mechanical engineer </h3>
                        </div>
                    </div>
                </Link>

                <div id="inspirational-phrase" className="mt-6 pb-6 laptop:pb-0 laptop:mt-12 text-zinc-500 dark:text-zinc-300 relative">
                    <p className="italic">
                        {/* Lorem, the famous ipsum! */}
                        { phrase && phrase.phrase }
                    </p>
                    <p className="absolute right-0 font-semibold">
                        { phrase && phrase.author }
                    </p>
                </div>

                <div id="navbar-menu" className="hidden mt-16 text-zinc-500 dark:text-zinc-100 uppercase laptop:flex laptop:flex-col laptop:items-center laptop:space-y-1">
                    { pages.map((page: PageProps) => {
                        return (
                            <Link key={page.id} className={`hover:text-amber-400 ${currentRoute === page.href && "text-amber-400"}`} href={page.href} passHref>
                                { language === "ptBR" ? page.textPTBR : page.textEN }
                            </Link>
                        )
                    }) }
                </div>

                <Switch.Root className="SwitchRoot hidden laptop:block fixed bottom-14 left-10" id="dark-mode" checked={darkModeChecked} onCheckedChange={ () => setDarkModeAtPage(darkModeChecked) }>
                    <Switch.Thumb className="SwitchThumb flex items-center justify-center">
                        { darkModeChecked ? <FiMoon size={12} className="text-zinc-500" /> : <FiSun size={12} className="text-zinc-500" /> }
                    </Switch.Thumb>
                </Switch.Root>

                {/* <div id="language" className="absolute bottom-10 hidden laptop:block text-zinc-500 dark:text-zinc-100"> */}
                <div id="language" className="absolute bottom-14 hidden laptop:block text-zinc-500 dark:text-zinc-100">
                    <span>Language: <span>{ language === "ptBR" ? (
                        <span className="cursor-pointer text-zinc-800 dark:text-amber-400 hover:underline hover:underline-offset-1" onClick={() => setLanguage("EN")}>BR</span>
                    ) : (
                        <span className="cursor-pointer text-zinc-800 dark:text-amber-400 hover:underline hover:underline-offset-1" onClick={() => setLanguage("ptBR")}>EN</span>
                    ) }</span></span>
                </div>
                <PageFooter />
            </div>
        </>
    )
}