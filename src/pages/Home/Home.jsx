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
import { v4 as uuid } from 'uuid';


const cn = classNames.bind(styles)
export const Home = () => {
    return (

        <Box className={cn('home')}>
            <SliderHome />
            <Container>
                <h2 className={cn("link")}>Самое популярное</h2>
            </Container>
            <Container className={cn("Iphon-card")} >
                {Array.from({ length: 12 }).map(() => {                
                    return <IphoniCard key={uuid()}/>
                })}
            </Container>
            <TextContent />
            <PhoneCard />
            <TextContent />
            <Container>
                <h2 className={cn("link")}>Новинки</h2>
            </Container>
            <Container className={cn("Iphon-card")} >
                {Array.from({ length: 12 }).map(() => {
                    return <IphoniCard key={uuid()} />

                })}
            </Container>
            <AdvantageCard />
            <HomeBottom />
        </Box>
    )
}
