import classNames from 'classnames/bind'
import React from 'react'
import styles from './HomeBottom.module.scss'
import { Box, Button, CardContent, Container, Typography } from '@mui/material'
import iphonPeper from '../../../../assets/images/IphonePeper.png'
const cn = classNames.bind(styles)
export const HomeBottom = ({ className, title }) => {
    return (
        <Box className={cn('HomeBottom')}>
            <Container className={cn('HomeBottom__container')}>
                <img className={cn('HomeBottom__imgPeper')} src={iphonPeper} alt="" />
                <Box className={cn('HomeBottom__Card')} >
                    <h2>
                        Подписка на рассылку акций!
                    </h2>
                    <Typography className={cn('HomeBottom__Card_text')}>
                        Подпишитесь на рассылку, чтобы <br /> узнавать о всех акциях первым
                    </Typography>
                    <CardContent className={cn('HomeBottom__CardNumber')}>
                        <h2>Скидка 10%</h2>
                        <Typography className={cn('HomeBottom__CardNumber_text')}>
                            на первую покупку за подписку
                        </Typography>
                        <Box className={cn('HomeBottom__CardNumber_div')}>
                            <input type="tel" placeholder='+ 7' name="" id="" />
                            <Button className={cn('btnClick')}>{title = "подписаться"}</Button>
                        </Box>
                    </CardContent>
                </Box>
            </Container>
        </Box>
    )
}
