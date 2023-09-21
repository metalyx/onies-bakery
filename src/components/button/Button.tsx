import React from 'react'
import './Button.scss'

interface iButton {
    children: React.ReactNode | null
    white?: boolean
}

const Button: React.FC<iButton> = ({ children, white = false }) => {
    return (
        <button className={`primary-button ${white ? 'white-variant' : ''}`}>
            {children}
        </button>
    )
}

export default Button
