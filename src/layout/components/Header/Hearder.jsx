import { Box } from '@mui/material'
import classNames from 'classnames'
import styles from './Header.module.scss'
import { HeaderBottom, HeaderMain, HeaderNav, HeaderTop } from './components'

const cn = classNames.bind(styles)

export const Hearder = () => {
  return (
    <Box component='header' className={cn('header')}>

      <HeaderTop />
      <HeaderNav />
      <HeaderMain />
      <HeaderBottom />

    </Box>
  )
}
