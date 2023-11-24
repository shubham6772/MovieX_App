import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../Dimension";
import { darkcolor } from "../../assets/colors";

export const style = StyleSheet.create({

    Container: {
        marginVertical: verticalScale(6),
    },

    TopCastText: {
        color: darkcolor.white,
        fontSize: moderateScale(18),
        marginHorizontal: horizontalScale(12),
        marginBottom: verticalScale(7),

    },

    ScrollViewContainer: {
        paddingHorizontal: horizontalScale(15),

    },

    castComponent: {
        marginRight: horizontalScale(4),
    },

    CastImageStyle: {
        width: 60,
        height: 60,
        borderRadius: moderateScale(50)
    },

    characterNameText: {
        color: darkcolor.white,
        fontSize: moderateScale(12),
        marginTop: verticalScale(1),
        marginHorizontal: horizontalScale(5),
    },

    personNameText: {
        color: darkcolor.neutral,
        fontSize: moderateScale(12),
        marginTop: verticalScale(1),
        marginHorizontal: horizontalScale(5),
    }
});