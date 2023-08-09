import React, {useState, useRef} from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import colors from '../theme/colors';
import MapView, {Marker} from 'react-native-maps';
import { Image } from 'react-native-svg';
import { loungeIcon } from '../components/Images';
// import loungeIcon from '../assets/logo/lounge.jpg';


export default function MapScreen({navigation}) {
    const [mapRegion, setmapRegion] = useState({
        latitude: 22.3135,
        longitude: 113.918,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    
      const markers = [
        {
        type: "Lounge",
        location: {latitude: 22.312826038300294,
        longitude: 113.93544172093138,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5,},
        description: "Wing First Class and Business Class"
        },
        {
        type: "Lounge",
        location: {
            latitude: 22.314176535581737,
            longitude: 113.9246394340366,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5
        },
        description: "The Pier Business Class"
        },
        {
        type: "Lounge",
        location: {
            latitude: 22.314008500525794,
            longitude: 113.92508997002082,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5
        },
        description: "The Pier First Class"
        },
        {
        type: "Lounge",
        location: {
            latitude: 22.317444072373544,
            longitude: 113.9336729294858,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5
        },
        description: "The Deck Business Class"
        },
        ];
      
    return (
        <>
            {/* <Button title="here" onPress={()=>navigation.navigate("Other")}/> */}
        
            <View style={styles.container}>
            <MapView style={styles.map} showsUserLocation={true} region={mapRegion}>
            {markers.map((marker, index) => {
                return (
                    <Marker
                    key={index}
                    coordinate={marker.location}  
                    title = {marker.description}
                    >                    
                    </Marker>  
                );
})}
            </MapView>
                
            </View>
        </>
        
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
    cathayLogo: {
        width:30,
        height:28,
        marginHorizontal:"1%"
    },

    mapMarker: {

    },
    markerImage: {
        width: 35,
        height: 35
    }

});
