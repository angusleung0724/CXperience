import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

export default function MapScreen({ navigation }) {
  const CustomMarker = ({ coordinate, title }) => {
    const openPopup = () => {
      // Handle the logic for opening the popup here
    };

    return (
        <Marker coordinate={coordinate}>
        <Callout>
            <View style={styles.calloutContainer}>
            <Text style={styles.calloutText}>{title}</Text>
            <TouchableOpacity onPress={() => openPopup()}>
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

  const [mapRegion, setMapRegion] = useState({
    latitude: 22.313783,
    longitude: 113.930166,
    latitudeDelta: 0.015,
    longitudeDelta: 0.015,
  });

  const markers = [
    {
      type: 'Lounge',
      location: {
        latitude: 22.312826038300294,
        longitude: 113.93544172093138,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      },
      description: 'Wing First Class and Business Class',
    },
    {
      type: 'Lounge',
      location: {
        latitude: 22.314176535581737,
        longitude: 113.9246394340366,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      },
      description: 'The Pier Business Class',
    },
    {
      type: 'Lounge',
      location: {
        latitude: 22.314008500525794,
        longitude: 113.92508997002082,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      },
      description: 'The Pier First Class',
    },
    {
      type: 'Lounge',
      location: {
        latitude: 22.317444072373544,
        longitude: 113.9336729294858,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      },
      description: 'The Deck Business Class',
    },
  ];

  return (
    <View style={styles.container}>
      <MapView style={styles.map} showsUserLocation={true} region={mapRegion}>
        {markers.map((marker, index) => (
          <CustomMarker
            key={index}
            coordinate={marker.location}
            title={marker.description}
          />
        ))}
      </MapView>
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
});