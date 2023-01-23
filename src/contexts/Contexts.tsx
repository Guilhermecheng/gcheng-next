import { createContext, useState } from "react";

export const GlobalContext = createContext<any>(null);

export const Contexts = (props: any) => {

    const [language, setLanguage] = useState("ptBR"); // ptBR or EN
    const [darkModeChecked, setDarkModeChecked] = useState(false);


    return (
        <GlobalContext.Provider value={{
            language,
            setLanguage,
            darkModeChecked,
            setDarkModeChecked
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
}