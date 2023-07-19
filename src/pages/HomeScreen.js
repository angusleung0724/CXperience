import { Button } from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <Button title="Click me!" onPress={() => navigation.navigate('Profile')}/>
    );
};