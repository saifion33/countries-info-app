import React, { useState } from 'react'
import '../css/SearchAndFilter.css'

const SearchAndFilter = (props) => {
    // This function is used to transition of filter options container
    const filterOpener = () => {
        if (filterOption.hidden) {
            setFilterOption({
                height: '10rem',
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
        ...props.theme,
        height: filterOption.height,
    }
    return (
        <div className='search-and-filter-box-container' >
            <div style={props.theme} className='search-box' >
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                <input className='search-box-input' style={props.theme} type="text" tabIndex={1} placeholder='Search for a country...' />
            </div>
            <div style={props.theme} className='filter-box' >
                <p onClick={filterOpener}>Filter by Region <i className="fa-solid fa-angle-down"></i></p>
                <div style={filterOptionStyle} className='filter-box-options-container' >
                    <p>Africa</p>
                    <p>America</p>
                    <p>Asia</p>
                    <p>Europe</p>
                    <p>Ocianica</p>
                </div>
            </div>
        </div>
    )
}

export default SearchAndFilter