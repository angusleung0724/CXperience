import { StyleSheet} from 'react-native';
import colors from '../theme/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        marginHorizontal:"5%",
    },
    cathayLogo: {
        width:28,
        height:28,
        marginRight:15,
    },

    flight: {
        backgroundColor:colors['cathay-dark-green'],
        borderRadius: 50,
        marginLeft:10,
    },

    flightText: {
        color: "#FFFFFF",
        padding:6,
        fontWeight: 700
    },

    cardContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingBottom: 20,
        marginRight: 10,
    },
    lineContainer: {
        flexDirection: "row",
        alignItems: "flex-start"
    },
    textBold: {
        fontWeight: 700,
        paddingRight: "1%",

    },
    textNormal: {
        textAlign: "right"
    }


});