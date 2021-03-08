import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Nav = styled.nav`
	background: ${({ scrollNav }) => (scrollNav ? '#03033f' : 'transparent')};
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: fixed;
	top: 0;
	z-index: 10;
	width: 100%;
	transition: 0.8s all ease;
`;

export const NavBarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	width: 100%;
	max-width: calc(100% - 100px);
	margin: 0 auto;

	@media screen and (max-width: 768px) {
        max-width: calc(100% - 48px);
		padding: 0;
    }
`;
export const NavLogo = styled.img`
	justify-self: flex-start;
	cursor: pointer;
	width: auto;
	height: 30px;

	@media screen and (max-width: 768px) {
       margin-left: 0;
    }
`;


export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: #fff;
	}
`

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`

export const NavItem = styled.li`
	height: 100%;
	display: flex;
	align-items: center;
	gap: 0 30px;
`
export const NavLoginButton = styled(LinkRouter)`
	border-radius: 50px;
	white-space: nowrap;
	color: #ffffff;
	font-size: 1rem;
	font-weight: 900;
	outline: none;
	border: 2px solid #3dafcd;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	width: 150px;
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
`

export const NavDemoBtn = styled(LinkRouter)`
	border-radius: 50px;
	white-space: nowrap;
	color: #ffffff;
	background: #3dafcd;
	font-size: 1rem;
	font-weight: 900;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	width: 150px;
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
`
