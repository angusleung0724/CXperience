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
  "123ABC": {
    from: "TPE",
    to: "HKG",
    flightNo: "CX407",
    departTime: "2023-08-15 10:55:52",
    gate: "1",
    seat: "4F",
    class: "Economy",
    rec: "The Wing, Business Class"
  },
  "456DEF": {
      from: "HKG",
      to: "YVR",
      flightNo: "CX838",
      departTime: "2023-08-15 05:40:00",
      gate: "10",
      seat: "9B",
      class: "Premium Economy"
  },
  "789GHI": {
    from: "HKG",
    to: "NRT",
    flightNo: "CX524",
    departTime: "2023-08-11 09:00:00",
    gate: "5",
    seat: "12A",
    class: "Economy"
  },
  "1A2B3C": {
      from: "ICN",
      to: "HKG",
      flightNo: "CX416",
      departTime: "2023-08-11 12:30:00",
      gate: "2",
      seat: "5C",
      class: "Premium Economy"
  },
  "A1B2C3": {
      from: "HKG",
      to: "SIN",
      flightNo: "CX739",
      departTime: "2023-08-12 02:45:00",
      gate: "3",
      seat: "20D",
      class: "Economy"
  },
  "ABC123": {
      from: "HKG",
      to: "LHR",
      flightNo: "CX252",
      departTime: "2023-08-12 06:15:00",
      gate: "4",
      seat: "8B",
      class: "Business"
  },
  "ABCDEF": {
      from: "PEK",
      to: "HKG",
      flightNo: "CX390",
      departTime: "2023-08-13 08:20:00",
      gate: "5",
      seat: "15F",
      class: "Economy"
  },
  "123456": {
      from: "HKG",
      to: "SYD",
      flightNo: "CX138",
      departTime: "2023-08-13 03:10:00",
      gate: "6",
      seat: "2A",
      class: "Premium Economy"
  },
  "ABCXYZ": {
      from: "HKG",
      to: "BKK",
      flightNo: "CX703",
      departTime: "2023-08-14 11:45:00",
      gate: "7",
      seat: "10C",
      class: "Economy"
  },
  "AB1234": {
      from: "HKG",
      to: "SFO",
      flightNo: "CX870",
      departTime: "2023-08-14 08:30:00",
      gate: "62",
      seat: "16D",
      class: "Business",
      rec: "The Wing, Business Class"
  },
}


// LOUNGE DATA STATIC

const testLoungeData = {
  "The Wing, First Class": {
    name: "The Wing",
    className : "First Class",
    maxCapacity : 220,
    food:[
      "The Haven a-la-carte\n\nEnjoy dining at its finest at The Haven restaurant. We offer specially sourced fine wine pairings for each main course on the à la carte menu.", 
      "The Haven Buffet\n\nThe Haven also a offers a Buffet selection with a wide range of food options.", 
      "The Atrium\n\nSavor on the best Atrium has to offer before your flight!"
    ] ,
    beverage:[
      "The Haven Bar\n\nThe Haven Bar offers specially sourced fine wine pairings for each main course on the à la carte menu.", 
      "The Champagne Bar\n\nWhen you arrive at The Wing, First, choose from a selection of premium champagnes for your welcome drink."] ,
    shower:[
      "The Cabana\n\nEnjoy a quiet, private sanctuary at one of our five stylish Cabanas for a restful or productive break. Each temperature-controlled Cabana comes with a large bath and rain shower, comfortable day bed, and ample working space with outlets and connectivity.", 
      "Shower suites\n\nEnjoy a shower in our shower suites before your flight!"],
    more:["Workstation\n\nOur workstations are equipped with a suite of useful tools and facilities, including phones, printers, and high-speed web access."],
    imagePath: require("./src/assets/images/wing_first.jpeg"),
    id: "wing-first"
  },
  "The Wing, Business Class": {
    name: "The Wing",
    className : "Business Class",
    maxCapacity : 346,
    food:[
      "The Noodle Bar\n\nTry our popular Noodle Bar, serving freshly made Asian dishes, such as dan dan noodles, char siu buns, dumplings, and regional specials.", 
      "Central self-serve buffet\n\nCentral self-serve buffet offers a Buffet selection with a wide range of food options."
    ] ,
    beverage: [
      "The Long Bar\n\nTake a seat at our iconic Long Bar—made with gleaming, white marble. Sip a glass of premium champagne or a fine wine with scenic overlooks of the tarmac.", 
      "The Coffee Loft\n\nEnjoy a hot coffee before your flight at our Coffee Loft."
    ],
    shower: [
      "Day Suites\n\nUnwind in one of our eight Day Suites, with quiet views over the runway. Furnished with a daybed, reading light, and privacy curtains, each Day Suite makes for a perfect area to catch up on sleep or work undisturbed, before boarding.", 
      "Shower suites\n\nEnjoy a shower in our shower suites before your flight!"
    ],
    more:[
      "Luggage Rack\n\nOur luggage racks offer generous storage capacity for your belongings."
    ],
    imagePath: require("./src/assets/images/wing_business.png"),
    id: "wing-business"
  },


  "The Pier, First Class": {
    name: "The Pier",
    className : "First Class",
    maxCapacity : 231,
    food: [
      "The Dining Room\n\nAsian and international influences are showcased in The Dining Room’s seasonal à la carte menu, featuring classic dishes, signature noodles, and specialty desserts—pair your dinner with a drink from the extensive wine and beverage list.", 
      "The Pantry\n\nIf you're in the mood for a quick and light bite, The Pantry offers a generous spread of grab-and-go delicacies, and is freshly replenished throughout the day."
    ],
    beverage: [
      "The Bar\n\nOrder your favourite tipple, or one of our signature cocktails, at The Bar—a warm and elegant meeting place with green onyx walls and walnut wood panels—where you can soak in the views from within a rich, atmospheric setting."
    ] ,
    shower: [
      "Day Suites\n\nUnwind in one of our eight Day Suites, with quiet views over the runway. Furnished with a daybed, reading light, and privacy curtains, each Day Suite makes for a perfect area to catch up on sleep or work undisturbed, before boarding.", 
      "Shower suites\n\nEnjoy a shower in our shower suites before your flight!"
    ],
    more:[
      "Massage\n\nCalming, personalised massage treatments will help to ease the strains of the day, in preparation for your voyage. If you’d like to freshen up before your flight, our shower rooms are stocked with fluffy towels and premium amenities.",
      "Workstation\n\nOur workstations are equipped with a suite of useful tools and facilities, including phones, printers, and high-speed web access."],
    imagePath: require("./src/assets/images/pier_first.png"),
    id: "pier-first"
  },
  "The Pier, Business Class": {
    name: "The Pier",
    className : "Business Class",
    maxCapacity : 5,
    food:[
      "The Noodle Bar\n\nSatisfy your palate for Chinese comfort foods—sample dim sum, char siu buns, dumplings, and other regional specials.", 
      "Tea House\n\nUnique to the Pier Business lounge is our first Teahouse—where a superior tea experience awaits. You’ll find seasonal and artisanal tea varieties, served by fine tea specialists.",
      "Food Hall\n\nThe deli-style Food Hall resembles a market, where you can select from a variety of quick bites—tapas, cheese board, salads, fish platter—for a convenient and flavourful experience. Options are plentiful, and you’ll find hot food, sandwiches, desserts, and fruit, all available to order."
    ],
    beverage:[
      "The Bar\n\nOrder your favourite tipple, or one of our signature cocktails, at The Bar—a warm and elegant meeting place with green onyx walls and walnut wood panels—where you can soak in the views from within a rich, atmospheric setting.",
      "Tea House\n\nUnique to the Pier Business lounge is our first Teahouse—where a superior tea experience awaits. You’ll find seasonal and artisanal tea varieties, served by fine tea specialists.",
    ] ,
    shower:[
      "Shower suites\n\nEnjoy a shower in our shower suites before your flight!"
    ],
    more:[
      "Workstation\n\nOur workstations are equipped with a suite of useful tools and facilities, including phones, printers, and high-speed web access."
    ],
    imagePath: require("./src/assets/images/pier_business.png"),
    id: "pier-business"
  },
  "The Deck, Business Class": {
    name: "The Deck",
    className : "Business Class",
    maxCapacity : 199,
    food: [
      "The Noodle Bar\n\nDine in comfort and style at our iconic Noodle Bar – our open-kitchen concept that serves a selection of local classics, plus regional and Asian specialties such as Sichuanese dan dan noodles, Singapore Laksa, and Taiwanese beef noodles.", 
      "Self-service buffet\n\nSelf-service buffet offers a Buffet selection with a wide range of food options."
    ],
    beverage: [
      "The Bar\n\nOrder your favourite tipple, or one of our signature cocktails, at The Bar—a warm and elegant meeting place with green onyx walls and walnut wood panels—where you can soak in the views from within a rich, atmospheric setting.",
      "Tea House\n\nUnique to the Pier Business lounge is our first Teahouse—where a superior tea experience awaits. You’ll find seasonal and artisanal tea varieties, served by fine tea specialists.",
    ],
    shower:[
      "Shower suites\n\nEnjoy one of our eight shower rooms, each equipped with premium bath products and fluffy towels. Ask our shower attendants to serve you with personal amenities, including hair and shaving products."
    ],
    more:[
      "Workstation\n\nOur workstations are equipped with a suite of useful tools and facilities, including phones, printers, and high-speed web access.",
      "Lockers\n\nOur lounge provides lockers where you can store your valuables."
    ],
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
                loungeData:{testLoungeData},
                rec: testFlightData[bookingCode].rec
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
