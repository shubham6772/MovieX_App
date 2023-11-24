import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { style } from '../Styles/MovieScreenStyle';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { darkcolor, theme } from '../../assets/colors';
import { Platform } from 'react-native';
import { UniversalStyle } from '../Styles/UniversalStyle';
import { LinearGradient } from 'expo-linear-gradient';
import { CastComp } from '../components';

var { width, height } = Dimensions.get('window')
const ios = Platform.OS === 'ios';

const Movie = () => {
    const { params: item } = useRoute();
    const navigation = useNavigation();
    let movieName = "Ant-Man and The Wasp"
    const [isFavourite, setIsFavourite] = useState(false);

    const[cast, setCast] = useState([1,2,3,4,5]);

    useEffect(() => {

    }, [item])

    return (
        <ScrollView
            contentContainerStyle={style.ScrollViewContainer}
        >
            <View style={style.ContentContainer(width)}>
                <SafeAreaView style={[style.SafeAreaContainer(width), ios ? UniversalStyle.ForIosMargin : UniversalStyle.ForAndroMargin]}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={style.TouchableOpacityStyle}>
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color={darkcolor.white} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)} >
                        <HeartIcon size="35" strokeWidth={1} color={isFavourite ? theme.background : darkcolor.white} />
                    </TouchableOpacity>
                </SafeAreaView>

                <View >
                    <Image
                        source={require('../../assets/MoviePoster.jpg')}
                        style={style.ImageStyle({ width, height })}
                    />
                    <LinearGradient
                        colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23, 1)']}
                        style={style.LinearGradientStyle({ width, height })}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                    />
                </View>
            </View>



            <View style={style.movieInfo(height)}>
                <Text style={style.movieNameText}>
                    {movieName}
                </Text>
            </View>

            {/* timings & status */}

            <Text style={style.movieStatus}>
                Released • 2020 • 170 min
            </Text>

            {/* genres */}

            <View style={style.genres}>
                <Text style={style.movieStatus}>
                    Action •
                </Text>
                <Text style={style.movieStatus}>
                    Thriller •
                </Text>
                <Text style={style.movieStatus}>
                    Comedy
                </Text>

            </View>

            {/* description */}

            <Text style={style.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus ipsum modi aliquam facere ullam enim aspernatur quos excepturi omnis dolores mollitia soluta cumque, consectetur sequi magni nisi impedit? Quas quisquam laborum nisi corporis incidunt saepe sed assumenda! Est sit sunt corporis amet repudiandae quis excepturi eaque tenetur quae dolore.
            </Text>

            {/* cast */}

            <CastComp cast={cast} />



        </ScrollView>
    )
}

export default Movie