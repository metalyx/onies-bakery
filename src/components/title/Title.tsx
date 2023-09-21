import React from 'react'
import './Title.scss'

interface iTitle {
    children: React.ReactNode
}

const Title: React.FC<iTitle> = ({ children }) => {
    return <span className='title'>{children}</span>
}

export default Title
