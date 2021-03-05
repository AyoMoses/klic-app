import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, NavLoginButton, NavDemoBtn } from './SidebarElements'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
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
