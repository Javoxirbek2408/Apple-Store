import { Box, Container } from '@mui/material'
import React from 'react'
import { SliderHome } from './components/SliderHome'
import { IphoniCard } from './components/IphoneCard/IphoniCard'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import { TextContent } from './components/TextContent/TextContent'
import { PhoneCard } from './components/phoneCard'
import { AdvantageCard } from './components/Advantages/AdvantageCard'
import { HomeBottom } from './components/HomeBottom/HomeBottom'


const cn = classNames.bind(styles)
export const Home = () => {
    let num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let num2 = [0, 0, 0, 0, 0, 0, 0, 0]
    return (

        <Box className={cn('home')}>
            <SliderHome />
            <Container className={cn("Iphon-card")} >
                {num.map(() => {
                    return <IphoniCard />

                })}
            </Container>
            <TextContent />
            <PhoneCard />
            <TextContent />
            <Container className={cn("Iphon-card")} >
                {num2.map(() => {
                    return <IphoniCard />

                })}
            </Container>
            <AdvantageCard />
            <HomeBottom />
        </Box>
    )
}
