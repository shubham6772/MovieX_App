import React from 'react'
import { View, Text, Dimensions, Pressable } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { style } from '../Styles/TrendingMovieContainer';
import MovieCardComp from './MovieCardComp';
import { useNavigation } from '@react-navigation/native';


var { width, height } = Dimensions.get('window');
const TrendingMoviesComponent = ({ data }) => {
    const navigation = useNavigation();

    const handleClick = (item) => {
        navigation.navigate('Movie', item)
    }
 
    return (
        <View style={style.TrendingMovieContainer}>
            <Text style={style.TrendingText}>Trending</Text>
            <Carousel
                data={data}
                renderItem={({ item }) => <MovieCardComp item={item} handleClick={handleClick} />}
                firstItem={1}
                inactiveSlideOpacity={0.60}
                sliderWidth={width}
                itemWidth={width * 0.62}
                slideStyle={style.CarouselStyle}
            />
        </View>
    )
}

export default TrendingMoviesComponent