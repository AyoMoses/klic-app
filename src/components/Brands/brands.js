import React from 'react'
import {BrandsContainer, BrandImage} from './BrandsElements'
import BrandOne from '../../assets/images/BrandOne.svg'
import BrandTwo from '../../assets/images/BrandTwo.svg'
import BrandThree from '../../assets/images/BrandThree.svg'

const Brands = () => {
    return (
        <>
            <BrandsContainer>
                <BrandImage src={BrandOne} alt="brand"></BrandImage>
                <BrandImage src={BrandTwo} alt="brand"></BrandImage>
                <BrandImage src={BrandThree} alt="brand"></BrandImage>
                <BrandImage src={BrandTwo} alt="brand"></BrandImage>
            </BrandsContainer>
        </>
    )
}

export default Brands
