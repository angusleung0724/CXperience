import React, {useState} from 'react';
import { View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/pages/HomeScreen';
import ProfileScreen from './src/pages/ProfileScreen';
import OtherScreen from './src/pages/OtherScreen';
import FlightDetailsHeader from './src/components/FlightDetailsHeader';

const Stack = createNativeStackNavigator();

const {width, height} = Dimensions.get("window");
const marginVertical = height * 0.07;
const marginHorizontal = width * 0.05;

const testFlightData = {
  bookingCode: "2345678902",
  from: "HNG",
  to: "HKG",
  flightNo: "CX256",
  departTime: "2018-06-12 09:55:22",
  gate: "24",
  seat: "13E",
  class: "Economy",
}


export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <View style={{
                  flex: 1, 
                  marginTop: marginVertical,
                }}>
      {isLogin ? <></> : <FlightDetailsHeader {...testFlightData}/>}
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
              name="Home" 
              component={HomeScreen}
              initialParams={{setHeader: {setIsLogin}}}
              />
            <Stack.Screen 
              name="Profile" 
              component={ProfileScreen}
              options={{
                headerLeft: () => <></>,
              }}
              initialParams={{setHeader: {setIsLogin}}}
              />
            <Stack.Screen 
              name="Other" 
              component={OtherScreen}
              options={{
                headerLeft: () => <></>,
              }}
              initialParams={{setHeader: {setIsLogin}}}
              />
          </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
