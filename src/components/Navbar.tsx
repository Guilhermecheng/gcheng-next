import Link from "next/link";
import * as Switch from '@radix-ui/react-switch';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface PageProps {
    id: string;
    href: string;
    text: string;
}

export function Navbar() {
    const [darkMode, setDarkModeChecked] = useState(false);
    const router = useRouter();
    const currentRoute = router.pathname;

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

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if(document.documentElement.classList.contains("dark")) {
                setDarkModeChecked(true);
            }
        }
    }, [])

    const pages = [
        {
            id: "home",
            href: "/",
            text: "Home",
        },
        {
            id: "about",
            href: "/about",
            text: "About",
        },
        {
            id: "contact",
            href: "/contact",
            text: "Contact",
        },
        {
            id: "blog",
            href: "/blog",
            text: "Blog",
        },
    ]

    return (
        <div id="sidebar" className='flex flex-col items-center bg-zinc-100 dark:bg-zinc-900 px-4 justify-center h-64 w-full laptop:fixed laptop:w-[40%] laptop:h-screen'>
            <div className=" flex flex-row items-center justify-center">
                <div className='w-32'>
                    <img src="https://github.com/Guilhermecheng.png"  alt="Guilherme's GitHub profile picture" className='rounded-full object-center border-4 border-amber-400' />
                </div>

                <div className='ml-4'>
                    <h1 className="text-zinc-800 dark:text-zinc-100 text-xl font-bold laptop:text-3xl">Guilherme Cheng</h1>
                    <h3 className="text-zinc-500 dark:text-zinc-300 text-sm laptop:text-lg">front end dev, mechanical engineer </h3>
                </div>
            </div>

            <div id="inspirational phrase" className="mt-8 laptop:mt-12 relative">
                <p className="text-zinc-500 dark:text-zinc-300 italic">
                    Lorem, the famous ipsum!
                </p>
                <p className="absolute right-0 text-zinc-500 dark:text-zinc-300 font-semibold">Epictetus</p>
            </div>

            <div id="navbar-menu" className="hidden mt-16 text-zinc-500 dark:text-zinc-100 uppercase laptop:flex laptop:flex-col laptop:items-center laptop:space-y-1">
                { pages.map((page: PageProps) => {
                    return (
                        <Link key={page.id} className={`hover:text-amber-400 ${currentRoute === page.href && "text-amber-400"}`} href={page.href} passHref>
                            { page.text }
                        </Link>
                    )
                }) }
            </div>

            <Switch.Root className="SwitchRoot hidden laptop:block" id="dark-mode" checked={darkMode} onCheckedChange={ () => setDarkModeAtPage(darkMode) }>
                <Switch.Thumb className="SwitchThumb" />
            </Switch.Root>
        </div>
    )
}