import { GlobalContext } from "@/contexts/Contexts";
import { useContext, useState } from "react";

import { IoClose } from 'react-icons/io5';

export function ProjectModal() {
    const { setIsModalOpen, modalContent } = useContext(GlobalContext);

    return (
        <div className={`fixed top-0 z-50 w-screen h-screen`}>
            <div className="relative top-0 left-0 w-full h-full  bg-neutral-900 opacity-70" onClick={() => setIsModalOpen(false)}></div> // modal background

            <div className="absolute left-[10%] twelve-hundred:left-[calc((100%-1200px)/2)] top-[5%] bg-zinc-200 dark:bg-neutral-700 w-[80%] h-[90%] max-w-[1200px] text-zinc-700 dark:text-zinc-200 rounded-lg">
                { modalContent ? (

                    <div className="w-full flex flex-col items-center justify-center py-4 laptop:py-8">
                        <div id="modal-header" className="px-10 h-10 w-full">
                            <h1 className="text-zinc-800 dark:text-amber-400 text-lg laptop:text-2xl font-semibold w-full">{modalContent.title}</h1>

                            <span onClick={() => setIsModalOpen(false)} className="absolute right-4 laptop:right-10 top-4 laptop:top-8">
                                <IoClose size={30} />
                            </span>
                        </div>
                        {/* <iframe src={modalContent.link} className="w-full h-80 laptop:h-[600px] rounded-lg"></iframe> */}
                        <div className="laptop:mt-4 w-full flex justify-center bg-zinc-900">
                            <img src={modalContent.screen} alt={modalContent.screenAlt} className="max-h-[500px]"  />
                        </div>
                        <div className="w-full p-10 flex ">
                            <p>{modalContent.description}</p>
                        </div>
                    </div>

                ) : (
                    <>
                        error
                    </>
                ) }
                
            </div>
        </div>
    )
}