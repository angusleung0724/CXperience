import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/FlightDetailsHeaderStyles';
import { Image } from 'react-native';


export default function FlightDetailsHeader(props) {
    
    return (
        <>
            <View style={styles.container} >
                <Image 
                    source={require("../assets/logo/cathay.png")}
                    style={styles.cathayLogo}
                />
                <DetailCard key1="ORG" key2="DST" val1={props.from} val2={props.to}/>
                <DetailCard key1="GATE" key2="SEAT" val1={props.gate} val2={props.seat}/>
                <View>
                    <TouchableOpacity style={styles.flight}>
                        <Text style={styles.flightText}> {props.flightNo} </Text>
                    </TouchableOpacity>
                    <Text> 13:00 </Text>
                </View>
            </View>
        </>
    );
}

function DetailCard(props) {
    return (
        <>
            <View style={styles.cardContainer}>
                <View style={styles.lineContainer}>
                    <Text style={styles.textBold}>
                        {props.key1}:
                    </Text>
                    <Text style={styles.textNormal}>
                        {props.val1}
                    </Text>
                </View>
                <View style={styles.lineContainer}>
                    <Text style={styles.textBold}>
                        {props.key2}:
                    </Text>
                    <Text style={styles.textNormal}>
                        {props.val2}
                    </Text>
                </View>
            </View>
        </>  
    );
}