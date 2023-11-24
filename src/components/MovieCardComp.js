import React from 'react'
import { Dimensions } from 'react-native'
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import { style } from '../Styles/MovieCardCompStyle'

var {width, height} = Dimensions.get('window');
const MovieCardComp = ({item, handleClick}) => {
  return (
    <TouchableWithoutFeedback onPress={()=> handleClick(item)}>
        <Image 
        source={require('../../assets/MoviePoster.jpg')}
        style={style.ImageStyle({width, height})}
         />
    </TouchableWithoutFeedback>
  )
}

export default MovieCardComp