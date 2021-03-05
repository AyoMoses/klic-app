import React from 'react'
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLoginButton, NavDemoBtn } from './NavbarElements'
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to="/">
                        KLIC
                    </NavLogo>
                    <MobileIcon>
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
