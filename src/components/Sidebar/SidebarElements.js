import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 200;
    width: 100%;
    height: 100%;
    background: #101012;
    display: grid;
    place-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px 0;
`

export const NavLoginButton = styled(LinkRouter)`
	border-radius: 50px;
	white-space: nowrap;
	color: #ffffff;
	font-size: 1.2rem;
	font-weight: 800;
	outline: none;
	border: 2px solid #3dafcd;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	width: 190px;
	height: 50px;
	background: transparent;
	text-transform: capitalize;
	display: grid;
	place-items: center;

	&:hover {
	
		background: #3dafcd;
		opacity: 0.8;
		border: none;
		box-shadow: 1px 3px 5px 5px rgba(61, 175, 205, 0.5);
	}
	&:active {
	
	background: rgba(61, 175, 205, 0.8);
	box-shadow: 0.5px 2px 2px 2px rgba(61, 175, 205, 0.8);
	}

	@media screen and (max-width: 768px) {
        width: 170px;
    }
`

export const NavDemoBtn = styled(LinkRouter)`
	border-radius: 50px;
	white-space: nowrap;
	color: #ffffff;
	background: #3dafcd;
	font-size: 1.2rem;
	font-weight: 800;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	width: 190px;
	height: 50px;
	text-transform: capitalize;
	display: grid;
	place-items: center;

	&:hover {
		
		opacity: 0.8;
		box-shadow: 1px 3px 5px 5px rgba(61, 175, 205, 0.5);
	}
	&:active {
	
		background: rgba(61, 175, 205, 0.8);
		box-shadow: 0.5px 2px 2px 2px rgba(61, 175, 205, 0.8);
	}

	@media screen and (max-width: 768px) {
        width: 170px;
    }
`
