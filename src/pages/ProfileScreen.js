import React, {useState, useRef} from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import colors from '../theme/colors'


export default function ProfileScreen({navigation}) {
    return (
        <>
            <Button title="here" onPress={()=>navigation.navigate("Other")}/>
            <CircleButtonGroup/>
        </>
        
    );
}



const CircleButton = ({ color, onPress }) => {
    const [isPressed, setIsPressed] = useState(false); // state to track whether the button is currently pressed
    const scaleValue = useRef(new Animated.Value(1)).current; // create an Animated value for the scale of the button
  
    const handlePressIn = () => {
      setIsPressed(true); // set the isPressed state to true when the button is pressed
      Animated.spring(scaleValue, {
        toValue: 1.5, // increase the scale value to 1.5
        tension: 50,
        friction: 10,
        useNativeDriver: true,
      }).start(); // start the animation
    };
  
    const handlePressOut = () => {
      setIsPressed(false); // set the isPressed state to false when the button is released
      Animated.spring(scaleValue, {
        toValue: 1, // return the scale value to 1
        useNativeDriver: true,
      }).start(); // start the animation
    };
  
    const buttonStyle = [
      styles.button,
      { backgroundColor: color },
      {
        transform: [{ scale: scaleValue }], // apply the scale value to the button's transform style
      },
  
      isPressed && styles.buttonPressed, // apply a different style when the button is pressed
    ];
  
    return (
      <TouchableOpacity
        onPressIn={() => {
          if (isPressed) {
              handlePressOut();
          } else {
              handlePressIn();
          }
      }}
        onPress={onPress}
      >
        <Animated.View style={buttonStyle} />
      </TouchableOpacity>
    );
  };
  
  const CircleButtonGroup = () => {
  
  
    return (
      <View style={styles.container}>
        <CircleButton color={colors['cathay-dark-green']}/>
        <CircleButton color={colors['cathay-dark-green']} />
        <CircleButton color={colors['cathay-dark-green']} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginHorizontal: 10,
    },
    buttonPressed: {
      opacity: 0.5, // reduce the opacity when the button is pressed
    },
  });