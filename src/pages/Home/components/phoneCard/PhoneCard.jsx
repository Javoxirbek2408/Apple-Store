import classNames from 'classnames/bind'
import React from 'react'
import styles from './PhomeCard.module.scss'
import { Box, Button, Container } from '@mui/material'
import { PhoneCardImage } from '../../../../assets/icons/PhoneCardImage'
const cn = classNames.bind(styles)
export const PhoneCard = ({ starIcon, onclick, color, variant, className, size, title, endIcon }) => {
    return (
        <Box className={cn('PhoneCard')}>
            <Container className={cn('PhoneCard__container')}>
                <PhoneCardImage />
                <Box>
                    <h1>iPhone 14 Pro Max</h1>
                    <h4>по лучшей цене в Москве</h4>
                    <Button className={cn('btn')}> {title = 'подробнее'}</Button>
                </Box>
            </Container>
        </Box>
    )
}
