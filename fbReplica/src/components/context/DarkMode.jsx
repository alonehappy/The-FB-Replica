import { createContext,useState,useEffect } from "react";
import useLocalStorage from 'use-local-storage'


const DarkLightMode = createContext();

export const ThemeContextProvider = ({children})=>{
    const [theme,setTheme] = useLocalStorage('theme','light')
    const [onswitch, setOnSwitch] = useState(false);
    const toggleTheme =()=>{
        const newTheme = theme==='light'?'dark':'light'
        setTheme(newTheme)
        setOnSwitch(!onswitch)
    }
    useEffect(() => {
        if (theme === "dark") {
          setOnSwitch(true);
        }
      }, [theme]);
    return (
        <DarkLightMode.Provider value={{theme,toggleTheme,onswitch}}>
            {children}
        </DarkLightMode.Provider>
    )

}

export default DarkLightMode;