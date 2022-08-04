import React, { useContext, useState } from 'react'
import context from '../context/context'
import CountryCardContainer from './CountryCardContainer';
import SearchAndFilter from './SearchAndFilter';


const Home = () => {
    const { stylesheet, allCountries, setCountries, countries } = useContext(context);
    const theme = stylesheet.mainTheme
    const [inputCountryName, setInputCountryName] = useState('');
    return (
        <div style={theme} className='home'>
            <SearchAndFilter theme={stylesheet} allCountries={allCountries} setCountries={setCountries} countries={countries} setInputCountryName={setInputCountryName} />
            <CountryCardContainer inputCountryName={inputCountryName} />
        </div>

    )
}

export default Home