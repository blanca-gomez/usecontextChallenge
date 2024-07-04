import "../index.css";
import { useTheme } from "../themes/ThemeContext";
const Button = () => {
    const {theme, handleChangeTheme} = useTheme();

    return(
        <>
            <button onClick={handleChangeTheme} className={`App ${theme}`}>
                Cambiar a {theme === 'light' ? 'dark' : 'light'}
            </button>
        </>
    )
}

export default Button;