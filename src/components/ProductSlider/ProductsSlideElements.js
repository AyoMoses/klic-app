import styled from 'styled-components'
import bg from '../../assets/images/radial-bg.png'

export const ProductSlideContainer = styled.div`
    width: 100%;
    max-width: calc(100% - 120px);
    margin: 0 auto;
    margin-top: 120px;
    display: grid;
    grid-template-columns: 1fr 2fr;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column-reverse;
        gap: 50px 0;
        max-width: calc(100% - 48px);
        margin-top: 0;
        height: auto;
    }
`

export const SlideThumbnailsWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px 0;
`

export const ThumbnailWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 0 15px;
`

export const SlideIcon = styled.img`
    width: 50px;
    height: 50px;
`
export const SlideContentWrap = styled.div`
    display: flex;
    flex-direction: column;
`

export const SlideHeaderInactive = styled.div`
    color: #5a595b;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: left;
`

export const SlideHeaderActive = styled.div`
    color: #ffffff;
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: left;
`

export const SlideTextActive = styled.div`
    color: #ffffff;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
    opacity: 0.8;
    margin-top: 19px;
`

export const Block = styled.span`
    display: block;
`

export const ProductMainImageWrap = styled.div`
    width: 100%;
    height: 100%;
    background: url(${bg});
    background-position: center;
    background-size: cover;
    display: grid;
    place-items: center;

    @media screen and (max-width: 768px) {
        height: auto;
    }
`

export const SlideImage = styled.img`
    width: 700px;
    max-width: 750px;
    height: auto;

    @media screen and (max-width: 768px) {
        width: 100%;
        max-width: 100%;
    }
`
