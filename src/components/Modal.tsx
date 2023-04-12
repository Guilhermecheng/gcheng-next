import React, { useContext, useRef } from 'react';
import Link from "next/link";

import * as Dialog from '@radix-ui/react-dialog';
import { IoClose } from 'react-icons/io5';
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs';

import { GlobalContext } from '@/contexts/Contexts';
import { StackBlock } from './StackBlock';


export function Modal() {
    const { language, modalContent } = useContext(GlobalContext);
    const imgRef = useRef(null);
    let projDescription = language === "ptBR" ? modalContent.description : modalContent.descriptionEN;

    return (
        <Dialog.Portal>
            <Dialog.Overlay className='fixed w-full h-full inset-0 bg-neutral-900 opacity-70 border-none ' />

            <Dialog.Content className='fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                {modalContent ? (
                    <div className='mt-4 flex flex-col rounded-md py-4 w-[80vw] max-w-[1000px] max-h-[90vh] text-zinc-700 dark:text-zinc-200 bg-zinc-200 dark:bg-neutral-700'>

                        <section className='flex px-6'>
                            <span className="flex items-center gap-x-6 w-full">

                                <h1 className="text-zinc-800 dark:text-amber-400 text-lg laptop:text-2xl font-semibold ">{modalContent.title}</h1>
                                { modalContent.link && (
                                    <Link href={modalContent.link} target="_blank" className="invisible tablet:visible">
                                        <BsBoxArrowUpRight size={20} className="cursor-pointer hover:text-amber-400" />
                                    </Link>
                                )}

                                {modalContent.githubLink && (
                                    <Link href={modalContent.githubLink} target="_blank" className="invisible tablet:visible">
                                        <BsGithub size={20} className="cursor-pointer hover:text-amber-400" />
                                    </Link>
                                )}
                            </span>

                            <Dialog.Close>
                                <IoClose size={30} className="cursor-pointer hover:text-amber-400" />
                            </Dialog.Close>
                        </section>

                        <section className='my-2'>
                            {modalContent.link && <iframe src={modalContent.link} className="w-full min-h-[50vh] rounded-md hidden laptop:block scrollbar-thumb-rounded-full scrollbar-thumb-zinc-300 scrollbar-track-white dark:scrollbar-thumb-zinc-600 dark:scrollbar-track-zinc-800"></iframe>}
                            
                            <div className={`${modalContent.link ? "laptop:hidden" : ""} laptop:mt-2 w-full flex justify-center bg-zinc-900`} ref={imgRef}>
                                <img src={modalContent.screen} alt={modalContent.screenAlt} className="h-[200px] tablet:h-[380px]"  />
                            </div>

                            <div className="w-full grid grid-cols-2 py-2 px-4 tablet:hidden laptop:px-12 gap-2">
                                { modalContent.link && (
                                    <span className="w-full flex tablet:hidden justify-center gap-x-2 underline underline-offset-2 cursor-pointer hover:text-amber-400">
                                        <Link href={modalContent.link} target="_blank">
                                            <BsBoxArrowUpRight size={20} />
                                        </Link>
                                    </span> 
                                ) }

                                { modalContent.githubLink && (
                                    <span className="w-full flex tablet:hidden justify-center gap-x-2 underline underline-offset-2 cursor-pointer hover:text-amber-400">
                                        <Link href={modalContent.githubLink} target="_blank">
                                            <BsGithub size={20} />
                                        </Link>
                                    </span>
                                ) }
                            </div>
                        </section>

                        <section className='px-6 pt-4 mb-2 max-h-[40vh] overflow-auto scrollbar-thumb-rounded-full scrollbar-thumb-zinc-300 scrollbar-track-white dark:scrollbar-thumb-zinc-600 dark:scrollbar-track-zinc-800'>
                            {projDescription.map((paragraph: string, i: number) => {
                                return (
                                    <p key={i} className="mb-2 last:mb-0 text-sm laptop:text-base first:text-xl first:laptop:text-lg first:font-semibold first:mb-4">{paragraph}</p>
                                )
                            })}
                        </section>

                        <section className='mx-6 mt-2 bg-zinc-200 dark:bg-zinc-800 pt-2 pb-4 px-4 rounded-md'>
                            {modalContent.stack.length > 0 && <h1 className='mb-2 text-lg font-semibold'>Stack do projeto:</h1>}
                            <div className='flex flex-wrap gap-4'>
                                {modalContent.stack.map((tech: string, i: number) => {
                                    return (
                                        <StackBlock stack={tech} />
                                    )
                                })}
                            </div>
                        </section>
                    </div>
                ) : (
                    <div className='mt-4 flex items-center justify-center rounded-md py-4 w-[80vw] max-w-[1000px] max-h-[90%] text-zinc-700 dark:text-zinc-200 bg-zinc-200 dark:bg-neutral-700'>
                        Ooops.. something went wrong
                    </div>
                )}
            </Dialog.Content>
        </Dialog.Portal>
    )
}