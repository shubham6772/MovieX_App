import { StyleSheet } from "react-native";
import { darkcolor, theme } from "../../assets/colors";
import { horizontalScale, moderateScale, verticalScale } from "../../Dimension";


export const style = StyleSheet.create({

    ScrollViewContainer: {
        flex: 1,
        backgroundColor: darkcolor.background,
        paddingBottom: moderateScale(20),

    },

    ContentContainer: (width) => ({
        width: width,
    }),

    SafeAreaContainer: (width) => ({
        position: 'absolute',
        width: width,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 20,
        paddingLeft: horizontalScale(8),
        paddingRight: horizontalScale(20),
    }),

    TouchableOpacityStyle: {
        borderRadius: moderateScale(10),
        paddingHorizontal: horizontalScale(1),
        paddingVertical: verticalScale(1),
        backgroundColor: theme.background,
    },

    ImageStyle: ({ width, height }) => ({
        width: width,
        height: height * 0.55,
        borderBottomLeftRadius: moderateScale(30),
        borderBottomRightRadius: moderateScale(30),
    }),

    LinearGradientStyle: ({ width, height }) => ({
        width: width,
        height: height * 0.40,
        position: 'absolute',
        bottom: 0,
        borderBottomLeftRadius: moderateScale(30),
        borderBottomRightRadius: moderateScale(30),

    }),

    movieInfo: (height) => ({
        marginTop: -height * 0.03,
    }),

    movieNameText: {
        color: darkcolor.white,
        textAlign: 'center',
        fontSize: moderateScale(28),
        fontWeight: 'bold',
        letterSpacing: 1,
    },

    movieStatus :{
        color : darkcolor.neutral,
        fontWeight : '500',
        fontSize : moderateScale(15),
        lineHeight : moderateScale(34),
        textAlign : 'center',
        marginRight : horizontalScale(3)
    },

    description :{
        color : darkcolor.neutral,
        marginHorizontal: horizontalScale(10),
        marginVertical: verticalScale(10),
        fontSize : moderateScale(14),
        lineHeight : moderateScale(24),
        textAlign : 'justify',
    },

    genres: {
        flexDirection : 'row',
        justifyContent : 'center',
        marginHorizontal : horizontalScale(16),
        marginLeft : horizontalScale(8)
    }
}) 