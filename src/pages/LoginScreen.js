import React, {useState, useRef, useEffect} from 'react';
import { View, Button, TouchableOpacity, TextInput, Text, Animated} from 'react-native';
import { styles } from '../styles/LoginScreenStyles';
import { Image } from 'react-native';
import colors from '../theme/colors';

export default function LoginScreen({navigation, route}) {
    
    const [text, setText] = useState("");
    const setBookingCode = route.params.setBookingCode;
    const setHeader = route.params.setHeader;
    const handlePress = () => {
        if (text != "1" && text != "2") {
            alert("Invalid Code!");
            return;
        }
        setHeader(false);
        setBookingCode(text);
        navigation.navigate('Profile');
    };

    return (
        <View style={styles.container}>
            <Image 
                source={require("../assets/logo/cathay.png")}
                style={styles.image}
                />
            <View style={styles.textInputContainer}>
                <TextInput 
                    autoCapitalize='none'
                    editable={true}
                    placeholder="CX Code"
                    placeholderTextColor={colors['cathay-light-grey']}
                    value={text}
                    style={styles.textInput}
                    maxLength={10}
                    onChangeText={text => setText(text)}
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handlePress}>
                    <Text style={styles.buttonText}>
                        Enter
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
};

