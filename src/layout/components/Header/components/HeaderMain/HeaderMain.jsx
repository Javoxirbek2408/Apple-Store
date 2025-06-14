import { Box, Button, Container, Input } from '@mui/material'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './HeaderMain.module.scss'
import { ThreePointsIcon } from '../../../../../assets/icons/ThreePointsIcon'
import { ShopBag } from '../../../../../assets/icons/ShopBag'
import { ButNumberIcon } from '../../../../../assets/icons/ButNumberIcon'
import { InputSearchIcon } from '../../../../../assets/icons/INputSearchIcon'
import { HmBoxHeartIcon } from '../../../../../assets/icons/HmBoxHeartIcon'
import { HmBoxLinkIcon } from '../../../../../assets/icons/HmBoxLinkIcon'


const hm = classNames.bind(styles)
export const HeaderMain = ({ starIcon, onclick, className, color, variant, size, title, endIcon }) => {
  return (
    <Box className={hm("header-main")}>
      <Container className={hm("header-main__container")}>
        <Button className={hm('blueBtn')} variant="contained" startIcon={<ThreePointsIcon />}>{title = "Каталог товаров"}</Button>
        <Box className={hm('header-main__container_box')}>
          <Input startIcon={<InputSearchIcon className={hm('serarchIcon')} />} placeholder='Поиск по каталогу товаров' type="search" /> <HmBoxHeartIcon /><HmBoxLinkIcon />
        </Box>
        <Button className={hm('greenBtn')} variant="contained" color='success' startIcon={<ShopBag />} endIcon={<ButNumberIcon />} >  {title = "в корзине"}</Button>

      </Container>
    </Box>
  )
}
