import { View, Text } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import styles from './carousel.style'
import { COLORS } from '../../../constant'

const Carousel = () => {
    const slides = [
        "https://img.kwcdn.com/product/open/2024-10-11/1728621589031-8ef8b6a3a74b4803ab1a4be04bf0018d-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/open/2024-10-11/1728621584869-ee3d616e4e2f404897cde87beef8dfda-goods.jpeg?imageView2/2/w/800/q/70/format/webp",
        "https://img.kwcdn.com/product/open/2024-10-11/1728621578498-34fd50885f2e495eb880e89e580924b1-goods.jpeg?imageView2/2/w/800/q/70/format/webp"



    ]
  return (
    <View style={styles.carouselContainer}>
        <SliderBox
            images={slides}
            dotColor={COLORS.primary}
            inactiveDotColor={COLORS.secondary}
            ImageComponentStyle={styles.sliderImage}
            autoplay
            circleLoop
            animationType="slide"
        />
      
    </View>
  )
}

export default Carousel

