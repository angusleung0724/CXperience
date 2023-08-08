import { Button , Modal, View, StyleSheet,Text, Pressable, TouchableOpacity } from "react-native";
import { useState } from 'react';
import LoungeDetailsModal from "../components/LoungeDetailsModal";


const data = {
  name : "The Wing",
  class : "First Class",
  maxCapacity : 100,
  currCapacity : 67,
  amenities : ["Food, Drink, Bath"],
  location : "First Floor, Hong Kong International Airport", 
  imagePath: require("../assets/images/wing_first.jpeg")
};

export default function OtherScreen({navigation}) {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <Button title="open" onPress={() => setModalVisible(true)}/>
            <LoungeDetailsModal  modalVisible={modalVisible} setModalVisible={setModalVisible} {...data}/>
        </>
    );
};
