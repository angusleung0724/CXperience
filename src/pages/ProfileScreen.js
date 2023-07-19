import { View, Text, Button } from 'react-native';

export default function ProfileScreen({navigation}) {
    return (
        <Button title="Click Me" onPress={() => navigation.navigate('Other')} />
    );
};