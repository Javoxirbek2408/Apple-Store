import { Box, Button } from '@mui/material'
import React from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import classNames from 'classnames/bind';
import styles from './SliderHome.module.scss'
import { SliderHome_iphone } from '../../../../assets/images/SliderHome_iphone';
import { SliderHome_Iphone_name } from '../../../../assets/icons/SliderHome_phone_name';

const cn = classNames.bind(styles)

export const SliderHome = ({ starIcon, onclick, color, variant, size, title, endIcon }) => {
    return (
        <Box className={cn("Slider-header")} >
            <Swiper navigation={true} modules={[Navigation]} className={cn("Slider-head")}>
                <SwiperSlide className={cn("Slider-head__slider")} >
                    <SliderHome_iphone />
                    <Box className={cn("Slider-head__Box")}>
                        <SliderHome_Iphone_name />
                        <Box>
                            <span className={cn("Slider-head-slider__prtitle")}>от</span>
                            <span className={cn("Slider-head-slider__prnumber")}>137 900 ₽</span>
                        </Box>
                        <Button className={cn("slider-button")} variant="contained"> {title = 'подробнее'}</Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className={cn("Slider-head__slider")} >
                    <SliderHome_iphone />
                    <Box className={cn("Slider-head__Box")}>
                        <SliderHome_Iphone_name />
                        <Box>
                            <span className={cn("Slider-head-slider__prtitle")}>от</span>
                            <span className={cn("Slider-head-slider__prnumber")}>137 900 ₽</span>
                        </Box>
                        <Button className={cn("slider-button")} variant="contained"> {title = 'подробнее'}</Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className={cn("Slider-head__slider")} >
                    <SliderHome_iphone />
                    <Box className={cn("Slider-head__Box")}>
                        <SliderHome_Iphone_name />
                        <Box>
                            <span className={cn("Slider-head-slider__prtitle")}>от</span>
                            <span className={cn("Slider-head-slider__prnumber")}>137 900 ₽</span>
                        </Box>
                        <Button className={cn("slider-button")} variant="contained"> {title = 'подробнее'}</Button>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className={cn("Slider-head__slider")} >
                    <SliderHome_iphone />
                    <Box className={cn("Slider-head__Box")}>
                        <SliderHome_Iphone_name />
                        <Box>
                            <span className={cn("Slider-head-slider__prtitle")}>от</span>
                            <span className={cn("Slider-head-slider__prnumber")}>137 900 ₽</span>
                        </Box>
                        <Button className={cn("slider-button")} variant="contained"> {title = 'подробнее'}</Button>
                    </Box>
                </SwiperSlide>

            </Swiper>
            <h2 className={cn("Slider-head__title")}>купить iPhone в Москве</h2>

        </Box>
    )
}
