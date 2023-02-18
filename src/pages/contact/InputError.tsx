

interface InputErrorProps {
    type: string;
    field: string;
}
interface ValidationType {
    [key: string]: string;
}

type validationProps = { 
    [key: string]: ValidationType
}

const validations: validationProps  = {
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
}

function InputError({ type, field }: InputErrorProps) {
    return(
        <>
            { type && (
                <span className="text-red-400 text-sm mt-[-10px] laptop:mt-[-16px]">
                    { validations[field][type] }
                </span>
            ) }
        </>
    )
}

export default InputError;