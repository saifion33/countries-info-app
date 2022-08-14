import { useState } from "react";
import context from "./context";

const MainState = (props) => {

    // ******************************  THEME RELATED ************************************************************

    const lightThemeMain = {
        backgroundColor: "hsl(0, 0%, 98%)",
    }
    const lightThemeElement = {
        backgroundColor: "hsl(0, 0%, 100%)",
        color: "hsl(200, 15%, 8%)",
    }
    const darkThemeMain = {
        backgroundColor: " hsl(207, 26%, 17%)",
    }
    const darkThemeElement = {
        backgroundColor: "hsl(209, 23%, 22%)",
        color: "hsl(0, 0%, 100%)",
        boxShadow: "none",
    }
    const [lightTheme, setLightTheme] = useState(true)

    const [stylesheet, setStylesheet] = useState({
        mainTheme: lightThemeMain,
        elementTheme: lightThemeElement,

    })

    const changeTheme = () => {
        if (lightTheme) {
            setStylesheet({
                mainTheme: darkThemeMain,
                elementTheme: darkThemeElement,

            })
            setLightTheme(false)
        }
        else {
            setStylesheet({
                mainTheme: lightThemeMain,
                elementTheme: lightThemeElement,

            })
            setLightTheme(true)
        }
    }
    // 
    const [allCountries, setAllCountries] = useState([]);
    const [countries, setCountries] = useState([])
    const [countriesCodeNames, setCountriesCodeNames] = useState({})
    const convertArrayToObject = (array) => {
        const obj = {};
        array.map(item => {
            const key = Object.keys(item)[0]
            const value = item[Object.keys(item)[0]]
            obj[key] = value;
            return 0
        })
        return obj;
    };


    const fetchCountries = async () => {
        const URL = 'https://restcountries.com/v3.1/all';
        const response = await fetch(URL);
        const json = await response.json();
        const countriesData = json.map(country => {
            const native = country.name.nativeName
            const currencies = country.currencies
            return ({
                name: country.name.common,
                nativeName: native ? native[Object.keys(native)[0]].common : 'unknown',
                flag: country.flags.svg,
                capital: country.capital?.[0],
                currencies: currencies ? currencies[Object.keys(currencies)[0]].name : 'unknown',
                languages: country.languages ? country.languages[Object.keys(country.languages)] : 'unknown',
                region: country.region,
                subRegion: country.subregion,
                population: country.population,
                borderCountries: country.borders,
                topLevelDomain: country.tld?.[0],
                codeName: country.cioc,

            })
        })
        setAllCountries(countriesData);
        setCountries(countriesData);
        setCountriesCodeNames(convertArrayToObject(json.map(country => { return ({ [country.cca3]: country.name.common }) })));
    }


    return (
        <context.Provider value={{ stylesheet, changeTheme, lightTheme, fetchCountries, allCountries, setCountries, countries, countriesCodeNames, }} >
            {props.children}
        </context.Provider>
    )
}
export default MainState