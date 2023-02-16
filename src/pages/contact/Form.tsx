import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { GlobalContext } from "@/contexts/Contexts";

interface Inputs {
    name: string;
    email: string;
    message: string;
};

const placeholders = {
    ptBR: {
        name: "Nome",
        email: "Email",
        message: "Mensagem",
    },
    en: {
        name: "Name",
        email: "Email",
        message: "Message",
    }
}

export function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    const { language } = useContext(GlobalContext);

    let placeholderLang = language === "ptBR" ? placeholders.ptBR : placeholders.en;

    return (
        <div className="mt-4 laptop:mt-6 w-full rounded-md">
        
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4 mb-8 laptop:mb-0">
                <input {...register("name")} placeholder={placeholderLang.name} className="rounded-md bg-zinc-200 dark:bg-zinc-900 py-2 px-4 text-zinc-800 dark:text-zinc-100 focus:outline-none focus:border-2 focus:border-amber-400" />
                <input {...register("email")} placeholder={placeholderLang.email} className="rounded-md bg-zinc-200 dark:bg-zinc-900 py-2 px-4 text-zinc-800 dark:text-zinc-100 focus:outline-none focus:border-2 focus:border-amber-400" />
                <textarea {...register("message")} placeholder={placeholderLang.message} className=" rounded-md bg-zinc-200 dark:bg-zinc-900 py-2 px-4 h-40 laptop:h-60 text-zinc-800 dark:text-zinc-100 focus:outline-none focus:border-2 focus:border-amber-400" />

                <input type="submit" className="px-4 py-2 bg-amber-400 laptop:w-40  text-zinc-800 cursor-pointer rounded-md hover:bg-amber-300 hover:text-zinc-700 focus:outline-none focus:border-2 focus:border-blue-600" />
            </form>
        </div>
    )
}