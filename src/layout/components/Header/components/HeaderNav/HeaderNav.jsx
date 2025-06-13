import { Box, Container } from '@mui/material'
import React from 'react'
import classNames from 'classnames/bind'
import styles from './HeaderNav.module.scss'
import { Link } from 'react-router-dom'
import { AppleIcon } from '../../../../../assets/icons/AppleIcon'
import { SOCIAL_LINKS } from '../../../../../constans/app'
import { PhoneIcon } from '../../../../../assets/icons/PhoneIcon'
import { AgonIcon } from '../../../../../assets/icons/AgonIcon'

const hv = classNames.bind(styles)
export const HeaderNav = () => {
  return (
    <Box className={hv("header-nav")}>
      <Container className={hv("header-nav__container")}>
        <ul className={hv("header-nav__menu")}>
          <li><Link className={hv('link')} target='_blank' to={SOCIAL_LINKS.aple}><AppleIcon /></Link></li>
          <li><Link className={hv('link')} target='_blank' to={'#'}>Весь каталог</Link></li>
          <li className={hv('linkThere')} ><AgonIcon /><Link className={hv('linkk')} target='_blank' to={'#'}>Акции</Link></li>
          <li><Link className={hv('link')} target='_blank' to={'#'}>Гарантия</Link></li>
          <li><Link className={hv('link')} target='_blank' to={'#'}>Политика возврата</Link></li>
          <li><Link className={hv('link')} target='_blank' to={'#'}>Кредит</Link></li>
          <li><Link className={hv('link')} target='_blank' to={'#'}>Доставка и оплата</Link></li>
          <li><Link className={hv('link')} target='_blank' to={'#'}>Отзывы</Link></li>
          <li><Link className={hv('link')} target='_blank' to={'#'}>Контакты</Link></li>
          <li><Box className={hv('tel__content')}>
            <Link target='_blank' to={'#'}><PhoneIcon /> +7 812 561 96 62</Link>
            <Link target='_blank' className={hv('tel__content__twoContent')} to={'#'}>Вам перезвонить?</Link>
          </Box></li>
        </ul>
      </Container>
    </Box>
  )
}
