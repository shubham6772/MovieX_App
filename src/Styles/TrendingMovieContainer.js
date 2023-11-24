import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../Dimension";
import { darkcolor } from "../../assets/colors";

export const style = StyleSheet.create({
    TrendingMovieContainer: {
        marginBottom: verticalScale(20),
    },

    TrendingText: {
        color: darkcolor.white,
        marginBottom: verticalScale(20),
        fontSize: moderateScale(19),
        fontWeight: 'bold',
    },

    CarouselStyle: {
        display: 'flex',
        alignItems: 'center',

    }




})