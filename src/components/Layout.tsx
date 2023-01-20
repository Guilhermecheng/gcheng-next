import { ReactNode } from "react";
import { Navbar } from "./Navbar";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="flex flex-col tablet:items-center laptop:items-start w-full laptop:h-screen">
            <Navbar />
            <div className="bg-white dark:bg-zinc-800 px-8 laptop:px-12 laptop:w-[60%] laptop:h-screen laptop:absolute laptop:right-0">
                {children}
            </div>
        </div>
    )
}