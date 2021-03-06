import React from 'react'
import { HeroContainer, HeroImageWrap, HeroContentWrap, HeroContentLine, HeroContentHeader, BreakWord, HeroContentText, HeroCtaBtn } from './HeroElements'
import phoneImage from '../../assets/images/hero-phones.png'
import heroLine from '../../assets/images/hero-line.png'

const Hero = () => {
    return (
        <>
            <HeroContainer>
                <HeroImageWrap src={phoneImage} alt="phone"></HeroImageWrap>
                <HeroContentWrap>
                    <HeroContentLine src={heroLine}></HeroContentLine>
                    <HeroContentHeader>
                        Build Your Brand <BreakWord>With A Better</BreakWord> <BreakWord>Streaming Platform</BreakWord>
                    </HeroContentHeader>
                    <HeroContentText>
                        More control. More customization. A Superior viewing experience.
                    </HeroContentText>
                    <HeroCtaBtn>BOOK A DEMO</HeroCtaBtn>
                </HeroContentWrap>
            </HeroContainer>
        </>
    )
}

export default Hero
