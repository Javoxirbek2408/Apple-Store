import { Badge, Box, Button, CardContent, Rating, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import React, { useState } from 'react'
import styles from './IphoneCard.module.scss'
import { IphoneCard_Imag } from '../../../../assets/icons/IphoneCard_Imag'
import { HmBoxHeartIcon } from '../../../../assets/icons/HmBoxHeartIcon'
import { HmBoxLinkIcon } from '../../../../assets/icons/HmBoxLinkIcon'
import { KarzinkaIcon } from '../../../../assets/icons/KarzinkaIcon'
import { Link } from 'react-router-dom'
import { ShoppingBag } from '@mui/icons-material'
import { KarzinkaClickIcon } from '../../../../assets/icons/KarzinkaClickIcon'

const cn = classNames.bind(styles)
export const IphoniCard = ({ starIcon, onclick, className, color, variant, size, title, endIcon }) => {

    const [isClicked, setIsClicked] = useState(false)
    if (isClicked == "added") {

    }
    return (
        <CardContent className={cn('IphoneCard')}>
            <Box className={cn('IphoneCard__top')}>
                <Box className={cn('IphoneCard__top_boxOne')}>
                    <Rating className={cn('IphoneCard__top_raytingIcon')} name="size-medium" defaultValue={4} /><span>(14)</span>
                </Box>
                <Box className={cn('IphoneCard__top_boxTwo')}>
                    <HmBoxHeartIcon className={cn('IphoneCard__top_heartIcon')} /> <HmBoxLinkIcon className={cn('IphoneCard__top_link')} />
                </Box>
            </Box>
            <h2 className={cn('IphoneCard__title')}>Apple iPhone XS Max 256 ГБ золотой</h2>
            <IphoneCard_Imag />
            <Box className={cn('IphoneCard__dots')}>
                <Badge variant='dot' color="success">
                </Badge>
                <p>Есть в наличии</p>
                <p>Гарантия 1 год</p>

            </Box>
            <Box className={cn('IphoneCard__price')}>
                <p className={cn('IphoneCard__price_old')}>137 900 ₽</p>
                <p className={cn('IphoneCard__price_new')}>137 900 ₽</p>

            </Box>
            <Button onClick={() => setIsClicked(true)} size="small" className={!isClicked ? cn("karzinaBtn") : cn("karzinaBtn__true")} startIcon={isClicked ? <KarzinkaIcon /> : <KarzinkaClickIcon />}  >
                {
                    !isClicked ? "в корзину" : "в корзине"
                }
            </Button>
            <Box className={cn('IphoneCard__bottom')} >
                <Link>Хочу дешевле</Link>
                <Link>Купить в 1 клик</Link>
            </Box>
        </CardContent>
    )
}
