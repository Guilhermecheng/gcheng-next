import { createContext, useState } from "react";

interface ModalContentProps {
    title: string;
    description: string;
    image: string;
    imgAlt: string;
    link: string;
}

export const GlobalContext = createContext<any>(null);

export const Contexts = (props: any) => {

    const [language, setLanguage] = useState("ptBR"); // ptBR or EN
    const [darkModeChecked, setDarkModeChecked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<ModalContentProps | null>()


    return (
        <GlobalContext.Provider value={{
            language,
            setLanguage,
            darkModeChecked,
            setDarkModeChecked,
            isModalOpen,
            setIsModalOpen,
            modalContent,
            setModalContent,
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
}