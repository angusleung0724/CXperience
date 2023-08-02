import React, {useState, useRef} from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import colors from '../theme/colors';
import MapView, {Marker} from 'react-native-maps';


export default function MapScreen({navigation}) {
    const [mapRegion, setmapRegion] = useState({
        latitude: 22.3135,
        longitude: 113.918,
        latitudeDelta: 1,
        longitudeDelta: 1,
      });
    
    const markers = [
        {latitude: 22.4135,
            longitude: 113.818,
            latitudeDelta: 0.5,
            longitudeDelta:  0.5,},
        {latitude: 22.2135,
            longitude: 113.718,
            latitudeDelta:  0.5,
            longitudeDelta:  0.5,},
        {latitude: 22.4135,
            longitude: 113.918,
            latitudeDelta:  0.5,
            longitudeDelta:  0.5,},
    ];
      
    return (
        <>
            <Button title="here" onPress={()=>navigation.navigate("Other")}/>
        
            <View style={styles.container}>
                <MapView style={styles.map} showsUserLocation={true} region={mapRegion}>
                    {markers.map((marker, index) => {
                        return (<Marker
                         key={index}
                         coordinate={{...marker}}
                            />);
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
});
