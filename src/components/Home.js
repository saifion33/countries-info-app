import React, { useContext } from 'react'
import context from '../context/context'
import CountryCardContainer from './CountryCardContainer';
import SearchAndFilter from './SearchAndFilter';


const Home = () => {
    const { stylesheet } = useContext(context);
    const theme = stylesheet.mainTheme
    return (
        <div style={theme} className='home'>
            <SearchAndFilter theme={stylesheet.elementTheme} />
            <CountryCardContainer />
        </div>

    )
}

export default Home