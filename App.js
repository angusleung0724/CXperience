import React, {useState, useCallback } from 'react';
import { View, Dimensions, SafeAreaView, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/pages/LoginScreen';
import ProfileScreen from './src/pages/MapScreen';
import OtherScreen from './src/pages/OtherScreen';
import FlightDetailsHeader from './src/components/FlightDetailsHeader';
import MapScreen from './src/pages/MapScreen';

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const {width, height} = Dimensions.get("window");
const marginVertical = height * 0.07;


// ALL HARDCODED DATA TO BE PASSED IN
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
  "11" : {
    from: "JPN",
    to: "NYC",
    flightNo: "CX120",
    departTime: "2018-02-12 12:35:22",
    gate: "34",
    seat: "19K",
    class: "First Class",
  }, 
  "1": {
    from: "Taipei",
    to: "Hong Kong",
    flightNo: "CX407",
    departTime: "2023-08-15 10:55 AM",
    gate: "I9",
    seat: "4F",
    class: "Economy"
},
"2": {
    from: "Hong Kong",
    to: "Vancouver",
    flightNo: "CX838",
    departTime: "2023-08-15 05:40 PM",
    gate: "J10",
    seat: "9B",
    class: "Premium Economy"
},
"3": {
  from: "Hong Kong",
  to: "Tokyo",
  flightNo: "CX524",
  departTime: "2023-08-11 09:00 AM",
  gate: "A1",
  seat: "12A",
  class: "Economy"
},
"4": {
    from: "Seoul",
    to: "Hong Kong",
    flightNo: "CX416",
    departTime: "2023-08-11 12:30 PM",
    gate: "B2",
    seat: "5C",
    class: "Premium Economy"
},
"5": {
    from: "Hong Kong",
    to: "Singapore",
    flightNo: "CX739",
    departTime: "2023-08-12 02:45 AM",
    gate: "C3",
    seat: "20D",
    class: "Economy"
},
"6": {
    from: "Hong Kong",
    to: "London",
    flightNo: "CX252",
    departTime: "2023-08-12 06:15 PM",
    gate: "D4",
    seat: "8B",
    class: "Business"
},
"7": {
    from: "Beijing",
    to: "Hong Kong",
    flightNo: "CX390",
    departTime: "2023-08-13 08:20 AM",
    gate: "E5",
    seat: "15F",
    class: "Economy"
},
"8": {
    from: "Hong Kong",
    to: "Sydney",
    flightNo: "CX138",
    departTime: "2023-08-13 03:10 PM",
    gate: "F6",
    seat: "2A",
    class: "Premium Economy"
},
"9": {
    from: "Hong Kong",
    to: "Bangkok",
    flightNo: "CX703",
    departTime: "2023-08-14 11:45 AM",
    gate: "G7",
    seat: "10C",
    class: "Economy"
},
"10": {
    from: "Hong Kong",
    to: "San Francisco",
    flightNo: "CX870",
    departTime: "2023-08-14 08:30 PM",
    gate: "H8",
    seat: "16D",
    class: "Business"
},
}


// LOUNGE DATA STATIC

const testLoungeData = {
  "The Wing, First Class": {
    name: "The Wing",
    className : "First Class",
    maxCapacity : 40,
    currCapacity : 35,
    food:["Your Mom", "Your Mom"],
    beverage:["Your Mom", "Your Mom"],
    shower:["Your Mom", "Your Mom"],
    more:["Your Mom", "Your Mom"],
    imagePath: require("./src/assets/images/wing_first.jpeg")
  },
  "The Wing, Business Class": {
    name: "The Wing",
    className : "Business Class",
    maxCapacity : 40,
    currCapacity : 35,
    food:["Your Mom", "Your Mom"],
    beverage:["Your Mom", "Your Mom"],
    shower:["Your Mom", "Your Mom"],
    more:["Your Mom", "Your Mom"],
    imagePath: require("./src/assets/images/wing_business.png")
  },
  "The Pier, First Class": {
    name: "The Pier",
    className : "First Class",
    maxCapacity : 40,
    currCapacity : 35,
    food:["Your Mom", "Your Mom"],
    beverage:["Your Mom", "Your Mom"],
    shower:["Your Mom", "Your Mom"],
    more:["Your Mom", "Your Mom"],
    imagePath: require("./src/assets/images/pier_first.png")
  },
  "The Pier, Business Class": {
    name: "The Pier",
    className : "Business Class",
    maxCapacity : 40,
    currCapacity : 35,
    food:["Your Mom", "Your Mom"],
    beverage:["Your Mom", "Your Mom"],
    shower:["Your Mom", "Your Mom"],
    more:["Your Mom", "Your Mom"],
    imagePath: require("./src/assets/images/pier_business.png")
  },
  "The Deck, Business Class": {
    name: "The Deck",
    className : "Business Class",
    maxCapacity : 40,
    currCapacity : 35,
    food:["Your Mom", "Your Mom"],
    beverage:["Your Mom", "Your Mom"],
    shower:["Your Mom", "Your Mom"],
    more:["Your Mom", "Your Mom"],
    imagePath: require("./src/assets/images/deck_business.png")
  },
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
              initialParams={{
                loungeData:{testLoungeData}
              }}
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
