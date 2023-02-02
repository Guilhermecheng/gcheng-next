import { GlobalContext } from "@/contexts/Contexts";
import { ReactNode, useContext } from "react";
import { Navbar } from "./Navbar";
import { PageFooter } from "./PageFooter";
import { ProjectModal } from "./ProjectModal";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    const { isModalOpen } = useContext(GlobalContext);


    return (
        <div className="flex flex-col tablet:items-center laptop:items-start w-full laptop:h-screen">
            { isModalOpen && <ProjectModal /> }
            <Navbar />
            <div className="px-4 pt-4 laptop:pt-8 laptop:px-12 laptop:w-[60%] laptop:h-screen laptop:absolute laptop:right-0">
                {children}
            </div>
            {/* <PageFooter /> */}
        </div>
    )
}