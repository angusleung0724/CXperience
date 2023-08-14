import { View, TouchableOpacity, Text, Animated, Easing} from 'react-native';
import { styles } from '../styles/FlightDetailsHeaderStyles';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRef, useState, useEffect} from 'react'; 
import AntIcon from 'react-native-vector-icons/AntDesign';


function parseDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const hour = date.getHours();
    const minute = date.getMinutes();
    const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
    const formattedMinute = minute < 10 ? `0${minute}` : `${minute}`;
    return `${formattedHour}:${formattedMinute}`;
  }

export default function FlightDetailsHeader(props) {

    const navigation = useNavigation();
    const headerHeight = useRef(new Animated.Value(60)).current;
    const headerOpacity = useRef(new Animated.Value(0)).current;
    const extraOpacity = useRef(new Animated.Value(0)).current;
    const [extra, setExtra] = useState(false);

    const enlarge = () => {
       setExtra(!extra);
       Animated.sequence([
        Animated.timing(headerHeight, {
            toValue: extra ? 60 : 200,
            duration: 200,
            useNativeDriver:false,
          }),
          Animated.timing(extraOpacity, {
            toValue: extra ? 0 : 1,
            duration: 200,
            useNativeDriver:false,
          }),
       ]).start();
       
    }

    const setHeader = () => {
      Animated.parallel([
        Animated.timing(headerHeight, {
            toValue: props.isLogin ? 0 : 60,
            duration: 500,
            useNativeDriver:false,
          }),
        Animated.timing(headerOpacity, {
            toValue: props.isLogin ? 0 : 1,
            duration: 100,
            useNativeDriver: false,
        })
      ]).start();
    };

    useEffect(() => {
        setHeader();
    }, [props.isLogin]);
    
    return (
            <Animated.View style={[styles.extraContainer, {height: headerHeight, opacity: headerOpacity}]} >
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => {
                            enlarge();
                        }}>
                            <View style={styles.leftIcon}>
                                
                                    <Image 
                                        source={require("../assets/logo/cathay_logo_gold.png")}
                                        style={styles.cathayLogo}
                                    />
                                
                                <AntIcon name="qrcode" style={styles.qrLogo}/>
                            </View>
                    </TouchableOpacity>
                    <DetailCard key1="ORG" key2="DST" val1={props.from} val2={props.to}/>
                    <DetailCard key1="GATE" key2="SEAT" val1={props.gate} val2={props.seat}/>
                    <View style={styles.flightContainer}>
                        <TouchableOpacity 
                            style={styles.flight} 
                            onPress={()=>{
                                if (extra) {
                                    enlarge();
                                }
                                navigation.navigate("Login");
                                props.setIsLogin(true);
                                
                            }}>
                                <View style={styles.flightDetails}>
                                    <Text style={styles.flightText}>{props.flightNo}</Text>
                                    <Text style={styles.flightText}>|</Text>
                                    <Text style={styles.flightText}>{parseDateTime(props.departTime)} </Text>
                                </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {extra ? <Animated.View style={[styles.extraInfo, {opacity: extraOpacity}]}> 
                            <Image style={styles.barcode} source={require('../assets/images/barcode.png')}/>
                         </Animated.View> : null }
            </Animated.View>
    );
}

function DetailCard(props) {
    return (
        <>
            <View style={styles.cardContainer}>
                <View style={styles.lineContainer}>
                    <Text style={styles.textBold}>
                        {props.key1}:{' '}
                    </Text>
                    <Text style={styles.textNormal}>
                        {props.val1}
                    </Text>
                </View>
                <View style={styles.lineContainer}>
                    <Text style={styles.textBold}>
                        {props.key2}:{' '}
                    </Text>
                    <Text style={styles.textNormal}>
                        {props.val2}
                    </Text>
                </View>
            </View>
        </>  
    );
}
