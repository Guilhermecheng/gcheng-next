import { ReactNode } from "react";
import { Navbar } from "./Navbar";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="flex flex-col w-full laptop:h-screen">
            <Navbar />
            <div className="laptop:w-[60%] laptop:h-screen laptop:absolute laptop:right-0 bg-white dark:bg-zinc-800">
                {children}
            </div>
        </div>
    )
}