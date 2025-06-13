import React from 'react'
import classNames from 'classnames/bind'
import styles from './HeaderBottom.module.scss'
import { Box, Container } from '@mui/material'
import { Catigoriya } from '../../../../../components'
import { CatigoriPhone } from '../../../../../assets/icons/CatigoriPhone'
import { CatigoriyaIpadIcon } from '../../../../../assets/icons/CatigoriyaIpadIcon'
import { CatigoriMackBook } from '../../../../../assets/icons/CatigoriMackBook'
import { CatigoriWath } from '../../../../../assets/icons/CatigoriWath'
import { CatigoriNaushnik } from '../../../../../assets/icons/CatigoriNaushnik'
import { CatigoriImge } from '../../../../../assets/icons/CatigoriImge'
const cn = classNames.bind(styles)

export const HeaderBottom = ({ startIcon, title }) => {
  return (
    <Box className={cn("header-bottom")}>
      <Container className={cn("header-bottom__container")}>
        <Catigoriya startIcon={<CatigoriPhone />} className={cn("header-bottom__catigoriya")} title={"iPhone"} />
        <Catigoriya startIcon={<CatigoriyaIpadIcon />} title={"iPad"} />
        <Catigoriya startIcon={<CatigoriMackBook />} title={"Macbook и iMac"} />
        <Catigoriya startIcon={<CatigoriWath />} title={"Watch"} />
        <Catigoriya startIcon={<CatigoriNaushnik />} title={"Гаджеты"} />
        <Catigoriya startIcon={<CatigoriPhone />} title={"Аксессуары"} />
        <Catigoriya className={cn("header-bottom__imga")} startIcon={<CatigoriImge />} />

      </Container>
    </Box>
  )
}
