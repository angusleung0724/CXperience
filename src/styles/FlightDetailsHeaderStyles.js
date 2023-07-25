import { StyleSheet} from 'react-native';
import colors from '../theme/colors';

export const styles = StyleSheet.create({
    extraContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        borderBottomColor: colors["cathay-light-gray"],
        borderBottomWidth: 3,
        borderTopColor: colors["cathay-light-gray"],
        borderTopWidth:3,
        paddingVertical:10,
    },

    extraInfo: {
        margin:10
    },

    container: {
        flexDirection: "row",
        justifyContent:"space-evenly",
        alignItems:"flex-start",
    },
    cathayLogo: {
        width:28,
        height:28,
        marginHorizontal:"1%"
    },

    flightDetails: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    flight: {
        backgroundColor:colors['cathay-dark-green'],
        borderRadius:8,
        flexDirection:"row",
        justifyContent: "center",
        marginHorizontal:"1%"
        
    },

    flightText: {
        color: colors["cathay-white"],
        padding:5,
        fontWeight: 700,
        fontSize:21,
        fontFamily: "Arial"
    },

    cardContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems:"flex-start",
        marginLeft: "1%",
        marginRight: "2.5%"
    },
    lineContainer: {
        flexDirection: "row",
        alignItems: "flex-start"
    },
    textBold: {
        fontWeight: 700,
        paddingRight: "1%",
        fontFamily: "Arial",
        fontSize: 14

    },
    textNormal: {
        textAlign: "right",
        fontFamily: "Arial",
        fontSize: 14
    }


});