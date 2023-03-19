import {useContext} from "react"
import {ThemeContext} from "./theme-context-provider"

export default function Footer() {
    const themeContextValue = useContext(ThemeContext)

    return <div>
        Burası footer,
        Tema rengi: {themeContextValue.themeColor}
    </div>
}
