import { createContext, useState } from "react";

interface ModalContentProps {
    title: string;
    description: string[];
    descriptionEN: string[];
    image: string;
    imgAlt: string;
    link: string;
    stack: string[]
}

export const GlobalContext = createContext<any>({
    isModalOpen: false,
    modalContent: {
        title: "Guilherme Cheng",
        description: ["Este website!"],
        descriptionEN: ["This website!"],
        image: "",
        imgAlt: "",
        link: "",
        stack: []
    }
});

export const Contexts = (props: any) => {

    const [language, setLanguage] = useState("ptBR"); // ptBR or EN
    const [darkModeChecked, setDarkModeChecked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<ModalContentProps>({
        title: "Guilherme Cheng",
        description: ["Este website!"],
        descriptionEN: ["This website!"],
        image: "",
        imgAlt: "",
        link: "",
        stack: []
    })


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