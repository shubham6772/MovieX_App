import React, { useState } from 'react'
import { View, Text, Platform, ScrollView } from 'react-native'
import { style } from '../Styles/HomeScreenStyle'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Bars3BottomLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { UniversalStyle } from '../Styles/UniversalStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { darkcolor, theme } from '../../assets/colors'
import { MovieList, TrendingMoviesComponent } from '../components'

const ios = Platform.OS == 'ios';
const Home = () => {

  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [Upcoming, setUpcoming] = useState([1, 2, 3, 4, 5]);
  const [topRated, setTopRated] = useState([1, 2, 3, 4, 5]);

  return (
    <View style={style.HomeContainer} >
      <SafeAreaView style={ios ? UniversalStyle.ForIosMargin : UniversalStyle.ForAndroMargin} >
        <StatusBar style='light' />
        <View style={style.HeaderContainer} >
          <TouchableOpacity>
            <Bars3BottomLeftIcon size={30} strokeWidth={2} color={darkcolor.white} />
          </TouchableOpacity>
          <Text style={style.TextHeader}>
            <Text style={style.ThemeText}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={28} strokeWidth={2} color={darkcolor.white} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>


      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={style.ScrollViewContainer}
      >
        <TrendingMoviesComponent data={data} />

        <MovieList title="Upcoming" data={Upcoming} />

        <MovieList title="Top Rated" data={topRated} />
      </ScrollView>
    </View>
  )
}

export default Home