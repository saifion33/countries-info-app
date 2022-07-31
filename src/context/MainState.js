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

    // ******************************** COUNTRIES STATE RELATED ************************************************

    const allCountries = [
        {
            name: 'Portugal',
            nativeName: 'Portugal',
            topLevelDomain: 'Pt',
            capital: 'Knaat',
            population: '34000505',
            region: 'Europe',
            subRegion: 'Europe',
            borderCountries: ['India', 'America', 'Canada', 'France', 'Germany'],
            currencies: 'USD',
            languages: 'portuguese',
            flag: 'https://flagcdn.com/pt.svg'
        },
        {
            name: 'India',
            nativeName: 'India',
            topLevelDomain: 'In',
            capital: 'New Delhi',
            population: '34000505',
            region: 'Asia',
            subRegion: 'South Asia',
            borderCountries: ['Pakistan', 'China', 'Nepal', 'Bangladesh'],
            currencies: 'INR',
            languages: 'Hindi,English',
            flag: 'https://flagcdn.com/in.svg'
        },
        {
            name: 'Pakistan',
            nativeName: 'pakistan',
            topLevelDomain: 'Pk',
            capital: 'Islamabad',
            population: '034458584',
            region: 'Asia',
            subRegion: 'South Asia',
            borderCountries: ['India', 'Afganistan', 'Iran', 'China'],
            currencies: 'PKR',
            languages: 'urdu, hindi',
            flag: 'https://flagcdn.com/pk.svg'
        },
        {
            name: 'Nepal',
            nativeName: 'nepal',
            topLevelDomain: 'Ne',
            capital: 'Kathmandu',
            population: '34000505',
            region: 'Asia',
            subRegion: 'South Asia',
            borderCountries: ['India', 'China', 'Tibbet'],
            currencies: 'USD',
            languages: 'Nepali,Hindi',
            flag: 'https://flagcdn.com/np.svg'
        }
    ];
    const [rawData, setRawData] = useState([]);

    const fetchCountries = async () => {
        const URL = 'https://restcountries.com/v3.1/all';
        const response = await fetch(URL);
        const json = await response.json();
        setRawData(json.map(country => {
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
            })
        }))
    }


    return (
        <context.Provider value={{ stylesheet, changeTheme, lightTheme, fetchCountries, allCountries, rawData }} >
            {props.children}
        </context.Provider>
    )
}
export default MainState