import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, NavLoginButton, NavDemoBtn } from './SidebarElements'

const Sidebar = ({toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                {/* to="/" */}
                {/* onClick={toggle} to navlinks */}
                <NavLoginButton>
                    Log in
				</NavLoginButton>
                <NavDemoBtn>
                    Book a demo
				</NavDemoBtn>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
