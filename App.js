import React, {useState } from 'react';
import { View, Dimensions, SafeAreaView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/pages/LoginScreen';
import ProfileScreen from './src/pages/MapScreen';
import OtherScreen from './src/pages/OtherScreen';
import FlightDetailsHeader from './src/components/FlightDetailsHeader';
import MapScreen from './src/pages/MapScreen';

const Stack = createNativeStackNavigator();

const {width, height} = Dimensions.get("window");
const marginVertical = height * 0.07;

const testFlightData = {
  "1" : {
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

  return (
    <SafeAreaView style={{
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
