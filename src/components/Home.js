import React, { useContext } from 'react'
import StyleContext from '../context/style/styleContext'
import SearchAndFilter from './SearchAndFilter'

const Home = () => {
    const { stylesheet } = useContext(StyleContext);
    const theme = stylesheet.mainTheme
    const style = {
        ...theme,
        height: '100vh'
    }
    return (
        <div style={style}>
            <SearchAndFilter style={stylesheet.elementTheme} />

        </div>

    )
}

export default Home