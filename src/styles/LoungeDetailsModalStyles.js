import {StyleSheet} from 'react-native';
import colors from '../theme/colors';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width:"85%",
    height:"85%",
    backgroundColor: colors["cathay-white"],
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: colors["cathay-black"],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 20,
  },
  heroImage: {
    width: "100%",
    height: undefined,
    aspectRatio:"1",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    opacity: 1,
  },
  imageContainer: {
    flex:1,
    position: "relative"
  },
  closeButton: {
    position:"absolute",
    right:15,
    top:-320,
    fontSize: 25,
    color:colors["cathay-white"],
    fontWeight:700,
    shadowColor:colors["cathay-black"],
    shadowOpacity:1,
    shadowRadius:200,
  },
  contentContainer: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  progressBar: {
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    bottom:"20%"
  },
  progressText: {
    fontFamily:"Sansation-BoldItalic",
    color:colors["cathay-dark-green"],
    textAlign:"center",
    fontSize:45
  },
  progressTextTop: {
    borderBottomColor:colors["cathay-dark-green"],
    borderBottomWidth: 2
  },

  progressTextBottom: {
    fontFamily:"Sansation-BoldItalic",
    color:colors["cathay-dark-green"],
    textAlign:"center",
    fontSize:28
  },
  progressContainer: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column"
  },
  nameContainer: {
    position:"absolute",
    top:0,
    left:0,
    right:0,
    bottom:0,
    justifyContent:"center",
    alignItems:"center",
  },
  name: {
    color:colors["cathay-white"],
    fontFamily:"Sansation-Bold",
    fontSize:45,
    textShadowColor:colors["cathay-black"],
    shadowOpacity:0.8,
    textShadowRadius:5,
    textShadowOffset:{width:2, height:2},
    textAlign:"center"
  }, 
  class: {
    color:colors["cathay-white"],
    fontSize:20,
    fontFamily: "Sansation-Italic",
    textShadowColor:colors["cathay-black"],
    shadowOpacity:0.8,
    textShadowRadius:5,
    textAlign:"center"
  },
  cardTitle:{
    color:colors["cathay-black"],
    fontSize:40,
    fontFamily: "Sansation-Regular",
  },
  titleContainer:{
    justifyContent:"center",
    position:"absolute",
    top:"2%",    
  }
});