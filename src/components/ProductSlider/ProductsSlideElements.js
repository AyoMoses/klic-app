import styled from 'styled-components'

export const ProductSlideContainer = styled.div`
    width: 100%;
    max-width: calc(100% - 120px);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    height: 1300px;
    background: darkorange;
`

export const SlideThumbnailsWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px 0;
`

export const ThumbnailWrap = styled.div`
    width: 100%;
    height: 100px;
    &:nth-child(even) {
        background-color: darkseagreen;
    }
    &:nth-child(odd) {
        background-color: darkred;
    }
`

export const ProductMainImageWrap = styled.div`
    width: 100%;
    height: 100%;
    background: red;
`
