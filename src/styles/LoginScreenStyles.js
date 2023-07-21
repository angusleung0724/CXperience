import { StyleSheet} from 'react-native';
import colors from '../theme/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
        backgroundColor: colors['cathay-white'],
        justifyContent: "space-evenly",
        alignItems: "center"

    },

    textInputContainer: {  
        paddingBottom:120,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",

    },

    image: {
        width: 130,
        height: 150
    },
    
    button:{
        backgroundColor: colors['cathay-beige'],
        width: "50%",
        marginVertical:"3%",
        borderRadius: 8,
    },

    buttonText: {
        color: colors['cathay-dark-green'],
        textAlign:"center",
        fontFamily:"Arial",
        paddingVertical:"5%",
        paddingHorizontal:"8%",
        fontSize:18,
        fontWeight:"normal",

    },

    textInput: {
        color: colors['cathay-black'],
        textAlign:"center",
        fontSize: 75,
        fontFamily: "Arial",
        marginHorizontal:"10%",
    }
});