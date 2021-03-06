import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Hero from '../../components/HeroSection/hero'
import { PageContainer, PageInner } from './HomePageElements'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    // set state to false from true and vice versa
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <PageContainer>
                <PageInner>
                    <Hero />
                </PageInner>
            </PageContainer>
        </>
    )
}

export default Home
