import {createContext, useState} from "react"

export const ThemeContext = createContext({})

export default function ThemeContextProvider(props) {
    const [themeColor, setThemeColor] = useState('dark')

    const contextProviderValue = {
        // light, dark, system
        themeColor, setThemeColor
    }

    return <ThemeContext.Provider value={contextProviderValue}>
        {props.children}
    </ThemeContext.Provider>
}
