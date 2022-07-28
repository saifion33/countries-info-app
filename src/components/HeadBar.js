import React, { useContext } from 'react'
import StyleContext from '../context/style/styleContext'

const HeadBar = () => {
    const { stylesheet, lightTheme, changeTheme } = useContext(StyleContext)
    const theme = stylesheet.elementTheme
    const elementstyle = {
        ...theme,
        padding: '0.2rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: "3px 3px 10px hsl(0, 0%, 75%)",
        boxSizing: 'border-box',
        p: {
            marginLeft: '0.5rem',
            fontWeight: '600'
        },
        h2: {
            letterSpacing: '0.1rem'
        }
    }
    return (
        <div style={elementstyle}>
            <h2 style={elementstyle.h2}>Where in The World?</h2>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => { changeTheme() }} >
                <i className="fa-solid fa-moon"><span></span></i>
                <p style={elementstyle.p}>{lightTheme ? 'Dark Mode' : 'Light Mode'}</p>
            </div>
        </div>
    )
}

export default HeadBar