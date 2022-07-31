import React, { useContext } from 'react'
import context from '../context/context'
import CountryCard from './CountryCard'

const CountryCardContainer = () => {
    const { changeCountry, allCountries, currentCountry } = useContext(context)

    return (
        <div className='country-card-container' >
            {
                allCountries.map(country => <CountryCard key={country.name} countryDetails={country} changeCountry={changeCountry} currentCountry={currentCountry} />)
            }
        </div>
    )
}

export default CountryCardContainer