import './Header.scss'
import Title from '../../components/title/Title'
import Button from '../../components/button/Button'
import Layout from '../layout/Layout'
import HeaderLink from '../../components/header-link/HeaderLink'

const Header = () => {
    return (
        <div className='header-container'>
            <Layout>
                <div className='header-content'>
                    <div className='navigation-container'>
                        <nav className='header-nav'>
                            <HeaderLink href='#'>HOME</HeaderLink>
                            <HeaderLink href='#'>MENU</HeaderLink>
                            <HeaderLink href='#'>ABOUT</HeaderLink>
                            <HeaderLink href='#'>CONTACT</HeaderLink>
                        </nav>
                    </div>
                    <div className='title-container'>
                        <Title>
                            <a href='#'>{`Onie's`}</a>
                        </Title>
                    </div>
                    <div className='buttons-container'>
                        <Button white>ORDER ONLINE</Button>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Header
