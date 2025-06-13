import { Box, Container, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import classNames from 'classnames/bind'
import styles from './HeaderTop.module.scss'
import { Link } from 'react-router-dom'
import { WhatsapIcon } from '../../../../../assets/icons/WhatsapIcon'
import { SOCIAL_LINKS } from '../../../../../constans/app'
import { TeligramIcon } from '../../../../../assets/icons/TeligramIcon'
import { WkIcon } from '../../../../../assets/icons/WkIcon'

const cn = classNames.bind(styles)
export const HeaderTop = () => {
  return (
    <Box className={cn("header-top")}>
      <Container className={cn("header-top__container")}>
        <Box className={cn("header-top__content")}>
          <Box className={cn("header-top__left")}>
            <Typography>
              Ваш город:
            </Typography>
            <Select className={cn("header-top__left__select")} variant="standard" defaultValue={"Moskva"}>
              <MenuItem value='Moskva' >Moskva </MenuItem>
              <MenuItem value='Sank-peterburg' >Sank-peterburg </MenuItem>
              <MenuItem value='Piter'>Piter </MenuItem>
            </Select>
          </Box>
          <Box className={cn("header-top__right")}>
            <Link target='_blank' to={SOCIAL_LINKS.whatsApp}>
              <WhatsapIcon />
            </Link>
            <Link target='_blank' to={SOCIAL_LINKS.telegrma}>
              <TeligramIcon />
            </Link>
            <Link target='_blank' to={SOCIAL_LINKS.wk}>
              <WkIcon />
            </Link>
          </Box>
        </Box>
        <Box></Box>
      </Container >
    </Box >
  )
}
