import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale, moderateScale } from "../../Dimension";

export const UniversalStyle = StyleSheet.create({
    ForIosMargin : {
       marginHorizontal : horizontalScale(8),
       marginVertical : verticalScale(8),
    },

    ForAndroMargin: {
        marginHorizontal: horizontalScale(12),
        marginVertical : verticalScale(12),
    }
});