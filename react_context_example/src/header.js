import {useContext} from "react"
import {ThemeContext} from "./theme-context-provider"

export default function Header() {
    const themeContextValue = useContext(ThemeContext)

    return <div>
        Burası header,
        theme color: {themeContextValue.themeColor}
    </div>
}
