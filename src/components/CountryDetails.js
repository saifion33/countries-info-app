import React, { useContext } from 'react'
import StyleContext from '../context/context'
import '../css/CountryDetails.css'
import Button from './Button';
import { Link } from 'react-router-dom';
const CountryDetails = (props) => {
    const { stylesheet } = useContext(StyleContext);
    const theme = stylesheet.mainTheme
    const textcolor = stylesheet.elementTheme.color;
    const country = { ...props.countryDetails }
    const borderCountries = country.borderCountries?.map(borderCountry => props.countriesCodeNames[borderCountry])

    return (
        <div style={theme} className="country-details-container">
            <div className="navigation-bar">
                <Link to={'/all-countries'} ><button style={stylesheet.elementTheme} className="back-btn"><i className="fa-solid fa-arrow-left-long"></i> Back</button></Link>
            </div>
            <div className="img-and-desc-container">
                <div className="flag-image-container">
                    <img src={country.flag} alt="flag" />
                </div>
                <div style={{ color: textcolor }} className="country-description-container">
                    <h2 className="country-name-2">{country.name}</h2>
                    <div className="description-container">
                        <p>Native Name: <span>{country.nativeName}</span></p>
                        <p>Population: <span>{country.population}</span></p>
                        <p>Region: <span>{country.region}</span></p>
                        <p>Sub Region: <span>{country.subRegion} </span></p>
                        <p>Capital: <span>{country.capital} </span></p>
                        <p>Top Level Domain: <span>{country.topLevelDomain}</span></p>
                        <p>Currencies: <span>{country.currencies} </span></p>
                        <p>Languages: <span>{country.languages}</span></p>
                    </div>
                    <div className="border-countries-container">
                        <p>Border Countries: </p>
                        <div className="button-container">
                            {borderCountries?.map(borderCountry => <Link key={borderCountry} style={{ textDecoration: 'none' }} to={`../all-countries/${borderCountry.replace(/\s/g, '-')}`} ><Button theme={stylesheet.elementTheme} name={borderCountry} /></Link>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails