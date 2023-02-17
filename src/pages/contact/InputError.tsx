

interface InputErrorProps {
    type: string;
    field: string;
}

const validations:  { [key: string]: any } = {
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

export default function InputError({ type, field }: InputErrorProps) {
    return(
        <span className="text-red-400 text-sm mt-[-10px] laptop:mt-[-16px]">
            { validations[field][type] }
        </span>
    )
}
