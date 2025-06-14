import { Box, Button, CardContent, Container, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './Advantage.module.scss'
import { AdvanteOne } from '../../../../assets/icons/advanteOne'
import { AdvantageTwo } from '../../../../assets/icons/AdvantageTwo'
import { AdvantageThere } from '../../../../assets/icons/AdvantageThere'
import advantFour from '../../../../assets/images/AdvantageFour.png'
import advantFive from '../../../../assets/images/CheeckGreen.png'
const cd = classNames.bind(styles)
export const AdvantageCard = ({ className, variant, title }) => {
    return (
        <Container className={cd('advantage')} >
            <CardContent className={cd('advantage-card')}>
                <Box className={cd('box')}>
                    <AdvanteOne />
                    <h2 >Акции и подарки</h2>
                    <Typography className={cd('desctiption')}>
                        Постоянные акции, бонусы и скидки. Покупайте технику Apple по самым выгодным ценам
                    </Typography>
                </Box>
                <Button variant="outlined" className={cd('btn')} >
                    {title = " подробнее"}
                </Button>
            </CardContent>
            <CardContent className={cd('advantage__cardTwo')}>
                <Box className={cd('box')}>
                    <AdvantageTwo />
                    <h2 >Доставим <br />
                        за 3 часа</h2>
                    <Typography className={cd('desctiption')}>
                        Быстрая и бесплатная доставка по Москве. Доставим за 3 часа в день заказа. Также доступна быстрая доставка по всей России или самовывоз</Typography>
                </Box>
                <Button variant="outlined" className={cd('btn')} >
                    {title = " подробнее"}
                </Button>
            </CardContent>
            <CardContent className={cd('advantage__cardThere')}>
                <Box className={cd('box')}>
                    <AdvantageThere />
                    <h2>Удобные способы <br /> оплаты</h2>
                    <Typography className={cd('desctiption')}>
                        Наличными или картой при получении, оплата на сайте или в кредит
                    </Typography>
                </Box>
                <Button variant="outlined" className={cd('btn')} >
                    {title = " подробнее"}
                </Button>
            </CardContent>
            <CardContent className={cd('advantage__cardFour')}>
                <Box className={cd('box')}>
                    <img src={advantFour} className={cd('bankImg')} alt="" />
                    <h2 >Покупка в кредит</h2>
                    <Typography className={cd('desctiption')}>
                        Получите самое выгодное кредитное предложение от более чем 30 ведущих банков страны
                    </Typography>
                </Box>
                <Button variant="outlined" className={cd('btn')} >
                    {title = " подробнее"}
                </Button>
            </CardContent>
            <CardContent className={cd('advantage__cardFive')}>
                <Box className={cd('box')}>
                    <img src={advantFive} className={cd('bankImg')} alt="" />
                    <h2>Гарантия</h2>
                    <Typography className={cd('desctiption')}>

                        Все товары, представленные в нашем сайте, имеют гарантию
                        от нашего магазина или компании Apple                </Typography>
                </Box>
                <Button variant="outlined" className={cd('btn')} >
                    {title = " подробнее"}
                </Button>
            </CardContent>
        </Container>
    )
}
