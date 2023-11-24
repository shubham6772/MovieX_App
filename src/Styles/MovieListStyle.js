import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../Dimension";
import { darkcolor } from "../../assets/colors";

export const style = StyleSheet.create({
      container : {
        marginTop : verticalScale(1),
        marginBottom : verticalScale(12),
      },

      InnerContainer :{
        flexDirection: 'row',
        justifyContent : 'space-between',
        alignItems: 'center',
      },

      TitleText: {
        color : darkcolor.white,
        fontSize: moderateScale(19),
        fontWeight: 'bold',

      },

      SeeAllText :{
        color : darkcolor.white,
        fontSize: moderateScale(14),
      },

      ScrollViewContent : {
        padding : moderateScale(10),
      },

      MovieNameText :{
         color: darkcolor.white,
         marginLeft: horizontalScale(5),
      },

      ImageTitleContainer :{
          marginTop : verticalScale(4),
          marginRight :horizontalScale(10),
      },

      ImageStyle : ({width, height}) => ({
           width : width*0.33,
           height :height*0.22,
           borderRadius: moderateScale(20),
      })
});