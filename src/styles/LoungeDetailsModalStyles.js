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
  
  },
  closeButton: {
    position:"absolute",
    right:15,
    top:-320,
    fontSize: 35,
    color:colors["cathay-white"],
    shadowColor:colors["cathay-black"],
    shadowOpacity:1,
    textShadowRadius:100,
    textShadowOffset:{width: -100, height: -100}
  },
  contentContainer: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  progressBar: {
    justifyContent:"center",
    alignItems:"center",
    marginTop:"6%"
  },
  progressText: {
    fontFamily:"Sansation-BoldItalic",
    color:colors["cathay-dark-green"],
    textAlign:"center",
    fontSize:45
  },
  progressTextTop: {
    borderBottomColor:colors["cathay-dark-green"],
    borderBottomWidth: 0
  },

  progressTextBottom: {
    fontFamily:"Sansation-Regular",
    color:colors["cathay-black"],
    textAlign:"center",
    fontSize:14
  },
  progressContainer: {
    flex:1,
    justifyContent:"flex-start",
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
    fontSize:35,
    fontFamily: "Sansation-Regular",
  },
  titleContainer:{
    justifyContent:"center",
    marginTop:"4%"
  },
  fractionContainer:{
    marginTop:4,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly",
  },
  personIcon:{
    fontSize:16
  },
  buttonGroup:{
    marginBottom:10,
    borderRadius:10,
    borderColor: colors["cathay-dark-dark-green"]
  },
  descriptionBox: {
    backgroundColor: colors["cathay-light-green"],
    padding:15,
    marginVertical: 7,
    borderRadius:10,
  },
  description: {
    fontSize: 15,
    fontFamily:"Sansation-Regular"
  },
  scrollView:{
    position:"relative",
    width: 280,
    marginTop:"2%",
    marginBottom:"5%",
  }
});