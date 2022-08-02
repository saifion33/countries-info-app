import React from 'react'
import spinner from './Iphone-spinner-2.gif'
const Spinner = () => {
    return (
        <div className='text-center py-4'>
            <img src={spinner} alt="spinner" />
            <h4 className='my-4'>Loading .....</h4>
        </div>
    )
}

export default Spinner
