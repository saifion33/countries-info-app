import { useState } from "react";
import StyleContext from "./styleContext";

const StyleState = (props) => {
    const font = {
        fontFamily: `'Nunito Sans', sans - serif`
    }
    const lightThemeMain = {
        backgroundColor: "hsl(0, 0%, 98%)",
    }
    const lightThemeElement = {
        ...font,
        backgroundColor: "hsl(0, 0%, 100%)",
        color: "hsl(200, 15%, 8%)",
        boxShadow: '0 0 5px hsl(0, 0%, 80%)',
    }
    const darkThemeMain = {
        backgroundColor: " hsl(207, 26%, 17%)",
    }
    const darkThemeElement = {
        backgroundColor: "hsl(209, 23%, 22%)",
        color: "hsl(0, 0%, 100%)"
    }
    const [lightTheme, setLightTheme] = useState(true)

    const [stylesheet, setStylesheet] = useState({
        mainTheme: lightThemeMain,
        elementTheme: lightThemeElement
    })

    const changeTheme = () => {
        if (lightTheme) {
            setStylesheet({
                mainTheme: darkThemeMain,
                elementTheme: darkThemeElement
            })
            setLightTheme(false)
        }
        else {
            setStylesheet({
                mainTheme: lightThemeMain,
                elementTheme: lightThemeElement
            })
            setLightTheme(true)
        }
    }

    return (
        <StyleContext.Provider value={{ stylesheet, changeTheme, lightTheme }} >
            {props.children}
        </StyleContext.Provider>
    )
}
export default StyleState