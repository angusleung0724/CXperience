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
  },
  contentContainer: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  progressBar: {
    justifyContent:"center",
    alignItems:"center"
  },
  progressText: {
    zIndex:1
  },
  progressContainer: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
});