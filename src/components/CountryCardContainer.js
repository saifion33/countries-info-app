import React, { useContext } from 'react'

import context from '../context/context'
import CountryCard from './CountryCard'
import Spinner from './Spinner'
const CountryCardContainer = () => {
    const { allCountries,countries } = useContext(context)

    return (
        <div className='country-card-container' >
            {allCountries.length === 0 && <Spinner />}
            {
                countries.map(country => <CountryCard key={country.name} countryDetails={country} />)
            }
        </div>
    )
}

export default CountryCardContainer