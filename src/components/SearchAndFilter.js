import React, { useState } from 'react'


const SearchAndFilter = (props) => {
    const searchBoxstyle = {
        ...props.style,
        width: '25%',
        display: 'flex',
        alignItems: 'center',
        padding: '0.8rem',
        fontSize: '16px',
        borderRadius: '5px',
        search: {
            marginRight: '1rem'
        },
        input: {
            ...props.style,
            boxShadow: 'none',
            border: 'none',
            outline: 'none',
            fontSize: 'inherit',
            fontWeight: '300',
            width: '100%',
        }

    }
    const [filterOption, setFilterOption] = useState({ height: '0', hidden: true, padding: '0' })
    const filterStyle = {
        ...props.style,
        padding: '0 1rem',
        cursor: 'pointer',
        borderRadius: '5px',
        fontWeight: '500',
        position: 'relative',
        zIndex: 1,
    }

    const filterOptionStyle = {
        ...props.style,
        height: filterOption.height,
        position: 'absolute',
        top: '4rem',
        left: '0',
        transition: 'height 1s linear',
        width: '100%',
        overflow: 'hidden',
        boxSizing: 'border-box',
        paddingLeft: '1rem',
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1.4rem 2rem' }}>
            <div style={searchBoxstyle} >
                <i style={searchBoxstyle.search} className="fa-solid fa-magnifying-glass"></i>
                <input style={searchBoxstyle.input} type="text" placeholder='Search for a country...' />
            </div>
            <div style={filterStyle} onClick={() => {
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
            }}>
                <p>Filter by Region <i class="fa-solid fa-angle-down"></i></p>
                <div style={filterOptionStyle}>
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