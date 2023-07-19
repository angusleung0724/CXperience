import { Button } from 'react-native';

export default function OtherScreen({navigation}) {
    return (
        <Button title="Click me!" onPress={() => navigation.navigate('Home')}/>
    );
};