import { Outlet } from 'react-router-dom'
import { Footer, Hearder } from './components'
import { Box } from '@mui/material'
import classNames from "classnames/bind"
import styles from './Layout.module.scss'

const cn = classNames.bind(styles)

export const Layout = () => {
    return (
        <Box className={cn()} >
            <Hearder />
            <Box component="main">
                <Outlet />
            </Box>
            <Footer />
        </Box>
    )
}
