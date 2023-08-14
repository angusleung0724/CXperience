import React, {useState } from 'react';
import { View, Dimensions } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/pages/LoginScreen';
import ProfileScreen from './src/pages/ProfileScreen';
import OtherScreen from './src/pages/OtherScreen';
import FlightDetailsHeader from './src/components/FlightDetailsHeader';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const Stack = createNativeStackNavigator();
const {width, height} = Dimensions.get("window");
const marginVertical = height * 0.07;
import { firebase, getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1JJ19SxkU2TVn74PgjBxIpeCsYU4pT60",
  authDomain: "cxperience-71bc1.firebaseapp.com",
  projectId: "cxperience-71bc1",
  storageBucket: "cxperience-71bc1.appspot.com",
  messagingSenderId: "145824324668",
  appId: "1:145824324668:web:d93fd165de812e4668f739",
  measurementId: "G-14DEWR146Y"
};

const app = initializeApp(firebaseConfig)

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

  return (
    <View style={{
                  flex: 1, 
                  marginTop: marginVertical,
                }}>
        <NavigationContainer 
            theme={navTheme}>
          <FlightDetailsHeader {...testFlightData[bookingCode]} setHeader={setIsLogin} isLogin={isLogin}/>
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
              name="Profile" 
              component={ProfileScreen}
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
    </View>
  );
}
