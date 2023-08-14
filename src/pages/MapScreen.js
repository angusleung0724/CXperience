import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Touchable } from 'react-native';
import {SearchBar} from 'react-native-elements';
import MapView, { Marker, Callout, Animated } from 'react-native-maps';
import MapIcon from 'react-native-vector-icons/FontAwesome';
import LoungeDetailsModal from "../components/LoungeDetailsModal";
import colors from '../theme/colors';

export default function MapScreen({ navigation, route}) {
  const [modalVisible, setModalVisible] = useState(false)
  const loungeData = route.params.loungeData.testLoungeData;
  const [currLounge, setCurrLounge] = useState("The Deck, Business Class");


  const [mapRegion, setMapRegion] = useState({
    latitude: 22.313783,
    longitude: 113.930166,
    latitudeDelta: 0.013,
    longitudeDelta: 0.013,
  });

  const resetRegion = () => {
    setMapRegion({
      latitude: 22.313783,
      longitude: 113.930166,
      latitudeDelta: 0.013,
      longitudeDelta: 0.013,
    });
  }

  const markers = [
    {
      type: 'Lounge',
      location: {
        latitude: 22.312826038300294,
        longitude: 113.93544172093138,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      },
      description: 'The Wing, First Class',
    },
    {
      type: 'Lounge',
      location: {
        latitude: 22.314426038300294,
        longitude: 113.93244172093138,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      },
      description: 'The Wing, Business Class',
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
        latitude: 22.317444072373544,
        longitude: 113.9336729294858,
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
        <View style={styles.instruction}>
          <Text style={styles.instructionText}>
            Select your lounge
          </Text>
          <MapIcon name="map-marker" style={styles.markerIcon}/>
        </View>
      </View>
    </View>
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
  markerIcon:{
    marginLeft:10,
    marginRight: 5,
    fontSize:23,
    color: colors["cathay-dark-green"]
  }
});