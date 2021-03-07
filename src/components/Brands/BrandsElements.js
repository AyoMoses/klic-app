import styled from 'styled-components'

export const BrandsContainer = styled.div`
    width: 100%;
    max-width: calc(100% - 150px);
    margin: 0 auto;
    margin-top: 0;
    margin-bottom: 80px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0 100px;
    justify-items: center;

    @media screen and (max-width: 768px) {

        max-width: calc(100% - 48px);
        margin: 0 auto;
        margin-top: 120px;
        margin-bottom: 120px;

        grid-template-columns: repeat(5, 320px);
        gap: 0 8px;
        overflow-x: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
        &::-webkit-scrollbar {
            display: none;
        }
    }
`

export const BrandImage = styled.img`
    width: 200px;
    height: auto;
`
