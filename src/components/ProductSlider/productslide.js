import React from 'react'
import { ProductSlideContainer, SlideThumbnailsWrap, ThumbnailWrap, ProductMainImageWrap } from './ProductsSlideElements'

const ProductSlide = () => {
    return (
        <>
            <ProductSlideContainer>
                <SlideThumbnailsWrap>
                    <ThumbnailWrap></ThumbnailWrap>
                    <ThumbnailWrap></ThumbnailWrap>
                    <ThumbnailWrap></ThumbnailWrap>
                    <ThumbnailWrap></ThumbnailWrap>
                    <ThumbnailWrap></ThumbnailWrap>
                    <ThumbnailWrap></ThumbnailWrap>
                    <ThumbnailWrap></ThumbnailWrap>
                </SlideThumbnailsWrap>
                <ProductMainImageWrap></ProductMainImageWrap>
            </ProductSlideContainer>
        </>
    )
}

export default ProductSlide
