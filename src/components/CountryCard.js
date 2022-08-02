import React, { useContext } from 'react';
import context from '../context/context';
import '../css/CountryCard.css';
import { Link } from 'react-router-dom';

const CountryCard = (props) => {
    const { stylesheet } = useContext(context)
    const theme = stylesheet.elementTheme;
    const country = props.countryDetails;
    return (
        <Link style={{ textDecoration: 'none' }} to={country.name.replace(/\s/g, '-')} >
            <div style={theme} className='country-card'>
                <img className='flag-image' src={country.flag} alt="flag" />
                <div className='description-container'>
                    <h3 className='country-name'>{country.name.slice(0, 20)}</h3>
                    <p>Population: <span>{country.population}</span></p>
                    <p>Region: <span>{country.region}</span></p>
                    <p>Capital: <span>{country.capital?.slice(0, 15)}</span></p>
                </div>
            </div>
        </Link>
    )
}

export default CountryCard