import { useContext } from "react";
import { GlobalContext } from "@/contexts/Contexts";


interface InputErrorProps {
    type: string;
    field: string;
}
interface ValidationType {
    [key: string]: string;
}

type validationProps = { 
    ptBR: {
        [key: string]: ValidationType;
    };
    en: {
        [key: string]: ValidationType;
    };
}

const validations: validationProps  = {
    ptBR: {
        name: {
            required: "Nome obrigatório"
        },
        email: {
            required: "E-mail obrigatório",
            email: "O e-mail informado é inválido",
        },
        message: {
            required: "Digite sua mensagem"
        }
    },
    en: {
        name: {
            required: "Name is required"
        },
        email: {
            required: "E-mail is required",
            email: "Informed e-mail is invalid",
        },
        message: {
            required: "Please write your message"
        }
    }
}

function InputError({ type, field }: InputErrorProps) {
    const { language } = useContext(GlobalContext);
    let validationSet = language === "ptBR" ? validations.ptBR : validations.en;

    return(
        <>
            { type && (
                <span className="text-red-400 text-sm mt-[-10px] laptop:mt-[-16px]">
                    { validationSet[field][type] }
                </span>
            ) }
        </>
    )
}

export default InputError;