import { ReactNode, useContext, useEffect, useState } from "react";

import { Navbar } from "./Navbar";
import { useRouter } from "next/router";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    const router = useRouter();
    const [showMenuHideButton, setShowMenuHideButton] = useState(false);
    const [isMenuClosed, setIsMenuClosed] = useState(false);
    console.log(router)

    useEffect(() => {
        if(router.pathname === '/blog' || router.pathname === '/blog/[slug]') {
            setShowMenuHideButton(true);
        } else {
            setShowMenuHideButton(false);
        }
    },[router])

    return (
        <div className="flex flex-col tablet:items-center laptop:items-start w-full laptop:h-screen">
            <Navbar
                menuState={ {isMenuClosed, setIsMenuClosed} }
                menuButton={ { showMenuHideButton, setShowMenuHideButton } }
            />

            <div className={`w-full px-4 pt-4 laptop:px-12 ${isMenuClosed ? "laptop:w-[90%]" : "laptop:w-[60%]"} laptop:h-screen laptop:absolute laptop:right-0 transition-all duration-150`}>
                {children}
            </div>
        </div>
    )
}