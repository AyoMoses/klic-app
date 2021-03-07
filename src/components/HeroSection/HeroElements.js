import styled from 'styled-components';

export const HeroContainer = styled.section`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 100px;
    margin-top: 90px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        margin-top: 30px;
    }
`
export const HeroImageWrap = styled.img`
    width: 100%;
    max-width: 100%;
    height: auto;
    object-position: center;
    object-fit: contain;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const HeroContentWrap = styled.div`
    width: 100%;
    height: 100%;
    text-align: left;

    @media screen and (max-width: 768px) {
        max-width: calc(100% - 48px);
        margin: 0 auto;
    }
`

export const HeroContentLine = styled.img`
    margin-bottom: 19px;
`

export const HeroContentHeader = styled.h1`
    font-size: 3.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 67px;
    letter-spacing: 0px;
    text-align: inherit;
    margin-bottom: 13px;

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
        line-height: auto;
    }
    @media screen and (max-width: 460px) {
        font-size: 1.8rem;
        line-height: auto;
    }
`

export const BreakWord = styled.span`
    display: block;
    text-align: inherit;
`

export const HeroContentText = styled.p`
    font-size: 1.675rem;
    font-style: normal;
    font-weight: 400;
    line-height: 43px;
    letter-spacing: 0.30424439907073975px;
    text-align: left;
    color: #ffffff;
    opacity: 0.6;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
        line-height: auto;
    }
    @media screen and (max-width: 460px) {
        font-size: 1.2rem;
        line-height: auto;
    }
`

export const HeroCtaBtn = styled.button`
    border-radius: 50px;
	white-space: nowrap;
	color: #ffffff;
	background: #3dafcd;
	font-size: 1.25rem;
	font-weight: 900;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	width: 260px;
	height: 60px;
	text-transform: capitalize;
	display: grid;
	place-items: center;
    margin-top: 31px;

	&:hover {
		opacity: 0.8;
		box-shadow: 1px 3px 5px 5px rgba(61, 175, 205, 0.5);
	}
	&:active {
        background: rgba(61, 175, 205, 0.8);
        box-shadow: 0.5px 2px 2px 2px rgba(61, 175, 205, 0.8);
    }

    @media screen and (max-width: 768px) {
        width: 200px;
    }
`
