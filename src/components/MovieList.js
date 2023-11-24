import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import { style } from '../Styles/MovieListStyle'
import { useNavigation } from '@react-navigation/native'



var {width, height} = Dimensions.get('window')

const MovieList = ({ title, data }) => {
    let movieName = "Ant-Man and The Wasp"
     const navigation = useNavigation();

    return (
        <View style={style.container} >
            <View style={style.InnerContainer} >
                <Text style={style.TitleText}>{title}</Text>
                <TouchableOpacity>
                    <Text style={style.SeeAllText}>See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={style.ScrollViewContent}
            >
                {
                    data.map((item, index) => {
                        return (
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={()=>navigation.navigate('Movie', item)}
                                >

                                <View style={style.ImageTitleContainer}>
                                    <Image 
                                    source={require('../../assets/MoviePoster.jpg')}
                                    style={style.ImageStyle({width, height})}
                                    />
                                <Text style={style.MovieNameText}>
                                    {movieName.length > 14 ? movieName.slice(0, 14) + '...' : movieName}
                                </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default MovieList