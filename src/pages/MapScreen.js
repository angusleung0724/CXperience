import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Touchable, Animated, Easing} from 'react-native';
import {SearchBar} from 'react-native-elements';
import MapView, { Marker, Callout } from 'react-native-maps';
import MapIcon from 'react-native-vector-icons/FontAwesome';
import LoungeDetailsModal from "../components/LoungeDetailsModal";
import colors from '../theme/colors';

export default function MapScreen({ navigation, route}) {
  const [modalVisible, setModalVisible] = useState(false)
  const loungeData = route.params.loungeData.testLoungeData;
  const rec = route.paramas.rec;
  const [currLounge, setCurrLounge] = useState("The Deck, Business Class");
  const [dropDown, setDropdown] = useState(false);


  const [mapRegion, setMapRegion] = useState({
    latitude: 22.313783,
    longitude: 113.930166,
    latitudeDelta: 0.016,
    longitudeDelta: 0.016,
  });

  const resetRegion = () => {
    setMapRegion({
      latitude: 22.313783,
      longitude: 113.930166,
      latitudeDelta: 0.016,
      longitudeDelta: 0.016,
    });
  }

  const markers = [
    {
      type: 'Lounge',
      location: {
        latitude: 22.312526038300294,
        longitude: 113.93544172093138,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      },
      description: 'The Wing, Business Class',
    },
    {
      type: 'Lounge',
      location: {
        latitude: 22.313326038300294,
        longitude: 113.93514172093138,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      },
      description: 'The Wing, First Class',
    },
    {
      type: 'Lounge',
      location: {
        latitude: 22.313176535581737,
        longitude: 113.9276394340366,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      },
      description: 'The Pier, Business Class',
    },
    {
      type: 'Lounge',
      location: {
        latitude: 22.314008500525794,
        longitude: 113.92508997002082,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      },
      description: 'The Pier, First Class',
    },
    {
      type: 'Lounge',
      location: {
        latitude: 22.317384072373544,
        longitude: 113.9336629294858,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      },
      description: 'The Deck, Business Class',
    },
  ];

  
  const CustomMarker = ({ coordinate, title }) => {
    const togglePopUp = () => {
      setCurrLounge(title);
      setModalVisible(!modalVisible);
    };
    return (
        <Marker coordinate={coordinate}>
        <Callout>
            <View style={styles.calloutContainer}>
            <TouchableOpacity style={styles.textContainer} onPress={() => togglePopUp()}>
            <Text style={styles.calloutText}>{title}</Text>
                <Image
                source={require('../assets/logo/right-arrow.png')}
                style={styles.rightArrow}
                />
            </TouchableOpacity>
            </View>
        </Callout>
        </Marker>
    );
  };


  return (
    <View style={styles.container}>
      {modalVisible? <LoungeDetailsModal  modalVisible={modalVisible} setModalVisible={setModalVisible} {...loungeData[currLounge]}/> : null}
      <View style={styles.mapContainer}>
        <MapView 
            style={styles.map} 
            showsUserLocation={true} 
            region={mapRegion} 
            showsCompass={true}
            onRegionChangeComplete={(region) => setMapRegion(region)}
            >
              
          {markers.map((marker, index) => (
            <CustomMarker
              key={index}
              coordinate={marker.location}
              title={marker.description}
            />
          ))}
        </MapView>
        <View style={styles.arrowPositioner}>
          <TouchableOpacity style={styles.arrowContainer} onPress={resetRegion}>
            <MapIcon name="location-arrow" style={styles.locationArrow}/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.instruction} 
          onPress={() => {
            if (!dropDown) {
              setDropdown(true);
              setMapRegion({
                latitude: 22.317384072373544,
                longitude: 113.9336629294858,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001
              });
            } else {
              setDropdown(false);
              resetRegion();
            }   
          }}>
          <Text style={styles.instructionText}>
            Click on a lounge 
          </Text>
          <MapIcon name="map-marker" style={styles.markerIcon}/>
        </TouchableOpacity>
        {dropDown?  <DropDown/> : null}
      </View>
    </View>
  );
}

const DropDown = () => {
  const opac = useRef(new Animated.Value(0)).current;
  const transY = useRef(new Animated.Value(-30)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.timing(opac, {
        toValue: 1,
        duration: 700, // Adjust the duration as needed
        useNativeDriver: true,
      }),
      Animated.timing(transY, {
        toValue: 0,
        duration: 500, // Adjust the duration as needed
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
      }),
    ]).start();
    }, []);
  return (
    <Animated.View style={[styles.instruction2, {opacity:opac, transform:[{translateY:transY}]}]}>
            <Text style={styles.instructionText2}>
              Recommended: {rec ? rec : "The Deck, Business Class"}
            </Text>
    </Animated.View> 
  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  rightArrow: {
    width: 15,
    height: 15,
  },
  calloutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calloutText: {
    marginRight: 2,
  },
  textContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  mapContainer:{
    paddingBottom:10
  },
  arrowPositioner:{
    position:"absolute",
    top:15,
    right:15

  },
  arrowContainer:{
    backgroundColor:colors["cathay-white"],
    padding:10,
    borderRadius:10
    
  },
  locationArrow:{
    fontSize:25,
    color:colors['cathay-dark-green'],
  },
  instruction: {
    position:"absolute",
    top:15,
    left:10,
    backgroundColor: colors["cathay-white"],
    paddingHorizontal:15,
    paddingVertical:11,
    borderRadius:10,
    flexDirection:"row",
    justifyContent:"center",
    alignItems :"center"

  },
  instructionText:{
    fontFamily:"Sansation-Bold",
    fontSize:20,
    color:colors["cathay-dark-green"]
  },
  instructionText2:{
    fontFamily:"Sansation-Bold",
    fontSize:10,
    color:colors["cathay-dark-green"]
  },
  markerIcon:{
    marginLeft:10,
    marginRight: 5,
    fontSize:23,
    color: colors["cathay-dark-green"]
  },
  instruction2: {
    position:"absolute",
    top:65,
    left:10,
    backgroundColor: colors["cathay-white"],
    paddingHorizontal:12,
    paddingVertical:5,
    borderRadius:10,
    flexDirection:"row",
    justifyContent:"center",
    alignItems :"center"

  },

});