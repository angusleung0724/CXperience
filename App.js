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
    "1": {
      from: "TPE",
      to: "HKG",
      flightNo: "CX407",
      departTime: "2023-08-15 10:55:52",
      gate: "I9",
      seat: "4F",
      class: "Economy"
  },
  "2": {
      from: "HKG",
      to: "YVR",
      flightNo: "CX838",
      departTime: "2023-08-15 05:40:00",
      gate: "J10",
      seat: "9B",
      class: "Premium Economy"
  },
  "3": {
    from: "HKG",
    to: "NRT",
    flightNo: "CX524",
    departTime: "2023-08-11 09:00:00",
    gate: "A1",
    seat: "12A",
    class: "Economy"
  },
  "4": {
      from: "ICN",
      to: "HKG",
      flightNo: "CX416",
      departTime: "2023-08-11 12:30:00",
      gate: "B2",
      seat: "5C",
      class: "Premium Economy"
  },
  "5": {
      from: "HKG",
      to: "SIN",
      flightNo: "CX739",
      departTime: "2023-08-12 02:45:00",
      gate: "C3",
      seat: "20D",
      class: "Economy"
  },
  "6": {
      from: "HKG",
      to: "LHR",
      flightNo: "CX252",
      departTime: "2023-08-12 06:15:00",
      gate: "D4",
      seat: "8B",
      class: "Business"
  },
  "7": {
      from: "PEK",
      to: "HKG",
      flightNo: "CX390",
      departTime: "2023-08-13 08:20:00",
      gate: "E5",
      seat: "15F",
      class: "Economy"
  },
  "8": {
      from: "HKG",
      to: "SYD",
      flightNo: "CX138",
      departTime: "2023-08-13 03:10:00",
      gate: "F6",
      seat: "2A",
      class: "Premium Economy"
  },
  "9": {
      from: "HKG",
      to: "BKK",
      flightNo: "CX703",
      departTime: "2023-08-14 11:45:00",
      gate: "G7",
      seat: "10C",
      class: "Economy"
  },
  "10": {
      from: "HKG",
      to: "SFO",
      flightNo: "CX870",
      departTime: "2023-08-14 08:30:00",
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
    food:["The Haven a-la-carte", "The Haven Buffet", "The Atrium"] ,
    beverage:["The Haven Bar", "The Champagne Bar"] ,
    shower:["The Cabana", "Shower suites"],
    more:["Workstation"],
    imagePath: require("./src/assets/images/wing_first.jpeg"),
    id: "wing-first"
  },
  "The Wing, Business Class": {
    name: "The Wing",
    className : "Business Class",
    maxCapacity : 40,
    food:["The Noodle Bar", "The Noodle Bar Buffet", "Central self-serve buffet"] ,
    beverage: ["The Long Bar", "The Coffee Loft"] ,
    shower: [],
    more:["Luggage Rack"],
    imagePath: require("./src/assets/images/wing_business.png"),
    id: "wing-business"
  },
  "The Pier, First Class": {
    name: "The Pier",
    className : "First Class",
    maxCapacity : 40,
    food: ["The Dining Room", "The Pantry"],
    beverage: ["The Bar"] ,
    shower: ["Day Suites", "Shower suites"],
    more:["Massage","Concierge","Workstation"],
    imagePath: require("./src/assets/images/pier_first.png"),
    id: "pier-first"
  },
  "The Pier, Business Class": {
    name: "The Pier",
    className : "Business Class",
    maxCapacity : 40,
    food:["The Noodle Bar", "The Noodle Bar Buffet", "Food Hall", "Tea House"],
    beverage:["The Bar", "Tea House"] ,
    shower:["Shower suites"],
    more:["Lockers", "Workstation"],
    imagePath: require("./src/assets/images/pier_business.png"),
    id: "pier-business"
  },
  "The Deck, Business Class": {
    name: "The Deck",
    className : "Business Class",
    maxCapacity : 40,
    food: ["The Noodle Bar", "Self-service buffer"] ,
    beverage: [],
    shower:["Shower suites"],
    more:["Lockers"],
    imagePath: require("./src/assets/images/deck_business.png"),
    id: "deck"
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
