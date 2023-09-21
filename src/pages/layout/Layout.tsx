import React from 'react'
import './Layout.scss'

interface iLayout {
    children: React.ReactNode | null
}

const Layout: React.FC<iLayout> = ({ children }) => {
    return <div className='layout'>{children}</div>
}

export default Layout
