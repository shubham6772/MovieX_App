import React from 'react'
import { View , Text, ScrollView, TouchableOpacity , Image} from 'react-native'
import { style } from '../Styles/CastCompStyle'



const CastComp = ({cast}) => {
    let personName = "keanu Reeves"
    let characterName = "John Wick"
  return (
    <View style={style.Container} >
        <Text style={style.TopCastText}>Top Cast</Text>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.ScrollViewContainer}
        >

      {
        cast && cast.map((person, index)=>{
           return(
            <TouchableOpacity
            key={index}
            style={style.castComponent}
            >

            <Image 
               source={require('../../assets/MoviePoster.jpg')}
               style={style.CastImageStyle}
              />

           <Text style={style.characterNameText}>
             {
                characterName.length > 10 ?  characterName.slice(0, 10) + "..." : characterName
             }
           </Text>

           <Text style={style.personNameText}>
             {
                personName.length > 10 ?  personName.slice(0, 10) + "..." : personName
             }
           </Text>

            </TouchableOpacity>
           )
        })
      }

        </ScrollView>
    </View>
  )
}

export default CastComp