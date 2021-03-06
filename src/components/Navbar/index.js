import React, {useState, useEffect} from 'react'
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLoginButton, NavDemoBtn } from './NavbarElements'
import { FaBars } from 'react-icons/fa';
import Logo from '../../assets/images/logo.png'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 3) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    })

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavBarContainer>
                    <NavLogo to="/" src={Logo} alt="klic logo"></NavLogo>
                    <MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLoginButton>
								Log in
							</NavLoginButton>
							<NavDemoBtn>
								Book a demo
							</NavDemoBtn>
						</NavItem>
					</NavMenu>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default Navbar
