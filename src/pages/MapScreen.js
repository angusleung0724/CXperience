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
        latitude: 22.312826038300291,
        longitude: 113.93544172093134,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      },
      description: 'The Wing First Class',
      amenities: [
        {
          name: "Food",
          options: ["The Haven a-la-carte", "The Haven Buffet", "The Atrium"] 
        },
        {
          name: "Bar, Coffee & Tea",
          options: ["The Haven Bar", "The Champagne Bar"] 
        },
        {
          name: "Shower",
          options: ["The Cabana", "Shower suites"]
        },
        {
          name: "Massage",
          options: []
        },
        {
          name: "Others",
          options: ["Workstation"]
        }
      ]
    },
    {
      type: 'Lounge',
      location: {

        latitude:  22.312660183084212,
        longitude:  113.93553227643987,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      },
      description: 'The Wing Business Class',
      amenities: [
        {
          name: "Food",
          options: ["The Noodle Bar", "The Noodle Bar Buffet", "Central self-serve buffet"] 
        },
        {
          name: "Bar, Coffee & Tea",
          options: ["The Long Bar", "The Coffee Loft"] 
        },
        {
          name: "Shower",
          options: []
        },
        {
          name: "Massage",
          options: []
        },
        {
          name: "Others",
          options: ["Luggage rack"]
        }
      ]
    },
    {
      type: 'Lounge',
      location: {
        latitude: 22.314176535581737,
        longitude: 113.9246394340366,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      },
      description: 'The Pier First Class',
      amenities: [
        {
          name: "Food",
          options: ["The Dining Room", "The Pantry"] 
        },
        {
          name: "Bar, Coffee & Tea",
          options: ["The Bar"] 
        },
        {
          name: "Shower",
          options: ["Day Suites", "Shower suites"]
        },
        {
          name: "Massage",
          options: ["Massage"]
        },
        {
          name: "Others",
          options: ["Concierge", "Workstation"]
        }
      ]
    },
    {
      type: 'Lounge',
      location: {
        latitude: 22.314008500525794,
        longitude: 113.92508997002082,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,
      },
      description: 'The Pier Business Class',
      amenities: [
        {
          name: "Food",
          options: ["The Noodle Bar", "The Noodle Bar Buffet", "Food Hall", "Tea House"] 
        },
        {
          name: "Bar, Coffee & Tea",
          options: ["The Bar", "Tea House"] 
        },
        {
          name: "Shower",
          options: ["Shower suites"]
        },
        {
          name: "Massage",
          options: []
        },
        {
          name: "Others",
          options: ["Lockers", "Workstation"]
        }
      ]
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
      amenities: [
        {
          name: "Food",
          options: ["The Noodle Bar", "Self-service buffer"] 
        },
        {
          name: "Bar, Coffee & Tea",
          options: [] 
        },
        {
          name: "Shower",
          options: ["Shower suites"]
        },
        {
          name: "Massage",
          options: []
        },
        {
          name: "Others",
          options: ["Lockers"]
        }
      ]
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