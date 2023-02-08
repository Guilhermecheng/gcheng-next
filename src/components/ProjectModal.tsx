import { GlobalContext } from "@/contexts/Contexts";
import { useContext, useRef, useState } from "react";

import { IoClose } from 'react-icons/io5';
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs';
import Link from "next/link";
import { AnimatePresence } from 'framer-motion'
import { BounceInDownDiv } from './BounceinDown';


export function ProjectModal() {
    const { setIsModalOpen, modalContent } = useContext(GlobalContext);
    const imgRef = useRef(null);
    

    return (
        <div className={`fixed top-0 z-50 w-screen h-screen`}>
            <div className="relative top-0 left-0 w-full h-full  bg-neutral-900 opacity-70 transform transition-all" onClick={() => setIsModalOpen(false)}></div> // modal background

            <div className="absolute left-[10%] twelve-hundred:left-[calc((100%-1000px)/2)] top-[15%] laptop:top-[5%] bg-zinc-200 dark:bg-neutral-700 w-[80%] h-[70%] laptop:h-[90%] max-w-[1000px] text-zinc-700 dark:text-zinc-200 rounded-lg overflow-hidden transform transition-all">
                <AnimatePresence>
                    { modalContent ? (
                        <BounceInDownDiv className="w-full flex flex-col items-center justify-center py-4 laptop:py-6">
                            <div id="modal-header" className=" px-4 laptop:px-10 h-10 w-full">
                                <span className="flex items-center gap-x-6 w-full">
                                    <h1 className="text-zinc-800 dark:text-amber-400 text-lg laptop:text-2xl font-semibold ">{modalContent.title}</h1>
                                    <Link href={modalContent.link} target="_blank" className="invisible tablet:visible">
                                        <BsBoxArrowUpRight size={20} className="cursor-pointer hover:text-amber-400" />
                                    </Link>
                                    {modalContent.githubLink && (
                                        <Link href={modalContent.githubLink} target="_blank" className="invisible tablet:visible">
                                            <BsGithub size={20} className="cursor-pointer hover:text-amber-400" />
                                        </Link>
                                    )}
                                </span>

                                <span onClick={() => setIsModalOpen(false)} className="absolute right-4 cursor-pointer hover:text-amber-400 laptop:right-10 top-4 laptop:top-6">
                                    <IoClose size={30} />
                                </span>
                            </div>
                            {/* <iframe src={modalContent.link} className="w-full h-80 laptop:h-[600px] rounded-lg"></iframe> */}
                            <div className="laptop:mt-2 w-full flex justify-center bg-zinc-900" ref={imgRef}>
                                <img src={modalContent.screen} alt={modalContent.screenAlt} className="tablet:max-h-[380px] laptop:max-h-[500px]"  />
                            </div>
                            <div className="w-full grid grid-cols-2 py-2 px-4 laptop:px-12 gap-2">
                                    <span className="w-full flex tablet:hidden justify-center gap-x-2 underline underline-offset-2 cursor-pointer hover:text-amber-400">
                                        <Link href={modalContent.link} target="_blank">
                                            <BsBoxArrowUpRight size={20} />
                                        </Link>
                                    </span> 
                                    { modalContent.githubLink && <span className="w-full flex tablet:hidden justify-center gap-x-2 underline underline-offset-2 cursor-pointer hover:text-amber-400">
                                        <Link href={modalContent.githubLink} target="_blank">
                                            <BsGithub size={20} />
                                        </Link>
                                    </span> }
                            </div>
                            
                            <div className="w-full px-4 laptop:px-12 py-4 tablet:pt-6 flex flex-col max-h-64 tablet:max-h-48 laptop:max-h-64 overflow-auto">
                                {modalContent.description.map((paragraph: string, i: number) => {
                                    return (
                                        <p key={i} className="mb-2 last:mb-0 text-sm laptop:text-base">{paragraph}</p>
                                    )
                                })}
                            </div>
                        </BounceInDownDiv>

                    ) : (
                        <>
                            error
                        </>
                    ) }
                </AnimatePresence>
                
            </div>
        </div>
    )
}