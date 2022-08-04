import React, { useContext } from 'react'

import context from '../context/context'
import CountryCard from './CountryCard'
import Spinner from './Spinner'
const CountryCardContainer = (props) => {
    const { allCountries, countries, stylesheet } = useContext(context);
    const searchFuction = (country) => {
        const reg = new RegExp(props.inputCountryName, 'gi')
        if (props.inputCountryName.length <= 0) {
            return country.name
        }
        return country.name.match(reg);
    }
    return (
        <div className='country-card-container' >
            {(allCountries.length === 0 && <Spinner />) || (countries.length === 0 && <div style={{ color: stylesheet.elementTheme.color, fontSize: '3rem', fontWeight: '800' }}>Not Found!</div>)}

            {
                countries.filter(country => searchFuction(country)).map(country => <CountryCard key={country.name} countryDetails={country} />)
            }
        </div>
    )
}

export default CountryCardContainer