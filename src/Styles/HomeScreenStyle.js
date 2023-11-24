import { StyleSheet } from "react-native";
import { darkcolor, theme } from "../../assets/colors";
import { horizontalScale, moderateScale, verticalScale } from "../../Dimension";

export const style = StyleSheet.create({

   ThemeText: {
      color: theme.text,
   },

   HomeContainer: {
      flex: 1,
      backgroundColor: darkcolor.background,
   },

   HeaderContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: 'center',
      marginHorizontal: horizontalScale(4),
   },

   TextHeader: {
      fontSize: moderateScale(20),
      color: darkcolor.white,
      fontWeight: '800',
   },

   ScrollViewContainer: {
      paddingHorizontal : horizontalScale(10),
      paddingVertical : verticalScale(10),
   }



});