import React, {useState, useCallback } from 'react';
import { View, Dimensions, SafeAreaView, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/pages/LoginScreen';
import ProfileScreen from './src/pages/MapScreen';
import OtherScreen from './src/pages/OtherScreen';
import FlightDetailsHeader from './src/components/FlightDetailsHeader';
import MapScreen from './src/pages/MapScreen';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const {width, height} = Dimensions.get("window");
const marginVertical = height * 0.07;

const testFlightData = {
  "123456" : {
    from: "HNG",
    to: "HKG",
    flightNo: "CX256",
    departTime: "2018-06-12 09:55:22",
    gate: "24",
    seat: "13E",
    class: "Economy",
  },
  "2" : {
    from: "JPN",
    to: "NYC",
    flightNo: "CX120",
    departTime: "2018-02-12 12:35:22",
    gate: "34",
    seat: "19K",
    class: "First Class",
  }
}

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',

  },
};


export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [bookingCode, setBookingCode] = useState("1");
  const [fontsLoaded] = useFonts({
    'Sansation-Bold': require('./assets/fonts/Sansation-Bold.ttf'),
    'Sansation-BoldItalic': require('./assets/fonts/Sansation-BoldItalic.ttf'),
    'Sansation-Italic': require('./assets/fonts/Sansation-Italic.ttf'),
    'Sansation-Light': require('./assets/fonts/Sansation-Light.ttf'),
    'Sansation-LightItalic': require('./assets/fonts/Sansation-LightItalic.ttf'),
    'Sansation-Regular': require('./assets/fonts/Sansation-Regular.ttf'),

  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView}
                  style={{
                  flex: 1, 
                  marginTop: marginVertical,
                }}>
        <NavigationContainer 
            theme={navTheme}>
          <FlightDetailsHeader {...testFlightData[bookingCode]} setIsLogin={setIsLogin} isLogin={isLogin}/>
          <Stack.Navigator 
            initialRouteName="Login" 
            screenOptions={{
                headerShown: false, 
                }}
            >
            <Stack.Screen 
              name="Login" 
              component={LoginScreen}
              initialParams={{
                setHeader:setIsLogin, 
                setBookingCode:setBookingCode
              }}/>
            <Stack.Screen 
              name="Map" 
              component={MapScreen}
              options={{
                headerLeft: () => <></>,
              }}
              />
            <Stack.Screen 
              name="Other" 
              component={OtherScreen}
              options={{
                headerLeft: () => <></>,
              }}
              />
          </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
