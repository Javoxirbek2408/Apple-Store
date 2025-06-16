import classNames from 'classnames/bind'
import React from 'react'
import styles from './Footer.module.scss'
import { Box, Container, Typography } from '@mui/material'
import { AppleIcon } from '../../../assets/icons/AppleIcon'
import { NavLink } from 'react-router-dom'
import { COMPANE_PHONE_NUMBER, SOCIAL_LINKS } from '../../../constans/app'
import { WhatsapIcon } from '../../../assets/icons/WhatsapIcon'
import { TeligramIcon } from '../../../assets/icons/TeligramIcon'
import { WkIcon } from '../../../assets/icons/WkIcon'
const cn = classNames.bind(styles)
export const Footer = () => {
  return (
    <Box className={cn('Footer')}>
      <Container className={cn('Footer__container')}>
        <Box className={cn('Footer__container_boxOne')}><AppleIcon />
          <Box>
            <h3>© 2013-2022</h3>
            <h3>Продажа iPhone в МСК</h3>
          </Box>
          <Typography component={'p'}>
            *Сайт не является публичной оффертой. <br /> Вся информация, указанная на сайте носит <br /> информационный характер.
          </Typography>
        </Box>
        <Box className={cn('Footer__container_boxTwo')}>
          <ul>
            <li><NavLink className={cn('link')}>Гарантия</NavLink></li>
            <li><NavLink className={cn('link')}>Политика возврата</NavLink></li>
            <li><NavLink className={cn('link')}>Кредит</NavLink></li>
            <li><NavLink className={cn('link')}>Доставка и оплата</NavLink></li>
            <li><NavLink className={cn('link')}>Отзывы</NavLink></li>
            <li><NavLink className={cn('link')}>Контакты</NavLink></li>
            <li><NavLink className={cn('link')}>Политика конфеденциальности</NavLink></li>
          </ul>
          <ul>
            <li><NavLink className={cn('link')}>iPhone</NavLink></li>
            <li><NavLink className={cn('link')}>iPad</NavLink></li>
            <li><NavLink className={cn('link')}>Macbook и iMac</NavLink></li>
            <li><NavLink className={cn('link')}>Watch</NavLink></li>
            <li><NavLink className={cn('link')}>ОтзывWatchы</NavLink></li>
            <li><NavLink className={cn('link')}>Аксессуары</NavLink></li>
            <li><NavLink className={cn('link')}>Акции</NavLink></li>
          </ul>
        </Box>
        <Box className={cn('Footer__container_boxThere')}>
          <Box className={cn('Footer__container_boxThere_boxTop')}>
            <NavLink className={cn('phoneLink')} target='_blank' to={COMPANE_PHONE_NUMBER} >+7 812 704 86 97</NavLink>
            <Typography component={'p'}>
              Бесплатная консультация <br />
              С 10:00 до 21:00, без выходных
            </Typography>
          </Box>
          <Box className={cn('Footer__container_boxThere_boxCenter')}>
            <NavLink className={cn("link")} target='_blank' to={'/'}>Заказать звонок </NavLink>
            <Box className={cn("btnIcons")}>
              <NavLink target='_blank' to={SOCIAL_LINKS.whatsApp}><WhatsapIcon /></NavLink>
              <NavLink target='_blank' to={SOCIAL_LINKS.elegrma}><TeligramIcon /></NavLink>
              <NavLink target='_blank' to={SOCIAL_LINKS.wk}><WkIcon /></NavLink>
            </Box>
          </Box>

          <Box  className={cn('Footer__container_boxThere_boxBottom')}>
            <h3>Москва,  ул Барклая 8</h3>
            <h3>Москва, ул Барклая 8</h3>
          </Box>
        </Box>

      </Container>
    </Box>
  )
}
