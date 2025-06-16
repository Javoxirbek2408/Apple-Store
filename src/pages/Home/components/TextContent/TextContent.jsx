import classNames from 'classnames/bind'
import React from 'react'
import styles from './TextContent.module.scss'
import { Box, Container, Typography } from '@mui/material'


const cn = classNames.bind(styles)

export const TextContent = () => {
    return (

        <Box className={cn("text-content")}>
            <Container>
                <h1>Новые модели Айфонов по выгодным ценам</h1>
                <Typography className={cn("text-content__text")}>

                    Для тех, кто хочет приобрести новый телефон магазин Istoreapple.ru предлагает: <br /><br />

                    Низкие цены на все виды устройств, недорогие аксессуары; <br />
                    Оригинальные подарки бренда; <br />
                    Новая линейка смартфонов и проверенные старые модели; <br />
                    Лаконичный дизайн, большой выбор цветов и оттенков;<br />
                    товары в каталоге есть в наличии и доступны для покупки в кредит и рассрочку; <br />
                    Быстрая доставка по Санкт-Петербургу и области;<br />
                    Гарантия на все модели телефонов; <br />
                    способы оплаты! <br />
                    Товары, представленные на официальном сайте Istoreapple.ru, сертифицированы. Мы занимаемся продажей айфонов  2013 года. Вы всегда можете прочитать отзывы o <br />  покупке наших клиентов, позвонить в магазин и получить консультацию по любой модели Apple.
                </Typography>
            </Container>
        </Box>
    )
}
