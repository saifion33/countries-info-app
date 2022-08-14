import React, { useState } from 'react';
import '../css/SearchAndFilter.css'

const SearchAndFilter = (props) => {
    // This function change input country name on every change in search box
    const onInputChange = (event) => {
        event.preventDefault();
        props.setInputCountryName(event.target.value)

    }
    // This function is used to transition of filter options container
    const filterOpener = () => {
        if (filterOption.hidden) {
            setFilterOption({
                height: '14rem',
                hidden: false,

            })
        }
        else {
            setFilterOption({
                height: '0',
                hidden: true,
            })
        }
    }

    // This constent holds initial height of filter-options-container and its hidden or not
    const [filterOption, setFilterOption] = useState({ height: '0', hidden: true })

    const filterOptionStyle = {
        ...props.theme.elementTheme,
        height: filterOption.height,
    }

    const [activeFilterId, setActiveFilterId] = useState(null);
    // This fuction filter country by region
    const regionFilter = (e, regionName) => {
        if (activeFilterId === null) {
            setActiveFilterId(e.target.id);
            document.getElementById(e.target.id).classList.add('active-filter')
        }
        else {
            document.getElementById(activeFilterId).classList.remove('active-filter')
            setActiveFilterId(e.target.id)
            e.target.className = 'active-filter';
        }
        const filteredCountries = props.allCountries.filter(country => country.region === regionName);
        props.setCountries(filteredCountries);

    }
    const resetFilter = (e) => {
        if (activeFilterId) {
            document.getElementById(activeFilterId).style.boxShadow = 'none';
        }
        props.setCountries(props.allCountries);
    }
    return (
        <div style={{ ...props.theme.mainTheme }} className='search-and-filter-box-container' >
            <div style={props.theme.elementTheme} className='search-box' >
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                <input value={props.inputCountryName} onChange={onInputChange} className='search-box-input' style={props.theme.elementTheme} type="text" placeholder='Search for a country...' />
            </div>
            <div style={props.theme.elementTheme} className='filter-box' >
                <p onClick={filterOpener}  >Filter by Region <i className="fa-solid fa-angle-down"></i></p>
                <div style={filterOptionStyle} className='filter-box-options-container'>
                    <p key={'Africa'} id='africa' onClick={event => regionFilter(event, 'Africa')} >Africa</p>
                    <p key={'Americas'} id='Americas' onClick={event => regionFilter(event, 'Americas')}>Americas</p>
                    <p key={'Asia'} id='Asia' onClick={event => regionFilter(event, 'Asia')}>Asia</p>
                    <p key={'Europe'} id='Europe' onClick={event => regionFilter(event, 'Europe')} >Europe</p>
                    <p key={'Oceania'} id='Oceania' onClick={event => regionFilter(event, 'Oceania')}>Oceania</p>
                    <p key={'Reset'} onClick={event => resetFilter(event)}>Reset filter</p>
                </div>
            </div>
        </div>
    )
}

export default SearchAndFilter