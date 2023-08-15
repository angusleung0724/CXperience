import { useEffect, useRef, useState, useCallback } from 'react';
import { Text, Modal, View, TouchableOpacity, Image, ScrollView, Animated, Easing, RefreshControl} from 'react-native';
import { styles } from '../styles/LoungeDetailsModalStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import Octicon from 'react-native-vector-icons/Octicons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import colors from "../theme/colors";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { ButtonGroup } from '@rneui/themed';

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD1JJ19SxkU2TVn74PgjBxIpeCsYU4pT60",
    authDomain: "cxperience-71bc1.firebaseapp.com",
    projectId: "cxperience-71bc1",
    storageBucket: "cxperience-71bc1.appspot.com",
    messagingSenderId: "145824324668",
    appId: "1:145824324668:web:d93fd165de812e4668f739",
    measurementId: "G-14DEWR146Y"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// pass in modalvisible, set modal visible
// pass in path of image, name, location, class, amenities
// pass in max capacity and capacity 




export default function LoungeDetailsModal({
    className, 
    imagePath, 
    modalVisible, 
    setModalVisible, 
    maxCapacity, 
    currCapacity, 
    food,
    beverage,
    shower,
    more,
    name,
    id}) {
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }
    const [currCard, setCurrCard] = useState(0);
    const [curCapacity, setCurCapacity] = useState(0);
    function refreshData() {
        return onSnapshot(doc(db, "lounges", id), (docSnap) => {
            setCurCapacity(docSnap.data().current);
        });
    }
    useEffect(refreshData, []);
    return (
        <>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide fade"
                    visible={modalVisible}
                    transparent={true}
                    onRequestClose={toggleModal}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.contentContainer}>
                                <View style={styles.imageContainer}>
                                    <Image style={styles.heroImage} source={imagePath}/>
                                    <View style={styles.nameContainer}>
                                        <Text style={styles.name}> 
                                            {name}
                                        </Text>
                                        <Text style={styles.class}> 
                                            {className}
                                        </Text>
                                    </View>
                                    <TouchableOpacity onPress={toggleModal}>
                                        <Icon name="close" style={styles.closeButton}/>
                                    </TouchableOpacity>
                                </View>
                                {currCard == 0 ? <ProgressBar maxCapacity={maxCapacity} currCapacity={curCapacity}/> : null}
                                {currCard == 1 ? <InfoPage title="Food" points={food}/> : null}
                                {currCard == 2 ? <InfoPage title="Beverage" points={beverage}/> :null}
                                {currCard == 3 ? <InfoPage title="Showers" points={shower}/> : null}
                                {currCard == 4 ? <InfoPage title="Miscellaneous" points={more}/>  : null}
                                <ButtonGroup
                                    containerStyle={styles.buttonGroup}
                                    buttonStyle={{padding: 10 }}
                                    selectedButtonStyle={{ backgroundColor: colors["cathay-dark-green"] }}
                                    innerBorderStyle={{color:colors["cathay-dark-dark-green"]}}
                                    buttons={[
                                    <Ionicon name="people" style={{fontSize:20}}/>,
                                    <FontAwesome name="utensils" style={{fontSize:20}} />,
                                    <Ionicon name="wine" style={{fontSize:20}} />,
                                    <FontAwesome name="shower" style={{fontSize:20}} />,
                                    <Feather name="more-horizontal" style={{fontSize:20}}/>,
                                    ]}
                                    selectedIndex={currCard}
                                    onPress={setCurrCard}
                                    />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    );
}

const InfoPage = (props) => {

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(100)).current;
    useEffect(() => {
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 700, // Adjust the duration as needed
            useNativeDriver: true,
          }),
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 500, // Adjust the duration as needed
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
          }),
        ]).start();
        }, []);
    return (
        <>
            <View style={styles.progressContainer}>
                <Animated.View style={[styles.titleContainer, {opacity:fadeAnim, transform:[{translateX:slideAnim}]}]}>
                    <Text style={styles.cardTitle}>
                        {props.title}
                    </Text>
                </Animated.View>
                <ScrollView style={styles.scrollView}>
                    {props.points.map((item,index) => {
                        return(
                            <Description index={index} item={item}/>);
                    })}
                </ScrollView>
            </View>
        </>
    );
}


const Description = ({index, item}) => {
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 700, // Adjust the duration as needed
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500, // Adjust the duration as needed
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
      }),
    ]).start();
    }, []);
    return (
        <Animated.View style={[styles.descriptionBox, {opacity:fadeAnim, transform:[{translateX:slideAnim}]}]} key={index}>
            <Text style={styles.description}>
                {item}
            </Text>
        </Animated.View>
    );
}



const ProgressBar = ({maxCapacity, currCapacity, action}) => {
    const calculatePercent = () => {
        return Math.floor(currCapacity * 100 / maxCapacity);
    }
    const [refreshing, setRefreshing] = useState(false);

    // ADD API CALL HERE ? and useEffect as well probably to update the state (initialise with the props one)
    const onRefresh = useCallback(()=> {
        setRefreshing(true);
        action();
        setTimeout(() => {setRefreshing(false)}, 2000);
    });
    return (
        <View style={styles.progressContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.cardTitle}>
                    Capacity
                </Text>
            </View>
            <ScrollView
                bounces={false} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
                showsVerticalScrollIndicator={false}>
                <AnimatedCircularProgress
                    style={styles.progressBar}
                    size={240}
                    width={20}
                    rotation={0}
                    fill={calculatePercent()}
                    duration={1300}
                    tintColor={colors["cathay-dark-green"]}
                    backgroundColor={colors["cathay-light-gray"]}>
                    {
                        (fill) => (
                            <View style={styles.progressTextContainer}>
                                <View style={styles.progressTextTop}>
                                    <Text style={styles.progressText}>
                                        {`${parseInt(fill )}%`}
                                    </Text>
                                </View>
                                <View style={styles.fractionContainer}>
                                    <Octicon style={styles.personIcon} name="person"/>
                                    <Text style={styles.progressTextBottom}>
                                        {`${currCapacity}/${maxCapacity}`}
                                    </Text>
                                </View>
                            </View>
                        )
                    }
                </AnimatedCircularProgress>
            </ScrollView>
        </View>
    );
}
