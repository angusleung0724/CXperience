import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ProfileScreen({navigation}) {
    return (
        <Button title="Profile" onPress={() => navigation.navigate('Other')} />
    );
};