import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";


import { GlobalContext } from "@/contexts/Contexts";
import InputError from "./InputError";
import axios from "axios";

interface Inputs {
    name: string;
    email: string;
    message: string;
};

interface FormDataProps extends Inputs {
    subject?: string;
}

const schema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    message: Yup.string().required(),
});

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

const toastMessages = {
    ptBR: {
        pending: 'Enviando...',
        success: 'Mensagem enviada com sucesso! 👌 ',
        error: "Não foi possível concluir envio.. Tente novamente",
        tryAgain: "Ops.. Tente novamente"
    },
    en: {
        pending: 'Sending...',
        success: 'Message sent! 👌 ',
        error: "Error sending message.. Please try again",
        tryAgain: "Ops.. Try again"
    }
}

export default function Form() {
    const { language } = useContext(GlobalContext);
    let placeholderLang = language === "ptBR" ? placeholders.ptBR : placeholders.en;
    let toasters = language === "ptBR" ? toastMessages.ptBR : toastMessages.en;

    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({ resolver: yupResolver(schema) });

    const onSubmit: SubmitHandler<FormDataProps> = formData => {
        formData.subject = `Nova mensagem de ${formData.name} em guilhermecheng.com.br!`;
        
        toast.promise(
            axios({
                method: 'post',
                url: `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_API_URL}`,
                data: formData,
                headers: {
              "Content-Type": "application/json",
            },
            }).then(response => {
                if(response.status === 200) {
                    reset()
                }
            })
            , {
                pending: toasters.pending,
                success: toasters.success,
                error: toasters.error,
            }
        )
        
    };

    function onError(error: any) {
        console.log(error)
        toast.error(toasters.tryAgain, {
            theme: "colored",
        });
    }

    return (
        <>
        <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />

        <div className="mt-4 laptop:mt-6 w-full rounded-md mb-4">
            <form onSubmit={handleSubmit(onSubmit, onError)} className="flex flex-col gap-y-4 laptop:gap-y-6 mb-8 laptop:mb-0">
                <input {...register("name")} placeholder={placeholderLang.name} className="rounded-md bg-zinc-200 dark:bg-zinc-900 py-2 px-4 text-zinc-800 dark:text-zinc-100 focus:outline-none focus:border-2 focus:border-amber-400" />
                { errors?.name?.type && <InputError type={errors.name.type} field="name" /> }

                <input {...register("email")} placeholder={placeholderLang.email} className="rounded-md bg-zinc-200 dark:bg-zinc-900 py-2 px-4 text-zinc-800 dark:text-zinc-100 focus:outline-none focus:border-2 focus:border-amber-400" />
                { errors?.email?.type && <InputError type={errors.email.type} field="email" /> }
                
                <textarea {...register("message")} placeholder={placeholderLang.message} className=" rounded-md bg-zinc-200 dark:bg-zinc-900 py-2 px-4 h-40 laptop:h-60 text-zinc-800 dark:text-zinc-100 focus:outline-none focus:border-2 focus:border-amber-400" />
                { errors?.message?.type && <InputError type={errors.message.type} field="message" /> }

                <input type="submit" className="px-4 py-2 bg-amber-400 laptop:w-40  text-zinc-800 cursor-pointer rounded-md hover:bg-amber-300 hover:text-zinc-700 focus:outline-none focus:border-2 focus:border-blue-600" />
            </form>
        </div>
        </>
    )
}