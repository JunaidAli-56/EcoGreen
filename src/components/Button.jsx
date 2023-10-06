import React from 'react'
import '../styles/sass/_button.scss'

const Button = ({ title }) => {
    return (
        <button className='btn btn-primary text-white border-0 p-2'>{title}</button>
    )
}

export default Button