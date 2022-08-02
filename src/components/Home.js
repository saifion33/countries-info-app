import React, { useContext } from 'react'
import context from '../context/context'
import CountryCardContainer from './CountryCardContainer';
import SearchAndFilter from './SearchAndFilter';


const Home = () => {
    const { stylesheet,allCountries ,setCountries} = useContext(context);
    const theme = stylesheet.mainTheme
    return (
        <div style={theme} className='home'>
            <SearchAndFilter theme={stylesheet} allCountries={allCountries} setCountries={setCountries}/>
            <CountryCardContainer />
        </div>

    )
}

export default Home