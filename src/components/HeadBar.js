import React, { useContext } from 'react'
import context from '../context/context'

const HeadBar = () => {
    const { stylesheet, lightTheme, changeTheme } = useContext(context)
    const theme = stylesheet.elementTheme;

    return (
        <div style={theme} className='head-bar' >
            <h2 >Where in The World?</h2>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => { changeTheme() }} >
                <i className="fa-solid fa-moon"></i>
                <p >{lightTheme ? 'Dark Mode' : 'Light Mode'}</p>
            </div>
        </div>
    )
}

export default HeadBar