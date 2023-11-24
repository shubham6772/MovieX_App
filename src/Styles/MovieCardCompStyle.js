import { StyleSheet } from "react-native";
import { moderateScale } from "../../Dimension";


export const style  = StyleSheet.create({
    ImageStyle: ({width, height}) => ({
          width : width * 0.6,
          height : height * 0.4,
          borderRadius : moderateScale(20),
    })
})