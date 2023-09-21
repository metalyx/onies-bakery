import React from 'react'
import './HeaderLink.scss'

interface iHeaderLink {
    children: React.ReactNode | null
    href: string
}

const HeaderLink: React.FC<iHeaderLink> = ({ children, href }) => {
    return (
        <a className='header-link' href={href}>
            {children}
        </a>
    )
}

export default HeaderLink
