import React from 'react'
import { ProductSlideContainer, SlideThumbnailsWrap, ThumbnailWrap, ProductMainImageWrap, SlideImage, SlideIcon, SlideContentWrap, SlideHeaderInactive, SlideHeaderActive, SlideTextActive, Block } from './ProductsSlideElements'

import iconOne from '../../assets/icons/slide-icon-one.svg'
import iconTwo from '../../assets/icons/slide-icon-two.svg'
import iconThree from '../../assets/icons/slide-icon-three.svg'
import iconFour from '../../assets/icons/slide-icon-four.svg'
import iconFive from '../../assets/icons/slide-icon-five.svg'
import iphone from '../../assets/images/iPhone_Landscape.png'

const ProductSlide = () => {
    return (
        <>
            <ProductSlideContainer>
                <SlideThumbnailsWrap>

                    <ThumbnailWrap>
                        <SlideIcon src={iconOne} alt="slide icon"></SlideIcon>
                        <SlideContentWrap>
                            <SlideHeaderInactive>All Eyes On Your Brand</SlideHeaderInactive>
                        </SlideContentWrap>
                    </ThumbnailWrap>

                    <ThumbnailWrap>
                        <SlideIcon src={iconTwo} alt="slide icon"></SlideIcon>
                        <SlideContentWrap>
                            <SlideHeaderInactive>Highly Customizable White <Block>Label Software</Block></SlideHeaderInactive>
                        </SlideContentWrap>
                    </ThumbnailWrap>

                    <ThumbnailWrap>
                        <SlideIcon src={iconTwo} alt="slide icon"></SlideIcon>
                        <SlideContentWrap>
                            <SlideHeaderInactive>Your Brand Front and Center</SlideHeaderInactive>
                        </SlideContentWrap>
                    </ThumbnailWrap>

                    <ThumbnailWrap>
                        <SlideIcon src={iconThree} alt="slide icon"></SlideIcon>
                        <SlideContentWrap>
                            <SlideHeaderActive>View Multiple Streams at Once</SlideHeaderActive>
                            <SlideTextActive>
                                Can’t decide which stream to watch? No problem! Klic allows you to watch multiple streams ath the same time.
                            </SlideTextActive>
                        </SlideContentWrap>
                    </ThumbnailWrap>

                    <ThumbnailWrap>
                        <SlideIcon src={iconTwo} alt="slide icon"></SlideIcon>
                        <SlideContentWrap>
                            <SlideHeaderInactive>The Fastest Multi <Block>Stream Experience Possible</Block></SlideHeaderInactive>
                        </SlideContentWrap>
                    </ThumbnailWrap>

                    <ThumbnailWrap>
                        <SlideIcon src={iconFour} alt="slide icon"></SlideIcon>
                        <SlideContentWrap>
                            <SlideHeaderInactive>Pick Your Path Viewing <Block>Experience</Block></SlideHeaderInactive>
                        </SlideContentWrap>
                    </ThumbnailWrap>

                    <ThumbnailWrap>
                        <SlideIcon src={iconFive} alt="slide icon"></SlideIcon>
                        <SlideContentWrap>
                            <SlideHeaderInactive>Pick Your Path Viewing <Block>Experience</Block></SlideHeaderInactive>
                        </SlideContentWrap>
                    </ThumbnailWrap>

                </SlideThumbnailsWrap>
                <ProductMainImageWrap>
                    <SlideImage src={iphone} alt="about our service"></SlideImage>
                </ProductMainImageWrap>
            </ProductSlideContainer>
        </>
    )
}

export default ProductSlide
