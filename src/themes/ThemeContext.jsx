import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    const handleChangeTheme = () => {
        setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))
    }

    return(
        <ThemeContext.Provider value={{theme, handleChangeTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}

export const useTheme = () => useContext(ThemeContext)