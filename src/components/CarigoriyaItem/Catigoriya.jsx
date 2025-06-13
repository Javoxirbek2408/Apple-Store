import { Button } from '@mui/material'
import classNames from 'classnames/bind'
import styles from './CatigoriyaItem.module.scss'
import React from 'react'

const cn = classNames.bind(styles)
export const Catigoriya = ({ startIcon, title }) => {
    return (
        <Button className={cn('catigore-item')} startIcon={startIcon}>
            {title}

        </Button>
    )
}
